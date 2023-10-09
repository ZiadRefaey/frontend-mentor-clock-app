import React, { useState, useEffect } from "react";
import Ipbase from "@everapi/ipbase-js";
import Quote from "./Quote";
import Clock from "./Clock";
import TimeDetails from "./TimeDetails";

function App() {
  const [ipCords, setIpCords] = useState("");
  const [worldTimeDetails, setWorldTimeDetails] = useState("");
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const [timeDetailsHeight, setTimeDetailsHeight] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundImage, setBackGroundImage] = useState("");

  const ipBase = new Ipbase(
    "ipb_live_UlrnD8zA3Gwd8KdcVWHj3xkfryhQ4sH67Q1aRjkX"
  );
  async function fetchIpInfo() {
    try {
      const response = await ipBase.info();
      setIpCords(response.data);
    } catch (error) {
      console.error("Error fetching IP info:", error);
    }
  }
  useEffect(function () {
    fetchIpInfo();
  }, []);

  useEffect(
    function () {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      currentHour >= 5 &&
        currentHour < 19 &&
        screenWidth < 620 &&
        setBackGroundImage("url('/mobile/bg-image-daytime.jpg')");

      currentHour >= 5 &&
        currentHour < 19 &&
        screenWidth >= 620 &&
        setBackGroundImage("url('/desktop/bg-image-daytime.jpg')");

      (currentHour < 5 || currentHour >= 19) &&
        screenWidth < 520 &&
        setBackGroundImage("url('/mobile/bg-image-nighttime.jpg')");

      (currentHour < 5 || currentHour >= 19) &&
        screenWidth >= 620 &&
        setBackGroundImage("url('/desktop/bg-image-nighttime.jpg')");
    },

    []
  );
  useEffect(
    function () {
      async function fetchWorldTime() {
        if (ipCords && ipCords.timezone) {
          const response = await fetch(
            `https://worldtimeapi.org/api/timezone/${ipCords.timezone.id}`
          );
          const data = await response.json();
          setWorldTimeDetails(data);
          setIsLoading(false); // Mark loading as complete
        }
      }
      fetchWorldTime();
    },
    [ipCords]
  );

  useEffect(() => {
    function handleResize() {
      setScreenWidth(screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(
    function () {
      const timeDetails = document.querySelector("#time-details");
      if (timeDetails) {
        setTimeDetailsHeight(timeDetails.offsetHeight);
      }
    },
    [screenWidth, ipCords, worldTimeDetails]
  );

  // Use isLoading state to control transition class removal
  useEffect(() => {
    if (!isLoading) {
      const elements = document.querySelectorAll(
        ".css-transitions-only-after-page-load"
      );

      elements.forEach((element) => {
        setTimeout(() => {
          element.classList.remove("css-transitions-only-after-page-load");
        }, 100);
      });
    }
  }, [isLoading]);

  return (
    <>
      <div
        className={`transition-all  flex items-start justify-between py-9 md:py-20 md:pb-16 lg:py-14 lg:pb-[98px] pb-16 flex-col w-[100vw] h-[100vh] overflow-y-hidden px-[26px] bg-cover bg-no-repeat  md:px-16  lg:px-[165px]   relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black before:w-full before:h-full z-10 before:opacity-50 before:-z-10 ${
          isLoading ? "css-transitions-only-after-page-load" : ""
        }`}
        style={{
          transitionDuration: "1s",
          backgroundImage: backgroundImage,
          paddingBottom: isClicked ? "40px " : "",
        }}
      >
        <Quote timeDetailsHeight={timeDetailsHeight} isClicked={isClicked} />
        <Clock
          ipCords={ipCords}
          worldTimeDetails={worldTimeDetails}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          screenWidth={screenWidth}
          timeDetailsHeight={timeDetailsHeight}
        />
        <TimeDetails
          worldTimeDetails={worldTimeDetails}
          ipCords={ipCords}
          isClicked={isClicked}
          timeDetailsHeight={timeDetailsHeight}
        />
      </div>
    </>
  );
}

export default App;
