/*
|-----------------------------------------
| setting up AboutThisEvent for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedin,
  BiSolidMessageRounded,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const socialData = [
  { link: "/event-details/#", id: 1, icon: <BiLogoFacebookCircle /> },
  { link: "/event-details/#", id: 2, icon: <BiSolidMessageRounded /> },
  { link: "/event-details/#", id: 3, icon: <BsTwitter /> },
  { link: "/event-details/#", id: 4, icon: <HiOutlineMail /> },
  { link: "/event-details/#", id: 5, icon: <BiLogoLinkedin /> },
];

const AboutThisEvent = () => {
  return (
    <main className="my-4">
      <h2 className=" mt-4 py-2 text-3xl font-semibold">About this event</h2>
      <p className="font-[1rem] text-slate-800">
        The Festival Season hopes to continue its rescheduled events in 2023
        during the spring block. This will be a continuation of the tradition
        for the loyal fanbase to watch a jam-packed day full of exciting
        top-notch performances. With a unique lineup, you&lsquo;ll know what to
        expect and get ready to embrace the festivity. Moreover, we&lsquo;ve
        added a detailed list of the performers, with details of dates, lineups
        and prospective entry requirements. We will keep you posted with
        necessary updates regarding the event.
      </p>
      <h3 className=" mt-4 py-2 text-2xl  font-semibold text-slate-900">
        Singers:
      </h3>
      <p className="mb-2 font-[1rem] text-slate-800">
        To join the festival, you&lsquo;ll need to register through{" "}
        <Link className="text-blue-500" href="/event-details/#">
          register@event.com
        </Link>{" "}
        After confirming the payment, you&lsquo; ll be provided with a unique ID
        number that you&lsquo;ll need to show before the authority to get the
        tickets.
      </p>
      <p>
        The ID number will be unique to all members, so it&lsquo;s requested
        that you don&lsquo;t share it with anyone. Any damage regarding a
        misused ID will not be ours to compensate or refund.Enjoy!
      </p>
      <div className="mt-4 flex w-full gap-2">
        <Image
          width={0}
          height={0}
          sizes="20vw"
          style={{ width: "100%", height: "auto" }}
          className="max-w-[200px] rounded-lg object-cover"
          src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
          alt="Singer"
        />
        <Image
          width={0}
          height={0}
          sizes="20vw"
          style={{ width: "100%", height: "auto" }}
          className="max-w-[200px] rounded-lg object-cover"
          src="https://i.ibb.co/6yyzzFZ/music.jpg"
          alt="Singer"
        />
        <Image
          width={0}
          height={0}
          sizes="40vw"
          style={{ width: "100%", height: "auto" }}
          className="min-w-[300px] rounded-lg object-cover"
          src="https://i.ibb.co/4d24FSL/music-2.jpg"
          alt="Singer"
        />
      </div>
      <h3 className=" mt-4 py-2  text-xl  font-semibold text-slate-900">
        Topic To Be Covered:
      </h3>
      <ul className="ml-4 list-disc text-slate-700">
        <li>Latest Update With Bitcoin</li>
        <li>Blockchain Vs Bitcoin</li>
        <li>Why Do We Need CryptoCurrency?</li>
        <li>Bitcoin History</li>
        <li>Bitcoin Vs Ethereum</li>
        <li>How Big Is Cryptocurrency Right Now?</li>
        <li>Crypto Scams & How To Identify Them</li>
        <li>Is it Worth Buying To Keep?</li>
      </ul>
      <h3 className=" mt-4 py-2  text-xl  font-semibold text-slate-900">
        Refund Policy:
      </h3>
      <ul className="ml-4 list-disc text-slate-700">
        <li>Contact the organizer to request a refund.</li>
        <li>Organizer fee is nonrefundable.</li>
      </ul>
      <h3 className=" mt-4 py-2  text-xl  font-semibold text-slate-900">
        Responses:
      </h3>
      <div className="flex w-auto">
        <div className="flex flex-col">
          <p>Going</p>
          <div className="pt-2 text-2xl font-bold">4569</div>
        </div>
        <div className="mx-2 flex h-auto items-center">
          <div className="mx-4 h-12 w-[2px] border" />
        </div>
        <div className="flex flex-col">
          <p>Interested</p>
          <div className="pt-2 text-2xl font-bold">15145</div>
        </div>
        <div className="mx-2 flex h-auto items-center">
          <div className="mx-4 h-12 w-[2px] border" />
        </div>
        <div className="flex flex-col">
          <p>Share</p>
          <div className="pt-2 text-2xl font-bold">12215</div>
        </div>
      </div>
      <h3 className=" mt-4 py-2  text-xl  font-semibold text-slate-900">
        Share with Friends:
      </h3>
      <div className="flex gap-4">
        {socialData.map((curr) => (
          <Link
            href={curr.link}
            className="rounded-lg border p-2 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
            key={curr.id}
          >
            {curr.icon}
          </Link>
        ))}
      </div>
    </main>
  );
};
export default AboutThisEvent;
