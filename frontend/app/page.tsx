"use client";
import ImageColumn from "@/components/ImageColumn";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

function ChunkImages({ images, chunkSize }: any) {
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    chunkedImages.push(images.slice(i, i + chunkSize));
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
      {chunkedImages.map((chunk, index) => (
        <ImageColumn key={index} images={chunk} />
      ))}
    </div>
  );
}

export default function Home() {
  const images = [
    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/026/412/729/medium/alexandre-le-saux-art-market.jpg",
    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/originals/a0/e0/dd/a0e0dde201b369d72575ac5deec0a764.gif",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://i.pinimg.com/564x/b8/db/1b/b8db1b931b82f69709111c1b1519d6fb.jpg",
    "https://i.pinimg.com/564x/b5/11/6b/b5116b7178b2214cb826cac442313f1d.jpg",

    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/026/412/729/medium/alexandre-le-saux-art-market.jpg",
    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/originals/a0/e0/dd/a0e0dde201b369d72575ac5deec0a764.gif",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://i.pinimg.com/564x/b8/db/1b/b8db1b931b82f69709111c1b1519d6fb.jpg",
    "https://i.pinimg.com/564x/b5/11/6b/b5116b7178b2214cb826cac442313f1d.jpg",

    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/026/412/729/medium/alexandre-le-saux-art-market.jpg",
    "https://i.pinimg.com/564x/ed/20/30/ed20309b5cb6f025025c442bd5045b33.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/originals/a0/e0/dd/a0e0dde201b369d72575ac5deec0a764.gif",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",
    "https://i.pinimg.com/564x/42/87/98/428798eff5e22892343f7dbe2298b233.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://i.pinimg.com/564x/b8/db/1b/b8db1b931b82f69709111c1b1519d6fb.jpg",
    "https://i.pinimg.com/564x/b5/11/6b/b5116b7178b2214cb826cac442313f1d.jpg",

    "https://cdna.artstation.com/p/assets/images/images/017/363/184/original/severin-baclet-housingtimelapse.gif",
    "https://i.pinimg.com/564x/4a/18/3d/4a183d5d5a4a26a8dfd69de949ff7d51.jpg",
    "https://i.pinimg.com/564x/b8/db/1b/b8db1b931b82f69709111c1b1519d6fb.jpg",
    "https://i.pinimg.com/564x/b5/11/6b/b5116b7178b2214cb826cac442313f1d.jpg",
  ];

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
  console.log(chunkSize);
  return (
    <div className="p-2">
      <NavBar />
      <ChunkImages images={images} chunkSize={chunkSize} />
      {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-4 items-start">
        <ImageColumn images={images} />
        <ImageColumn images={images} />
        <ImageColumn images={images} />
        <ImageColumn images={images2} />
        <ImageColumn images={images2} />
        <ImageColumn images={images2} />
        <ImageColumn images={images2} />
        <ImageColumn images={images3} />
        <ImageColumn images={images3} />
        <ImageColumn images={images3} />
      </div> */}
    </div>
  );
}
