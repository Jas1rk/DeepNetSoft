import menuBg from "../../public/sectionbg.png";
import beerImage from "../../public/beer.png";
import coctailImage from "../../public/coctail.png";
import { CreateMenuItems } from "..";

const MenuSection = () => {
  return (
    <>
      <section className="w-full relative">
        <img
          src={menuBg}
          alt="menu-background"
          className="object-cover h-[672px] w-full"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 border m-10 sm:m-28">
          <img
            src={beerImage}
            alt="beer-image"
            className="absolute w-[76px] h-[111px] md:w-[190px] md:h-[281px] -top-5 -left-3 md:-top-36 md:-left-10"
          />
          <div className="flex gap-3 px-10 justify-center items-center text-center">
            <span className="bg-[#857878] text-3xl h-[2px] w-[68px] md:h-[3px] rounded-sm"></span>
            <h1 className="text-white font-semibold text-[25px] md:text-[50px] text-shadow-customRed">
              BRUNCH COCKTAILS
            </h1>
            <span className="bg-[#857878] text-3xl h-[2px] w-[68px] md:h-[3px] rounded-sm"></span>
          </div>
          <div className="md:grid md:grid-cols-2 p-3 mt-10">
            <div className="flex flex-col p-3 mt-4">
              <h1 className="text-white text-[14px] md:text-[26px] font-normal leading-[23.71px] font-Oswald">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <p className="font-KellySlab text-[#857878] font-normal text-[13px] md:text-[18px] md:pt-2">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </p>
            </div>

            <div className="flex flex-col p-3 mt-4">
              <h1 className="text-white text-[14px] md:text-[26px] font-normal leading-[23.71px] font-Oswald">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <p className="font-KellySlab text-[#857878] font-normal text-[13px] md:text-[18px] md:pt-2">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </p>
            </div>
            <div className="flex flex-col p-3 mt-4">
              <h1 className="text-white text-[14px] md:text-[26px] font-normal leading-[23.71px] font-Oswald">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <p className="font-KellySlab text-[#857878] font-normal text-[13px] md:text-[18px] md:pt-2">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </p>
            </div>
          </div>
          <img
            src={coctailImage}
            alt="coctail-image"
            className="absolute w-[76px] h-[111px] md:w-[190px] md:h-[281px] -bottom-2 -right-2 md:-bottom-14 md:-right-2"
          />
          <div className="absolute text-white inset-0 -bottom-[28rem]  justify-center items-center flex  ">
            <CreateMenuItems />
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
