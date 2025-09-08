import React, { useState } from 'react';
import { Calculator, Play, RefreshCw, TrendingUp, Info } from 'lucide-react';
import { Module, SimulatorConfig, SimulatorResult } from '../types/banking';
import { calculateResult } from '../utils/calculations';

interface SimulatorTabProps {
  module: Module;
  simulator: SimulatorConfig;
}

const SimulatorTab: React.FC<SimulatorTabProps> = ({ module, simulator }) => {
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [result, setResult] = useState<SimulatorResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name: string, value: any) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = async () => {
    setLoading(true);
    try {
      // Simulate calculation delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const calculationResult = calculateResult(module.id, inputs);
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
    }
    setLoading(false);
  };

  const handleReset = () => {
    setInputs({});
    setResult(null);
  };

  const isFormValid = () => {
    return simulator.inputs
      .filter(input => input.required)
      .every(input => inputs[input.name] && inputs[input.name].toString().trim() !== '');
  };

  return (
    <div className="max-w-4xl">
      {/* Simulator Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 mb-6">
        <div className="flex items-center mb-2">
          <Calculator className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold">{simulator.title}</h3>
        </div>
        <p className="text-blue-100">{simulator.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-600" />
            Input Parameters
          </h4>
          
          <div className="space-y-4">
            {simulator.inputs.map((input) => (
              <div key={input.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {input.label}
                  {input.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {input.type === 'select' ? (
                  <select
                    value={inputs[input.name] || ''}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select {input.label}</option>
                    {input.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    value={inputs[input.name] || ''}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    placeholder={input.placeholder}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCalculate}
              disabled={!isFormValid() || loading}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {loading ? 'Calculating...' : 'Calculate'}
            </button>
            
            <button
              onClick={handleReset}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
            Results & Analysis
          </h4>
          
          {result ? (
            <div className="space-y-4">
              {/* Final Result */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">Final Result</h5>
                <p className="text-2xl font-bold text-green-700">
                  {typeof result.result === 'number' 
                    ? `₹${result.result.toLocaleString()}`
                    : result.result
                  }
                </p>
              </div>

              {/* Formula */}
              {result.formula && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Formula Used</h5>
                  <div className="bg-white p-3 rounded border font-mono text-sm text-blue-700">
                    {result.formula}
                  </div>
                </div>
              )}

              {/* Step-by-step calculation */}
              {result.steps && result.steps.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Step-by-step Calculation</h5>
                  <div className="space-y-2">
                    {result.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <span className="bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Enter the required parameters and click "Calculate" to see results</p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h5 className="font-semibold text-yellow-800 mb-1">Learning Tip</h5>
            <p className="text-yellow-700 text-sm">
              Try different input values to understand how changes affect the results. This will help you grasp the practical implications of the concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorTab;