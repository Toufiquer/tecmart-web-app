/*
|-----------------------------------------
| setting up SpyScrollWrapper for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useRef, useEffect, Dispatch, SetStateAction } from "react";

const SpyScrollWrapper = ({
  refId,
  children,
  setSpyDiv,
}: {
  children: React.ReactNode;
  refId: string;
  setSpyDiv: Dispatch<SetStateAction<string>>;
}) => {
  console.log("RefDiv", refId);
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        if (entry.isIntersecting) {
          // Element is visible

          console.log("Div is visible");
          console.log("ref Id :", refId);
          setSpyDiv(refId);
        } else {
          // Element is not visible
          //   console.log("Div is not visible");
          //   console.log("ref Id :", refId);
        }
      },
      { threshold: 0.3 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, [divRef]);

  return (
    <div id={refId} ref={divRef}>
      {children}
    </div>
  );
};
export default SpyScrollWrapper;
