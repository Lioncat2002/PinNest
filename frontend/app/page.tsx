"use client";
import ImageColumn from "@/components/ImageColumn";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

function ChunkImages({ images, chunkSize }: any) {
  const chunkedImages = [];
  if (!images.data) return;

  const imgs = images.data;

  for (let i = 0; i < imgs.length; i += chunkSize) {
    chunkedImages.push(imgs.slice(i, i + chunkSize));
  }
  console.log(chunkedImages);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 gap-4 justify-start">
      {chunkedImages.map((chunk, index) => (
        <ImageColumn key={index} images={chunk} />
      ))}
    </div>
  );
}

export default function Home() {
  let [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    async function loadimg() {
      const data = await fetch("https://imgnest.fly.dev/pin");
      const res = await data.json();
      setImages(res);
    }

    loadimg();
  }, []);
  let [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const onResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 640) {
        setChunkSize(20); //2 columns
      } else if (window.innerWidth <= 768) {
        setChunkSize(10); //4 columns
      } else if (window.innerWidth <= 1280) {
        setChunkSize(8); //5 columns
        //chunkSize = 7;
      } else {
        setChunkSize(4); //10 columns
        //chunkSize = 10;
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return (
    <div className="p-2">
      <NavBar />
      <ChunkImages images={images} chunkSize={chunkSize} />
    </div>
  );
}
