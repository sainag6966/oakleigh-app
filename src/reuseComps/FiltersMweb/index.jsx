import Image from "next/image";
import { useState } from "react";

function FiltersMweb() {
  const [showFilters, setShowFilters] = useState(false);
  const plusIcon = "/Images/plusIcon.svg";
  const minusIcon = "/Images/minusIcon.svg";
  const headerIcon = showFilters ? minusIcon : plusIcon;
  const [clickedLink, setClickedLink] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [accor, setAccor] = useState(false);
  const data1 = [
    "Gender",
    "Model",
    "What's Included",
    "Condition",
    "Availability",
  ];
  const gender = ["Men's Watches", "Women's Watches", "Unisex Watches"];
  const model = ["Model", "Model", "Model", "Model", "Model", "Model"];
  const whatsIncluded = ["Full Set", "Box And Papers", "With Box"];
  const condition = ["Unworn", "Excellent", "Very Good"];
  const availability = ["Avaliable", "Reserved", "Coming Soon", "Sold"];

  const handleAcor = (link) => {
    setAccor(true);
    switch (link) {
      case "Gender":
        setClickedLink(link);
        setLinkData(gender);
        break;
      case "Model":
        setClickedLink(link);
        setLinkData(model);
        break;
      case "What's Included":
        setClickedLink(link);
        setLinkData(whatsIncluded);
        break;
      case "Condition":
        setClickedLink(link);
        setLinkData(condition);
        break;
      case "Availability":
        setClickedLink(link);
        setLinkData(availability);
        break;
      default:
        return "";
    }
  };

  const handleClose = (link) => {
    setAccor(false);
  };

  const handleFilterWindow = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-2 bg-search p-3" onClick={handleFilterWindow}>
        <Image src={headerIcon} width={16} height={16} alt="plusIcon" />
        <div className="text-display-11">Filter By Category</div>
      </div>
      {showFilters && (
        <div className="w-full h-auto text-black flex items-center flex-col gap-[60px]">
          <div className="flex flex-col items-center justify-center w-full h-auto">
            {data1.map((link, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="flex gap-2 justify-center items-center"
                    key={index}
                  >
                    <div className="text-display-9 tracking-normal">{link}</div>
                    {accor && link === clickedLink ? (
                      <div onClick={handleClose} className="text-[25px] mb-[3px]">
                        -
                      </div>
                    ) : (
                      <div
                        onClick={() => handleAcor(link)}
                        className="text-[25px] mb-[3px]"
                      >
                        +
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    {accor &&
                      link === clickedLink &&
                      linkData.map((e, index) => {
                        return (
                          <div key={index} className="flex items-center justify-start space-x-4">
                            <label className="flex justify-center items-center gap-[18px]">
                              <input
                                type="checkbox"
                                className="w-3 h-3 xl:w-5 xl:h-5"
                              />
                              <p className="text-display-6">{e}</p>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showFilters && <div className="bg-black text-textPrimary font-sans p-2 text-display-3" onClick={handleFilterWindow}>Apply Filters</div>}
    </div>
  );
}
export default FiltersMweb;
