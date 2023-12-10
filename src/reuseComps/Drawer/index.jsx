import Divider from "../Divider";
import NextImage from "../NextImage";

const Drawer = ({ isOpen, closeDrawer, data, direction }) => {
  const closeIcon = "/Images/closeIcon.svg";
  const oakleighLogo = "/Images/oakleighLogo.svg";
  const searchIcon = "/Images/searchIcon.svg";
  const accountIcon = "/Images/accountIcon.svg";
  const dwebAccountIcon = "/Images/dwebAccountIcon.svg";
  const filterData = data.filter((e) => {
    const skipMenu = ["Divider", "My account", "Basket"];
    return !skipMenu.includes(e.title.rendered);
  });

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white transform overflow-scroll ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-md z-50`}
    >
      <div className="w-full h-[98px] px-9 py-[30px] flex items-center justify-between border-b border-black">
        <NextImage src={oakleighLogo} width="174" height="34" />
        <div className="flex items-center gap-2.5" onClick={closeDrawer}>
          <p className="text-display-9">Close</p>
          <img
            src={closeIcon}
            className="w-[10px] h-[10px] cursor-pointer mt-[2px]"
          />
        </div>
      </div>
      <div className="py-[50px] px-9 flex flex-col gap-1 font-sans text-display-8">
        {filterData?.map((e, index) => {
          return (
            <div
              key={index}
              className={`flex justify-start items-center bg-bgColor w-full ${filterData.length -1 === index ? 'pb-6': 'pb-0'}`}
            >
              <p key={index}>{e.title.rendered}</p>
            </div>
          );
        })}
        <div className="flex flex-col justify-around gap-8">
          {/* <Divider /> */}
          <div className="flex flex-col py-6 border-y-[1px] border-uspBlockBackground">
            <div className="flex gap-3">
              <NextImage src={accountIcon} width="15" height="11" />
              <p>My Account</p>
            </div>
            <div className="flex gap-3">
              <NextImage src={dwebAccountIcon} width="15" height="11" />
              <p>Basket (0)</p>
            </div>
          </div>
          {/* <Divider /> */}
          <div className="w-full h-10 px-[30px] bg-search flex justify-between items-center">
            <p>Search</p>
            <NextImage src={searchIcon} width="18" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
