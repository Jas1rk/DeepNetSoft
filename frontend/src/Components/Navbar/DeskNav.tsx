import { useState } from "react";
import logo from "../../public/logoonly.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MobileNavbar } from "..";

const DeskNav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="bg-[#121618]">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="flex gap-2  justify-center items-center m-auto sm:m-0 top-[3rem] sm:left-[10rem] relative">
          <div className=" ">
            <img src={logo} alt="logo-image" className="w-24 mx-auto" />
          </div>
          <div className="hidden sm:flex flex-col font-Oswald font-normal text-lg text-[35px] leading-[51.87px] ">
            <div className="gap-2 flex ">
              <span className="text-[#0796EF]">DEEP</span>
              <span className="text-[#fff]">NET</span>
            </div>
            <p className="text-[#857878] tracking-[5%]">SOFT</p>
          </div>
        </div>
        <ul className="hidden sm:flex gap-8 text-white font-Oswald font-normal  sm:text-base pt-[3.5rem]">
          <li className="hover:text-[#0796EF] cursor-pointer">HOME</li>
          <li className="hover:text-[#0796EF] cursor-pointer">MENU</li>
          <li className="hover:text-[#0796EF] cursor-pointer">
            MAKE A RESERVATION
          </li>
          <li className="hover:text-[#0796EF] cursor-pointer">CONTACT US</li>
        </ul>
        <div className="sm:hidden text-[#857878] text-3xl cursor-pointer">
          <AiOutlineMenu onClick={() => setMenuOpen(true)} />
        </div>
        {menuOpen && (
          <MobileNavbar
            onCloseMenu={() => setMenuOpen(false)}
            openMenu={menuOpen}
          />
        )}
      </nav>
    </header>
  );
};

export default DeskNav;
