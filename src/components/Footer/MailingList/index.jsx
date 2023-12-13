function MailingList() {
  return (
    <div className="flex flex-col gap-5 px-12 sm:px-20 lg:px-0 w-full lg:w-[300px]">
      <h1 className="text-[25px]">Join Our Mailing List</h1>
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
          className="w-full h-[50px] pl-[30px]"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
          required
          className="w-full h-[50px] pl-[30px]"
        />

        <div className="flex h-[50px] justify-between items-center gap-5">
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              id="subscribeCheckbox"
              name="subscribeCheckbox"
              value="subscribe"
            />
            <label for="subscribeCheckbox" className="font-sans text-[10px]">
              I consent to receiving marketing communication
            </label>
          </div>
          <div className="w-36 h-12 relative border-[1px] flex justify-center items-center border-white max-w-[150px]">
            <button
              type="submit"
              className="absolute border-[1px] w-full h-full top-1 right-1"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MailingList;
