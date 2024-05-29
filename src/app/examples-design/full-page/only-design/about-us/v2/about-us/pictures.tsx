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
          src="https://i.ibb.co/qjS7CTB/food-1.png"
          width={250}
          height={80}
          className={`${imageClass} h-[400px] w-[400px]`}
          alt="food Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/HVMQyd6/food-2.png"
          width={180}
          height={80}
          className={`${imageClass} h-[400px] w-full lg:w-auto`}
          alt="food Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/qjS7CTB/food-1.png"
          width={250}
          height={80}
          className={`${imageClass} w-full `}
          alt="music-2 Image"
        />
      </div>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-4 lg:flex-nowrap">
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/HVMQyd6/food-2.png"
          width={250}
          height={80}
          className={`${imageClass} w-full `}
          alt="food Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/qjS7CTB/food-1.png"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="food Image"
        />
        <Image
          priority={false}
          quality={75}
          src="https://i.ibb.co/HVMQyd6/food-2.png"
          width={250}
          height={80}
          className={`${imageClass} w-full`}
          alt="food Image"
        />
      </div>
    </main>
  );
};
export default Pictures;
