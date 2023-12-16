function FullWidthVipAdBlock() {
  const vipIcon = '/Images/Sample/vipBlock1.svg'

  return (
    <div className="relative mt-[60px] flex h-[640px] w-full flex-col items-center justify-between gap-6 bg-uspBlockBackground p-28 lg:mt-[100px]">
      <img src={vipIcon} alt="vipIcon"></img>
      <p className="text-center text-display-15">
        WANT TO BE THE FIRST TO HEAR ABOUT WATCHES FROM THIS BRAND?{' '}
      </p>
      <p className="text-center text-display-6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </p>
      <div className="relative flex h-8 w-48 items-center justify-center border-[1px] border-black">
        <button
          type="submit"
          className="absolute right-[1px] top-[1px] h-full w-full border-[1px] border-black"
        >
          JOIN NOW FOR FREE
        </button>
      </div>
      <u>
        <span className="font-sans text-display-4">Find Out More</span>
      </u>
      <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
      <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
      <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
      <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
    </div>
  )
}
export default FullWidthVipAdBlock
