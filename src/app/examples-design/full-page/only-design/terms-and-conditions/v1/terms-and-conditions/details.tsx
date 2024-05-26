/*
|-----------------------------------------
| setting up Details for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import useOnScreen from "./intersection-observer";

const Details = () => {
  const [currTitle, setCurrTitle] = useState("account");
  const accountRef = useRef<HTMLDivElement>(null);
  const linksToOtherRef = useRef<HTMLDivElement>(null);
  const terminationRef = useRef<HTMLDivElement>(null);
  const governingRef = useRef<HTMLDivElement>(null);
  const changesRef = useRef<HTMLDivElement>(null);

  const accountScreen = useOnScreen(accountRef);
  const linksToOtherScreen = useOnScreen(linksToOtherRef);
  const terminationScreen = useOnScreen(terminationRef);
  const governingScreen = useOnScreen(governingRef);
  const changesScreen = useOnScreen(changesRef);

  useEffect(() => {
    if (accountScreen) {
      setCurrTitle("account");
    } else if (linksToOtherScreen) {
      setCurrTitle("linksToOther");
    } else if (terminationScreen) {
      setCurrTitle("termination");
    } else if (governingScreen) {
      setCurrTitle("governing");
    } else if (changesScreen) {
      setCurrTitle("changes");
    }
  }, [
    accountScreen,
    linksToOtherScreen,
    terminationScreen,
    governingScreen,
    changesScreen,
  ]);

  const activeClass = "border-l-4 border-blue-500 text-blue-500 pl-2";
  const inActiveClass = "border-l-4 border-transparent text-slate-800 pl-2";

  return (
    <div className="relative mb-20 grid w-full grid-cols-1 md:grid-cols-[400px_1fr]">
      <div className="min-h-screen">
        <div className="sticky top-[120px] flex flex-col gap-4 py-4 pl-20 text-xl">
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("title-1")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#title-1"
          >
            <div
              className={`${
                currTitle === "account" ? activeClass : inActiveClass
              }`}
            >
              1. <span className="hover-underline-animation">Account</span>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("title-2")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#title-2"
          >
            <div
              className={`${
                currTitle === "linksToOther" ? activeClass : inActiveClass
              }`}
            >
              2.{" "}
              <span className="hover-underline-animation">
                Links to other website
              </span>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("title-3")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#title-3"
          >
            <div
              className={`${
                currTitle === "termination" ? activeClass : inActiveClass
              }`}
            >
              3. <span className="hover-underline-animation">Termination</span>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("title-4")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#title-4"
          >
            <div
              className={`${
                currTitle === "governing" ? activeClass : inActiveClass
              }`}
            >
              4.
              <span className="hover-underline-animation">Governing law</span>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("title-5")
                .scrollIntoView({ behavior: "smooth" });
            }}
            href="#title-5"
          >
            <div
              className={`${
                currTitle === "changes" ? activeClass : inActiveClass
              }`}
            >
              5.
              <span className="hover-underline-animation"> Changes</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="max-w-[700px] py-4 text-slate-700">
        <section className="pb-4">
          <p>
            Thanks for using our products and services (&quot;Services&quot;).
            The Services are provided by Pixeel Ltd. (&quot;Space&quot;),
            located at 153 Williamson Plaza, Maggieberg, MT 09514, England,
            United Kingdom.
          </p>
          <p>
            By using our Services, you are agreeing to these terms. Please read
            them carefully.
          </p>
          <p>
            Our Services are very diverse, so sometimes additional terms or
            product requirements (including age requirements) may apply.
            Additional terms will be available with the relevant Services, and
            those additional terms become part of your agreement with us if you
            use those Services.
          </p>
        </section>
        <section className="mb-8 py-4">
          <div id="title-1" ref={accountRef} />
          <div className=" flex flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">1. Accounts</h2>
            <p>
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
          </div>
        </section>
        <section className="mb-8 py-4">
          <div id="title-2" ref={linksToOtherRef} />
          <div className=" flex flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">
              2. Links to other websites
            </h2>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Space.
            </p>
            <p>
              Space has no control over, and assumes no responsibility for, the
              content, privacy policies, or practices of any third party web
              sites or services. You further acknowledge and agree that Space
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that you
              visit.
            </p>
          </div>
        </section>
        <section className="mb-8 py-4">
          <div id="title-3" ref={terminationRef} />
          <div className=" flex flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">3. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </div>
        </section>
        <section className="mb-8 py-4">
          <div id="title-4" ref={governingRef} />
          <div className=" flex flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">4. Governing law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Jersey, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </p>
          </div>
        </section>
        <section className="mb-8 py-4">
          <div id="title-5" ref={changesRef} />
          <div className=" flex flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">5. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Details;
