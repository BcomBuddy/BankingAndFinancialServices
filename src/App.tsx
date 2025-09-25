import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, BookOpen, TrendingUp, Users, FileText, CreditCard, Building2, LogOut } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import LoginPage from './components/LoginPage';
import { Module } from './types/banking';
import { bankingModules } from './data/bankingModules';
import { onAuthStateChange, signOutUser } from './services/authService';
import { User } from 'firebase/auth';

function App() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    // This will be handled by the auth state listener
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      setSelectedModule(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Banking & Financial Services</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleLogout}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Building2 className="w-8 h-8 mr-3 text-blue-600" />
                  Banking & Financial Services Simulator
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome, {user?.email} • Interactive learning platform for B.Com students
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
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