import React from "react";
import parse from "html-react-parser";
import { marked } from "marked";

const Recipe = ({ isLoading, isError, error, text }) => {
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("err", error);
  console.log("text", text);
  if (isLoading)
    return (
      <>
        <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard">
          <div className="my-1 w-[100%] rounded-lg h-3 bg-AI-Shimmer shimmer"></div>
          <div className="my-1 w-[75%] rounded-lg h-3 bg-AI-Shimmer shimmer"></div>
          <div className="my-1 w-[40%] rounded-lg h-3 bg-AI-Shimmer shimmer"></div>
        </div>
      </>
    );
  if (isError)
    return (
      <>
        <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard">
          <p className="text-red-600 text-center text-sm font-medium">
            AI Recipes feature is limited to registered users only! Register to
            get access to AI Recipes...
          </p>
        </div>
      </>
    );
  return (
    <>
      <div className="py-5">
        <div className="relative">
          <div className="absolute -inset-1 bg-radiant blur-md rounded-xl bg-[length:200%_200%] animate-rotate-gradient"></div>
          <div className="relative font-palanquin p-4 bg-white/50 ring-4 ring-black/5 text-slate-800 rounded-xl backdrop-filter backdrop-blur-3xl dark:bg-darkCard/50 dark:text-white">
            <p>{parse(marked(text))}</p>
          </div>
        </div>
        <p className="mt-2 text-center text-slate-600 text-xs dark:text-darkText">
          This is AI generated recipe please do not rely on them follow standard
          and best traditional practices!
        </p>
      </div>
    </>
  );
};

export default Recipe;
