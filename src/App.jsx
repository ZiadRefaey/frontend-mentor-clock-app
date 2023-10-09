import "./App.css";
import Quote from "./Quote";
import Clock from "./Clock";
import TimeDetails from "./TimeDetails";
import { useState, useEffect } from "react";
function App() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const [timeDetailsHeight, setTimeDetailsHeight] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  //storing the timedetails height to use it for transitions
  useEffect(
    function () {
      const timeDetails = document.querySelector("#time-details");
      if (timeDetails) {
        setTimeDetailsHeight(timeDetails.offsetHeight);
      }
    },
    [screenWidth]
  );

  // getting the screen width to help with responsiveness
  useEffect(() => {
    function handleResize() {
      setScreenWidth(screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".css-transitions-only-after-page-load"
    );

    elements.forEach((element) => {
      setTimeout(() => {
        element.classList.remove("css-transitions-only-after-page-load");
      }, 100);
    });
  }, []);

  return (
    <>
      <div
        className="flex items-start transition-all duration-1000 justify-between py-9 md:py-20 md:pb-16 lg:py-14 lg:pb-[98px] pb-16 flex-col w-[100vw] h-[100vh] overflow-y-hidden px-[26px] bg-cover bg-no-repeat  md:px-16  lg:px-[165px]   relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black before:w-full before:h-full z-10 before:opacity-50 before:-z-10"
        style={{
          backgroundImage:
            screenWidth < 620
              ? "url('/mobile/bg-image-daytime.jpg')"
              : "url('/desktop/bg-image-daytime.jpg')",
          paddingBottom: isClicked ? "40px " : "",
        }}
      >
        <Quote timeDetailsHeight={timeDetailsHeight} isClicked={isClicked} />
        <Clock
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          screenWidth={screenWidth}
          timeDetailsHeight={timeDetailsHeight}
        />
        <TimeDetails
          isClicked={isClicked}
          timeDetailsHeight={timeDetailsHeight}
        />
      </div>
    </>
  );
}

export default App;
