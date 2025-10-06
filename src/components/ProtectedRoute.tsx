import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { SSOAuthService } from '../services/ssoAuthService';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback 
}) => {
  const { isAuthenticated, loading, isSSOMode } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Authenticating...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Authentication Required</h1>
            <p className="text-gray-600 mb-6">
              {isSSOMode 
                ? 'This app requires authentication through the main BcomBuddy platform.'
                : 'Please log in to access this application.'
              }
            </p>
            {isSSOMode ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Please access this app through the BcomBuddy dashboard.
                </p>
                <button
                  onClick={() => SSOAuthService.logout()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Return to BcomBuddy
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Use the login form to authenticate with your credentials.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
