// SSO Test Utility
// This file provides utilities for testing the SSO implementation during development

export interface TestTokenData {
  uid: string;
  email: string;
  name: string;
  yearOfStudy: string;
  role: string;
  isAdmin: boolean;
  shellDomain: string;
  microAppDomain: string;
  iat: number;
  exp: number;
}

export class SSOTestUtils {
  /**
   * Generate a test token for development purposes
   */
  static generateTestToken(overrides: Partial<TestTokenData> = {}): string {
    const now = Math.floor(Date.now() / 1000);
    const defaultToken: TestTokenData = {
      uid: "test_user_123",
      email: "test@example.com",
      name: "Test User",
      yearOfStudy: "2nd Year",
      role: "student",
      isAdmin: false,
      shellDomain: "https://bcombuddy.netlify.app",
      microAppDomain: window.location.origin,
      iat: now,
      exp: now + 3600, // 1 hour from now
      ...overrides
    };

    return encodeURIComponent(JSON.stringify(defaultToken));
  }

  /**
   * Generate a test URL for SSO testing
   */
  static generateTestURL(overrides: Partial<TestTokenData> = {}): string {
    const token = this.generateTestToken(overrides);
    const params = new URLSearchParams({
      token,
      sso: 'true',
      shell: 'https://bcombuddy.netlify.app'
    });
    
    return `${window.location.origin}?${params.toString()}`;
  }

  /**
   * Test different user roles
   */
  static getTestUsers() {
    return {
      student: {
        uid: "student_123",
        email: "student@example.com",
        name: "John Student",
        yearOfStudy: "2nd Year",
        role: "student",
        isAdmin: false
      },
      admin: {
        uid: "admin_456",
        email: "admin@example.com",
        name: "Jane Admin",
        yearOfStudy: "3rd Year",
        role: "admin",
        isAdmin: true
      },
      teacher: {
        uid: "teacher_789",
        email: "teacher@example.com",
        name: "Dr. Smith",
        yearOfStudy: "Faculty",
        role: "teacher",
        isAdmin: false
      }
    };
  }

  /**
   * Simulate SSO login programmatically
   */
  static simulateSSOLogin(userType: 'student' | 'admin' | 'teacher' = 'student'): void {
    const users = this.getTestUsers();
    const user = users[userType];
    const testUrl = this.generateTestURL(user);
    
    // Navigate to the test URL
    window.location.href = testUrl;
  }

  /**
   * Clear SSO data for testing
   */
  static clearSSOData(): void {
    localStorage.removeItem('sso_user_data');
    console.log('🧹 SSO data cleared');
  }

  /**
   * Log current SSO state for debugging
   */
  static logSSOState(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const ssoData = localStorage.getItem('sso_user_data');
    
    console.group('🔍 SSO Debug Info');
    console.log('URL Parameters:', {
      token: urlParams.get('token') ? 'Present' : 'Not present',
      sso: urlParams.get('sso'),
      shell: urlParams.get('shell')
    });
    console.log('Stored User Data:', ssoData ? JSON.parse(ssoData) : 'None');
    console.log('Current URL:', window.location.href);
    console.groupEnd();
  }

  /**
   * Test token validation with various scenarios
   */
  static testTokenValidation(): void {
    console.group('🧪 Testing Token Validation');
    
    // Test 1: Valid token
    const validToken = this.generateTestToken();
    console.log('✅ Valid token test:', validToken);
    
    // Test 2: Expired token
    const expiredToken = this.generateTestToken({
      exp: Math.floor(Date.now() / 1000) - 3600 // 1 hour ago
    });
    console.log('❌ Expired token test:', expiredToken);
    
    // Test 3: Missing required fields
    const invalidToken = encodeURIComponent(JSON.stringify({
      email: "test@example.com"
      // Missing uid
    }));
    console.log('❌ Invalid token test:', invalidToken);
    
    console.groupEnd();
  }
}

// Make test utilities available globally in development
if (import.meta.env.DEV) {
  (window as any).SSOTestUtils = SSOTestUtils;
  console.log('🧪 SSO Test Utils loaded. Use window.SSOTestUtils for testing.');
}
