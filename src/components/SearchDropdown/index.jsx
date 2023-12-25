function SearchDropdown() {
  return (
    <div className="absolute z-[1] h-full w-full border-t-[1px] border-colorBlack bg-colorBlack bg-opacity-75">
      <div className="absolute top-0 z-[2] flex h-auto w-full items-start justify-between bg-textPrimary px-[140px] py-[54px] text-footerBg">
        <p className="text-display-13 opacity-50">Search for a watch...</p>
        <div className="flex items-center justify-between gap-10 font-sans">
          <div className="relative flex h-[53px] w-[174px] text-display-17">
            <div className="absolute bottom-0 h-[50px] w-[171px] border-[0.5px] border-textSecondary"></div>
            <div className="absolute right-0 h-[50px] w-[171px] border-[0.5px] border-textSecondary"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center"
            >
              Search
            </button>
          </div>
          <u>
            <p className=" text-display-17">Close</p>
          </u>
        </div>
      </div>
    </div>
  )
}
export default SearchDropdown
