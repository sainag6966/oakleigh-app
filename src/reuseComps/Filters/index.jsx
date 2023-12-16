import MultiRangeSlider from '../DoubleRangeSlider'

function Filters() {
  return (
    <>
      <div className="txl:min-w-[320px] h-auto min-w-[180px] xl:min-w-[240px] ">
        <div className="flex h-auto w-full items-center justify-between border-b-[1.5px] border-filterBorder pb-[30px]">
          <p className="txl:text-display-13 text-display-11 xl:text-display-12">
            Filters
          </p>
          <u>
            <p className="txl:text-display-17 font-sans text-display-1 xl:text-display-4">
              X Clear Filters
            </p>
          </u>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Gender</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">{`Men's Watches`}</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">{`Women's Watches`}</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Unisex Watches</p>
            </label>
          </div>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Model</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex w-full items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Year</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <MultiRangeSlider
            min={1600}
            max={2024}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">{`What's Included`}</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Full Set</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Box and Papers</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">With Box</p>
            </label>
          </div>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Condition</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Unworn</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Excellent</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Very Good</p>
            </label>
          </div>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Availability</p>
            <img
              className="mt-1 h-3 w-4"
              src="/Images/upArrow.svg"
              alt="upArrow"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Available</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Reserved</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Coming Soon</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex items-center justify-center gap-[18px]">
              <input
                type="checkbox"
                className="h-3 w-3 xl:h-5 xl:w-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Sold</p>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default Filters
