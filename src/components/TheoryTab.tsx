import React from 'react';
import { Info, ArrowRight, CheckCircle } from 'lucide-react';
import { Module } from '../types/banking';

interface TheoryTabProps {
  module: Module;
}

const TheoryTab: React.FC<TheoryTabProps> = ({ module }) => {
  const sections = module.theory.split('\n\n').filter(section => section.trim());

  return (
    <div className="max-w-4xl">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-1">Learning Objective</h3>
            <p className="text-blue-700 text-sm">
              Understand the key concepts, principles, and practical applications of {module.title.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="prose prose-gray max-w-none">
              {section.split('\n').map((paragraph, pIndex) => {
                // Check if it's a heading (starts with ## or bold text)
                if (paragraph.includes('**') || paragraph.startsWith('#')) {
                  const cleanTitle = paragraph.replace(/[#*]/g, '').trim();
                  return (
                    <h3 key={pIndex} className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {cleanTitle}
                    </h3>
                  );
                }
                
                // Check if it's a list item
                if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('-')) {
                  return (
                    <div key={pIndex} className="flex items-start mb-2">
                      <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        {paragraph.replace(/^[•\-]\s*/, '')}
                      </p>
                    </div>
                  );
                }
                
                // Regular paragraph
                if (paragraph.trim()) {
                  return (
                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Elements Hint */}
      {module.simulator && (
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Ready to Practice?</h3>
              <p className="text-green-700 text-sm">
                Switch to the Interactive Simulator tab to apply these concepts with real calculations and examples.
              </p>
            </div>
            <div className="text-green-600">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheoryTab;