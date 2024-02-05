"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
const club = [
  {
    value: "1",
    menuTitle: "Klub Info",
    title: "Welcome to Arsenal FC",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    value: "2",
    menuTitle: "Kontakta",
    title: "Kontakta oss",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
export default function HistoryInformation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };
  return (
    <main className="full bgImage mt-12 border-t-4 border-red-600 ">
      <section className="content mb-40">
        <div className="">
          <img src="/emirates.jpg" className="img" />
        </div>
        <div className="flex  w-full pt-10 px-6 bg-white">
          <div className="flex-1">
            <Tabs defaultValue={club[0].value} className="bg-[#11181F]  text-[#B4CBE1] w-[90%] mx-auto">
              <TabsList>
                {club.map((cl, index) => (
                  <TabsTrigger
                    key={index}
                    value={cl.value}
                    className={`p-6 uppercase hover:cursor-pointer relative`}
                  >
                    {cl.menuTitle}
                  </TabsTrigger>
                ))}
              </TabsList>

              {club.map((cl, index) => (
                <TabsContent
                  key={index}
                  value={cl.value}
                  className={`p-6 uppercase hover:cursor-pointer relative`}
                >
                    <div className="mt-4 pr-10">
                <h1 className="uppercase font-bold text-3xl pl-6 mb-6 border-l-4 border-red-600">
                  {cl.title}
                </h1>

                <p className="text-1xl text-gray-400">
             
                  {cl.description}
                </p>
              </div>
              
                </TabsContent>
                
              ))}
                <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/emirates.jpg"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
          </div>
            </Tabs>
            </div>

           
        </div>
        <div className="bg-[#11181F]  text-[#B4CBE1] w-[90%] mx-auto">
          <ul className="flex px-4 relative">
            {club.map((cl, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={`p-6 uppercase hover:cursor-pointer relative ${
                  index === activeIndex ? "current" : ""
                }`}
              >
                {cl.menuTitle}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
