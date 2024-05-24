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
    <main>
      <h2 className="mb-4 mt-8 text-3xl font-bold">Event details</h2>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg"
        src="https://i.ibb.co/Sr8586S/event.png"
        alt="event picture"
      />
    </main>
  );
};
export default Header;
