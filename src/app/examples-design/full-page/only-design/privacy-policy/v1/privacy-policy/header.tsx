/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h2 className="mb-4 mt-8 text-center text-3xl font-bold">
        Privacy Policy
      </h2>
      <Image
        priority={false}
        quality={75}
        src="https://i.ibb.co/Tqy5PQP/help-bg.jpg"
        width={960}
        height={400}
        className="mx-auto rounded-3xl"
        alt="Privacy Page Image"
      />
    </header>
  );
};

export default Header;
