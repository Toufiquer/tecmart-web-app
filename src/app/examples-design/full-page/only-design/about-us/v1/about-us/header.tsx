/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

const Header = () => {
  return (
    <header className="mx-auto mt-2 max-w-[875px] py-12 text-center">
      <h2 className="text-4xl font-semibold">About Us</h2>
      <div className=" px-4 text-xl text-slate-700">
        <p>
          Front is a web company that builds websites. Businesses of every
          size—from new startups to public companies—use our theme to build and
          manage their businesses online.
        </p>
      </div>
    </header>
  );
};
export default Header;
