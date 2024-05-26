/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
const Header = () => {
  return (
    <header className="mt-8 pb-8">
      <h2 className="py-8 text-3xl font-bold">Refund</h2>
      <p>
        Order <span className="text-blue-500">#349</span> Customer IP : <span className="text-blue-500">2364847</span>
      </p>
    </header>
  );
};
export default Header;
