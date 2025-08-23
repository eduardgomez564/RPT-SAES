"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import { useEffect, useState, useCallback, useMemo } from "react";
import RPTLogoTitle from "@/components/Common/RPTLogoTitle";
import { clearOAuthState } from "@/lib/utils/clear-oauth-state";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Memoize password strength calculation
  const passwordStrength = useMemo(() => {
    if (password.length < 6) return { strength: "Password is weak", color: "text-red-500 font-semibold" };
    if (password.length < 10) return { strength: "Password is medium", color: "text-yellow-500 font-semibold" };
    return { strength: "Password is strong", color: "text-green-700 font-semibold" };
  }, [password]);
  
  // Debounced password strength indicator (optional enhancement)
  const [debouncedPassword, setDebouncedPassword] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedPassword(password);
    }, 150); // Small delay to avoid calculation on every keystroke
    
    return () => clearTimeout(timer);
  }, [password]);
  
  useEffect(() => {
    // Session checking logic
    const checkSession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const isLoggedOut = urlParams.get('logout') === 'true';
      const hasError = urlParams.get('error');
      const wasLoggedOut = sessionStorage.getItem('wasLoggedOut') === 'true';
      
      // Handle OAuth callback errors
      if (hasError === 'OAuthCallback') {
        clearOAuthState();
        return;
      }
      
      if (isLoggedOut) {
        sessionStorage.setItem('wasLoggedOut', 'true');
      }
      
      if (!isLoggedOut && !wasLoggedOut) {
        const session = await getSession();
        if (session) {
          router.push("/Proponent/dashboard");
        }
      }
    };
    
    checkSession();
  }, [router]);
  
  // Optimized login handler
  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Use requestAnimationFrame to ensure smooth UI response
    requestAnimationFrame(() => {
      const formData = new FormData(e.target as HTMLFormElement);
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
      
      if (username === 'proponent' && password === 'proponent') {
        router.push('/Proponent/welcome');
      } else if (username === 'teacher' && password === 'teacher') {
        router.push('/Teacher/welcome');
      } else {
        alert('Invalid credentials. Use "proponent" or "teacher" for both username and password.');
      }
      
      setIsLoading(false);
    });
  }, [router]);

  const handleGoogleSignIn = useCallback(() => {
    sessionStorage.removeItem('wasLoggedOut');
    signIn('google', {
      callbackUrl: '/Proponent/welcome'
    });
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 relative overflow-hidden md:py-8">
      {/* Back Button */}
      <a
        href="/"
        className="absolute top-4 left-4 z-20 flex items-center text-green-900 hover:underline sm:top-6 sm:left-8 lg:top-8 lg:left-12"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M15.5 19L9 12L15.5 5" stroke="#013300" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="ml-1 text-base font-medium sm:text-lg">
          Back to Landing Page
        </span>
      </a>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-300 blur-xl sm:left-20 sm:w-40 sm:h-40 lg:left-32 lg:w-48 lg:h-48"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-green-200 blur-xl sm:right-20 sm:w-60 sm:h-60 lg:right-32 lg:w-72 lg:h-72"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col z-10 relative w-full max-w-md px-4 py-8 sm:max-w-2xl sm:px-6 md:flex-row md:max-w-6xl md:justify-between md:items-center md:px-8 lg:px-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full mb-8 text-center md:w-1/2 md:items-start md:text-left md:mb-0 md:mr-12">
          <RPTLogoTitle />
          <p className="text-[#133000] text-base leading-relaxed mb-6 max-w-xs sm:text-lg sm:max-w-md md:text-xl md:max-w-none">
            Log in to streamline student progress tracking. Our platform simplifies remedial learning, helping teachers manage literacy and
            numeracy programs with ease.
          </p>
        </div>

        {/* Login Card */}
        <div className="flex flex-col justify-center items-center bg-white rounded-3xl shadow-xl p-6 w-full sm:p-6 sm:max-w-md md:w-96">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-green-900 mb-6 text-center sm:text-3xl sm:mb-6">
              Login
            </h2>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-[#013300] mb-1 sm:text-base"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013300] focus:border-transparent transition placeholder-gray-400 text-[#013300] sm:py-2"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#013300] mb-1 sm:text-base"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 pr-12 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013300] focus:border-transparent transition placeholder-gray-400 text-[#013300] sm:py-2"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                        <path d="m2 2 20 20"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {password && (
                  <div className={`flex items-center gap-1 mt-1 text-xs ${passwordStrength.color}`}>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4M12 8h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{passwordStrength.strength}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between py-2 sm:py-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-[#013300] border-gray-400 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700 sm:text-base"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm sm:text-base">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-[#133000] text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition shadow-md disabled:opacity-70 sm:py-2"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-3 sm:my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm sm:text-base">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <button
              className="flex items-center border-2 justify-center w-full border-gray-400 rounded-lg py-2 hover:bg-gray-50 transition sm:py-2"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium text-gray-700">Sign in with Google</span>
            </button>

            {/* Sign up link */}
            <div className="mt-4 text-center text-sm sm:mt-6 sm:text-base">
              <span className="text-gray-600">Don't have an account? </span>
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}