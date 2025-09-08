import React from 'react';
import { X, ChevronRight, Calculator, BookOpen, TrendingUp, Users, FileText, CreditCard } from 'lucide-react';
import { Module, Unit } from '../types/banking';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModule: Module | null;
  onSelectModule: (module: Module) => void;
  onSelectHome: () => void;
  isHomeSelected: boolean;
  modules: Unit[];
}

const getUnitIcon = (unitId: string) => {
  const icons: Record<string, React.ReactNode> = {
    'unit1': <BookOpen className="w-5 h-5" />,
    'unit2': <Users className="w-5 h-5" />,
    'unit3': <FileText className="w-5 h-5" />,
    'unit4': <CreditCard className="w-5 h-5" />,
    'unit5': <TrendingUp className="w-5 h-5" />,
  };
  return icons[unitId] || <BookOpen className="w-5 h-5" />;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  selectedModule,
  onSelectModule,
  onSelectHome,
  isHomeSelected,
  modules,
}) => {
  const [expandedUnits, setExpandedUnits] = React.useState<Set<string>>(new Set(['unit1']));

  const toggleUnit = (unitId: string) => {
    const newExpanded = new Set(expandedUnits);
    if (newExpanded.has(unitId)) {
      newExpanded.delete(unitId);
    } else {
      newExpanded.add(unitId);
    }
    setExpandedUnits(newExpanded);
  };

  return (
    <>
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out flex flex-col
      `}>
        {/* Header */}
        <div className="p-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Course Modules</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-1">1st Year - 2nd Semester</p>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Home Button */}
          <button
            onClick={onSelectHome}
            className={`
              w-full flex items-center p-3 text-left rounded-lg transition-colors border-l-2 mb-4
              ${isHomeSelected
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'hover:bg-gray-50 border-transparent text-gray-600'
              }
            `}
          >
            <div className="flex items-center">
              <div className="text-blue-600 mr-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Home</h4>
                <p className="text-xs opacity-75 mt-1">Course overview and introduction</p>
              </div>
            </div>
          </button>

          {modules.map((unit) => (
            <div key={unit.id} className="mb-4">
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-center justify-between p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
              >
                <div className="flex items-center">
                  <div className="text-blue-600 mr-3">
                    {getUnitIcon(unit.id)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{unit.title}</h3>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${
                  expandedUnits.has(unit.id) ? 'rotate-90' : ''
                }`} />
              </button>
              
              {expandedUnits.has(unit.id) && (
                <div className="mt-2 space-y-1 ml-4">
                  {unit.modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => onSelectModule(module)}
                      className={`
                        w-full text-left p-3 rounded-lg transition-colors border-l-2
                        ${selectedModule?.id === module.id
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'hover:bg-gray-50 border-transparent text-gray-600'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        {module.simulator && (
                          <Calculator className="w-4 h-4 mr-2 text-green-500" />
                        )}
                        <div>
                          <h4 className="font-medium text-sm">{module.title}</h4>
                          <p className="text-xs opacity-75 mt-1">{module.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Interactive Banking Simulator v1.0
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;