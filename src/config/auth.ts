export const authConfig = {
  googleClientId: '1036672174881-gec3tlurniudbje9mc7s1jftr7jsvp4t.apps.googleusercontent.com',
  tokenExpiryDays: 30,
  storageKey: 'vertex_auth'
};

// Helper to get the domain for OAuth configuration
export const getAppDomain = () => {
  // Use the current domain to help with debugging
  return window.location.origin;
};
