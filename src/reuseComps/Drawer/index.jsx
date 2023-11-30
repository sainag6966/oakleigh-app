import Divider from "../Divider";
import NextImage from "../NextImage";

const Drawer = ({ isOpen, closeDrawer, data, direction }) => {
    const closeIcon = '/Images/closeIcon.svg';
    const oakleighLogo = '/Images/oakleighLogo.svg';
    const searchIcon = '/Images/searchIcon.svg';
    return (
        <div
            className={`fixed top-0 left-0 h-full w-full bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-md z-50`}
        >
            <div className="px-9 py-[30px] w-full h-[98px] border-b border-black flex items-center justify-between">
                <NextImage src={oakleighLogo} width='174' height='34' />
                <div className="flex items-center gap-2.5" onClick={closeDrawer}>
                    <p className="text-xl">Close</p>
                    <img src={closeIcon} className="w-[10px] h-[10px] cursor-pointer mt-[2px]" />
                </div>
            </div>
            <div className="py-[50px] px-9 flex flex-col gap-6">
                {data?.map((e, index) => {
                    return (
                        <div key={index} className="flex justify-start items-center gap-1 bg-bgColor w-full">
                            <p
                                className=" text-[14px] lg:text-sm font-sans font-semibold tracking-widest md:tracking-wider"
                                key={index}
                            >
                                {e.title.rendered}
                            </p>
                        </div>
                    );
                })}
                <Divider />
                <div className="w-full h-10 px-[30px] bg-search flex justify-between items-center">
                    <p>Search</p>
                    <NextImage src={searchIcon} width='18' height='20' />
                </div>
            </div>
        </div>
    );
};
export default Drawer;