import { useState } from "react";
import NextImage from "../../../reuseComps/NextImage";
import Drawer from "../../../reuseComps/Drawer";

function HeaderMweb({ data }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const oakleighLogo = "/Images/oakleighLogo.svg";
  const menuIcon = "/Images/menuIconMweb.svg";

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="w-full h-[98px] flex items-center justify-between px-9 py-[30px]">
        <NextImage src={oakleighLogo} width="174" height="34" />
        <div className="flex items-center gap-2.5">
          <p onClick={openDrawer} className="text-display-9">
            Menu
          </p>
          <img
            src={menuIcon}
            className="w-[22px] h-[10px]"
            onClick={openDrawer}
          />
        </div>
      </div>
      <Drawer
        className="absolute w-20 h-full"
        isOpen={isDrawerOpen}
        direction={"right"}
        closeDrawer={closeDrawer}
        data={data}
      />
    </>
  );
}
export default HeaderMweb;
