import React, { useState } from 'react';
import { Menu, X, Calculator, BookOpen, TrendingUp, Users, FileText, CreditCard, Building2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { Module } from './types/banking';
import { bankingModules } from './data/bankingModules';

function App() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Banking & Financial Services</h1>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedModule={selectedModule}
          onSelectModule={(module) => {
            setSelectedModule(module);
            setSidebarOpen(false);
          }}
          onSelectHome={() => {
            setSelectedModule(null);
            setSidebarOpen(false);
          }}
          isHomeSelected={selectedModule === null}
          modules={bankingModules}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden lg:block bg-white shadow-sm px-6 py-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Building2 className="w-8 h-8 mr-3 text-blue-600" />
              Banking & Financial Services Simulator
            </h1>
            <p className="text-gray-600 mt-1">Interactive learning platform for B.Com students</p>
          </div>

          {/* Content Area */}
          <ContentArea 
            module={selectedModule} 
            units={bankingModules}
            onSelectModule={(module) => {
              setSelectedModule(module);
              setSidebarOpen(false);
            }}
          />
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;