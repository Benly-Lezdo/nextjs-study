"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <button
        className="bg-blue-500 rounded text-white font-bold py-2 px-4"
        onClick={handleBack}
      >
        Back
      </button>
      <div>Settings page</div>
    </>
  );
}
