import React from 'react';
import { BookOpen, Users, FileText, CreditCard, TrendingUp, ArrowRight, Calculator, GraduationCap, Target } from 'lucide-react';
import { Unit, Module } from '../types/banking';

interface HomePageProps {
  units: Unit[];
  onSelectModule: (module: Module) => void;
}

const getUnitIcon = (unitId: string) => {
  const icons: Record<string, React.ReactNode> = {
    'unit1': <BookOpen className="w-8 h-8" />,
    'unit2': <Users className="w-8 h-8" />,
    'unit3': <FileText className="w-8 h-8" />,
    'unit4': <CreditCard className="w-8 h-8" />,
    'unit5': <TrendingUp className="w-8 h-8" />,
  };
  return icons[unitId] || <BookOpen className="w-8 h-8" />;
};

const HomePage: React.FC<HomePageProps> = ({ units, onSelectModule }) => {
  const handleStartLearning = () => {
    // Navigate to the first module of Unit I
    if (units.length > 0 && units[0].modules.length > 0) {
      onSelectModule(units[0].modules[0]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Banking & Financial Services Simulator
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-100 mb-4">
              B.Com Curriculum
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-3xl">
              Master banking and financial services concepts through interactive learning. 
              This comprehensive simulator combines theoretical knowledge with practical 
              calculators, helping you understand complex financial concepts through 
              step-by-step calculations and real-world applications.
            </p>
            <button
              onClick={handleStartLearning}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center shadow-md"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="hidden lg:block ml-8">
            <div className="bg-white bg-opacity-10 rounded-full p-6">
              <GraduationCap className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Comprehensive Theory</h3>
          <p className="text-gray-600 text-sm">
            Detailed explanations of banking concepts, financial services, and regulatory frameworks.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Interactive Calculators</h3>
          <p className="text-gray-600 text-sm">
            Practice with real-world scenarios using EMI calculators, KYC validators, and more.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Step-by-Step Learning</h3>
          <p className="text-gray-600 text-sm">
            Follow detailed calculation steps with formulas and explanations for better understanding.
          </p>
        </div>
      </div>

      {/* Units Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
          Course Units
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <div
              key={unit.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => unit.modules.length > 0 && onSelectModule(unit.modules[0])}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 rounded-lg p-3 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  {getUnitIcon(unit.id)}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  Unit {index + 1}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {unit.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {unit.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {unit.modules.length} modules
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Units</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              {units.reduce((total, unit) => total + unit.modules.length, 0)}
            </div>
            <div className="text-sm text-gray-600">Modules</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {units.reduce((total, unit) => 
                total + unit.modules.filter(module => module.simulator).length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Simulators</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Interactive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;