import { useState, useEffect } from 'react';
import { SSOAuthService, UserData } from '../services/ssoAuthService';

export const useAuth = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSSOMode, setIsSSOMode] = useState(false);

  useEffect(() => {
    const initializeAuth = () => {
      // Check if we're in SSO mode
      const ssoMode = SSOAuthService.isSSOMode();
      setIsSSOMode(ssoMode);

      if (ssoMode) {
        // Try to validate token from shell
        const userData = SSOAuthService.validateTokenFromShell();
        
        if (userData) {
          setUser(userData);
          console.log('✅ SSO Login successful:', userData);
        } else {
          console.log('❌ SSO Token validation failed');
        }
      } else {
        // Check for existing user data in localStorage
        const storedUser = SSOAuthService.getUserData();
        if (storedUser) {
          setUser(storedUser);
          console.log('📱 Using stored user data:', storedUser);
        }
      }
      
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const logout = () => {
    SSOAuthService.logout();
    setUser(null);
  };

  const refreshUser = () => {
    const userData = SSOAuthService.getUserData();
    setUser(userData);
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    isSSOMode,
    logout,
    refreshUser
  };
};
