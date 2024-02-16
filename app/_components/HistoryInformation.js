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
    description: "Här kjan du kotnakta oss",
  },
];
const images = [
  "/emirates.jpg",
  "/arsenal1.jpg",
  "/arsenal2.jpg",
  "/arsenal3.jpg",
  "/arsenal4.jpg",
  "/arsenal5.jpg",

];
export default function HistoryInformation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const changeImage = (newSrc) => {
    setMainImage(newSrc);
  };
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };
  return (
    <main className="full bgImage border-t-4 relative border-red-600 ">
      <section className="content h-full w-full mb-40 z-30 ">
        <div className="relative w-[100%] h-[350px]">
          <Image
            src={mainImage}
            fill
            sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
            objectFit="cover"
          />
        </div>
        <div className="flex  w-full pt-10 min-h-[40vh] px-6 bg-white">
          <div className="flex w-full">
            <div className="flex-1">
              {activeIndex != null && club[activeIndex] && (
                <div
                  key={club[activeIndex].value}
                  value={club[activeIndex].value}
                  className={`p-6 uppercase hover:cursor-pointer relative`}
                >
                  <div className="mt-4 pr-10">
                    <h1 className="uppercase font-bold text-3xl pl-6 mb-6 border-l-4 border-red-600">
                      {club[activeIndex].title}
                    </h1>
                    <p className="text-1xl text-gray-400">
                      {club[activeIndex].description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 pb-10  " style={{ height: '120px' }}>
              {images.map((img, index) => (
                <div key={index} className="relative h-[100px] w-[100px]">
                  <Image
                    src={img}
                    fill
                    className={`${mainImage === img ? "border-4" : ""} img`}
                    objectFit="cover"
                    onClick={() => changeImage(img)}
                  />
                </div>
              ))}
            </div>
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
