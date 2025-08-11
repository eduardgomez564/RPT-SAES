"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RPTLogoTitle from "@/components/RPTLogoTitle";

export default function Login() {
  const router = useRouter();

  return (
    <div
      className="
      /* Mobile */
      min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 relative overflow-hidden
      
      /* Tablet */
      md:py-8
    "
    >
      {/* Back Button */}
      <a
        href="/"
        className="
        /* Mobile */
        absolute top-4 left-4 z-20 flex items-center text-green-900 hover:underline
        
        /* Tablet */
        sm:top-6 sm:left-8
        
        /* Desktop */
        lg:top-8 lg:left-12
      "
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M15.5 19L9 12L15.5 5" stroke="#013300" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="
          /* Mobile */
          ml-1 text-base font-medium
          
          /* Tablet */
          sm:text-lg
        "
        >
          Back to Landing Page
        </span>
      </a>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
        {/* Responsive Decorative Circles */}
        <div
          className="
          /* Mobile */
          absolute top-20 left-10 w-32 h-32 rounded-full bg-green-300 blur-xl
          
          /* Tablet */
          sm:left-20 sm:w-40 sm:h-40
          
          /* Desktop */
          lg:left-32 lg:w-48 lg:h-48
        "
        ></div>
        <div
          className="
          /* Mobile */
          absolute bottom-20 right-10 w-48 h-48 rounded-full bg-green-200 blur-xl
          
          /* Tablet */
          sm:right-20 sm:w-60 sm:h-60
          
          /* Desktop */
          lg:right-32 lg:w-72 lg:h-72
        "
        ></div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
        /* Mobile */
        flex flex-col z-10 relative w-full max-w-md px-4 py-8
        
        /* Tablet */
        sm:max-w-2xl sm:px-6
        
        /* Desktop */
        md:flex-row md:max-w-6xl md:justify-between md:items-center md:px-8
        
        /* Large Desktop */
        lg:px-12
      "
      >
        {/* Left Section */}
        <div
          className="
          /* Mobile */
          flex flex-col justify-center items-center w-full mb-8 text-center
          
          /* Desktop */
          md:w-1/2 md:items-start md:text-left md:mb-0 md:mr-12
        "
        >
          <RPTLogoTitle />
          <p
            className="
            /* Mobile */
            text-[#133000] text-base leading-relaxed mb-6 max-w-xs
            
            /* Tablet */
            sm:text-lg sm:max-w-md
            
            /* Desktop */
            md:text-xl md:max-w-none
          "
          >
            Log in to streamline student progress tracking. Our platform simplifies remedial learning, helping teachers manage literacy and
            numeracy programs with ease.
          </p>
        </div>

        {/* Login Card */}
        <div
          className="
          /* Mobile */
          flex flex-col justify-center items-center bg-white rounded-3xl shadow-xl p-6 w-full
          
          /* Tablet */
          sm:p-6 sm:max-w-md
          
          /* Desktop */
          md:w-96
        "
        >
          <div className="w-full">
            <h2
              className="
              /* Mobile */
              text-2xl font-bold text-green-900 mb-6 text-center
              
              /* Tablet */
              sm:text-3xl sm:mb-6
            "
            >
              Login
            </h2>

            {/* Login Form */}
            <div className="mb-3">
              <label
                htmlFor="username"
                className="
                /* Mobile */
                block text-sm font-medium text-[#013300] mb-1
                
                /* Tablet */
                sm:text-base
              "
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="
                  /* Mobile */
                  w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013300] focus:border-transparent transition placeholder-gray-400 text-[#013300]
                  
                  /* Tablet */
                  sm:py-2
                "
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="
                /* Mobile */
                block text-sm font-medium text-[#013300] mb-1
                
                /* Tablet */
                sm:text-base
              "
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="
                  /* Mobile */
                  w-full px-4 py-2.5 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013300] focus:border-transparent transition placeholder-gray-400 text-[#013300]
                  
                  /* Tablet */
                  sm:py-2
                "
              />
            </div>

            <div className="flex items-center justify-between py-2 sm:py-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="
                    /* Mobile */
                    h-4 w-4 text-green-600 focus:ring-[#013300] border-gray-400 rounded
                  "
                />
                <label
                  htmlFor="remember-me"
                  className="
                  /* Mobile */
                  ml-2 block text-sm text-gray-700
                  
                  /* Tablet */
                  sm:text-base
                "
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
              type="button"
              className="
                /* Mobile */
                w-full bg-gradient-to-r from-green-600 to-[#133000] text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition shadow-md
                
                /* Tablet */
                sm:py-2
              "
              onClick={() => router.push("/Proponent/welcome")}
            >
              Login
            </button>

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
                className="
                /* Mobile */
                flex items-center border-2 justify-center w-full border-gray-400 rounded-lg py-2 hover:bg-gray-50 transition
              
                /* Tablet */
                sm:py-2
              "
                onClick={async () => {
                  const { signIn } = await import("next-auth/react");
                  signIn("google", { callbackUrl: "/Proponent/dashboard" });
                }}
              >
                <img src="/GoogleLogo.png" alt="Google" className="w-5 h-5 mr-3 bold" />
                <span className="font-medium text-gray-700">Google</span>
              </button>

            {/* Sign up link */}
            <div
              className="
              /* Mobile */
              mt-4 text-center text-sm
              
              /* Tablet */
              sm:mt-6 sm:text-base
            "
            >
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