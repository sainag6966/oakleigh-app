function MailingList() {
  return (
    <div className="flex w-full flex-col gap-5 px-12 sm:px-20 lg:w-[300px] lg:px-0 dxl:w-[389px]">
      <h1 className="text-display-11 dxl:text-display-12">
        Join Our Mailing List
      </h1>
      <form
        id="subscribeForm"
        className="flex flex-col gap-[15px]"
        action="#"
        method="post"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="h-[50px] w-full pl-[30px]"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
          required
          className="h-[50px] w-full pl-[30px]"
        />

        <div className="flex h-[50px] items-center justify-between gap-5">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[15px] w-[15px]">
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
              className="font-sans text-[10px] dxl:text-[12px]"
            >
              I consent to receiving marketing communication
            </label>
          </div>
          <div className="relative flex h-12 w-36 max-w-[150px] items-center justify-center border-[1px] border-white">
            <button
              type="submit"
              className="absolute right-1 top-1 h-full w-full border-[1px] font-sans text-display-4 xl:text-display-17"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default MailingList
