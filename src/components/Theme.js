import { MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { darkModeHandler } from "../utils/DarkMode";

const Theme = () => {
  const [dark, setDark] = useState();

  const getMode = () => {
    const mode = localStorage.getItem("isDarkModeOn") === "false";
    mode === true ? setDark(true) : setDark(false);
  };

  useEffect(() => {
    getMode();
  });
  console.log(dark);
  return (
    <>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <div className="w-full inline-flex justify-between">
          <p>Theme</p>
          <button className="p-1 rounded-2xl text-white bg-violet-600 duration-500">
            {dark ? (
              <SunIcon
                className="text-2xl size-5"
                onClick={() => darkModeHandler(setDark)}
              />
            ) : (
              <MoonIcon
                className="text-2xl size-5"
                onClick={() => darkModeHandler(setDark)}
              />
            )}
          </button>
        </div>
        <p className="w-fit px-2 bg-violet-100 rounded-lg text-sm dark:bg-violet-700/50">
          {dark ? "Dark Mode" : "Light Mode"}
        </p>
      </div>

      <p className="text-xs text-center dark:text-gray-600">
        Do not clear the cache of app so that themes are applied based on last
        requests!
      </p>
    </>
  );
};

export default Theme;
