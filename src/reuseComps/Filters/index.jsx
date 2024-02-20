import { useState } from 'react'
import MultiRangeSlider from '../DoubleRangeSlider'

function Filters() {
  const [expandGenderSec, setExpandGenderSec] = useState(false)
  const [expandModelSec, setExpandModelSec] = useState(false)
  const [expandYearSec, setExpandYearSec] = useState(false)
  const [expandConditionSec, setExpandConditionSec] = useState(false)
  const [expandIncludedSec, setExpandIncludedSec] = useState(false)
  const [expandPriceSec, setExpandPriceSec] = useState(false)
  const [expandAvailSec, setExpandAvailSec] = useState(false)
  const [expandSizeSec, setExpandSizeSec] = useState(false)
  return (
    <>
      <div className="h-auto min-w-[180px] xl:min-w-[240px] txl:min-w-[320px] ">
        <div className="flex h-auto w-full items-center justify-between border-b-[1.5px] border-filterBorder pb-[30px]">
          <p className="text-display-11 xl:text-display-12 txl:text-display-13">
            Filters
          </p>
          <u>
            <p className="font-sans text-display-1 xl:text-display-4 txl:text-display-17">
              X Clear Filters
            </p>
          </u>
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Gender</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandGenderSec
                  ? '/Images/upArrow.svg'
                  : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandGenderSec(!expandGenderSec)
              }}
            />
          </div>
          {expandGenderSec && (
            <div className="mt-5 font-sans">
              <div className="flex items-center justify-start space-x-4">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none border-[1px]  border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Unisex Watches</p>
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Model</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandModelSec ? '/Images/upArrow.svg' : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandModelSec(!expandModelSec)
              }}
            />
          </div>
          {expandModelSec && (
            <div className="mt-5 font-sans">
              <div className="flex items-center justify-start space-x-4">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
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
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="flex h-auto w-full flex-col gap-8 border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex w-full items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Year</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandYearSec ? '/Images/upArrow.svg' : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandYearSec(!expandYearSec)
              }}
            />
          </div>
          {expandYearSec && (
            <MultiRangeSlider
              min={1600}
              max={2024}
              preText={''}
              postText={''}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          )}
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">{`What's Included`}</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandIncludedSec
                  ? '/Images/upArrow.svg'
                  : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandIncludedSec(!expandIncludedSec)
              }}
            />
          </div>
          {expandIncludedSec && (
            <>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Full Set</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Box and Papers</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">With Box</p>
                </label>
              </div>
            </>
          )}
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Condition</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandConditionSec
                  ? '/Images/upArrow.svg'
                  : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandConditionSec(!expandConditionSec)
              }}
            />
          </div>
          {expandConditionSec && (
            <>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Unworn</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Excellent</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Very Good</p>
                </label>
              </div>
            </>
          )}
        </div>
        <div className="flex h-auto w-full flex-col gap-8 border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex w-full items-center justify-between">
            <p className="text-display-17 xl:text-display-11">PRICE</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandPriceSec ? '/Images/upArrow.svg' : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandPriceSec(!expandPriceSec)
              }}
            />
          </div>
          {expandPriceSec && (
            <MultiRangeSlider
              min={600}
              max={25000}
              preText={'£'}
              postText={''}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          )}
        </div>
        <div className="h-auto w-full border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-display-17 xl:text-display-11">Availability</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandAvailSec ? '/Images/upArrow.svg' : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandAvailSec(!expandAvailSec)
              }}
            />
          </div>
          {expandAvailSec && (
            <>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Available</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Reserved</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Coming Soon</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4 font-sans">
                <label className="flex items-center justify-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none rounded-none  border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Sold</p>
                </label>
              </div>
            </>
          )}
        </div>
        <div className="flex h-auto w-full flex-col gap-8 border-b-[1.5px] border-filterBorder py-[30px]">
          <div className="flex w-full items-center justify-between">
            <p className="text-display-17 xl:text-display-11">BRACELET SIZE</p>
            <img
              className="mt-1 h-3 w-4 cursor-pointer"
              src={
                expandSizeSec ? '/Images/upArrow.svg' : '/Images/downArrow.svg'
              }
              alt="upArrow"
              onClick={() => {
                setExpandSizeSec(!expandSizeSec)
              }}
            />
          </div>
          {expandSizeSec && (
            <MultiRangeSlider
              min={120}
              max={210}
              preText={''}
              postText={'mm'}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          )}
        </div>
      </div>
    </>
  )
}
export default Filters
