import Link from 'next/link'
import React from 'react'

export default function Player() {
  return (
<section className="breakout text-right relative ">
        <div className="w-[300px] absolute flex items-center justify-center -top-20 left-[10%] bg-white">
          <h1 className="uppercase font-bold text-2xl p-6">Truppen</h1>
        </div>
        <button className="">Se truppen</button>
        <div className="grid grid-cols-5 gap-2 pt-6">
        <Link href={`/spelare/${1}`}>
          <div className="p-2 opacity-30 relative hover:scale-105 hover:shadow-xl cursor-pointer">
            <h1 className="text-red-500 font-bold text-5xl absolute left-12 top-10">
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
            <h1 className="text-red-500  font-bold text-5xl absolute left-12 top-10">
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
            <h1 className="text-red-500  font-bold text-5xl absolute left-12 top-10">
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
            <h1 className="text-red-500 font-bold text-5xl absolute left-12 top-10">
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
            <h1 className="text-red-500 font-bold text-5xl absolute left-12 top-10">
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
  )
}
