/*
|-----------------------------------------
| setting up PageEnv for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const PageEnv = () => {
  return (
    <main className="bg-slate-800 text-white flex items-center justify-center w-full h-screen">
      IMAGEKIT_PUBLIC_KEY: {process.env.IMAGEKIT_PUBLIC_KEY}
      IMAGEKIT_PRIVATE_KEY: {process.env.IMAGEKIT_PRIVATE_KEY}
      IMAGEKIT_URL_ENDPOINT: {process.env.IMAGEKIT_URL_ENDPOINT}
    </main>
  );
};
export default PageEnv;
