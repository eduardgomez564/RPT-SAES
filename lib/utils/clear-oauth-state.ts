export const clearOAuthState = () => {
  if (typeof window !== 'undefined') {
    const cookies = [
      'next-auth.session-token',
      'next-auth.callback-url',
      'next-auth.csrf-token', 
      'next-auth.pkce.code_verifier',
      'next-auth.state',
      'next-auth.nonce'
    ];
    
    cookies.forEach(cookie => {
      document.cookie = `${cookie}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/auth/login';
  }
};