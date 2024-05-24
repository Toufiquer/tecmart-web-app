/*
|-----------------------------------------
| setting up Bio for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const Bio = () => {
  return (
    <main className="my-12 flex w-full flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-center text-5xl font-semibold">7</h2>
          <p className="text-center text-sm text-slate-800">
            years in business
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-center text-5xl font-semibold">3,5k+</h2>
          <p className="text-center text-sm text-slate-800">copies sold</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-center text-5xl font-semibold">85%</h2>
          <p className="text-center text-sm text-slate-800">happy customers</p>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto mt-8 max-w-[500px] border-b" />
      </div>
      <div className="grid-cols 1 my-12 grid w-full lg:grid-cols-2">
        <div className="mb-8 max-w-[500px]">
          <h2 className="text-2xl font-semibold ">
            Tools should adapt to the user, not the other way around.
          </h2>
        </div>
        <p className="text-xl text-slate-700">
          Since 2007, we have helped 25 companies launch over 1k incredible
          products. We believe the best digital solutions are built at the
          intersection of business strategy, available technology, and real
          user&apos;s needs. <br /> <br />
          Things can get really complex, really quickly, and a pragmatic,
          synthetic and clear vision is essential to be able to create something
          that, after all, is meant to be used. Emotions also have a big role to
          play and developing clear and beautiful aesthetics is of the utmost
          importance to create a pleasant environment in which the user actually
          enjoys the time spent in it. In the end, we&apos;re all suckers for
          beautiful things that just work
        </p>
      </div>
      <div className="w-full">
        <div className="mx-auto mt-8 max-w-[500px] border-b" />
      </div>
    </main>
  );
};
export default Bio;
