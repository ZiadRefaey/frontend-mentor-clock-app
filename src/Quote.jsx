import Refresh from "./assets/icon-refresh.svg";
import { useState, useEffect } from "react";
export default function Quote({ timeDetailsHeight, isClicked }) {
  const [randomQuote, setRandomQuote] = useState("");
  async function fetchQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setRandomQuote(data);
    } catch (error) {
      setData({ content: "Opps... Something went wrong" });
    }
  }
  useEffect(function () {
    fetchQuote();
  }, []);

  return (
    <>
      <div
        style={
          isClicked
            ? { transform: `translateY(-${timeDetailsHeight}px)` }
            : { transform: `translateY(0px)` }
        }
        className={`flex flex-col gap-2 md:gap-3 justify-between items-center max-w-[573px] transition-all duration-1000`}
      >
        <div className="flex gap-4 items-center justify-between h-full">
          <p className="md:body text-xs leading-5 text-white md:text-lg">
            “{randomQuote.content}”
          </p>
          <button
            onClick={fetchQuote}
            className="min-h-[16.67px] min-w-[16.67px] object-contain self-start lg:mt-[10.5px]"
          >
            <img src={Refresh} alt="refresh icon" className="w-full h-full" />
          </button>
        </div>
        <h5 className=" text-xs leading-5 md:text-lg font-bold text-start text-white w-full">
          {randomQuote?.author}
        </h5>
      </div>
    </>
  );
}
