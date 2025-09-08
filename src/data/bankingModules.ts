import { Unit } from '../types/banking';

export const bankingModules: Unit[] = [
  {
    id: 'unit1',
    title: 'Unit I: Introduction to Banking',
    icon: 'BookOpen',
    description: 'Commercial banks, RBI functions, and emerging banking trends',
    modules: [
      {
        id: 'commercial-banks',
        title: 'Functions of Commercial Banks',
        unit: 'Unit I',
        description: 'Understanding the core functions and operations of commercial banks',
        theory: `**Primary Functions of Commercial Banks**

Commercial banks serve as the backbone of the financial system, facilitating economic activities through various essential functions.

**1. Accepting Deposits**
• Current Deposits: No interest, immediate withdrawal facility
• Savings Deposits: Low interest rate, some withdrawal restrictions
• Fixed Deposits: Higher interest rates, fixed maturity periods
• Recurring Deposits: Regular monthly deposits with compound interest

**2. Advancing Loans and Credit**
• Personal Loans: For individual financial needs
• Business Loans: For commercial activities and expansion
• Mortgage Loans: Secured against property
• Working Capital Loans: For day-to-day business operations

**3. Investment Functions**
• Government Securities: Safe investment options
• Corporate Bonds: Higher returns with moderate risk
• Money Market Instruments: Short-term liquidity management

**Secondary Functions**

**1. Agency Functions**
• Collection and Payment Services
• Portfolio Management
• Insurance Premium Collection
• Dividend and Interest Collection

**2. Utility Functions**
• Safe Deposit Lockers
• Traveler's Cheques
• Letter of Credit
• Bank Guarantees
• Foreign Exchange Services

**Modern Banking Services**
Banks today offer comprehensive financial solutions including investment advisory, wealth management, and digital banking services that have transformed traditional banking operations.`,
        simulator: {
          type: 'calculator',
          title: 'Banking Service Fee Calculator',
          description: 'Calculate various banking service charges and fees',
          inputs: [
            { name: 'serviceType', label: 'Service Type', type: 'select', required: true, options: ['Current Account Maintenance', 'ATM Transactions', 'Cheque Book', 'Demand Draft', 'NEFT Transfer', 'RTGS Transfer'] },
            { name: 'amount', label: 'Transaction Amount (₹)', type: 'number', required: true, min: 1 },
            { name: 'accountType', label: 'Account Type', type: 'select', required: true, options: ['Savings', 'Current', 'Premium'] }
          ],
          formula: 'Service Fee = Base Fee + (Amount × Rate) + GST'
        }
      },
      {
        id: 'emerging-trends',
        title: 'Emerging Trends in Banking',
        unit: 'Unit I',
        description: 'E-Banking, Mobile Banking, Core Banking, and modern banking innovations',
        theory: `**Digital Banking Revolution**

The banking sector has undergone a massive transformation with the adoption of digital technologies, fundamentally changing how customers interact with financial services.

**E-Banking (Electronic Banking)**
• Internet Banking: 24/7 online access to banking services
• Benefits: Convenience, cost-effectiveness, real-time transactions
• Services: Fund transfers, bill payments, statement downloads, fixed deposits

**Mobile Banking**
• SMS Banking: Transaction alerts and balance inquiries via SMS
• Mobile Apps: Full-featured banking applications
• UPI (Unified Payments Interface): Instant payment system
• Mobile Wallets: Digital payment solutions

**Core Banking Solutions (CBS)**
• Centralized database system connecting all bank branches
• Real-time processing and instant account updates
• Branch independence - any branch banking facility
• Improved customer service and operational efficiency

**Bank Assurance**
• Integration of banking and insurance services
• One-stop financial solution for customers
• Cross-selling opportunities for banks
• Comprehensive financial planning services

**Banking Ombudsman Scheme**
• Grievance redressal mechanism for bank customers
• Free service for resolving banking disputes
• Powers to award compensation up to ₹20 lakhs
• Covers all scheduled commercial banks and cooperative banks

**Technology Integration**
Modern banks leverage artificial intelligence, blockchain, biometric authentication, and data analytics to enhance security, improve customer experience, and streamline operations.`
      },
      {
        id: 'rbi-functions',
        title: 'Reserve Bank of India (RBI)',
        unit: 'Unit I',
        description: 'Constitution, structure, management, objectives and functions of RBI',
        theory: `**Reserve Bank of India - The Central Bank**

Established in 1935, RBI serves as India's central banking institution, playing a crucial role in maintaining financial stability and economic growth.

**Constitution and Structure**
• Established under RBI Act, 1934
• Headquarters: Mumbai
• Central Board of Directors: Governor, Deputy Governors, and Directors
• Regional Offices: 4 regional offices across India
• Government Ownership: Fully owned by Government of India since 1949

**Management Structure**
• Governor: Chief Executive, appointed by Government for 3 years
• Deputy Governors: Up to 4 deputy governors
• Board of Directors: 10 nominated directors, 1 government official
• Committee System: Various committees for specialized functions

**Primary Objectives**
• Price stability and controlled inflation
• Financial stability and systemic risk management
• Support economic growth and development
• Maintain external sector stability

**Key Functions**

**1. Monetary Authority**
• Formulation and implementation of monetary policy
• Control of money supply and credit
• Management of interest rates
• Foreign exchange management

**2. Regulator and Supervisor**
• Banking sector supervision and regulation
• Non-banking financial companies regulation
• Payment and settlement systems oversight
• Financial market development

**3. Manager of Currency**
• Currency issuance and distribution
• Currency design and security features
• Detection and prevention of counterfeiting
• Withdrawal of damaged notes

**4. Banker to Government**
• Government's banker and debt manager
• Management of public debt
• Government account maintenance
• Advisory services to government

**5. Banker to Banks**
• Maintenance of cash reserves
• Lender of last resort
• Clearing and settlement services
• Banking supervision and inspection`,
        simulator: {
          type: 'calculator',
          title: 'CRR & SLR Calculator',
          description: 'Calculate Cash Reserve Ratio and Statutory Liquidity Ratio requirements',
          inputs: [
            { name: 'deposits', label: 'Total Deposits (₹ Crores)', type: 'number', required: true, min: 1 },
            { name: 'crr_rate', label: 'CRR Rate (%)', type: 'number', required: true, min: 0, max: 20, step: 0.25 },
            { name: 'slr_rate', label: 'SLR Rate (%)', type: 'number', required: true, min: 0, max: 40, step: 0.25 }
          ],
          formula: 'CRR Amount = Deposits × CRR Rate / 100, SLR Amount = Deposits × SLR Rate / 100'
        }
      },
      {
        id: 'types-of-banks',
        title: 'Types of Banks in India',
        unit: 'Unit I',
        description: 'Cooperative Banks, RRBs, NABARD, SIDBI, and Development Banks',
        theory: `**Classification of Banks in India**

The Indian banking system comprises various types of banks, each serving specific segments and purposes in the financial ecosystem.

**Cooperative Banks**
• Member-owned financial cooperatives
• Three-tier structure: Primary, Central, and State Cooperative Banks
• Focus on rural and agricultural financing
• Democratic management with one member, one vote principle

**Types of Cooperative Banks:**
• Primary Agricultural Credit Societies (PACS)
• District Central Cooperative Banks (DCCBs)
• State Cooperative Banks (SCBs)
• Urban Cooperative Banks (UCBs)

**Regional Rural Banks (RRBs)**
• Established in 1975 under RRB Act
• Joint ownership: Central Government (50%), State Government (15%), Sponsor Bank (35%)
• Mandate: Provide credit and banking services in rural areas
• Focus on agriculture, trade, commerce, and small industries

**NABARD (National Bank for Agriculture and Rural Development)**
• Apex development bank for agriculture and rural development
• Established in 1982 by RBI and Government of India
• Functions: Policy formulation, credit planning, monitoring and evaluation
• Services: Refinancing, direct financing, promotional activities

**SIDBI (Small Industries Development Bank of India)**
• Principal financial institution for MSMEs
• Established in 1990 as a subsidiary of IDBI
• Services: Term loans, working capital, equipment financing
• Focus: Technology upgradation, export promotion, entrepreneurship development

**Development Banks**
• Long-term financing institutions
• Focus on infrastructure and industrial development
• Examples: IFCI, ICICI (now merged), IDBI

**Specialized Financial Institutions**
• Export-Import Bank of India (EXIM Bank)
• National Housing Bank (NHB)
• Small Industries Development Bank of India (SIDBI)
• Infrastructure Development Finance Company (IDFC)

**Modern Banking Structure**
The Indian banking system has evolved to include payment banks, small finance banks, and differentiated banks to serve specific customer segments and requirements.`
      }
    ]
  },
  {
    id: 'unit2',
    title: 'Unit II: Banker-Customer Relationship',
    icon: 'Users',
    description: 'KYC norms, account types, and relationship management',
    modules: [
      {
        id: 'banker-customer-definition',
        title: 'Definition of Banker & Customer',
        unit: 'Unit II',
        description: 'Legal definitions and relationship between bankers and customers',
        theory: `**Legal Framework of Banker-Customer Relationship**

The relationship between a banker and customer forms the foundation of all banking operations, governed by both contractual law and banking regulations.

**Definition of Banker**
• A person or company carrying on banking business
• Licensed to accept deposits and lend money
• Regulated by banking laws and RBI guidelines
• Provides financial services to the public

**Legal Characteristics of a Banker:**
• Must hold a banking license
• Accepts deposits from the public
• Lends money for profit
• Maintains current and deposit accounts
• Honors customers' cheques and drafts

**Definition of Customer**
• Person maintaining an account with the bank
• Regular relationship with the bank
• Not necessarily limited to deposit account holders
• Includes borrowers and other service users

**Legal Characteristics of a Customer:**
• Account relationship with the bank
• Frequency of transactions
• Duration of relationship
• Legal capacity to enter contracts

**Nature of Banker-Customer Relationship**

**1. Contractual Relationship**
• Based on mutual agreement and consent
• Terms and conditions govern the relationship
• Rights and obligations of both parties defined
• Breach of contract leads to legal consequences

**2. Debtor-Creditor Relationship**
• When customer deposits money: Bank becomes debtor, Customer becomes creditor
• When bank grants loan: Bank becomes creditor, Customer becomes debtor
• Money deposited becomes bank's property
• Bank obligated to repay on demand

**3. Principal-Agent Relationship**
• Bank acts as agent for specific services
• Collection of cheques, bills, and dividends
• Payment of bills, premiums, and installments
• Investment services and portfolio management

**4. Bailor-Bailee Relationship**
• Safe deposit locker services
• Bank as bailee, customer as bailor
• Bank responsible for safe custody
• Specific terms for access and liability

**Rights and Obligations**
Both parties have specific rights and obligations that must be respected and fulfilled to maintain a healthy banking relationship.`
      },
      {
        id: 'kyc-norms',
        title: 'KYC Norms & Relationship Types',
        unit: 'Unit II',
        description: 'Know Your Customer guidelines and various relationship types',
        theory: `**Know Your Customer (KYC) Norms**

KYC norms are regulatory guidelines that require banks to verify and maintain records of customer identity and address, crucial for preventing money laundering and terrorist financing.

**Objectives of KYC**
• Customer identification and verification
• Risk assessment and management
• Money laundering prevention
• Terrorist financing prevention
• Regulatory compliance

**KYC Documents Required**

**Identity Proof:**
• PAN Card (mandatory for amounts above ₹50,000)
• Aadhaar Card
• Voter ID Card
• Passport
• Driving License

**Address Proof:**
• Aadhaar Card
• Utility Bills (electricity, telephone, gas)
• Bank statements
• Ration Card
• Rent Agreement

**Customer Due Diligence (CDD)**
• Standard CDD for regular customers
• Simplified CDD for low-risk customers
• Enhanced CDD for high-risk customers
• Ongoing monitoring of transactions

**Types of Banker-Customer Relationships**

**1. General Relationship**
• Debtor-Creditor relationship
• Principal-Agent relationship
• Bailor-Bailee relationship
• Trustee-Beneficiary relationship

**2. Special Relationship**
• Minor's accounts with guardian consent
• Joint account holders with specific mandates
• Partnership accounts with authorized signatories
• Corporate accounts with board resolutions

**3. Prohibited Relationships**
• Accounts for illegal activities
• Anonymous or fictitious accounts
• Shell companies without genuine business
• High-risk jurisdictions without proper documentation

**Risk Categorization of Customers**
• Low Risk: Government organizations, regulated entities
• Medium Risk: Listed companies, trust accounts
• High Risk: Non-resident Indians, politically exposed persons

**Compliance Requirements**
Banks must maintain updated KYC records, conduct periodic reviews, and report suspicious transactions to Financial Intelligence Unit (FIU-IND).`,
        simulator: {
          type: 'validator',
          title: 'KYC Compliance Checker',
          description: 'Validate customer documents and KYC compliance status',
          inputs: [
            { name: 'customerType', label: 'Customer Type', type: 'select', required: true, options: ['Individual', 'Partnership', 'Company', 'Trust', 'NRI'] },
            { name: 'panCard', label: 'PAN Card Available', type: 'select', required: true, options: ['Yes', 'No'] },
            { name: 'addressProof', label: 'Address Proof', type: 'select', required: true, options: ['Aadhaar', 'Utility Bill', 'Bank Statement', 'Rent Agreement', 'None'] },
            { name: 'accountType', label: 'Account Type', type: 'select', required: true, options: ['Savings', 'Current', 'Fixed Deposit', 'Recurring Deposit'] },
            { name: 'initialDeposit', label: 'Initial Deposit Amount (₹)', type: 'number', required: true, min: 1 }
          ]
        }
      },
      {
        id: 'opening-accounts',
        title: 'Opening Bank Accounts',
        unit: 'Unit II',
        description: 'Procedures for opening accounts for minors, women, partnerships, companies, etc.',
        theory: `**Bank Account Opening Procedures**

Different types of customers require specific documentation and procedures for opening bank accounts, ensuring legal compliance and proper identification.

**Individual Accounts**

**Standard Requirements:**
• Duly filled account opening form
• KYC documents (identity and address proof)
• Passport-size photographs
• Initial deposit as per bank's minimum balance requirement
• Specimen signature card

**Minor Accounts**
• Age below 18 years
• Parent/guardian as joint account holder
• Guardian's KYC documents required
• Birth certificate of minor
• Guardian's authority documents
• Account automatically converted at age 18

**Women's Accounts**
• Same documentation as individual accounts
• Special schemes and benefits often available
• Lower minimum balance requirements
• Enhanced security features
• Preferential interest rates on deposits

**Joint Accounts**

**Types of Joint Operations:**
• Either or Survivor (E or S)
• Anyone or Survivor (A or S)
• Both/All or Survivor (B or S)
• Former or Survivor (F or S)

**Partnership Accounts**
• Partnership deed and its registration
• List of partners with specimen signatures
• Resolution for account opening
• Authority letter for account operations
• Individual KYC of all partners
• PAN of partnership firm

**Company Accounts**
• Certificate of Incorporation
• Memorandum and Articles of Association
• Board Resolution for account opening
• List of directors with specimen signatures
• PAN and TAN of company
• Authorized signatory details
• GST registration certificate

**Club and Association Accounts**
• Registration certificate
• Constitution/bye-laws of the organization
• List of office bearers
• Resolution for account opening
• Authorized signatory mandates
• PAN of the organization

**Trust Accounts**
• Trust deed and registration documents
• List of trustees
• Board resolution for account opening
• PAN of trust
• Authorized signatory details
• Regulatory approvals if applicable

**Special Considerations**
• NRI accounts require additional documentation
• Government accounts follow specific procedures
• Educational institutions need recognition certificates
• Cooperative societies require registration details

**Account Activation Process**
After documentation verification, accounts are typically activated within 24-48 hours, with immediate access to basic banking services.`
      }
    ]
  },
  {
    id: 'unit3',
    title: 'Unit III: Negotiable Instruments',
    icon: 'FileText',
    description: 'Cheques, bills, promissory notes, and payment systems',
    modules: [
      {
        id: 'negotiable-instruments-types',
        title: 'Types & Features of Negotiable Instruments',
        unit: 'Unit III',
        description: 'Understanding different types and characteristics of negotiable instruments',
        theory: `**Negotiable Instruments Act, 1881**

Negotiable instruments are written documents that guarantee payment of money, either on demand or at a specified time, and are freely transferable from one person to another.

**Definition and Features**
A negotiable instrument is a document guaranteeing payment of a specific amount of money, either on demand or at a set time, whose payer is named on the document.

**Essential Features:**
• Written document with unconditional payment promise
• Fixed or determinable amount of money
• Payable on demand or at a specified time
• Signed by the maker or drawer
• Freely transferable by endorsement and delivery

**Types of Negotiable Instruments**

**1. Promissory Note**
• Written promise to pay a specific amount
• Made by debtor to creditor
• Contains unconditional undertaking to pay
• Payable on demand or at specified time
• Two parties: Maker and Payee

**2. Bill of Exchange**
• Written order to pay money
• Made by creditor to debtor
• Three parties: Drawer, Drawee, Payee
• Can be payable on demand or after specified period
• Requires acceptance by drawee

**3. Cheque**
• Special type of bill of exchange
• Drawn on a banker
• Payable on demand only
• No acceptance required
• Three parties: Drawer, Drawee Bank, Payee

**Types of Cheques:**
• Bearer Cheque: Payable to bearer
• Order Cheque: Payable to specific person or order
• Crossed Cheque: Can only be deposited in bank account
• Post-dated Cheque: Dated for future payment
• Stale Cheque: Older than 3 months

**Characteristics of Negotiability**
• Title passes by mere delivery (bearer instruments)
• Title passes by endorsement and delivery (order instruments)
• Holder in due course gets better title than transferor
• No notice to debtor required for transfer
• Consideration is presumed

**Legal Framework**
Negotiable Instruments Act provides legal framework for creation, transfer, and enforcement of these instruments, ensuring smooth commercial transactions and trade facilitation.`,
        simulator: {
          type: 'demo',
          title: 'Cheque Processing Simulator',
          description: 'Simulate cheque processing and validation',
          inputs: [
            { name: 'chequeType', label: 'Cheque Type', type: 'select', required: true, options: ['Bearer', 'Order', 'Crossed'] },
            { name: 'amount', label: 'Cheque Amount (₹)', type: 'number', required: true, min: 1 },
            { name: 'date', label: 'Cheque Date', type: 'date', required: true },
            { name: 'payeeName', label: 'Payee Name', type: 'text', required: true },
            { name: 'accountBalance', label: 'Account Balance (₹)', type: 'number', required: true, min: 0 }
          ]
        }
      },
      {
        id: 'banker-duties',
        title: 'Paying & Collecting Banker Duties',
        unit: 'Unit III',
        description: 'Rights and obligations of paying and collecting bankers',
        theory: `**Duties and Rights of Paying Banker**

The paying banker is the bank on which a cheque is drawn and has specific duties and rights under the Negotiable Instruments Act.

**Duties of Paying Banker**

**1. Duty to Pay**
• Honor valid cheques when sufficient funds available
• Pay according to customer's mandate
• Verify signature and other security features
• Ensure proper endorsement for order cheques

**2. Duty to Examine**
• Check date and validity of cheque
• Verify signature against specimen signature
• Ensure sufficient balance in account
• Examine for any alterations or forgery

**3. Duty of Secrecy**
• Maintain confidentiality of customer's affairs
• Not disclose account information to third parties
• Protect customer's financial privacy
• Exception: Legal obligations, court orders

**Rights of Paying Banker**
• Right to charge commission and expenses
• Right to set-off against customer's other accounts
• Right to refuse payment if insufficient funds
• Right to stop payment on customer's instructions

**Protection to Paying Banker**
• Section 85: Protection when payment made in good faith
• No liability if signature appears genuine
• Protection against forged endorsements
• Statutory protection for crossed cheques

**Duties of Collecting Banker**

**1. Duty of Care**
• Exercise reasonable care in collection
• Present cheque for payment promptly
• Notify customer of dishonor immediately
• Maintain proper records of collection

**2. Duty to Examine**
• Verify customer's title to the instrument
• Check for proper endorsement
• Ensure cheque is not post-dated or stale
• Examine for any irregular features

**3. Duty of Prompt Action**
• Present cheque in clearing house promptly
• Credit proceeds to customer's account
• Handle returned cheques efficiently
• Provide timely updates to customer

**Rights of Collecting Banker**
• Right to charge collection commission
• Right to credit proceeds to customer's account
• Right to reverse credit if cheque is dishonored
• Right to seek indemnity from customer

**Protection to Collecting Banker**
• Section 131A: Protection for collecting banker
• Protection when collection made in good faith
• No liability if acted without negligence
• Statutory immunity for crossed cheques

**Holder in Due Course**
A holder in due course gets special rights and protections, immune from defects in title of previous holders, provided the instrument was taken in good faith for valuable consideration.`
      },
      {
        id: 'cheque-dishonor',
        title: 'Cheque Payment Rules & Dishonor',
        unit: 'Unit III',
        description: 'Rules for cheque payment and consequences of dishonor',
        theory: `**Cheque Payment Rules and Dishonor Provisions**

Cheque dishonor is a serious matter with legal and financial consequences, governed by specific rules under the Negotiable Instruments Act.

**Rules for Cheque Payment**

**1. Sufficient Funds**
• Account must have adequate balance
• Includes credit balance and sanctioned overdraft limit
• Funds must be available at time of presentation
• Frozen or blocked funds cannot be utilized

**2. Valid Signature**
• Signature must match specimen signature
• Account holder must be mentally competent
• No forged or unauthorized signatures
• Power of attorney holder's authority must be valid

**3. Proper Presentation**
• Cheque must be presented during banking hours
• At the branch where account is maintained
• Within validity period (3 months from date)
• Through proper banking channels

**4. No Legal Impediments**
• No court orders freezing the account
• No garnishee orders or attachments
• Account not closed or suspended
• No stop payment instructions

**Grounds for Cheque Dishonor**

**1. Insufficient Funds**
• Most common reason for dishonor
• Balance less than cheque amount
• Overdraft limit exceeded
• Funds not cleared or available

**2. Technical Reasons**
• Signature mismatch or illegible
• Date issues (post-dated, stale, incorrect)
• Amount in words and figures differ
• Cheque mutilated or torn

**3. Legal Reasons**
• Stop payment instruction by drawer
• Account frozen by court order
• Death or insanity of account holder
• Account closed or suspended

**Consequences of Cheque Dishonor**

**Criminal Liability (Section 138 NI Act):**
• Imprisonment up to 2 years
• Fine up to twice the cheque amount
• Both imprisonment and fine possible
• Cognizable and non-bailable offense

**Civil Remedies:**
• Recovery of cheque amount with interest
• Compensation for damages
• Legal costs and expenses
• Loss of creditworthiness

**Procedure for Section 138 Cases**

**1. Notice Period**
• Legal notice within 30 days of dishonor
• 15 days time to drawer for payment
• Notice through registered post/courier

**2. Filing Complaint**
• Within 30 days of notice period expiry
• In magistrate court having jurisdiction
• With proper documentation and evidence
• Payment can be made till conviction

**Prevention Measures**
• Maintain adequate account balance
• Use account monitoring services
• Implement proper internal controls
• Regular reconciliation of accounts

**Recent Amendments**
Cheque truncation system and electronic clearing have improved efficiency while maintaining legal sanctity of negotiable instruments.`,
        simulator: {
          type: 'calculator',
          title: 'Cheque Dishonor Penalty Calculator',
          description: 'Calculate penalties and charges for cheque dishonor',
          inputs: [
            { name: 'chequeAmount', label: 'Cheque Amount (₹)', type: 'number', required: true, min: 1 },
            { name: 'dishonoredTimes', label: 'Number of Times Dishonored', type: 'number', required: true, min: 1, max: 10 },
            { name: 'accountType', label: 'Account Type', type: 'select', required: true, options: ['Savings', 'Current', 'Overdraft'] },
            { name: 'bankCharges', label: 'Bank Dishonor Charges (₹)', type: 'number', required: true, min: 0 }
          ],
          formula: 'Total Penalty = (Cheque Amount × 2) + Bank Charges + Legal Costs'
        }
      },
      {
        id: 'loan-securities',
        title: 'Loan Securities & Collaterals',
        unit: 'Unit III',
        description: 'Types of securities for loans: goods, documents, real estate, insurance, etc.',
        theory: `**Loan Securities and Collateral Management**

Banks require adequate security for loans to mitigate credit risk and ensure recovery. Various types of securities serve different purposes based on loan nature and borrower profile.

**Classification of Securities**

**1. Primary Securities**
• Created out of loan proceeds
• Directly related to the purpose of loan
• First charge on assets created/acquired
• Examples: Machinery, inventory, receivables

**2. Collateral Securities**
• Additional security beyond primary security
• Not created from loan proceeds
• Provides extra comfort to lender
• Examples: Property, gold, fixed deposits

**Types of Loan Securities**

**Tangible Securities**

**1. Goods and Inventory**
• Raw materials and finished goods
• Pledge: Physical possession with bank
• Hypothecation: Constructive possession
• Book debts and receivables
• Stock and inventory financing

**2. Real Estate Properties**
• Residential and commercial properties
• Industrial land and buildings
• Mortgage: Transfer of interest in property
• Equitable mortgage vs. registered mortgage
• Property valuation and legal verification

**3. Plant and Machinery**
• Manufacturing equipment and machinery
• Office equipment and furniture
• Vehicles and transport equipment
• Hypothecation with retention of possession
• Asset-backed lending

**Financial Securities**

**1. Fixed Deposits and Investments**
• Bank deposits as collateral
• Government securities and bonds
• Shares and mutual fund units
• Life insurance policies
• Post office deposits and NSC

**2. Guarantees**
• Personal guarantees of directors/partners
• Corporate guarantees from group companies
• Bank guarantees from other banks
• Government guarantees for specific schemes
• Letter of comfort from parent companies

**Document-based Securities**

**1. Trade Documents**
• Bills of lading for shipping
• Warehouse receipts and delivery orders
• Railway receipts and truck receipts
• Airway bills for air cargo
• Insurance documents

**2. Title Documents**
• Sale deed and conveyance deed
• Title documents of properties
• Share certificates and debentures
• Insurance policy documents
• Partnership deeds and MOA/AOA

**Security Creation Process**

**1. Legal Documentation**
• Security agreement and loan documents
• Mortgage deed or hypothecation agreement
• Guarantee deed and indemnity bond
• Board resolutions and power of attorney
• Stamp duty and registration compliance

**2. Valuation and Verification**
• Property valuation by approved valuers
• Technical inspection of assets
• Legal title verification by lawyers
• Insurance coverage adequacy check
• Periodic revaluation and monitoring

**Security Enforcement**
In case of default, banks can enforce security through various legal mechanisms including recovery tribunals, asset reconstruction, and one-time settlements.`
      }
    ]
  },
  {
    id: 'unit4',
    title: 'Unit IV: Introduction to Financial Services',
    icon: 'CreditCard',
    description: 'Financial services classification and modern instruments',
    modules: [
      {
        id: 'financial-services-meaning',
        title: 'Financial Services: Meaning & Functions',
        unit: 'Unit IV',
        description: 'Understanding financial services, classification, and scope',
        theory: `**Financial Services - Comprehensive Overview**

Financial services encompass the economic services provided by the finance industry, facilitating the flow of funds in the economy and enabling efficient allocation of resources.

**Definition of Financial Services**
Financial services are various services provided by financial institutions that facilitate financial transactions, investments, and money management for individuals, businesses, and governments.

**Key Characteristics:**
• Intangible products and services
• Customer-oriented approach
• Risk management and mitigation
• Liquidity provision and fund mobilization
• Information intensive operations
• Technology-driven service delivery

**Primary Functions of Financial Services**

**1. Mobilization of Savings**
• Collection of funds from surplus units
• Channeling savings into productive investments
• Offering various investment products
• Encouraging financial inclusion and savings habit

**2. Capital Formation**
• Facilitating long-term investment
• Supporting infrastructure development
• Promoting entrepreneurship and innovation
• Contributing to economic growth

**3. Risk Management**
• Insurance products and services
• Derivatives and hedging instruments
• Portfolio diversification strategies
• Credit risk assessment and mitigation

**4. Liquidity Provision**
• Short-term funding solutions
• Working capital financing
• Money market operations
• Payment and settlement services

**Classification of Financial Services**

**Fund-based Activities:**
• Term loans and working capital finance
• Trade finance and export credit
• Consumer finance and retail lending
• Project finance and infrastructure funding
• Lease and hire purchase financing

**Non-fund-based Activities:**
• Letter of credit and bank guarantees
• Foreign exchange operations
• Advisory and consultancy services
• Investment banking services
• Insurance and pension services

**Scope of Financial Services**

**Banking Services:**
• Commercial banking operations
• Investment banking activities
• Development banking services
• Cooperative banking network
• Payment banking and small finance banks

**Insurance Services:**
• Life insurance products
• General insurance coverage
• Health and medical insurance
• Micro-insurance solutions
• Re-insurance services

**Capital Market Services:**
• Primary market operations
• Secondary market trading
• Mutual fund services
• Portfolio management services
• Custodial and depository services

**Development Financial Institutions:**
• Long-term project financing
• Infrastructure development funding
• Small and medium enterprise support
• Export-import financing
• Agricultural and rural development finance

**Modern Financial Services**
The sector has evolved to include fintech solutions, digital payments, robo-advisory services, peer-to-peer lending, and blockchain-based financial products.`
      },
      {
        id: 'fund-vs-nonfund',
        title: 'Fund-based vs Non-fund-based Activities',
        unit: 'Unit IV',
        description: 'Distinction between fund-based and non-fund-based financial services',
        theory: `**Fund-based vs Non-fund-based Activities**

Financial institutions offer two broad categories of services: fund-based activities involving actual deployment of funds and non-fund-based activities providing services without fund deployment.

**Fund-based Activities**

These activities involve actual lending or deployment of funds by financial institutions, creating assets on their balance sheet.

**Characteristics:**
• Actual outflow of funds from institution
• Creates credit exposure and risk
• Generates interest income
• Requires capital allocation and provisioning
• Subject to credit appraisal and monitoring

**Types of Fund-based Activities:**

**1. Term Loans**
• Long-term financing for capital expenditure
• Medium-term loans for equipment purchase
• Short-term loans for working capital needs
• Personal loans for consumer financing
• Housing loans for property purchase

**2. Cash Credits and Overdrafts**
• Revolving credit facilities
• Working capital financing solutions
• Flexible borrowing and repayment
• Interest charged on utilized amount only
• Collateral security requirements

**3. Bill Discounting**
• Purchase of trade bills before maturity
• Immediate liquidity to bill holders
• Credit risk assessment of drawee
• Discount rate based on risk profile
• Collection responsibility on bank

**4. Trade Finance**
• Pre-shipment and post-shipment finance
• Export and import financing
• Packing credit and export bills
• Import bills and usance financing
• Working capital for international trade

**Non-fund-based Activities**

These activities provide services without actual deployment of funds, generating fee-based income for institutions.

**Characteristics:**
• No actual outflow of funds initially
• Contingent liability creation
• Generates fee and commission income
• Lower capital requirement
• Service-oriented business model

**Types of Non-fund-based Activities:**

**1. Letter of Credit (LC)**
• Payment guarantee for trade transactions
• Substitute for cash payment
• Documentary compliance requirements
• Reduces counterparty risk in trade
• Various types: sight, usance, revolving LC

**2. Bank Guarantees**
• Performance guarantees for contracts
• Financial guarantees for loans
• Bid bonds and tender guarantees
• Advance payment guarantees
• Retention money guarantees

**3. Foreign Exchange Services**
• Currency exchange operations
• Forward contracts for hedging
• Options and derivatives
• Remittance services
• Travel-related foreign exchange

**4. Advisory Services**
• Investment advisory and planning
• Corporate restructuring advice
• Merger and acquisition services
• Financial consultancy
• Risk management advisory

**5. Custodial Services**
• Securities safekeeping
• Settlement and clearing services
• Corporate action processing
• Income collection and distribution
• Reporting and reconciliation

**Comparison Framework**

**Risk Profile:**
• Fund-based: Higher credit risk, interest rate risk
• Non-fund-based: Lower risk, mainly operational risk

**Income Generation:**
• Fund-based: Interest income, higher margins
• Non-fund-based: Fee income, lower but stable

**Capital Requirement:**
• Fund-based: Higher capital allocation
• Non-fund-based: Lower capital requirement

**Balance Sheet Impact:**
• Fund-based: Asset creation, balance sheet growth
• Non-fund-based: Off-balance sheet, contingent liability

Modern financial institutions maintain a balanced portfolio of both fund-based and non-fund-based activities to optimize risk-return profile and capital efficiency.`
      },
      {
        id: 'financial-innovation',
        title: 'Financial Innovation & Modern Instruments',
        unit: 'Unit IV',
        description: 'Innovation in financial services and modern financial instruments',
        theory: `**Financial Innovation and Modern Instruments**

Financial innovation represents the ongoing development of new financial products, services, and technologies to meet evolving market needs and improve efficiency.

**Drivers of Financial Innovation**

**1. Technology Advancement**
• Digital transformation and automation
• Artificial intelligence and machine learning
• Blockchain and distributed ledger technology
• Mobile and internet banking platforms
• Big data analytics and cloud computing

**2. Regulatory Changes**
• Deregulation and liberalization
• Basel III capital requirements
• Digital payment regulations
• Financial inclusion initiatives
• Consumer protection measures

**3. Market Dynamics**
• Globalization and capital flows
• Changing customer preferences
• Competition from fintech companies
• Economic volatility and risk management
• ESG (Environmental, Social, Governance) considerations

**Modern Financial Instruments**

**Digital Payment Systems:**
• Unified Payments Interface (UPI)
• Mobile wallets and digital currencies
• Contactless payment methods
• Cryptocurrency and central bank digital currency
• Real-time gross settlement systems

**Investment Products:**
• Exchange-traded funds (ETFs)
• Structured products and derivatives
• Alternative investment funds (AIFs)
• Real Estate Investment Trusts (REITs)
• Infrastructure Investment Trusts (InvITs)

**Risk Management Tools:**
• Credit default swaps
• Interest rate derivatives
• Currency hedging instruments
• Catastrophe bonds
• Weather derivatives

**Technology-driven Services:**
• Robo-advisory platforms
• Peer-to-peer lending
• Crowdfunding platforms
• Digital-only banks
• InsurTech solutions

**Benefits of Financial Innovation**

**1. Enhanced Efficiency**
• Reduced transaction costs
• Faster processing and settlement
• Improved risk management
• Better resource allocation
• Streamlined operations

**2. Improved Access**
• Financial inclusion initiatives
• Micro-finance solutions
• Digital banking services
• Remote area connectivity
• Affordable financial products

**3. Better Risk Management**
• Sophisticated risk models
• Real-time monitoring systems
• Diversification opportunities
• Hedging mechanisms
• Stress testing capabilities

**Challenges and Risks**

**1. Systemic Risks**
• Interconnectedness of financial systems
• Too-big-to-fail institutions
• Contagion effects
• Market volatility amplification
• Cyber security threats

**2. Regulatory Challenges**
• Keeping pace with innovation
• Cross-border coordination
• Consumer protection
• Anti-money laundering compliance
• Data privacy and protection

**3. Market Risks**
• Complexity and opacity
• Liquidity risks
• Concentration risks
• Model risks
• Operational risks

**Future Trends**
• Artificial intelligence integration
• Sustainable finance products
• Decentralized finance (DeFi)
• Central bank digital currencies
• Quantum computing applications

Financial innovation continues to reshape the industry, requiring balance between innovation benefits and risk management considerations.`
      },
      {
        id: 'challenges-scenario',
        title: 'Challenges & Present Scenario',
        unit: 'Unit IV',
        description: 'Current challenges and scenario in financial services industry',
        theory: `**Challenges and Present Scenario in Financial Services**

The financial services industry faces numerous challenges in the rapidly evolving economic and technological landscape, requiring adaptive strategies and innovative solutions.

**Current Challenges**

**1. Technology Disruption**
• Fintech competition and market disruption
• Digital transformation requirements
• Legacy system modernization
• Cybersecurity threats and data breaches
• Artificial intelligence and automation impact

**2. Regulatory Compliance**
• Increasing regulatory requirements
• Basel III capital adequacy norms
• Anti-money laundering (AML) compliance
• Know Your Customer (KYC) regulations
• Data protection and privacy laws

**3. Economic Uncertainties**
• Global economic volatility
• Interest rate fluctuations
• Currency exchange rate risks
• Inflation and monetary policy changes
• Credit risk and loan defaults

**4. Customer Expectations**
• Demand for personalized services
• 24/7 availability and instant service
• Omnichannel experience expectations
• Cost-effective solutions
• Transparency and ethical practices

**Present Scenario in India**

**Digital Revolution:**
• UPI transactions exceeding billions monthly
• Digital banking adoption accelerating
• Mobile-first approach to financial services
• Government's Digital India initiative support
• Fintech ecosystem rapid growth

**Financial Inclusion:**
• Jan Dhan Yojana account openings
• Micro-finance institutions expansion
• Payment bank operations
• Small finance bank licensing
• Rural and semi-urban market penetration

**Market Developments:**
• Consolidation in banking sector
• Foreign investment in financial services
• Insurance sector growth
• Mutual fund industry expansion
• Capital market deepening

**Regulatory Environment:**
• RBI's regulatory sandbox for innovation
• Open banking framework development
• Account aggregator ecosystem
• NBFC regulations strengthening
• Consumer protection measures

**Key Opportunities**

**1. Technology Integration**
• Artificial intelligence and machine learning
• Blockchain for secure transactions
• Internet of Things (IoT) applications
• Cloud computing adoption
• Robotic process automation

**2. Market Expansion**
• Rural market penetration
• Youth demographic opportunities
• SME financing growth
• Infrastructure financing needs
• Green finance initiatives

**3. Product Innovation**
• Customized financial solutions
• ESG-focused products
• Hybrid service delivery models
• Cross-selling opportunities
• Value-added services

**Strategic Responses**

**1. Digital Transformation**
• Core banking system upgrades
• Mobile and internet banking enhancement
• Data analytics capabilities building
• Customer experience improvement
• Operational efficiency optimization

**2. Partnership Models**
• Fintech collaboration
• Technology vendor partnerships
• Cross-industry alliances
• Government scheme participation
• International cooperation

**3. Risk Management**
• Advanced risk assessment models
• Stress testing frameworks
• Cybersecurity infrastructure
• Compliance management systems
• Business continuity planning

**Future Outlook**
The financial services industry is poised for significant transformation, driven by technology, changing demographics, and evolving regulatory landscape, requiring institutions to balance innovation with stability and security.`
      }
    ]
  },
  {
    id: 'unit5',
    title: 'Unit V: Specialized Financial Services',
    icon: 'TrendingUp',
    description: 'Merchant banking, venture capital, leasing, and factoring',
    modules: [
      {
        id: 'merchant-banking',
        title: 'Merchant Banking',
        unit: 'Unit V',
        description: 'Services, problems, and scope of merchant banking',
        theory: `**Merchant Banking - Investment Banking Services**

Merchant banking refers to specialized financial services provided to corporations, including advisory services, underwriting, and capital market operations.

**Definition and Concept**
Merchant banking involves providing specialized financial services to corporate clients, particularly in areas of capital raising, advisory services, and investment management.

**Core Functions of Merchant Banking**

**1. Issue Management**
• Public issue planning and management
• Private placement arrangements
• Rights issue management
• Preferential allotment services
• Compliance with SEBI regulations

**2. Underwriting Services**
• Risk assessment for public issues
• Guarantee subscription of securities
• Price discovery and valuation
• Market making activities
• Distribution network management

**3. Advisory Services**
• Corporate restructuring advice
• Merger and acquisition services
• Divestment and spin-off guidance
• Capital structure optimization
• Strategic financial planning

**4. Portfolio Management**
• Investment portfolio design
• Asset allocation strategies
• Risk management services
• Performance monitoring
• Customized investment solutions

**Services Provided by Merchant Banks**

**Pre-issue Services:**
• Project appraisal and evaluation
• Capital structure planning
• Pricing and timing of issues
• Regulatory compliance guidance
• Due diligence and documentation

**Issue-related Services:**
• Lead manager responsibilities
• Underwriting and subscription
• Application processing
• Allotment and refund management
• Stock exchange listing assistance

**Post-issue Services:**
• Market making and trading
• Investor relations management
• Compliance monitoring
• Corporate restructuring support
• Ongoing advisory services

**Problems in Merchant Banking**

**1. Market-related Problems**
• Market volatility and timing risks
• Investor sentiment fluctuations
• Competition from other intermediaries
• Regulatory changes impact
• Economic cycle dependencies

**2. Operational Challenges**
• High skilled manpower requirements
• Technology infrastructure needs
• Compliance and documentation costs
• Risk management complexities
• Client relationship maintenance

**3. Regulatory Issues**
• SEBI regulations and compliance
• Capital adequacy requirements
• Disclosure and transparency norms
• Conflict of interest management
• Market manipulation prevention

**Scope and Opportunities**

**Domestic Market:**
• Growing corporate financing needs
• Capital market development
• SME sector growth potential
• Infrastructure financing requirements
• Private equity and venture capital growth

**International Operations:**
• Cross-border transactions
• Global depositary receipts (GDRs)
• Foreign currency bonds
• International fund raising
• Overseas investment advisory

**Emerging Areas:**
• ESG-focused investment banking
• Fintech and digital transformation advisory
• Sustainable finance solutions
• Alternative investment platforms
• Regulatory technology services

**Role in Economic Development**
Merchant banks play crucial role in capital formation, corporate development, and efficient resource allocation, contributing significantly to economic growth and industrial development.`
      },
      {
        id: 'venture-capital',
        title: 'Venture Capital',
        unit: 'Unit V',
        description: 'Meaning, features, scope, and importance of venture capital',
        theory: `**Venture Capital - Financing Innovation and Growth**

Venture capital represents a crucial source of funding for innovative startups and high-growth potential businesses, bridging the gap between traditional financing and capital market access.

**Definition of Venture Capital**
Venture capital is a form of private equity financing provided to early-stage, high-potential companies in exchange for equity stakes, typically involving active participation in business development.

**Key Features of Venture Capital**

**1. Equity Participation**
• Investment in exchange for ownership stakes
• Long-term investment horizon (5-10 years)
• Capital appreciation focused returns
• Exit through IPO or strategic sale
• Active involvement in company management

**2. Risk-Return Profile**
• High risk, high return investments
• Portfolio diversification strategy
• Due diligence and selection process
• Value addition beyond capital
• Professional management involvement

**3. Stage-wise Investment**
• Seed stage: Concept and prototype development
• Startup stage: Initial operations and market entry
• Early stage: Product development and initial sales
• Expansion stage: Market growth and scaling
• Later stage: Pre-IPO and maturity phases

**Types of Venture Capital**

**By Investment Stage:**
• Seed Capital: Very early stage funding
• Startup Capital: Initial commercial operations
• Early Stage Capital: Business expansion
• Expansion Capital: Rapid growth funding
• Bridge Capital: Pre-IPO financing

**By Ownership Structure:**
• Private Venture Capital Funds
• Corporate Venture Capital
• Government Venture Capital Schemes
• Angel Investor Networks
• Venture Capital Trusts

**Venture Capital Process**

**1. Deal Sourcing**
• Business plan evaluation
• Entrepreneur presentations
• Market opportunity assessment
• Technology and IP evaluation
• Management team analysis

**2. Due Diligence**
• Financial analysis and projections
• Market research and validation
• Technology assessment
• Legal and regulatory compliance
• Reference checks and verification

**3. Investment Decision**
• Investment committee approval
• Term sheet negotiations
• Legal documentation
• Board representation arrangement
• Monitoring and reporting mechanisms

**4. Value Addition**
• Strategic guidance and mentoring
• Network access and partnerships
• Operational improvements
• Additional financing arrangements
• Exit strategy planning

**Scope and Importance**

**Economic Development:**
• Innovation and entrepreneurship promotion
• Job creation and employment generation
• Technology development and commercialization
• Export promotion and foreign exchange earning
• Regional development and growth

**Industry Sectors:**
• Information technology and software
• Biotechnology and pharmaceuticals
• Clean energy and sustainability
• Healthcare and medical devices
• Fintech and digital services

**Benefits to Entrepreneurs:**
• Access to growth capital
• Professional guidance and mentoring
• Network access and partnerships
• Credibility and market validation
• Strategic planning support

**Benefits to Economy:**
• Innovation ecosystem development
• Risk capital availability
• Entrepreneurial culture promotion
• Technology transfer facilitation
• Global competitiveness enhancement

**Challenges in Venture Capital**

**Market Challenges:**
• Limited exit opportunities
• Valuation complexities
• Market timing risks
• Regulatory environment
• Competition for deals

**Operational Issues:**
• High due diligence costs
• Portfolio management complexities
• Long gestation periods
• Market volatility impact
• Skilled personnel requirements

India's venture capital industry has grown significantly, with increasing government support, regulatory improvements, and growing entrepreneurial ecosystem contributing to its expansion.`,
        simulator: {
          type: 'calculator',
          title: 'Venture Capital Returns Calculator',
          description: 'Calculate potential returns from venture capital investments',
          inputs: [
            { name: 'initialInvestment', label: 'Initial Investment (₹ Lakhs)', type: 'number', required: true, min: 1 },
            { name: 'equityStake', label: 'Equity Stake (%)', type: 'number', required: true, min: 1, max: 100 },
            { name: 'exitValuation', label: 'Exit Valuation (₹ Crores)', type: 'number', required: true, min: 1 },
            { name: 'investmentPeriod', label: 'Investment Period (Years)', type: 'number', required: true, min: 1, max: 15 },
            { name: 'dividendYield', label: 'Annual Dividend Yield (%)', type: 'number', required: false, min: 0, max: 20 }
          ],
          formula: 'Total Return = (Exit Value × Equity Stake) + Dividends - Initial Investment'
        }
      },
      {
        id: 'leasing',
        title: 'Leasing',
        unit: 'Unit V',
        description: 'Steps, types of leasing: financial, operating, leveraged, sale & leaseback',
        theory: `**Leasing - Alternative Financing Solution**

Leasing is a contractual arrangement where the lessor grants the lessee the right to use an asset for a specified period in exchange for periodic lease payments.

**Definition and Concept**
Leasing is a financing method that allows businesses to acquire the use of equipment, machinery, or other assets without purchasing them outright, providing flexibility and cash flow benefits.

**Basic Elements of Leasing**
• Lessor: Owner of the asset who leases it out
• Lessee: User of the asset who pays lease rentals
• Lease Agreement: Contract defining terms and conditions
• Lease Rentals: Periodic payments by lessee to lessor
• Lease Period: Duration of the lease arrangement

**Steps in Leasing Process**

**1. Lease Application**
• Lessee identifies equipment requirement
• Approaches leasing company
• Submits lease application with documents
• Equipment specification and supplier details
• Financial statements and project reports

**2. Credit Evaluation**
• Assessment of lessee's creditworthiness
• Evaluation of project viability
• Analysis of cash flow projections
• Security and guarantee requirements
• Risk assessment and approval process

**3. Lease Documentation**
• Lease agreement preparation
• Terms and conditions finalization
• Security documentation
• Insurance arrangements
• Equipment delivery and acceptance

**4. Lease Execution**
• Equipment purchase and delivery
• Lease commencement and rental billing
• Maintenance and insurance monitoring
• Periodic reviews and renewals
• End-of-lease arrangements

**Types of Leasing**

**1. Financial Lease (Capital Lease)**
• Long-term lease arrangement
• Lessee bears risks and rewards of ownership
• Non-cancelable during primary lease period
• Full payout lease covering asset cost
• Purchase option at end of lease term

**Characteristics:**
• Lease period covers major part of asset life
• Present value of lease rentals approximates asset cost
• Lessee responsible for maintenance and insurance
• Lessor recovers full cost plus return
• Ownership transfer option available

**2. Operating Lease**
• Short-term lease arrangement
• Lessor retains risks and rewards of ownership
• Cancelable during lease period
• Partial payout lease with residual value
• No purchase option typically available

**Characteristics:**
• Lease period shorter than asset life
• Lessor responsible for maintenance
• Higher rental rates than financial lease
• Flexibility to upgrade or cancel
• Off-balance sheet treatment possible

**3. Leveraged Lease**
• Three-party arrangement
• Lessor borrows funds for asset purchase
• Lender provides debt financing
• Lessor's equity contribution minimal
• Tax benefits utilized by lessor

**Structure:**
• Lessor: Equity investor and tax benefit recipient
• Lender: Debt provider with security interest
• Lessee: Asset user paying lease rentals
• Non-recourse debt to lessor
• Complex tax and accounting treatment

**4. Sale and Leaseback**
• Owner sells asset to lessor
• Simultaneously leases back same asset
• Immediate cash generation for seller
• Continued use of asset maintained
• Transfer of ownership to buyer

**Benefits:**
• Liquidity improvement for seller
• Continued asset utilization
• Off-balance sheet financing
• Tax advantages possible
• Working capital optimization

**Advantages of Leasing**

**For Lessee:**
• 100% financing without down payment
• Preservation of credit lines
• Fixed rental payments and budgeting ease
• Tax benefits through rental deductions
• Off-balance sheet financing possibility

**For Lessor:**
• Steady rental income stream
• Tax depreciation benefits
• Asset ownership and residual value
• Lower risk through asset security
• Portfolio diversification opportunity

**Disadvantages and Limitations**
• Higher total cost compared to purchase
• No ownership benefits during lease period
• Lease rental obligations continue regardless of asset usage
• Restrictions on asset modifications
• Dependency on lessor for certain services

Leasing has become an important financing tool in India, with dedicated leasing companies, bank subsidiaries, and NBFCs providing comprehensive leasing solutions across various industries.`,
        simulator: {
          type: 'calculator',
          title: 'Lease vs Buy Analysis Calculator',
          description: 'Compare costs of leasing vs buying equipment',
          inputs: [
            { name: 'assetCost', label: 'Asset Cost (₹ Lakhs)', type: 'number', required: true, min: 1 },
            { name: 'leasePeriod', label: 'Lease Period (Years)', type: 'number', required: true, min: 1, max: 20 },
            { name: 'monthlyLease', label: 'Monthly Lease Rental (₹)', type: 'number', required: true, min: 1 },
            { name: 'loanRate', label: 'Loan Interest Rate (% p.a.)', type: 'number', required: true, min: 1, max: 20 },
            { name: 'downPayment', label: 'Down Payment (₹ Lakhs)', type: 'number', required: true, min: 0 },
            { name: 'taxRate', label: 'Corporate Tax Rate (%)', type: 'number', required: true, min: 0, max: 50 }
          ],
          formula: 'NPV of Lease = PV of Lease Payments - PV of Tax Savings'
        }
      },
      {
        id: 'discounting',
        title: 'Bill Discounting',
        unit: 'Unit V',
        description: 'Concept, advantages, and examples of bill discounting',
        theory: `**Bill Discounting - Short-term Finance Solution**

Bill discounting is a financial service where banks or financial institutions purchase trade bills before their maturity date, providing immediate liquidity to bill holders.

**Definition and Concept**
Bill discounting is the process of converting a time-bound trade bill into immediate cash by selling it to a financial institution at a discount to its face value.

**Basic Mechanism**
• Seller delivers goods to buyer against credit
• Buyer accepts bill of exchange for payment
• Seller approaches bank for bill discounting
• Bank purchases bill at discounted value
• Bank collects full amount from buyer on maturity

**Types of Bills for Discounting**

**1. Trade Bills**
• Arising from genuine trade transactions
• Based on sale of goods or services
• Self-liquidating nature
• Backed by underlying goods/invoices
• Generally 30-180 days maturity

**2. Accommodation Bills**
• Created for raising finance
• Not based on genuine trade
• Higher risk profile
• Generally discouraged by banks
• Speculative in nature

**Process of Bill Discounting**

**1. Bill Creation**
• Trade transaction between parties
• Goods delivery and invoice generation
• Bill of exchange drawn and accepted
• Terms and conditions specification
• Maturity date determination

**2. Bill Presentation**
• Bill holder approaches discounting bank
• Submission of required documents
• Credit assessment of drawer/drawee
• Verification of trade transaction
• Discount rate determination

**3. Discounting Transaction**
• Bank purchases bill at discount
• Immediate cash credit to bill holder
• Bank assumes collection responsibility
• Interest/discount deducted upfront
• Bill endorsed to bank

**4. Bill Collection**
• Bank presents bill to drawee on maturity
• Collection of full face value
• Profit realization on discount
• Return of dishonored bills
• Recovery procedures if required

**Calculation of Discount**

**Formula:**
Discount Amount = Face Value × Discount Rate × (Days to Maturity / 365)

**Net Proceeds:**
Net Amount = Face Value - Discount Amount - Bank Charges

**Example Calculation:**
Face Value: ₹1,00,000
Discount Rate: 12% per annum
Days to Maturity: 90 days

Discount = 1,00,000 × 12% × (90/365) = ₹2,959
Net Proceeds = 1,00,000 - 2,959 = ₹97,041

**Advantages of Bill Discounting**

**For Bill Holder (Seller):**
• Immediate liquidity and cash flow improvement
• No need to wait for payment maturity
• Working capital optimization
• Reduced collection efforts and costs
• Transfer of credit risk to bank

**For Bank:**
• Short-term, self-liquidating investment
• Relatively lower risk compared to term loans
• Quick turnover and liquidity
• Commission and discount income
• Portfolio diversification

**For Economy:**
• Facilitates trade and commerce
• Improves money velocity
• Supports small and medium enterprises
• Reduces payment delays
• Enhances business efficiency

**Disadvantages and Risks**

**Risks for Bank:**
• Credit risk of drawee non-payment
• Risk of bill dishonor
• Documentation and legal risks
• Interest rate fluctuation risk
• Operational and processing risks

**Limitations for Bill Holder:**
• Cost of discounting reduces profit margins
• Recourse liability on dishonor
• Documentation requirements
• Credit approval dependencies
• Limited to genuine trade transactions

**Regulatory Framework**
RBI guidelines govern bill discounting operations, including eligibility criteria, documentation requirements, prudential norms, and reporting obligations for banks and financial institutions.

**Modern Developments**
Digital platforms and fintech solutions are transforming bill discounting with online processing, faster approvals, competitive pricing, and enhanced transparency in the discounting process.`,
        simulator: {
          type: 'calculator',
          title: 'Bill Discounting Calculator',
          description: 'Calculate discount amount and net proceeds from bill discounting',
          inputs: [
            { name: 'faceValue', label: 'Face Value of Bill (₹)', type: 'number', required: true, min: 1 },
            { name: 'discountRate', label: 'Discount Rate (% p.a.)', type: 'number', required: true, min: 1, max: 30, step: 0.25 },
            { name: 'daysToMaturity', label: 'Days to Maturity', type: 'number', required: true, min: 1, max: 365 },
            { name: 'bankCharges', label: 'Bank Processing Charges (₹)', type: 'number', required: false, min: 0 }
          ],
          formula: 'Discount = Face Value × Rate × (Days/365); Net Proceeds = Face Value - Discount - Charges'
        }
      },
      {
        id: 'factoring',
        title: 'Factoring',
        unit: 'Unit V',
        description: 'Meaning, parties involved, merits and demerits of factoring',
        theory: `**Factoring - Accounts Receivable Financing**

Factoring is a financial service where businesses sell their accounts receivable to a third party (factor) at a discount to improve cash flow and transfer credit risk.

**Definition of Factoring**
Factoring is a financial arrangement where a factor purchases the accounts receivable of a business at a discount, providing immediate cash and assuming the responsibility for debt collection.

**Parties Involved in Factoring**

**1. Client (Seller)**
• Business selling goods/services on credit
• Faces cash flow constraints
• Wants to convert receivables to cash
• Transfers collection responsibility
• Pays factoring fees for service

**2. Factor (Financial Institution)**
• Purchases accounts receivable
• Provides immediate financing
• Handles debt collection process
• Assumes credit risk (in non-recourse)
• Charges fees and interest

**3. Customer (Debtor/Buyer)**
• Owes money for goods/services received
• Makes payment to factor (notification)
• Unaware of factoring (non-notification)
• Credit profile assessed by factor
• Payment terms remain unchanged

**Types of Factoring**

**1. Recourse vs Non-recourse Factoring**

**Recourse Factoring:**
• Factor can claim refund from client if debtor defaults
• Lower cost due to retained credit risk by client
• Factor's risk limited to collection difficulties
• More common in developing markets
• Client provides guarantee against bad debts

**Non-recourse Factoring:**
• Factor absorbs credit risk of debtors
• Higher cost due to credit risk assumption
• Factor cannot claim refund on defaults
• Comprehensive credit assessment required
• Popular in developed factoring markets

**2. Notification vs Non-notification Factoring**

**Notification Factoring:**
• Customers informed about factoring arrangement
• Payments made directly to factor
• Factor handles customer relationships
• Reduced confusion in payment process
• More efficient collection process

**Non-notification Factoring:**
• Customers unaware of factoring arrangement
• Payments continue to client who remits to factor
• Client maintains customer relationships
• Higher administrative burden
• Confidentiality maintained

**3. Domestic vs International Factoring**

**Domestic Factoring:**
• Within single country operations
• Local currency transactions
• Domestic legal framework
• Direct factor-client relationship
• Standard factoring procedures

**International Factoring:**
• Cross-border trade financing
• Multiple currency involvement
• Complex legal and regulatory issues
• Two-factor system common
• Export and import factor involvement

**Factoring Process**

**1. Agreement Stage**
• Client approaches factor for facility
• Credit assessment of client and customers
• Terms and conditions negotiation
• Factoring agreement execution
• Credit limits for customers established

**2. Invoice Processing**
• Client submits invoices to factor
• Factor verifies invoice authenticity
• Advance payment to client (70-90%)
• Factor notifies customers (if applicable)
• Customer payment due dates monitored

**3. Collection Stage**
• Factor pursues collection from customers
• Regular follow-up and reminders
• Payment receipt and processing
• Balance payment to client after deducting charges
• Default handling and recovery procedures

**Merits of Factoring**

**Benefits to Client:**
• Immediate cash flow improvement
• 100% financing without collateral
• Professional collection services
• Credit risk transfer (non-recourse)
• Administrative cost savings
• Focus on core business activities
• Better cash flow forecasting

**Benefits to Customers:**
• Extended credit terms availability
• Professional service from factor
• Flexible payment arrangements
• Reduced collection pressure
• Continued business relationships

**Benefits to Economy:**
• Working capital availability
• SME sector support
• Trade facilitation
• Employment generation
• Financial sector diversification

**Demerits and Limitations**

**Disadvantages to Client:**
• Higher cost compared to bank financing
• Loss of direct customer contact
• Dependence on factor's collection efficiency
• Possible impact on customer relationships
• Recourse liability in case of defaults
• Confidentiality concerns

**Market Limitations:**
• Limited awareness among businesses
• Regulatory and legal framework gaps
• High operational costs
• Credit information availability issues
• Customer acceptance challenges

**Cost Structure**
Factoring costs typically include service charges (1-3% of turnover), interest on advances (market rates), and collection charges, making it expensive but convenient financing option.

India's factoring industry is growing with TReDS (Trade Receivables Discounting System) providing digital platforms for MSMEs to access factoring services efficiently.`
      },
      {
        id: 'forfeiting',
        title: 'Forfeiting',
        unit: 'Unit V',
        description: 'Parties, costs, and benefits for exporters and importers',
        theory: `**Forfeiting - Export Trade Finance Solution**

Forfeiting is a specialized form of export financing where exporters sell their medium-term receivables to forfeiters without recourse, obtaining immediate cash.

**Definition of Forfeiting**
Forfeiting is a form of export finance where the exporter sells trade receivables arising from export of capital goods to a forfeiter at a discount, without recourse.

**Key Characteristics**
• Without recourse financing
• Medium to long-term export receivables
• Usually capital goods and project exports
• Involves negotiable instruments
• Secondary market for instruments exists
• Fixed rate financing available

**Parties Involved in Forfeiting**

**1. Exporter (Client)**
• Seller of capital goods/projects
• Faces long payment terms (1-10 years)
• Needs immediate liquidity
• Transfers credit and political risk
• Receives upfront payment minus discount

**2. Forfeiter**
• Financial institution or specialized company
• Purchases export receivables without recourse
• Assumes all risks associated with payment
• Provides fixed-rate financing
• May sell instruments in secondary market

**3. Importer (Obligor)**
• Buyer of capital goods/projects
• Provides payment undertaking
• Credit risk assessed by forfeiter
• Makes payments to forfeiter
• Benefits from extended credit terms

**4. Guarantor Bank**
• Provides guarantee for importer's obligations
• Usually bank in importer's country
• Aval or guarantee on instruments
• Enhances creditworthiness
• Facilitates forfeiting transaction

**Instruments Used in Forfeiting**

**1. Bills of Exchange**
• Drawn by exporter on importer
• Accepted by importer
• Guaranteed by bank (aval)
• Negotiable instruments
• Series of bills for installment payments

**2. Promissory Notes**
• Unconditional promise to pay
• Signed by importer
• Bank guaranteed
• Series for periodic payments
• Transferable by endorsement

**3. Letters of Credit**
• Deferred payment LC
• Bank's payment obligation
• Medium-term payment terms
• Can be sold to forfeiter
• Lower risk instrument

**Forfeiting Process**

**1. Export Contract Stage**
• Exporter negotiates credit terms with importer
• Payment schedule typically 6 months to 10 years
• Security arrangements (bank guarantee/aval)
• Forfeiting terms included in contract
• Currency and interest rate considerations

**2. Documentation Stage**
• Bills of exchange or promissory notes creation
• Bank aval or guarantee arrangement
• Insurance coverage (political risk)
• Legal documentation compliance
• Instrument negotiability ensured

**3. Forfeiting Transaction**
• Exporter approaches forfeiter for quote
• Credit assessment of obligor and guarantor
• Discount rate determination
• Purchase of instruments by forfeiter
• Payment to exporter minus discount

**4. Collection Stage**
• Forfeiter holds instruments to maturity
• Collection from obligor/guarantor bank
• May sell in secondary market
• Risk management and monitoring
• Recovery procedures if default

**Benefits of Forfeiting**

**Benefits to Exporter:**
• Immediate cash flow improvement
• 100% financing without recourse
• Fixed rate financing certainty
• Credit and political risk transfer
• Administrative burden reduction
• Competitive financing for buyers
• Balance sheet improvement

**Benefits to Importer:**
• Extended credit terms availability
• Attractive financing rates
• Simplified payment procedures
• Enhanced cash flow management
• Competitive capital goods pricing
• Relationship maintenance with suppliers

**Benefits to Banks:**
• Fee income without credit risk
• Short-term commitment
• No country risk exposure
• Portfolio diversification
• Client relationship enhancement
• Secondary market opportunities

**Costs and Pricing**

**Cost Components:**
• Commitment fee (0.125-0.5% per annum)
• Discount rate (LIBOR + spread)
• Documentation charges
• Insurance premiums (political risk)
• Legal and administrative costs

**Pricing Factors:**
• Credit quality of obligor/guarantor
• Country risk assessment
• Currency and tenor considerations
• Market liquidity and conditions
• Insurance costs and availability

**Limitations and Risks**

**Market Limitations:**
• Limited to medium/long-term transactions
• High minimum transaction size
• Complex documentation requirements
• Limited market makers
• Currency restrictions in some countries

**Risks for Forfeiter:**
• Credit risk of obligor/guarantor
• Political and transfer risks
• Interest rate and currency risks
• Legal and documentation risks
• Liquidity risk in secondary market

Forfeiting has become an important tool for financing capital goods exports, particularly benefiting developing country importers and exporters seeking competitive financing solutions.`
      }
    ]
  }
];