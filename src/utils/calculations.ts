import { SimulatorResult } from '../types/banking';

export const calculateResult = (moduleId: string, inputs: Record<string, any>): SimulatorResult => {
  switch (moduleId) {
    case 'commercial-banks':
      return calculateBankingFees(inputs);
    case 'rbi-functions':
      return calculateCRRSLR(inputs);
    case 'kyc-norms':
      return validateKYCCompliance(inputs);
    case 'negotiable-instruments-types':
      return processCheque(inputs);
    case 'cheque-dishonor':
      return calculateChequePenalty(inputs);
    case 'venture-capital':
      return calculateVCReturns(inputs);
    case 'leasing':
      return calculateLeaseAnalysis(inputs);
    case 'discounting':
      return calculateBillDiscount(inputs);
    default:
      return {
        result: 'Calculation not available',
        steps: ['This simulator is not yet implemented'],
        formula: 'N/A'
      };
  }
};

const calculateBankingFees = (inputs: Record<string, any>): SimulatorResult => {
  const { serviceType, amount, accountType } = inputs;
  
  const feeStructure: Record<string, { base: number; rate: number }> = {
    'Current Account Maintenance': { base: 500, rate: 0.001 },
    'ATM Transactions': { base: 20, rate: 0 },
    'Cheque Book': { base: 100, rate: 0 },
    'Demand Draft': { base: 50, rate: 0.001 },
    'NEFT Transfer': { base: 25, rate: 0.0005 },
    'RTGS Transfer': { base: 30, rate: 0.0005 }
  };

  const accountMultiplier: Record<string, number> = {
    'Savings': 1,
    'Current': 1.2,
    'Premium': 0.8
  };

  const fees = feeStructure[serviceType] || { base: 0, rate: 0 };
  const multiplier = accountMultiplier[accountType] || 1;
  
  const baseFee = fees.base * multiplier;
  const variableFee = amount * fees.rate * multiplier;
  const subtotal = baseFee + variableFee;
  const gst = subtotal * 0.18;
  const totalFee = subtotal + gst;

  return {
    result: totalFee,
    steps: [
      `Service Type: ${serviceType}`,
      `Account Type: ${accountType} (Multiplier: ${multiplier})`,
      `Base Fee: ₹${baseFee.toFixed(2)}`,
      `Variable Fee: ₹${amount} × ${(fees.rate * multiplier * 100).toFixed(3)}% = ₹${variableFee.toFixed(2)}`,
      `Subtotal: ₹${baseFee.toFixed(2)} + ₹${variableFee.toFixed(2)} = ₹${subtotal.toFixed(2)}`,
      `GST (18%): ₹${subtotal.toFixed(2)} × 18% = ₹${gst.toFixed(2)}`,
      `Total Fee: ₹${subtotal.toFixed(2)} + ₹${gst.toFixed(2)} = ₹${totalFee.toFixed(2)}`
    ],
    formula: 'Total Fee = (Base Fee + Variable Fee) × Account Multiplier × (1 + GST Rate)'
  };
};

const calculateCRRSLR = (inputs: Record<string, any>): SimulatorResult => {
  const { deposits, crr_rate, slr_rate } = inputs;
  
  const crrAmount = (deposits * crr_rate) / 100;
  const slrAmount = (deposits * slr_rate) / 100;
  const totalReserve = crrAmount + slrAmount;
  const availableForLending = deposits - totalReserve;

  return {
    result: availableForLending,
    steps: [
      `Total Deposits: ₹${deposits} crores`,
      `CRR Rate: ${crr_rate}%`,
      `SLR Rate: ${slr_rate}%`,
      `CRR Amount: ₹${deposits} × ${crr_rate}% = ₹${crrAmount.toFixed(2)} crores`,
      `SLR Amount: ₹${deposits} × ${slr_rate}% = ₹${slrAmount.toFixed(2)} crores`,
      `Total Reserve Requirement: ₹${crrAmount.toFixed(2)} + ₹${slrAmount.toFixed(2)} = ₹${totalReserve.toFixed(2)} crores`,
      `Available for Lending: ₹${deposits} - ₹${totalReserve.toFixed(2)} = ₹${availableForLending.toFixed(2)} crores`
    ],
    formula: 'Available for Lending = Total Deposits - (CRR Amount + SLR Amount)'
  };
};

const validateKYCCompliance = (inputs: Record<string, any>): SimulatorResult => {
  const { customerType, panCard, addressProof, accountType, initialDeposit } = inputs;
  
  let complianceScore = 0;
  const issues: string[] = [];
  const steps: string[] = [];

  steps.push(`Customer Type: ${customerType}`);
  steps.push(`Account Type: ${accountType}`);
  steps.push(`Initial Deposit: ₹${initialDeposit}`);

  // PAN Card validation
  if (panCard === 'Yes') {
    complianceScore += 30;
    steps.push('✓ PAN Card available - Compliant');
  } else {
    if (initialDeposit >= 50000) {
      issues.push('PAN Card mandatory for deposits ≥ ₹50,000');
      steps.push('✗ PAN Card missing - Non-compliant for high-value deposits');
    } else {
      complianceScore += 15;
      steps.push('○ PAN Card not mandatory for deposits < ₹50,000');
    }
  }

  // Address proof validation
  if (addressProof !== 'None') {
    complianceScore += 25;
    steps.push(`✓ Address Proof: ${addressProof} - Compliant`);
  } else {
    issues.push('Address proof is mandatory');
    steps.push('✗ Address proof missing - Non-compliant');
  }

  // Customer type specific validation
  if (customerType === 'Company' || customerType === 'Partnership') {
    complianceScore += 20;
    steps.push('✓ Corporate documentation assumed - Compliant');
  } else if (customerType === 'NRI') {
    complianceScore += 15;
    steps.push('○ NRI documentation requires additional verification');
  } else {
    complianceScore += 25;
    steps.push('✓ Individual customer documentation - Standard');
  }

  // Account type validation
  if (accountType === 'Fixed Deposit' || accountType === 'Recurring Deposit') {
    complianceScore += 20;
    steps.push('✓ Deposit account - Lower compliance requirements');
  } else {
    complianceScore += 15;
    steps.push('○ Operational account - Standard compliance requirements');
  }

  const status = complianceScore >= 80 ? 'Fully Compliant' : 
                 complianceScore >= 60 ? 'Partially Compliant' : 'Non-Compliant';
  
  if (issues.length > 0) {
    steps.push(`Issues identified: ${issues.join(', ')}`);
  }

  return {
    result: `${status} (Score: ${complianceScore}/100)`,
    steps,
    formula: 'KYC Compliance Score = PAN (30) + Address Proof (25) + Customer Type (20) + Account Type (25)'
  };
};

const processCheque = (inputs: Record<string, any>): SimulatorResult => {
  const { chequeType, amount, date, payeeName, accountBalance } = inputs;
  
  const chequeDate = new Date(date);
  const currentDate = new Date();
  const daysDifference = Math.floor((currentDate.getTime() - chequeDate.getTime()) / (1000 * 3600 * 24));
  
  const steps: string[] = [];
  let status = 'Processed Successfully';
  
  steps.push(`Cheque Type: ${chequeType}`);
  steps.push(`Cheque Amount: ₹${amount.toLocaleString()}`);
  steps.push(`Payee Name: ${payeeName}`);
  steps.push(`Account Balance: ₹${accountBalance.toLocaleString()}`);
  steps.push(`Cheque Date: ${chequeDate.toDateString()}`);
  
  // Date validation
  if (daysDifference < 0) {
    status = 'Post-dated Cheque - Cannot process until due date';
    steps.push(`✗ Cheque is post-dated by ${Math.abs(daysDifference)} days`);
  } else if (daysDifference > 90) {
    status = 'Stale Cheque - Expired (>3 months old)';
    steps.push(`✗ Cheque is ${daysDifference} days old - Stale cheque`);
  } else {
    steps.push(`✓ Date validation passed - ${daysDifference} days old`);
  }
  
  // Balance validation
  if (amount > accountBalance) {
    status = 'Insufficient Funds - Cheque Dishonored';
    steps.push(`✗ Insufficient balance - Shortfall: ₹${(amount - accountBalance).toLocaleString()}`);
  } else {
    steps.push(`✓ Sufficient funds available`);
    steps.push(`Remaining balance after payment: ₹${(accountBalance - amount).toLocaleString()}`);
  }
  
  // Processing based on cheque type
  if (chequeType === 'Bearer') {
    steps.push('Processing as Bearer Cheque - Payable to bearer');
  } else if (chequeType === 'Order') {
    steps.push('Processing as Order Cheque - Requires endorsement');
  } else if (chequeType === 'Crossed') {
    steps.push('Processing as Crossed Cheque - Account payee only');
  }

  return {
    result: status,
    steps,
    formula: 'Cheque Status = Date Validity + Balance Adequacy + Type-specific Processing'
  };
};

const calculateChequePenalty = (inputs: Record<string, any>): SimulatorResult => {
  const { chequeAmount, dishonoredTimes, accountType, bankCharges } = inputs;
  
  const penaltyMultiplier: Record<string, number> = {
    'Savings': 1,
    'Current': 1.5,
    'Overdraft': 2
  };
  
  const multiplier = penaltyMultiplier[accountType] || 1;
  
  // Criminal penalty calculation (Section 138 NI Act)
  const maxCriminalPenalty = chequeAmount * 2;
  
  // Bank charges
  const baseBankCharges = bankCharges;
  const additionalCharges = dishonoredTimes > 1 ? (dishonoredTimes - 1) * 500 : 0;
  const totalBankCharges = baseBankCharges + additionalCharges;
  
  // Legal costs estimation
  const legalCosts = chequeAmount > 100000 ? 25000 : 10000;
  
  // Total penalty
  const totalPenalty = maxCriminalPenalty + totalBankCharges + legalCosts;

  return {
    result: totalPenalty,
    steps: [
      `Cheque Amount: ₹${chequeAmount.toLocaleString()}`,
      `Number of Dishonors: ${dishonoredTimes}`,
      `Account Type: ${accountType} (Multiplier: ${multiplier})`,
      `Maximum Criminal Penalty (Section 138): ₹${chequeAmount} × 2 = ₹${maxCriminalPenalty.toLocaleString()}`,
      `Base Bank Charges: ₹${baseBankCharges.toLocaleString()}`,
      `Additional Charges: ${dishonoredTimes - 1} × ₹500 = ₹${additionalCharges.toLocaleString()}`,
      `Total Bank Charges: ₹${baseBankCharges.toLocaleString()} + ₹${additionalCharges.toLocaleString()} = ₹${totalBankCharges.toLocaleString()}`,
      `Estimated Legal Costs: ₹${legalCosts.toLocaleString()}`,
      `Total Maximum Penalty: ₹${maxCriminalPenalty.toLocaleString()} + ₹${totalBankCharges.toLocaleString()} + ₹${legalCosts.toLocaleString()} = ₹${totalPenalty.toLocaleString()}`
    ],
    formula: 'Total Penalty = Criminal Penalty (2 × Cheque Amount) + Bank Charges + Legal Costs'
  };
};

const calculateVCReturns = (inputs: Record<string, any>): SimulatorResult => {
  const { initialInvestment, equityStake, exitValuation, investmentPeriod, dividendYield = 0 } = inputs;
  
  const initialInvestmentLakhs = initialInvestment;
  const exitValuationCrores = exitValuation;
  
  // Convert to same units (lakhs)
  const exitValuationLakhs = exitValuationCrores * 100;
  
  // Calculate exit value for the equity stake
  const exitValue = (exitValuationLakhs * equityStake) / 100;
  
  // Calculate total dividends received
  const annualDividend = (initialInvestmentLakhs * dividendYield) / 100;
  const totalDividends = annualDividend * investmentPeriod;
  
  // Calculate total returns
  const capitalGain = exitValue - initialInvestmentLakhs;
  const totalReturn = capitalGain + totalDividends;
  const totalReturnMultiple = (exitValue + totalDividends) / initialInvestmentLakhs;
  
  // Calculate IRR (simplified approximation)
  const cagr = Math.pow((exitValue + totalDividends) / initialInvestmentLakhs, 1 / investmentPeriod) - 1;

  return {
    result: totalReturn,
    steps: [
      `Initial Investment: ₹${initialInvestmentLakhs} lakhs`,
      `Equity Stake: ${equityStake}%`,
      `Exit Valuation: ₹${exitValuationCrores} crores = ₹${exitValuationLakhs} lakhs`,
      `Investment Period: ${investmentPeriod} years`,
      `Exit Value for ${equityStake}% stake: ₹${exitValuationLakhs} × ${equityStake}% = ₹${exitValue.toFixed(2)} lakhs`,
      `Annual Dividend: ₹${initialInvestmentLakhs} × ${dividendYield}% = ₹${annualDividend.toFixed(2)} lakhs`,
      `Total Dividends: ₹${annualDividend.toFixed(2)} × ${investmentPeriod} = ₹${totalDividends.toFixed(2)} lakhs`,
      `Capital Gain: ₹${exitValue.toFixed(2)} - ₹${initialInvestmentLakhs} = ₹${capitalGain.toFixed(2)} lakhs`,
      `Total Return: ₹${capitalGain.toFixed(2)} + ₹${totalDividends.toFixed(2)} = ₹${totalReturn.toFixed(2)} lakhs`,
      `Return Multiple: ${totalReturnMultiple.toFixed(2)}x`,
      `CAGR: ${(cagr * 100).toFixed(2)}%`
    ],
    formula: 'Total Return = (Exit Valuation × Equity Stake) + Total Dividends - Initial Investment'
  };
};

const calculateLeaseAnalysis = (inputs: Record<string, any>): SimulatorResult => {
  const { assetCost, leasePeriod, monthlyLease, loanRate, downPayment, taxRate } = inputs;
  
  const totalLeasePayments = monthlyLease * leasePeriod * 12;
  const leaseTaxSavings = (totalLeasePayments * taxRate) / 100;
  const netLeaseCost = totalLeasePayments - leaseTaxSavings;
  
  // Loan calculation
  const loanAmount = assetCost - downPayment;
  const monthlyRate = loanRate / 100 / 12;
  const totalMonths = leasePeriod * 12;
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalLoanPayments = emi * totalMonths;
  const totalInterest = totalLoanPayments - loanAmount;
  
  // Tax benefits on loan (depreciation + interest)
  const annualDepreciation = assetCost / leasePeriod;
  const avgAnnualInterest = totalInterest / leasePeriod;
  const annualTaxBenefit = ((annualDepreciation + avgAnnualInterest) * taxRate) / 100;
  const totalTaxBenefit = annualTaxBenefit * leasePeriod;
  const netBuyCost = downPayment + totalLoanPayments - totalTaxBenefit;
  
  const savings = netBuyCost - netLeaseCost;
  const recommendation = savings > 0 ? 'Leasing is more economical' : 'Buying is more economical';

  return {
    result: Math.abs(savings),
    steps: [
      `Asset Cost: ₹${assetCost.toFixed(2)} lakhs`,
      `Lease Period: ${leasePeriod} years`,
      `Monthly Lease Rental: ₹${monthlyLease.toLocaleString()}`,
      '',
      '--- LEASING ANALYSIS ---',
      `Total Lease Payments: ₹${monthlyLease.toLocaleString()} × ${totalMonths} months = ₹${totalLeasePayments.toLocaleString()}`,
      `Tax Savings on Lease: ₹${totalLeasePayments.toLocaleString()} × ${taxRate}% = ₹${leaseTaxSavings.toLocaleString()}`,
      `Net Lease Cost: ₹${totalLeasePayments.toLocaleString()} - ₹${leaseTaxSavings.toLocaleString()} = ₹${netLeaseCost.toLocaleString()}`,
      '',
      '--- BUYING ANALYSIS ---',
      `Down Payment: ₹${downPayment.toFixed(2)} lakhs`,
      `Loan Amount: ₹${assetCost.toFixed(2)} - ₹${downPayment.toFixed(2)} = ₹${loanAmount.toFixed(2)} lakhs`,
      `Monthly EMI: ₹${emi.toLocaleString()}`,
      `Total Loan Payments: ₹${emi.toLocaleString()} × ${totalMonths} = ₹${totalLoanPayments.toLocaleString()}`,
      `Total Interest: ₹${totalInterest.toLocaleString()}`,
      `Annual Tax Benefit: ₹${annualTaxBenefit.toLocaleString()}`,
      `Total Tax Benefit: ₹${totalTaxBenefit.toLocaleString()}`,
      `Net Buy Cost: ₹${(downPayment * 100000).toLocaleString()} + ₹${totalLoanPayments.toLocaleString()} - ₹${totalTaxBenefit.toLocaleString()} = ₹${netBuyCost.toLocaleString()}`,
      '',
      `Cost Difference: ₹${Math.abs(savings).toLocaleString()}`,
      `Recommendation: ${recommendation}`
    ],
    formula: 'NPV Analysis: Net Lease Cost vs Net Buy Cost (including tax benefits)'
  };
};

const calculateBillDiscount = (inputs: Record<string, any>): SimulatorResult => {
  const { faceValue, discountRate, daysToMaturity, bankCharges = 0 } = inputs;
  
  const discountAmount = (faceValue * discountRate * daysToMaturity) / (100 * 365);
  const netProceeds = faceValue - discountAmount - bankCharges;
  const effectiveRate = (discountAmount / netProceeds) * (365 / daysToMaturity) * 100;
  const bankProfit = discountAmount + bankCharges;

  return {
    result: netProceeds,
    steps: [
      `Face Value of Bill: ₹${faceValue.toLocaleString()}`,
      `Discount Rate: ${discountRate}% per annum`,
      `Days to Maturity: ${daysToMaturity} days`,
      `Bank Processing Charges: ₹${bankCharges.toLocaleString()}`,
      '',
      `Discount Amount = ₹${faceValue.toLocaleString()} × ${discountRate}% × ${daysToMaturity}/365`,
      `Discount Amount = ₹${faceValue.toLocaleString()} × ${discountRate/100} × ${(daysToMaturity/365).toFixed(4)}`,
      `Discount Amount = ₹${discountAmount.toLocaleString()}`,
      '',
      `Net Proceeds = Face Value - Discount - Bank Charges`,
      `Net Proceeds = ₹${faceValue.toLocaleString()} - ₹${discountAmount.toLocaleString()} - ₹${bankCharges.toLocaleString()}`,
      `Net Proceeds = ₹${netProceeds.toLocaleString()}`,
      '',
      `Effective Interest Rate = ${effectiveRate.toFixed(2)}% per annum`,
      `Bank's Profit = ₹${bankProfit.toLocaleString()}`
    ],
    formula: 'Discount = Face Value × Rate × (Days/365); Net Proceeds = Face Value - Discount - Charges'
  };
};