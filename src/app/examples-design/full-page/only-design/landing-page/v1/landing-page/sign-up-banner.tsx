/*
|-----------------------------------------
| setting up SignUpBanner for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Award, FileCheck, Lightbulb } from "lucide-react";

const SignUpBanner = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${"https://i.ibb.co/6PTKnHg/banner.webp"})`,
        backgroundAttachment: "fixed",
      }}
      className="flex min-h-[90vh] bg-cover"
    >
      <div className=" flex w-full items-center justify-center bg-black bg-opacity-60 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-full w-full flex-col items-center justify-center pt-16">
            <h2 className="w-full py-4 text-center text-7xl font-extrabold text-rose-500">
              Sign up online today
            </h2>
            <div className="mt-8 grid min-h-[400px] w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="mt-12 flex flex-col items-center gap-4">
                <Lightbulb className="min-h-12 min-w-12 h-full max-h-[120px] w-full max-w-[120px] text-green-400" />
                <p className="w-full text-center text-2xl text-white">
                  Tell us about your business.
                </p>
              </div>
              <div className="mt-12 flex flex-col items-center gap-4">
                <FileCheck className="min-h-12 min-w-12 h-full max-h-[120px] w-full max-w-[120px] text-green-400" />
                <p className="w-full text-center text-2xl text-white">
                  Upload your ID, proof of ownership and menu or product list.
                </p>
              </div>
              <div className="mt-12 flex flex-col items-center gap-4">
                <Award className="min-h-12 min-w-12 h-full max-h-[120px] w-full max-w-[120px] text-green-400" />
                <p className="w-full text-center text-2xl text-white">
                  Receive your Orderpad and start taking orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignUpBanner;
