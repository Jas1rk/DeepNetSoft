import { IoIosCloseCircle } from "react-icons/io";

type MobileNav = {
  openMenu: boolean;
  onCloseMenu: (value: boolean) => void;
};

const Mobilenav = ({ onCloseMenu, openMenu }: MobileNav) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[70%] bg-[#121618] text-white p-6 transform transition-transform duration-300 ease-in-out ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" text-[#857878] text-3xl cursor-pointer flex justify-end items-center">
        <IoIosCloseCircle onClick={onCloseMenu} />
      </div>
      <ul className="flex flex-col gap-6 font-Oswald text-lg mt-5">
        <li
          className="hover:text-[#0796EF] cursor-pointer"
          
        >
          HOME
        </li>
        <li
          className="hover:text-[#0796EF] cursor-pointer"
          onClick={() => onCloseMenu(false)}
        >
          MENU
        </li>
        <li
          className="hover:text-[#0796EF] cursor-pointer"
          onClick={() => onCloseMenu(false)}
        >
          MAKE A RESERVATION
        </li>
        <li
          className="hover:text-[#0796EF] cursor-pointer"
          onClick={() => onCloseMenu(false)}
        >
          CONTACT US
        </li>
      </ul>
    </div>
  );
};

export default Mobilenav;
