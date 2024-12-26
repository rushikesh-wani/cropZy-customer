import React from "react";
import parse from "html-react-parser";
import { marked } from "marked";

const Recipe = ({ isLoading, isError, error, text }) => {
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("err", error);
  console.log("text", text);
  const raw = text;
  const htmlContent = marked(raw);
  if (isLoading)
    return (
      <>
        <div className="font-palanquin bg-white p-4 rounded-xl">
          <div className="w-[100%] h-4 my-1 rounded-lg bg-slate-100 animate-pulse"></div>
          <div className="w-[75%] h-4 my-1 rounded-lg bg-slate-100 animate-pulse"></div>
          <div className="w-[35%] h-4 my-1 rounded-lg bg-slate-100 animate-pulse"></div>
        </div>
      </>
    );
  if (isError)
    return (
      <>
        <div className="font-palanquin bg-white p-4 rounded-xl">
          <p className="text-red-600 text-center text-sm font-medium">
            AI Recipes feature is limited to registered users only! Register to
            get access to AI Recipes...
          </p>
        </div>
      </>
    );
  return (
    <>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        <p>{parse(htmlContent)}</p>
      </div>
      <p className="text-center text-slate-600 text-xs">
        This is AI generated recipe please do not rely on them follow standard
        and best traditional practices!
      </p>
    </>
  );
};

export default Recipe;
