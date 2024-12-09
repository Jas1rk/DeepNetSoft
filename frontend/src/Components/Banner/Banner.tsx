import bannerImage from "../../public/banner.jpeg";

const Banner = () => {
  return (
    <section className="w-full relative">
      <img
        src={bannerImage}
        alt="banner"
        className="w-full h-[250px] md:h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="font-Oswald text-[32px] md:text-[75px] font-semibold text-shadow-customRed text-white leading-tight">
          MENU
        </h1>
        <p className="text-[#BBBBBB] text-[16px] md:text-[18px] font-KellySlab max-w-[42rem]">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </section>
  );
};

export default Banner;
