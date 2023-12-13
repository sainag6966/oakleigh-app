function FullWidthVipAdBlock() {
  const vipIcon = "/Images/Sample/vipBlock1.svg";
  return (
    <div className="w-full h-[640px] mt-[60px] lg:mt-[100px] relative bg-uspBlockBackground flex flex-col p-28 justify-between gap-6 items-center">
      <img src={vipIcon} alt="vipIcon"></img>
      <p className="text-display-15 text-center">
        WANT TO BE THE FIRST TO HEAR ABOUT WATCHES FROM THIS BRAND?{" "}
      </p>
      <p className="text-display-6 text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </p>
      <div className="w-48 h-8 relative border-[1px] flex justify-center items-center border-black">
        <button
          type="submit"
          className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
        >
          JOIN NOW FOR FREE
        </button>
      </div>
      <u>
        <span className="font-sans text-display-4">Find Out More</span>
      </u>
      <div className="absolute top-[-1px] left-[-1px] w-5 h-5 bg-textPrimary" />
      <div className="absolute top-[-1px] right-[-1px] w-5 h-5 bg-textPrimary" />
      <div className="absolute bottom-[-1px] left-[-1px] w-5 h-5 bg-textPrimary" />
      <div className="absolute bottom-[-1px] right-[-1px] w-5 h-5 bg-textPrimary" />
    </div>
  );
}
export default FullWidthVipAdBlock;
