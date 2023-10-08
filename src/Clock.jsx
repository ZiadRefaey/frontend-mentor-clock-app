import Button from "./Button";

import Sun from "./assets/icon-sun.svg";
export default function Clock() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-start gap-12 md:gap-20">
        <div className="flex gap-4 items-center justify-start flex-col">
          <div className="w-full flex items-start gap-4">
            <div className="w-6 h-6 object-contain">
              <img src={Sun} className="w-full h-full" alt="sun icon" />
            </div>
            <div className="text-sm leading-6 md:heading-s text-white h-full self-center">
              GOOD MORNING
            </div>
          </div>
          <h1 className="text-sm font-light md:time-zone text-white">
            <span className="text-8xl custom-tracking font-bold md:heading-xl">
              11:37
            </span>
            BST
          </h1>
          <h3 className="text-sm font-bold custom-tracking-wide md:heading-m w-full ">
            in london, uk
          </h3>
        </div>
        <div className="w-full">
          <Button>MORE</Button>
        </div>
      </div>
    </>
  );
}
