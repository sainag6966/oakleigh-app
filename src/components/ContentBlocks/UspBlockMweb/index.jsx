import NextImage from "@/reuseComps/NextImage";
import { useMediaQuery } from "react-responsive";

function UspBlockMweb({ trayData }) {
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const data = trayData?.ub_list;

  return (
    <div className="bg-uspBlockBackground flex w-full items-center justify-evenly h-[115px]">
      {data.map((e, index) => {
        return (
          <>
            <div className="flex items-center justify-center gap-5 w-auto">
              <NextImage
                src={e.ub_image}
                width="40"
                height="24"
                alt="uspIcon"
              />
              <p className="text-[20px]">{e.ub_title}</p>
            </div>
            {data.length - 1 !== index && (
              <div className="min-w-[30px] h-[0.5px] bg-black grow-[0.1]"></div>
            )}
          </>
        );
      })}
    </div>
  );
}
export default UspBlockMweb;
