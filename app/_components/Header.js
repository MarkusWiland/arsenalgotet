'use client'

import { Podcast } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
    const [active, setActive] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setActive(true);
          } else {
            setActive(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Rensa upp event listener vid unmount eller vid ändring i component.
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <header className={`fixed ${active ? "backdrop-blur-lg" : ""} top-0 h-[80px] z-50 w-full flex items-center text-white`}>
    <nav className=" w-[80vw] mx-auto flex justify-between items-center ">
      <span>Icon</span>
      <ul className="flex gap-4">
        <li className="text-[#f9fcff] underline uppercase py-4 px-6">Start</li>
        <li className="text-[#f9fcff] uppercase py-4 px-6">Om oss</li>
        <li className="text-[#f9fcff] uppercase py-4 px-6">Spelare</li>
        <li className="text-[#f9fcff] uppercase py-4 px-6">Kontakt</li>
      </ul>
      <button className="flex gap-2 text-yellow-300">
        <Podcast /> PODCAST
      </button>
    </nav>
  </header>
  )
}
