/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Bio from "./bio";
import Header from "./header";
import OurTeam from "./our-team";
import Pictures from "./pictures";

const Page = () => {
  return (
    <main className="mx-auto max-w-[1200px] p-4">
      <Header />
      <Pictures />
      <Bio />
      <OurTeam />
    </main>
  );
};
export default Page;
