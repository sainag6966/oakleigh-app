import { useState } from "react";
import NextImage from "../../../reuseComps/NextImage";
import Drawer from "../../../reuseComps/Drawer";

function HeaderDweb() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const oakleighLogo = '/Images/oakleighLogo.svg';
    const menuIcon = '/Images/menuIconMweb.svg';

    const openDrawer = () => {
        setIsDrawerOpen(true);
        console.log('click')
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <>
            <div className="px-9 py-[30px] w-full h-[98px] flex items-center justify-between">
                <NextImage src={oakleighLogo} width='174' height='34' />
                <div className="flex gap-2.5 items-center">
                    <p onClick={openDrawer} className="text-xl">Menu</p>
                    <img src={menuIcon} className="w-[22px] h-[10px] cursor-pointer" onClick={openDrawer} />
                </div>
            </div>
            <Drawer className='absolute w-20 h-full' isOpen={isDrawerOpen} />
        </>
    )
}
export default HeaderDweb;