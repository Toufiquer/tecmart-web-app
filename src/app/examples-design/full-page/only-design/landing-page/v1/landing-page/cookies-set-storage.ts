/*
|-----------------------------------------
| setting up Cookies for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type cookiesType = {
  userAction: string;
};

interface cookiesStore {
  cookiesData: cookiesType;
  setCookies: (cookies: cookiesType) => void;
  removeCookies: () => void;
}

const useCookies = create(
  persist<cookiesStore>(
    (set) => ({
      cookiesData: {
        userAction: "",
      },
      setCookies: (cookiesData: cookiesType) => {
        set({ cookiesData });
      },
      removeCookies: () => {
        set({ cookiesData: undefined });
      },
    }),
    {
      name: "web-app-cookies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCookies;
