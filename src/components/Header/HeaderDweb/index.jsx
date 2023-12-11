import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";

function HeaderDweb({ data }) {
  const oakleighLogo = "/Images/oakleighLogo.svg";
  const searchIcon = "/Images/searchIcon.svg";
  const accountIcon = "/Images/accountIcon.svg";
  const dwebAccountIcon = "/Images/dwebAccountIcon.svg";
  const dividerLine = "/Images/dividerLine.svg";
  const imgArr = [searchIcon, accountIcon, dwebAccountIcon];
  const filterData = data.filter((e) => {
    const skipMenu = ["Divider", "My account", "Basket"];
    return !skipMenu.includes(e.title.rendered);
  });

  return (
    <div className="w-full h-[98px] 2xl:h-40 px-9 xl:px-16 2xl:px-28 py-[30px] 2xl:py-12 flex items-center justify-between gap-6">
      <div className="w-40 xl:w-48 2xl:w-80 h-auto">
        <Image src={oakleighLogo} width="300" height="60" layout="responsive" />
      </div>
      <div className="flex justify-evenly items-center grow-[2]">
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="font-sans text-display-extra xl:text-display-5 2xl:text-display-8"
            >
              {item.title.rendered}
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 items-center justify-evenly grow-[0.3]">
        {imgArr.map((e, index) => {
          return (
            <div
              key={index}
              className="w-3 xl:w-4 2xl:w-5 h-3 flex items-center justify-center"
            >
              <NextImage src={e} width="20" height="20" layout="responsive" />
            </div>
          );
        })}
        {/* <NextImage src={searchIcon} width="15" height="11" />
        <NextImage src={dividerLine} width="1" height="11" />
        <NextImage src={accountIcon} width="15" height="11" />
        <NextImage src={dwebAccountIcon} width="15" height="11" /> */}
      </div>
    </div>
  );
}
export default HeaderDweb;
