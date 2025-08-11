"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button className="px-4 py-2 bg-gray-300 rounded">Loading...</button>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-green-700 font-semibold">{session.user?.name}</span>
        <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return null;
}
