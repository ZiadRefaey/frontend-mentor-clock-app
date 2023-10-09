import Button from "./Button";
import "./App.css";
import Sun from "./assets/icon-sun.svg";
export default function Clock({
  isClicked,
  setIsClicked,
  screenWidth,
  timeDetailsHeight,
}) {
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
              <img src={Sun} className="w-full h-full" alt="sun icon" />
            </div>
            <div className="text-sm leading-6 md:text-lg  text-white h-full self-center">
              {screenWidth < 768
                ? "GOOD MORNING"
                : "GOOD MORNING, ITS CURRENTLY"}
            </div>
          </div>
          <h1 className="zone-font">
            <span className="clock-font lg:bg-inherit">11:37</span>
            BST
          </h1>
          <h3 className="text-sm font-bold custom-tracking-wide md:text-lg lg:text-2xl w-full ">
            in london, uk
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
