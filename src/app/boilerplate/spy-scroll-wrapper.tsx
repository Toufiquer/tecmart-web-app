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
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          // Element is visible

          setSpyDiv(refId);
        } else {
          // Element is not visible
        }
      },
      { threshold: 0.02 }
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
