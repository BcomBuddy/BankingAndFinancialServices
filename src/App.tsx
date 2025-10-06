import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, BookOpen, TrendingUp, Users, FileText, CreditCard, Building2, LogOut } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import LoginPage from './components/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Module } from './types/banking';
import { bankingModules } from './data/bankingModules';
import { onAuthStateChange, signOutUser } from './services/authService';
import { useAuth } from './hooks/useAuth';
import { SSOAuthService } from './services/ssoAuthService';
import { User } from 'firebase/auth';

// Import test utilities in development
if (import.meta.env.DEV) {
  import('./utils/ssoTestUtils');
}

function App() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [isFirebaseLoading, setIsFirebaseLoading] = useState(true);
  
  // SSO Authentication hook
  const { user: ssoUser, loading: ssoLoading, isAuthenticated: isSSOAuthenticated, isSSOMode, logout: ssoLogout } = useAuth();

  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setFirebaseUser(user);
      setIsFirebaseLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Determine authentication state
  const isAuthenticated = isSSOAuthenticated || !!firebaseUser;
  const isLoading = ssoLoading || isFirebaseLoading;
  const currentUser = ssoUser || firebaseUser;

  const handleLogin = () => {
    // This will be handled by the auth state listener
  };

  const handleLogout = async () => {
    try {
      if (isSSOAuthenticated) {
        // SSO logout - redirects to shell
        ssoLogout();
      } else if (firebaseUser) {
        // Firebase logout
        await signOutUser();
        setSelectedModule(null);
      }
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

  // Show login page if not authenticated (only for Firebase auth, not SSO)
  if (!isAuthenticated && !isSSOMode) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // For SSO mode, use ProtectedRoute to handle authentication
  if (isSSOMode) {
    return (
      <ProtectedRoute>
        <MainAppContent 
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentUser={currentUser}
          handleLogout={handleLogout}
          isSSOMode={isSSOMode}
        />
      </ProtectedRoute>
    );
  }

  // Regular Firebase authenticated content
  return (
    <MainAppContent 
      selectedModule={selectedModule}
      setSelectedModule={setSelectedModule}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      currentUser={currentUser}
      handleLogout={handleLogout}
      isSSOMode={isSSOMode}
    />
  );
}

// Main app content component
interface MainAppContentProps {
  selectedModule: Module | null;
  setSelectedModule: (module: Module | null) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentUser: User | any;
  handleLogout: () => void;
  isSSOMode: boolean;
}

const MainAppContent: React.FC<MainAppContentProps> = ({
  selectedModule,
  setSelectedModule,
  sidebarOpen,
  setSidebarOpen,
  currentUser,
  handleLogout,
  isSSOMode
}) => {
  const getUserDisplayName = () => {
    if (currentUser?.name) {
      return currentUser.name;
    }
    if (currentUser?.email) {
      return currentUser.email;
    }
    return 'User';
  };

  const getUserEmail = () => {
    if (currentUser?.email) {
      return currentUser.email;
    }
    return '';
  };

  const getUserRole = () => {
    if (currentUser?.role) {
      return currentUser.role;
    }
    if (currentUser?.yearOfStudy) {
      return currentUser.yearOfStudy;
    }
    return '';
  };

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
                  {isSSOMode && (
                    <span className="ml-3 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      SSO
                    </span>
                  )}
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome, {getUserDisplayName()} • {getUserRole() && `${getUserRole()} • `}Interactive learning platform for B.Com students
                </p>
                {getUserEmail() && (
                  <p className="text-sm text-gray-500">{getUserEmail()}</p>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5 mr-2" />
                {isSSOMode ? 'Return to BcomBuddy' : 'Logout'}
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