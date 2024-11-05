"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-content-between p-24">
        <button
          className="bg-blue-500 rounded text-white font-bold py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <h1>Dashboard page</h1>
      </main>
    </>
  );
}
