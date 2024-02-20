"use client";

import { Podcast } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];
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
    <div className={`fixed ${active ? "bg-white drop-shadow-lg" : ""} top-0 h-[80px] w-full z-40 flex items-center`}>
        <div className="w-[80vw] mx-auto flex justify-between items-center ">
<Link href="/">
        <Image src="/arsenallogo.png" width={150} height={150} alt="Arsenal Goteborg" />
</Link>

      <NavigationMenu className="  ">
        
        <NavigationMenuList>
    
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Om oss
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 text-black md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <ListItem href="/match" title="Matchträffar">
                 Här visas alla matchträffar
                </ListItem>
              <ListItem href="/docs" title="Facebook Forum">
             Välkommen till vårt Facebook Forum
                </ListItem>
                <ListItem href="/docs" title="Barncancerfonden">
                 Vi samlar pengar till barncancerfonden, hjälp till!
                </ListItem>
                <ListItem href="/docs/installation" title="Vår pub" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-beer"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/></svg>}>
                Här är om vår pub
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="LONDONRESA" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>}>
                 Vi hjälper dig med frågor inför din Londonresa.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Arsenal FC
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 text-black md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <ListItem href="/match" title="Truppen">

Truppen                </ListItem>
                </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> 
          <NavigationMenuItem>
            <Link href="/medlemskap" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}`}
                >
                Medlemskap
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/kontakt" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}`}
                >
                Kontakt
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/biljetter" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}`}
                >
                Biljetter
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/biljetter" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex gap-1 text-yellow-300 bg-transparent border-none hover:text-yellow-300 hover:bg-transparent focus:text-yellow-300 focus:bg-transparent`}
                >
                 <Podcast /> PODCAST
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
 
   
      <button className="bg-slate-100 border-1 border-slate-400 py-1 px-2">
        Logga in
      </button>
     
     
    </div>
                  </div>
  );
}
const ListItem = ({ title, children, icon }) => {
  return (
    <li className={cn(
      "cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    )}>
      <NavigationMenuLink asChild>
        <a
        >
          <div className="text-sm font-bold leading-none flex gap-1 items-center">{icon ? <span>{icon}</span> : ""} {title}</div>
          <p className="line-clamp-3 italic text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
