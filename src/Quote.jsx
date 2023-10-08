import Refresh from "./assets/icon-refresh.svg";
export default function Quote() {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-3 justify-between items-center max-w-[573px]">
        <div className="flex gap-4 items-center justify-between h-full">
          <p className="md:body text-xs leading-5 text-white">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <button className="min-h-[16.67px] min-w-[16.67px] object-contain self-start lg:mt-[10.5px]">
            <img src={Refresh} alt="refresh icon" className="w-full h-full" />
          </button>
        </div>
        <h5 className="md:heading-s-b text-xs leading-5 font-bold text-start text-white w-full">
          Ada Lovelace
        </h5>
      </div>
    </>
  );
}
