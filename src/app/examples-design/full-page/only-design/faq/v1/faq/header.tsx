/*
|-----------------------------------------
| setting up FAQ Header for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="mb-6 text-[calc(1.33rem_+_.85vw)] font-[800]">FAQ</h2>
      <p className="mb-4 text-xl font-[700]">How can we help?</p>
      <p className="mb-4 text-xl font-[400]">
        Search for the topic you need help with or{" "}
        <Link className="text-blue-600" href="/">
          contact our support
        </Link>
      </p>
    </header>
  );
};
export default Header;
