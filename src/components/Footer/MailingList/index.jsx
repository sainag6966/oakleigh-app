function MailingList() {
  return (
    <div className="flex w-full flex-col gap-5 px-12 sm:px-20 lg:w-[300px] lg:px-0 dxl:w-[389px]">
      <h1 className="text-display-11 dxl:text-display-12">
        Join Our Mailing List
      </h1>
      <form
        id="subscribeForm"
        className="flex flex-col gap-[15px] font-sans text-display-6"
        action="#"
        method="post"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="h-[50px] w-full pl-[30px]"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          className="h-[50px] w-full pl-[30px]"
        />

        <div className="flex h-[53px] w-full items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-start gap-2">
            <div className="flex h-[15px] w-[15px] items-center justify-between">
              <input
                type="checkbox"
                id="subscribeCheckbox"
                name="subscribeCheckbox"
                value="subscribe"
                className="h-full w-full"
              />
            </div>
            <label
              for="subscribeCheckbox"
              className="font-sans text-[10px] leading-normal dxl:text-[12px]"
            >
              I consent to receiving marketing communication
            </label>
          </div>
          {/* <div className="relative flex h-12 w-36 max-w-[150px] items-center justify-center border-[1px] border-white">
            <button
              type="submit"
              className="absolute right-1 top-1 h-full w-full border-[1px] font-sans text-display-4 xl:text-display-17"
            >
              Subscribe
            </button>
          </div> */}
          <div className="relative flex h-[49px] w-[143px] cursor-pointer dxl:h-[53px] dxl:w-[187px]">
            <div className="absolute bottom-0 h-[46px] w-[140px] border-[0.5px] border-textPrimary dxl:h-[50px] dxl:w-[184px]"></div>
            <div className="absolute right-0 h-[46px] w-[140px] border-[0.5px] border-textPrimary dxl:h-[50px] dxl:w-[184px]"></div>
            <div className="relative flex w-full items-center justify-center font-sans text-display-4 dxl:text-display-17">
              Subscribe
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default MailingList
