/*
|-----------------------------------------
| setting up Pictures for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const imageClass = "h-auto object-cover rounded-lg";
const Pictures = () => {
  return (
    <main className="mx-auto flex w-full flex-col">
      <div className="mb-4 flex w-full flex-wrap gap-4 lg:flex-nowrap">
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="singer Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/6yyzzFZ/music.jpg"
          width={180}
          height={80}
          className={`${imageClass} w-full lg:w-auto`}
          alt="music Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/4d24FSL/music-2.jpg"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="music-2 Image"
        />
      </div>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-4 lg:flex-nowrap">
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/4d24FSL/music-2.jpg"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="music Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/6yyzzFZ/music.jpg"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="music Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/4d24FSL/music-2.jpg"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="music Image"
        />
      </div>
    </main>
  );
};
export default Pictures;
