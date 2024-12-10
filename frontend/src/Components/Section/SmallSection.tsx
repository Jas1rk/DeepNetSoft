import smallBg from "../../public/smallbg.png";
import UseFetchMenu from "../../Hooks/UseFetchMenu";
import { useEffect, useState } from "react";
import MenuSection from "./MenuSection";

const SmallSection = () => {
  const { menuItems } = UseFetchMenu();
  const [selectMenu, setSelectMenu] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (menuItems?.length > 0) {
      setSelectMenu(menuItems[0]);
      setActiveIndex(0);
    }
  }, [menuItems]);

  const handleClick = (menu: any, index: number) => {
    setSelectMenu(menu);
    setActiveIndex(index);
  };

  return (
    <>
      <section className="w-full relative">
        <img
          src={smallBg}
          alt="bg-tiny"
          className="object-cover w-full h-[79px]"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex justify-center items-center px-4 text-white gap-5">
          {Array.isArray(menuItems) &&
            menuItems?.map((data: any, index: number) => (
              <div
                className={`p-2 px-3 border cursor-pointer hover:bg-[#0796EF] ${
                  activeIndex === index
                    ? "bg-[#0796EF] border-none"
                    : "border-[#0796EF] bg-black"
                }`}
                key={index}
                onClick={() => handleClick(data, index)}
              >
                {data?.menuName}
              </div>
            ))}
        </div>
      </section>
      {selectMenu && <MenuSection selectedMenu={selectMenu} />}
    </>
  );
};

export default SmallSection;
