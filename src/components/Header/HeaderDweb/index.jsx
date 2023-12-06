import NextImage from "@/reuseComps/NextImage";
function HeaderDweb({ data }) {
  const oakleighLogo = "/Images/oakleighLogo.svg";
  const searchIcon = "/Images/searchIcon.svg";
  const accountIcon = "/Images/accountIcon.svg";
  const dwebAccountIcon = "/Images/dwebAccountIcon.svg";
  const dividerLine = "/Images/dividerLine.svg";
  const filterData = data.filter((e) => {
    const skipMenu = ['Divider', 'My account', 'Basket'];
    return !skipMenu.includes(e.title.rendered);
  });

  return (
    <div className="px-9 py-[30px] w-full h-[98px] flex items-center justify-between">
      <NextImage src={oakleighLogo} width="174" height="34" />
      <div className="flex justify-evenly items-center grow-[1.2]">
        {filterData.map((item,index) => {
          return (
            <div key={index} className="font-sans text-[0.875rem]">{item.title.rendered}</div>
          );
        })}
      </div>
      <div className="flex gap-5">
        <NextImage src={searchIcon} width="15" height="11" />
        <NextImage src={dividerLine} width="1" height="11" />
        <NextImage src={accountIcon} width="15" height="11" />
        <NextImage src={dwebAccountIcon} width="15" height="11" />
      </div>
    </div>
  );
}
export default HeaderDweb;
