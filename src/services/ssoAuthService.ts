export interface UserData {
  uid: string;
  email: string;
  name: string;
  yearOfStudy: string;
  role: string;
  isAdmin: boolean;
  shellDomain?: string;
  microAppDomain?: string;
}

export class SSOAuthService {
  private static readonly USER_KEY = 'sso_user_data';

  static validateTokenFromShell(): UserData | null {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const isSSO = urlParams.get('sso') === 'true';

    if (!token || !isSSO) {
      return null;
    }

    try {
      const tokenData = JSON.parse(decodeURIComponent(token));
      
      // Validate required fields
      if (!tokenData.uid || !tokenData.email) {
        console.error('SSO Token validation failed: Missing required fields');
        return null;
      }

      // Check token expiration
      if (tokenData.exp && tokenData.exp < Math.floor(Date.now() / 1000)) {
        console.error('SSO Token validation failed: Token expired');
        return null;
      }

      // Validate micro app domain matches current domain
      const currentDomain = window.location.origin;
      if (tokenData.microAppDomain && tokenData.microAppDomain !== currentDomain) {
        console.warn('SSO Token validation warning: Domain mismatch', {
          expected: tokenData.microAppDomain,
          current: currentDomain
        });
      }

      const userData: UserData = {
        uid: tokenData.uid,
        email: tokenData.email,
        name: tokenData.name || 'User',
        yearOfStudy: tokenData.yearOfStudy || 'Unknown',
        role: tokenData.role || 'student',
        isAdmin: tokenData.isAdmin || false,
        shellDomain: tokenData.shellDomain,
        microAppDomain: tokenData.microAppDomain
      };

      // Store user data in localStorage
      localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
      
      // Clean URL parameters
      this.cleanUrl();
      
      console.log('✅ SSO Login successful:', userData);
      return userData;
    } catch (error) {
      console.error('Error validating SSO token:', error);
      return null;
    }
  }

  static getUserData(): UserData | null {
    const userData = localStorage.getItem(this.USER_KEY);
    if (!userData) return null;

    try {
      return JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      localStorage.removeItem(this.USER_KEY);
      return null;
    }
  }

  static isAuthenticated(): boolean {
    return this.getUserData() !== null;
  }

  static logout(): void {
    const userData = this.getUserData();
    localStorage.removeItem(this.USER_KEY);
    
    // Get shell domain from stored user data or URL parameters
    const shellDomain = userData?.shellDomain || 
                       new URLSearchParams(window.location.search).get('shell') || 
                       import.meta.env.VITE_SHELL_DOMAIN ||
                       'https://bcombuddy.netlify.app';
    
    console.log('🔄 Redirecting to shell app:', shellDomain);
    window.location.href = shellDomain;
  }

  private static cleanUrl(): void {
    const url = new URL(window.location.href);
    url.searchParams.delete('token');
    url.searchParams.delete('sso');
    url.searchParams.delete('shell');
    window.history.replaceState({}, document.title, url.toString());
  }

  // Method to check if we're in SSO mode
  static isSSOMode(): boolean {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sso') === 'true';
  }

  // Method to get shell domain from URL or stored data
  static getShellDomain(): string {
    const userData = this.getUserData();
    return userData?.shellDomain || 
           new URLSearchParams(window.location.search).get('shell') || 
           import.meta.env.VITE_SHELL_DOMAIN ||
           'https://bcombuddy.netlify.app';
  }
}
