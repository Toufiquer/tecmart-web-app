/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = { example: string; exampleRequired: string };

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-800 text-slate-300 font-semibold text-xl">
      Test Page
    </main>
  );
};
export default Page;
