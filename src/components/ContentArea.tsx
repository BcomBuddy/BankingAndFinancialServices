import React, { useState } from 'react';
import { BookOpen, Calculator, Info } from 'lucide-react';
import { Module, Unit } from '../types/banking';
import TheoryTab from './TheoryTab';
import SimulatorTab from './SimulatorTab';
import HomePage from './HomePage';

interface ContentAreaProps {
  module: Module | null;
  units: Unit[];
  onSelectModule: (module: Module) => void;
}

const ContentArea: React.FC<ContentAreaProps> = ({ module, units, onSelectModule }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'simulator'>('theory');

  // Show home page if no module is selected
  if (!module) {
    return (
      <div className="flex-1 overflow-auto p-6">
        <HomePage units={units} onSelectModule={onSelectModule} />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto">
      {/* Module Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-sm text-blue-600 mb-1">
              <span className="bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">
                {module.unit}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">{module.title}</h2>
            <p className="text-gray-600 mt-1">{module.description}</p>
          </div>
          {module.simulator && (
            <div className="hidden sm:flex items-center text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
              <Calculator className="w-4 h-4 mr-2" />
              Interactive Simulator Available
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex mt-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'theory'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Theory & Concepts
          </button>
          {module.simulator && (
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'simulator'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calculator className="w-4 h-4 inline mr-2" />
              Interactive Simulator
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'theory' ? (
          <TheoryTab module={module} />
        ) : (
          module.simulator && <SimulatorTab module={module} simulator={module.simulator} />
        )}
      </div>
    </div>
  );
};

export default ContentArea;