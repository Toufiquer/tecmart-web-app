/*
|-----------------------------------------
| setting up Outlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: tecmart-next, May, 2024
|-----------------------------------------
*/
const Outlet = ({ title }: { title?: string }) => {
  return <main>{title ? title : "Outlet"}</main>;
};
export default Outlet;
