import MultiRangeSlider from "../DoubleRangeSlider";

function Filters() {
  return (
    <>
      <div className="min-w-[180px] xl:min-w-[240px] 3xl:min-w-[320px] h-auto ">
        <div className="w-full h-auto flex justify-between items-center pb-[30px] border-b-[1.5px] border-filterBorder">
          <p className="text-display-11 xl:text-display-12 3xl:text-display-13">
            Filters
          </p>
          <u>
            <p className="text-display-1 xl:text-display-4 3xl:text-display-17 font-sans">
              X Clear Filters
            </p>
          </u>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-17 xl:text-display-11">Gender</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">{`Men's Watches`}</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">{`Women's Watches`}</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Unisex Watches</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-17 xl:text-display-11">Model</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
        <div className="w-full flex justify-between items-center">
            <p className="text-display-17 xl:text-display-11">Year</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
        <MultiRangeSlider
          min={1600}
          max={2024}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-17 xl:text-display-11">{`What's Included`}</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Full Set</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Box and Papers</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">With Box</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-17 xl:text-display-11">Condition</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Unworn</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Excellent</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Very Good</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-17 xl:text-display-11">Availability</p>
            <img
              className="w-4 h-3 mt-1"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Available</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Reserved</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Coming Soon</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-3 h-3 xl:w-5 xl:h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Sold</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default Filters;
