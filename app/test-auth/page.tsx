"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function TestAuth() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-8">
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
          Sign out
        </button>
      </div>
    );
  }
  
  return (
    <div className="p-8">
      <p>Not signed in</p>
      <button onClick={() => signIn("google", { callbackUrl: "/Proponent/dashboard" })} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
}

