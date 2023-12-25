function SearchDropdown({ setOpenSearchModal }) {
  return (
    <div className="absolute z-[1] h-full w-full border-t-[1px] border-colorBlack bg-colorBlack bg-opacity-75">
      <div className="absolute top-0 z-[2] flex h-auto w-full items-center justify-between bg-textPrimary px-12 py-5 text-footerBg xl:px-20 xl:py-8 dxl:px-[140px] dxl:py-[54px]">
        <p className="text-display-11 opacity-50 xl:text-display-13">
          Search for a watch...
        </p>
        <div className="flex items-center justify-between gap-10 font-sans">
          <div className="relative flex h-[40px] w-[120px] text-display-4 xl:h-[53px] xl:w-[174px] xl:text-display-17">
            <div className="absolute bottom-0 h-[37px] w-[117px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[171px]"></div>
            <div className="absolute right-0 h-[37px] w-[117px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[171px]"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center"
            >
              Search
            </button>
          </div>
          <u>
            <p
              className="text-display-4 xl:text-display-17"
              onClick={() => {
                setOpenSearchModal(false)
              }}
            >
              Close
            </p>
          </u>
        </div>
      </div>
    </div>
  )
}
export default SearchDropdown
