import "./App.css";
import Quote from "./Quote";
import Clock from "./Clock";
import { useState, useEffect } from "react";
function App() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(screen.width);
    }

    window.addEventListener("resize", handleResize);
    console.log(screenWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <>
      <div
        style={
          screenWidth < 620
            ? { backgroundImage: "url('/mobile/bg-image-daytime.jpg')" }
            : { backgroundImage: "url('/desktop/bg-image-daytime.jpg')" }
        }
        className="flex items-start justify-between flex-col w-[100vw] h-[100vh] overflow-y-hidden px-[26px] bg-cover bg-no-repeat py-9 md:px-16 md:py-20 md:pb-16 lg:px-[165px] lg:py-14 lg:pb-[98px] pb-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black before:w-full before:h-full z-10 before:opacity-50 before:-z-10"
      >
        <Quote />
        <Clock />
      </div>
    </>
  );
}

export default App;
