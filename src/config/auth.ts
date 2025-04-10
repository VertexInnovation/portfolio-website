export const authConfig = {
  googleClientId: '727346499975-g4j5a4h9chc0o0f48ir1fbhd6b4thu75.apps.googleusercontent.com',
  tokenExpiryDays: 30,
  storageKey: 'vertex_auth'
};

// Helper to get the domain for OAuth configuration
export const getAppDomain = () => {
  // Use the current domain to help with debugging
  return window.location.origin;
};