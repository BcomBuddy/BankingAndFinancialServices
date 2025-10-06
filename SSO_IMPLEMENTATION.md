# JWT-Based Single Sign-On (SSO) Implementation

This document describes the JWT-based SSO implementation for the Banking & Financial Services micro-app.

## Overview

The SSO system allows users to authenticate through the main BcomBuddy platform and access this micro-app seamlessly without additional login steps.

## Architecture

### Components

1. **SSOAuthService** (`src/services/ssoAuthService.ts`)
   - Handles JWT token validation from URL parameters
   - Manages user data storage and retrieval
   - Provides logout functionality with redirect to shell app

2. **useAuth Hook** (`src/hooks/useAuth.ts`)
   - Manages authentication state
   - Handles automatic token validation on app load
   - Provides loading states and user data

3. **ProtectedRoute Component** (`src/components/ProtectedRoute.tsx`)
   - Protects routes requiring authentication
   - Shows appropriate loading and error states
   - Handles SSO vs regular authentication flows

4. **Updated App Component** (`src/App.tsx`)
   - Integrates SSO with existing Firebase authentication
   - Shows SSO indicator in the UI
   - Handles both authentication methods seamlessly

## URL Format

When users access the app from the shell, the URL will be:
```
https://my-app.netlify.app?token=ENCODED_JWT_TOKEN&sso=true&shell=https://bcombuddy.netlify.app
```

## JWT Token Structure

The token contains the following user data:

```json
{
  "uid": "user_id",
  "email": "user@example.com", 
  "name": "User Name",
  "yearOfStudy": "1st Year",
  "role": "student",
  "isAdmin": false,
  "shellDomain": "https://bcombuddy.netlify.app",
  "microAppDomain": "https://my-app.netlify.app",
  "iat": 1234567890,
  "exp": 1234654290,
  "firebaseToken": "firebase_jwt_token"
}
```

## Key Features

### Token Validation
- Parses JWT from URL parameters
- Validates token structure and expiration
- Checks domain matching for security
- Stores user data in localStorage

### Automatic Login
- Extracts user data from token
- Handles SSO mode detection
- Falls back to stored user data

### URL Cleaning
- Removes sensitive token parameters after validation
- Maintains clean URLs for user experience

### Logout Handling
- Clears stored user data
- Redirects to shell app using stored domain
- Supports both SSO and Firebase logout

### Error Handling
- Graceful handling of invalid/expired tokens
- Appropriate error messages for users
- Console logging for debugging

## Environment Variables

Create a `.env` file in the project root with:

```env
VITE_SHELL_DOMAIN=https://bcombuddy.netlify.app
VITE_APP_TYPE=simulator
```

## Usage Examples

### Testing SSO Login

You can test the SSO implementation by manually constructing a URL with a test token:

```javascript
// Example test token (for development only)
const testToken = encodeURIComponent(JSON.stringify({
  uid: "test_user_123",
  email: "test@example.com",
  name: "Test User",
  yearOfStudy: "2nd Year",
  role: "student",
  isAdmin: false,
  shellDomain: "https://bcombuddy.netlify.app",
  microAppDomain: "https://my-app.netlify.app",
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 3600 // 1 hour from now
}));

const testUrl = `http://localhost:5173?token=${testToken}&sso=true&shell=https://bcombuddy.netlify.app`;
```

### Programmatic Usage

```typescript
import { SSOAuthService } from './services/ssoAuthService';
import { useAuth } from './hooks/useAuth';

// Check if in SSO mode
const isSSO = SSOAuthService.isSSOMode();

// Get current user
const user = SSOAuthService.getUserData();

// Check authentication status
const isAuthenticated = SSOAuthService.isAuthenticated();

// Logout (redirects to shell)
SSOAuthService.logout();

// Using the hook
const { user, loading, isAuthenticated, logout } = useAuth();
```

## Security Considerations

1. **Token Validation**: Always validate token structure before parsing
2. **Expiration Checking**: Verify token expiration before use
3. **Domain Validation**: Check microAppDomain matches current domain
4. **URL Cleaning**: Remove sensitive data from URL after validation
5. **HTTPS**: Use HTTPS in production environments
6. **Local Storage**: User data is stored in localStorage (consider security implications)

## Integration with Existing Firebase Auth

The SSO system works alongside the existing Firebase authentication:

- **SSO Mode**: When `sso=true` parameter is present, SSO authentication takes precedence
- **Firebase Mode**: When no SSO parameters are present, Firebase authentication is used
- **Seamless Switching**: Users can switch between modes without conflicts
- **Unified UI**: Both authentication methods use the same UI components

## Troubleshooting

### Common Issues

1. **Token Validation Fails**
   - Check token structure matches expected format
   - Verify token expiration time
   - Ensure required fields (uid, email) are present

2. **Domain Mismatch**
   - Verify microAppDomain in token matches current domain
   - Check shellDomain is correct

3. **Logout Redirect Issues**
   - Ensure shellDomain is properly set in token or environment
   - Check for CORS issues with redirect

4. **URL Parameters Not Cleaned**
   - Verify cleanUrl() method is called after successful validation
   - Check browser history API support

### Debug Mode

Enable debug logging by checking browser console for:
- `✅ SSO Login successful:` - Successful authentication
- `❌ SSO Token validation failed` - Authentication failure
- `🔄 Redirecting to shell app:` - Logout redirect

## Future Enhancements

1. **Token Refresh**: Implement automatic token refresh before expiration
2. **Multiple Domains**: Support for multiple micro-app domains
3. **Role-Based Access**: Enhanced role-based access control
4. **Session Management**: Advanced session management features
5. **Analytics**: User authentication analytics and monitoring
