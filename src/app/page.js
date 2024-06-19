"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigation() {
    router.push("/dishes");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
        <p className="text-3xl text-center font-bold">
          {" "}
          This is a Recipe Application for different Dishes.{" "}
        </p>
        <button
          onClick={handleNavigation}
          className="cursor-pointer bg-blue-800 text-white border-2 shadow-lg p-2 rounded-md w-56"
        >
          Show Dishes
        </button>
      </div>
    </>
  );
}
