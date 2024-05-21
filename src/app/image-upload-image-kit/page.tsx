/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useState } from "react";
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

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;

const Page = () => {
  const [loadedUrl, setLoadedUrl] = useState("");

  const authenticator = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/upload-img-imagekit-io/auth"
      );

      await console.log(response);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log(data);
      const { signature, expire, token } = data.body.auth;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };
  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res.url);
    res.url && setLoadedUrl(res.url);
  };

  return (
    <main className="bg-slate-800 text-white flex items-center justify-center w-full h-screen">
      <div className="relative w-full h-[300px] max-w-[900px] max-h-[400px] border">
        {/* Image height and width will be depend on parent div if fill is true */}
        {loadedUrl && (
          <Image
            className="object-cover"
            src={loadedUrl}
            fill
            sizes="(max-width: 900px) 100vw"
            alt="Stock Price Image"
          />
        )}
        {/* Load Image using Image loader */}
        {/* <Image
          loader={imageKitLoader}
          className="object-cover"
          src="stockprices"
          fill
          priority
          sizes="(max-width: 900px) 100vw"
          alt="Stock Price Image"
        /> */}
      </div>
      <div className="relative w-full h-[300px] max-w-[900px] max-h-[400px] border">
        <IKContext
          publicKey={publicKey}
          urlEndpoint={urlEndpoint}
          authenticator={authenticator}
        >
          <p>Upload an image</p>
          <IKUpload
            fileName="test-upload.png"
            onError={onError}
            onSuccess={onSuccess}
          />
        </IKContext>
      </div>
    </main>
  );
};
export default Page;
