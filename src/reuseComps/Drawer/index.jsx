import { useEffect, useState } from "react";

const Drawer = ({ isOpen, closeDrawer }) => {
    const [item, setItem] = useState([])
    const username = 'oakleighcdadevel';
    const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1';

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://oakleigh.cda-development3.co.uk/wp-json/wp/v2/menu-items?menus=18', {
                method: 'get',
                headers: {
                    "Content-Type": "text/plain",
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                },
            });
            const data = await response.json();
            setItem(data);
        };
        getData();
    }, [isOpen]);

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-md z-50`}
        >
            <div className="p-4 flex flex-col gap-3">
                <button
                    onClick={closeDrawer}
                    className="float-right text-gray-600 hover:text-gray-800"
                >
                    <img
                        className="w-5 h-5 mt-0 mb-0"
                        src="/images/carouselArrowLeft.svg"
                        alt=""
                    />
                </button>
                {item.map((e, index) => {
                    return (
                        <div key={index} className="flex justify-start items-center gap-1 bg-bgColor w-full h-10">
                            <h4
                                className=" text-[14px] lg:text-sm font-bold tracking-widest md:tracking-wider pl-2"
                                key={index}
                            >
                                {e.title.rendered}
                            </h4>
                            <img
                                className="w-3 h-3 mt-0 mb-0"
                                src="/images/listArrow.svg"
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Drawer;