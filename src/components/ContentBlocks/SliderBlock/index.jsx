
import SimpleSlider from "@/reuseComps/Slider";

function SliderBlock() {
    return(
        <div className="pt-[60px] lg:pt-[100px] 2xl:pt-[120px] px-9 lg:px-20 2xl:px-[140px] flex flex-col gap-10 justify-center items-center">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                <p className="text-display-12 2xl:text-display-14">Currently Available</p>
                <u><p className="text-display-4 2xl:text-display-17">View All</p></u>
            </div>
            <SimpleSlider/>
        </div>
    )
}
export default SliderBlock;