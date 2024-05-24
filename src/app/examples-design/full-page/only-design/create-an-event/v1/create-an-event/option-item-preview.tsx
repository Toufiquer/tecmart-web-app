/*
|-----------------------------------------
| setting up Option Item Preview for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const OptionItemPreview = ({ name, onClick }: { onClick: () => void; name: string }) => (
  <p onClick={onClick} className="cursor-pointer bg-blue-100 px-3 py-2 hover:bg-blue-200">
    {name}{" "}
  </p>
);
export default OptionItemPreview;
