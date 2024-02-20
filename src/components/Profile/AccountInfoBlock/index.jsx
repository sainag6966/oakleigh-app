function AccountInfoBlock() {
  return (
    <section className=" bg-search p-[30px] xl:p-[50px]">
      <section>
        <p className="text-display-11 dxl:text-display-13">
          Account Information
        </p>
      </section>
      <section className="flex flex-col gap-[15px] font-sans">
        <p className="text-display-5 dxl:text-display-16">Account Details</p>
        <section className="flex h-auto w-full flex-wrap gap-4">
          <section className="h-auto shrink-0 grow basis-[200px] opacity-100 sm:basis-[250px] lg:basis-[280px] xl:basis-[340px]">
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={formData?.first_name || ''}
              placeholder="First Name*"
              // onChange={handleChange}
              className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
            />
            {/* {firstNameError && (
                <p className="mt-1 text-sm text-red-500">{firstNameError}</p>
              )} */}
          </section>
          <section className="h-auto shrink-0 grow basis-[200px] opacity-100 sm:basis-[250px] lg:basis-[280px] xl:basis-[340px]">
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={formData?.first_name || ''}
              placeholder="First Name*"
              // onChange={handleChange}
              className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
            />
            {/* {firstNameError && (
                <p className="mt-1 text-sm text-red-500">{firstNameError}</p>
              )} */}
          </section>
          <section className="h-auto shrink-0 grow basis-[200px] opacity-100 sm:basis-[250px] lg:basis-[280px] xl:basis-[340px]">
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={formData?.first_name || ''}
              placeholder="First Name*"
              // onChange={handleChange}
              className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
            />
            {/* {firstNameError && (
                <p className="mt-1 text-sm text-red-500">{firstNameError}</p>
              )} */}
          </section>
          <section className="h-auto shrink-0 grow basis-[200px] opacity-100 sm:basis-[250px] lg:basis-[280px] xl:basis-[340px]">
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={formData?.first_name || ''}
              placeholder="First Name*"
              // onChange={handleChange}
              className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
            />
            {/* {firstNameError && (
                <p className="mt-1 text-sm text-red-500">{firstNameError}</p>
              )} */}
          </section>
        </section>
      </section>
    </section>
  )
}
export default AccountInfoBlock
