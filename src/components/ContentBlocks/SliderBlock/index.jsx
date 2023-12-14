
import SimpleSlider from "@/reuseComps/Slider";

function SliderBlock() {
    const data = [
        {
          url: "/Images/Sample/insight1.svg",
          title: "Rolex 16523 ‘Zenith’ Daytona",
          buttonTitle: "View Watch",
          description:'Oyster, 40 mm, Oystersteel and yellow gold',
          price:'12000'
        },
        {
          url: "/Images/Sample/insight2.svg",
          title: "Zenith Defy EL Primero 21",
          buttonTitle: "View Watch",
          description:'Oyster, 40 mm, Oystersteel and yellow gold',
          price:'13000'
        },
        {
          url: "/Images/Sample/insight3.svg",
          title: "Rolex 226570 Explorer II",
          buttonTitle: "View Watch",
          description:'Oyster, 40 mm, Oystersteel and yellow gold',
          price:'14000'
        },
        {
          url: "/Images/Sample/insight4.svg",
          title: "Rolex 226570 Explorer II",
          buttonTitle: "View Watch",
          description:'Oyster, 40 mm, Oystersteel and yellow gold',
          price:'15000'
        },
      ];
    return(
        <div className="pt-[60px] lg:pt-[100px] 2xl:pt-[120px] px-9 lg:px-20 2xl:px-[140px] flex flex-col gap-10 justify-center items-center">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                <p className="text-display-12 2xl:text-display-14">Currently Available</p>
                <u><p className="text-display-4 2xl:text-display-17">View All</p></u>
            </div>
            <SimpleSlider trayData={data} navButtons slidesToShow={3}/>
        </div>
    )
}
export default SliderBlock;