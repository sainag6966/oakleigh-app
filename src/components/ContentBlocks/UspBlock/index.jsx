import NextImage from "@/reuseComps/NextImage";
import { useMediaQuery } from "react-responsive";
function UspBlock({ trayData }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' });
  const data = trayData?.ub_list[1];

  return (
    <div className="bg-uspBlockBackground flex w-full justify-between h-[115px]">
          <div
            className="w-full flex items-center justify-between gap-4"
          >
            <div className="min-w-[30px] h-[0.5px] bg-black grow-[0.4]"/>
            <div className="flex items-center justify-center gap-5 w-auto">
              <NextImage src={data.ub_image} width="40" height="24" alt="uspIcon" />
              <p className="text-[20px]">{data.ub_title}</p>
            </div>
            <div className="min-w-[30px] h-[0.5px] bg-black grow-[0.4]"/>
            {/* {data.length - 1 !== index && (
              <div className="min-w-[30px] h-[0.5px] bg-black"></div>
            )} */}
          </div>
    </div>
  );
}
export default UspBlock;
