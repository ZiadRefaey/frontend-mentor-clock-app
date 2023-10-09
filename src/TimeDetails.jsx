export default function TimeDetails({
  isClicked,
  timeDetailsHeight,
  ipCords,
  worldTimeDetails,
}) {
  return (
    <>
      <div
        id="time-details"
        style={
          isClicked
            ? {
                bottom: `0px`,
              }
            : {
                bottom: `-${timeDetailsHeight}px`,
              }
        }
        className={`css-transitions-only-after-page-load absolute left-0 px-[26px] md:px-16 bottom-[-${timeDetailsHeight}px]  md:py-[120px] lg:px-[165px] lg:py-[74px] py-12 w-[100%] time-details-light flex items-center justify-center flex-col gap-4 md:flex-row md:items-start md:justify-start transition-all duration-1000`}
      >
        <div className="flex items-center justify-center flex-col gap-4 md:gap-[50px] w-full">
          <div className="flex items-center justify-between w-full md:flex-col md:justify-start md:items-start md:text-start lg:gap-2 ">
            <p className="text-xs leading-7 text-darkGrey self-center md:self-start lg:heading-s">
              CURRENT TIMEZONE
            </p>
            <p className=" text-darkGrey text-lg font-bold md:text-4xl xl:text-5xl self-center md:self-start">
              {ipCords?.timezone?.id}
            </p>
          </div>

          <div className="flex items-center justify-between w-full md:flex-col md:justify-start md:items-start md:text-start lg:gap-2 ">
            <p className="text-xs leading-7 text-darkGrey self-center md:self-start lg:heading-s">
              DAY OF THE YEAR
            </p>
            <p className=" text-darkGrey text-lg font-bold md:text-4xl xl:text-5xl self-center md:self-start">
              {worldTimeDetails?.day_of_year}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 md:gap-[50px] w-full">
          <div className="flex items-center justify-between w-full md:flex-col md:justify-start md:items-start md:text-start lg:gap-2 ">
            <p className="text-xs leading-7 text-darkGrey self-center md:self-start lg:heading-s">
              DAY OF THE WEEK
            </p>
            <p className=" text-darkGrey text-lg font-bold md:text-4xl xl:text-5xl self-center md:self-start">
              {worldTimeDetails?.day_of_week}
            </p>
          </div>

          <div className="flex items-center justify-between w-full md:flex-col md:justify-start md:items-start md:text-start lg:gap-2 ">
            <p className="text-xs leading-7 text-darkGrey self-center md:self-start lg:heading-s">
              WEEK NUMBER
            </p>
            <p className=" text-darkGrey text-lg font-bold md:text-4xl xl:text-5xl self-center md:self-start">
              {worldTimeDetails?.week_number}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
