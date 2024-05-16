import { LuCopy } from "react-icons/lu";

/*
|-----------------------------------------
| setting up ViewCode for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const ViewCode = ({
  data,
  copyFn,
}: {
  copyFn: (data: string) => void;
  data: string;
}) => {
  return (
    <main className="p-1 relative w-full h-full">
      <pre className="cursor-edit text-slate-400">{data}</pre>
      <div
        onClick={() => copyFn(data)}
        title="copy"
        className="absolute cursor-pointer rounded-lg h-full top-0 right-0 min-w-[50px] border-r border-l border-t border-b border-r-slate-800 text-slate-500 border-slate-600"
      >
        <div className="pl-8 pr-2 pt-2">
          <LuCopy />
        </div>
      </div>
    </main>
  );
};
export default ViewCode;
