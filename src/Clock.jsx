import Button from "./Button";
import "./App.css";
import Sun from "./assets/icon-sun.svg";
import Moon from "./assets/icon-moon.svg";
import { useState, useEffect } from "react";
export default function Clock({
  ipCords,
  worldTimeDetails,
  isClicked,
  setIsClicked,
  screenWidth,
  timeDetailsHeight,
}) {
  const [time, setTime] = useState("");
  const [greetingWord, setGreetingWord] = useState("");
  const [greetingIcon, setGreetingIcon] = useState("");
  useEffect(function () {
    function updateCurrentTime() {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      if (hour >= 5 && hour < 13) {
        setGreetingWord("MORNING");
        setGreetingIcon(Sun);
      }
      if (hour >= 13 && hour < 19) {
        setGreetingWord("AFTERNOON");
        setGreetingIcon(Sun);
      }

      if (hour >= 19 || hour < 5) {
        setGreetingWord("NIGHT");
        setGreetingIcon(Moon);
      }

      if (hour == 0) {
        hour = 12;
      }
      if (hour > 12) {
        hour = hour - 12;
      }

      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;

      setTime(`${hour}:${minute}`);
    }
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        style={
          isClicked
            ? {
                transform: `translateY(-${timeDetailsHeight}px)`,
              }
            : { transform: `translateY(0px)` }
        }
        className="flex flex-col lg:flex-row items-start justify-start  gap-12 md:gap-20 w-full  lg:justify-between transition-all duration-1000"
      >
        <div className="flex gap-4 items-start justify-start flex-col">
          <div className="w-full flex items-start gap-4">
            <div className="w-6 h-6 object-contain">
              <img
                src={greetingIcon}
                className="w-full h-full"
                alt="sun icon"
              />
            </div>
            <div className="text-sm leading-6 md:text-lg  text-white h-full self-center">
              {screenWidth < 768
                ? { greetingWord }
                : `GOOD ${greetingWord}, ITS CURRENTLY`}
            </div>
          </div>
          <h1 className="zone-font">
            <span className="clock-font lg:bg-inherit mr-2">{time}</span>
            {ipCords?.timezone?.code}
          </h1>
          <h3 className="text-sm font-bold custom-tracking-wide md:text-lg lg:text-2xl w-full ">
            in {ipCords?.location?.region?.name},&nbsp;
            {ipCords?.location?.country?.alpha2}
          </h3>
        </div>
        <div className="lg:self-end">
          <Button
            isClicked={isClicked}
            onClick={() => setIsClicked(!isClicked)}
          >
            MORE
          </Button>
        </div>
      </div>
    </>
  );
}
