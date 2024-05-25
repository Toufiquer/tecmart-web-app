/*
|-----------------------------------------
| setting up Reviews for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

const createComment = (id: number) => ({
  id,
  avatar: "https://github.com/shadcn.png",
  name: "Shankar Subbaraman",
  date: `${id} December 2014`,
  isVerified: id % 2 === 0,
  title: "Need to recheck the weight at delivery point",
  comment:
    "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc.",
  image: [
    "https://i.ibb.co/Dgw6Jw5/singer.jpg",
    "https://i.ibb.co/Dgw6Jw5/singer.jpg",
    "https://i.ibb.co/Dgw6Jw5/singer.jpg",
  ],
});
const commentData = [
  createComment(1),
  createComment(2),
  createComment(3),
  createComment(4),
  createComment(5),
  createComment(6),
];

const CreateItem = ({ data }: { data: any }) => {
  const { avatar, name, date, isVerified, title, comment, image } = data || {};
  return (
    <div className="my-4 flex w-full items-start justify-start border-b pb-4">
      <div className="w-180px mt-1">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex w-full flex-col pl-4">
        <div className="mb-2">
          <h2 className="text-[18px] font-bold">{name}</h2>
          <p className="text-xs">
            <span className="text-slate-500"> {date} </span>
            {isVerified ? (
              <span className="ml-4 font-bold text-green-400">
                Veirfied Purchese
              </span>
            ) : (
              <span className="ml-4 font-bold text-rose-400">
                Unveirfied Purchese
              </span>
            )}
          </p>
        </div>
        <div className="mb-2 mt-4">
          <div className="flex items-center gap-1 text-[18px] text-slate-300">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiOutlineStar />
            <p className="ml-4 text-sm font-bold text-slate-800">{title}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-slate-400">{comment}</p>
        </div>
        <div className="mb-2">
          <div className="flex w-full items-center justify-start gap-2">
            {image.map((img: string) => (
              <Image
                key={img}
                height={1080}
                width={500}
                src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
                alt="Watch"
                className="h-[80px] w-[80px] border object-cover md:h-auto"
              />
            ))}
          </div>
        </div>
        <div className="mb-2 flex w-full items-center justify-end gap-4">
          <span className="flex items-center justify-center gap-2 ">
            <FiThumbsUp />{" "}
            <span className="hover-underline-animation cursor-pointer">
              Helpful
            </span>
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="mt-1">
              <FiThumbsDown />
            </span>
            <span className="hover-underline-animation cursor-pointer">
              Report abuse
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="flex flex-col px-4">
      <main className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[400px_1fr]">
        <div className="p-2">
          <h2 className="text-2xl font-semibold">Customers reviews</h2>
          <div className="mt-4 flex items-center gap-1 text-sm text-orange-300">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiOutlineStar />

            <span className="text-slate-400">
              <span className="ml-2 text-sm font-normal text-slate-500">
                <strong> 4.1 out of 5</strong>
                <span className="pl-2">11,130 global ratings</span>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 py-2  text-orange-300">
            <span className="text-slate-600">5</span> <AiTwotoneStar />
            <Progress
              className="h-1 fill-rose-300"
              value={65}
              indicatorColor="bg-orange-300"
            />
            <span className="text-slate-600">65%</span>
          </div>
          <div className="flex items-center gap-2 pb-2  text-orange-300">
            <span className="text-slate-600">4</span> <AiTwotoneStar />
            <Progress
              className="h-1 fill-rose-300"
              value={45}
              indicatorColor="bg-orange-300"
            />
            <span className="text-slate-600">45%</span>
          </div>
          <div className="flex items-center gap-2 pb-2  text-orange-300">
            <span className="text-slate-600">3</span> <AiTwotoneStar />
            <Progress
              className="h-1 fill-rose-300"
              value={35}
              indicatorColor="bg-orange-300"
            />
            <span className="text-slate-600">35%</span>
          </div>
          <div className="flex items-center gap-2 pb-2  text-orange-300">
            <span className="text-slate-600">2</span> <AiTwotoneStar />
            <Progress
              className="h-1 fill-rose-300"
              value={25}
              indicatorColor="bg-orange-300"
            />
            <span className="text-slate-600">25%</span>
          </div>
          <div className="flex items-center gap-2 pb-2  text-orange-300">
            <span className="text-slate-600">1</span> <AiTwotoneStar />
            <Progress
              className="h-1 fill-rose-300"
              value={15}
              indicatorColor="bg-orange-300"
            />
            <span className="text-slate-600">15%</span>
          </div>

          <h2 className="mt-4 text-[22px] font-semibold">
            Review this product
          </h2>
          <p className="text-slate-500">
            Share your thoughts with other customers.
          </p>
          <Button
            variant="outline"
            className="mt-6 w-full bg-white text-slate-900"
          >
            Write the Review
          </Button>
        </div>
        <div className="p-2">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-semibold">Reviews</h2>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center rounded-lg border border-slate-400 px-4 py-2">
                Top Review{" "}
                <span className="ml-1 mt-[3px] inline-block">
                  <GoTriangleDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    Top Review
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    One
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    Two
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    Three
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ScrollArea className="h-[80vh] w-full p-4">
            <div className="my-2 py-4">
              {commentData.map((curr) => (
                <CreateItem key={curr.id} data={curr} />
              ))}
            </div>
          </ScrollArea>
          <div className="flex w-full justify-center">
            <Button variant="outline" className=" text-slate-600">
              Read More Reviews
            </Button>
          </div>
        </div>
      </main>
      <div className="my-12 px-4">
        <h2 className="border-b text-2xl font-semibold">Create Review</h2>
        <div className="my-4 max-w-[800px]">
          <h2 className="text-xl font-semibold">Overall rating</h2>
          <div className="mb-4 mt-1 flex items-center gap-1 text-[18px] text-slate-300">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
        </div>

        <h2 className="border-b text-xl font-semibold">Rate Features</h2>
        <div className="my-4 max-w-[800px]">
          <div className=" pb-1">
            <h2 className="mt-2 text-xl font-semibold">Flavor</h2>
            <div className="mb-2 flex items-center gap-1 text-[18px] text-slate-300">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
          </div>
          <div className=" pb-1">
            <h2 className="text-xl font-semibold">Value for money</h2>
            <div className="mb-2 flex items-center gap-1 text-[18px] text-slate-300">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
          </div>
          <div className=" pb-1">
            <h2 className="text-xl font-semibold">Scent</h2>
            <div className="mb-2 flex items-center gap-1 text-[18px] text-slate-300">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
          </div>
        </div>
        <div className="my-4 max-w-[800px] ">
          <h2 className="mb-2 mt-4 text-xl  font-semibold">Add a headline</h2>
          <Input placeholder="What's most important to know" className="mb-4" />

          <h2 className="text-xl font-semibold">Add a photo or video</h2>
          <p className="text-xs text-slate-500">
            Shoppers find images and videos more helpful than text alone.
          </p>
          <div className="my-4 flex w-full items-center justify-start gap-4">
            <div className="flex flex-col items-center justify-center">
              <Input
                id="picture"
                type="file"
                className="mt-2 hidden h-[90px] w-[90px] cursor-pointer"
              />
              <label
                htmlFor="picture"
                className=" h-[90px] w-[90px] cursor-pointer rounded-lg bg-slate-200 hover:bg-slate-300"
              />
              <p className="text-xs text-slate-400">.jpg</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Input
                id="picture2"
                type="file"
                className="mt-2 hidden h-[90px] w-[90px] cursor-pointer"
              />
              <label
                htmlFor="picture2"
                className=" h-[90px] w-[90px] cursor-pointer rounded-lg bg-slate-200 hover:bg-slate-300"
              />
              <p className="text-xs text-slate-400">.png</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Input
                id="picture3"
                type="file"
                className="mt-2 hidden h-[90px] w-[90px] cursor-pointer"
              />
              <label
                htmlFor="picture3"
                className=" h-[90px] w-[90px] cursor-pointer rounded-lg bg-slate-200 hover:bg-slate-300"
              />
              <p className="text-xs text-slate-400">.mp4</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Add a written review</h2>
          <Textarea
            placeholder="What did you like or dislike? What did you use product for?"
            className="mb-4"
          />
          <Button className="w-full border bg-green-400 hover:bg-green-500 md:w-1/4">
            Submit Review
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
