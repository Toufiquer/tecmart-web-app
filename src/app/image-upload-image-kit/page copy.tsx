/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Image from "next/image";

type ImageLoaderType = {
  src: string;
  width: number;
  quality?: number;
};

const imageKitLoader = ({ src, width, quality }: ImageLoaderType) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/tr";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

const Page = () => {
  return (
    <main className="bg-slate-800 text-white flex items-center justify-center w-full h-screen">
      <div className="relative w-full h-[300px] max-w-[900px] max-h-[400px] border">
        {/* Image height and width will be depend on parent div if fill is true */}
        {/* <Image
          className="object-cover"
          src="https://i.imgur.com/zKZGfxC.jpeg"
          fill
          sizes="(max-width: 900px) 100vw"
          alt="Stock Price Image"
        /> */}
        {/* Load Image using Image loader */}
        <Image
          loader={imageKitLoader}
          className="object-cover"
          src="stockprices"
          fill
          sizes="(max-width: 900px) 100vw"
          alt="Stock Price Image"
        />
      </div>
    </main>
  );
};
export default Page;
