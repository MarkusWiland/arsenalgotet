import Link from "next/link";
import React from "react";

export default function Player() {
  return (
    <section className="breakout text-right relative ">
      <div className="w-[300px] absolute flex items-center justify-center -top-20 left-[10%] bg-white">
        <h1 className="uppercase font-bold text-2xl p-6">Truppen</h1>
      </div>
      <div className="flex justify-end items-center my-4">

      <button className="py-2 px-4 flex rounded-sm bg-red-500 hover:bg-red-700 transition-colors  items-center text-white">
    
        Se truppen
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
      </div>
      <div className="grid grid-cols-5 gap-2 pt-6">
        <Link href={`/arsenal/truppen/${1}`}>
          <div className="p-2 opacity-30 relative hover:scale-105 hover:shadow-xl cursor-pointer">
            <h1 className="text-red-500 font-bold text-5xl absolute left-2 top-10">
              03
            </h1>
            <img src="/martin.png" height="100%" width="100%" />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-thin">Martin</h2>
              <h2 className="text-2xl font-bold">Ödegaard</h2>
              <h3 className="text-1xl text-gray-400">Mittfältare</h3>
            </div>
          </div>
        </Link>
        <div className="p-2  relative hover:scale-105 hover:shadow-xl cursor-pointer">
          <h1 className="text-red-500  font-bold text-5xl absolute left-2 top-10">
            03
          </h1>
          <img src="/martin.png" height="100%" width="100%" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-thin">Martin</h2>
            <h2 className="text-2xl font-bold">Ödegaard</h2>
            <h3 className="text-1xl text-gray-400">Mittfältare</h3>
          </div>
        </div>
        <div className="p-2  relative hover:scale-105 hover:shadow-xl cursor-pointer">
          <h1 className="text-red-500  font-bold text-5xl absolute left-2 top-10">
            03
          </h1>
          <img src="/martin.png" height="100%" width="100%" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-thin">Martin</h2>
            <h2 className="text-2xl font-bold">Ödegaard</h2>
            <h3 className="text-1xl text-gray-400">Mittfältare</h3>
          </div>
        </div>
        <div className="p-2  relative hover:scale-105 hover:shadow-xl cursor-pointer">
          <h1 className="text-red-500 font-bold text-5xl absolute left-2 top-10">
            03
          </h1>
          <img src="/martin.png" height="100%" width="100%" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-thin">Martin</h2>
            <h2 className="text-2xl font-bold">Ödegaard</h2>
            <h3 className="text-1xl text-gray-400">Mittfältare</h3>
          </div>
        </div>
        <div className="p-2  opacity-30 relative hover:scale-105 hover:shadow-xl cursor-pointer">
          <h1 className="text-red-500 font-bold text-5xl absolute left-2 top-10">
            03
          </h1>
          <img src="/martin.png" height="100%" width="100%" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-thin">Martin</h2>
            <h2 className="text-2xl font-bold">Ödegaard</h2>
            <h3 className="text-1xl text-gray-400">Mittfältare</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
