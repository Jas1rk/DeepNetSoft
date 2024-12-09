import smallBg from "../../public/smallbg.png";

const SmallSection = () => {
  return (
    <section className="w-full relative">
      <img
        src={smallBg}
        alt="bg-tiny"
        className="object-cover w-full h-[79px]"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex justify-center items-center px-4 text-white gap-5">
        <div className="bg-black p-2 px-3 border border-[#0796EF] cursor-pointer hover:bg-[#0796EF]">
          FOOD
        </div>
        <div className="bg-black p-2 px-3 border border-[#0796EF] cursor-pointer hover:bg-[#0796EF]">
          DRINKS
        </div>
        <div className="bg-black p-2 px-3 border border-[#0796EF] cursor-pointer hover:bg-[#0796EF]">
          BRUNCH
        </div>
      </div>
    </section>
  );
};

export default SmallSection;
