import chevron from "./assets/icon-arrow-down.svg";
export default function Button({ children, onClick }) {
  return (
    <>
      <button className="rounded-full bg-white px-4 py-2 heading-s-b text-gray-600 flex items-center justify-between gap-2 text-base leading-7 btn-spacing">
        {children}
        <div className="w-10 h-10 bg-darkGrey rounded-full flex items-center justify-center">
          <div className="min-w-[12px] min-h-[6px]  object-contain transition-all ">
            <img src={chevron} alt="chevron-icon" className="w-full h-full" />
          </div>
        </div>
      </button>
    </>
  );
}
