import Breadcrumbs from '../BreadCrumbs'

function VipFormConfirmation() {
  return (
    <main className="flex h-auto w-full flex-col items-center gap-6 px-9 pt-[14px] xl:gap-10 xl:px-[64px] dxl:gap-14 dxl:px-[132px]">
      <Breadcrumbs />
      <p className="text-display-12 dxl:text-display-15">
        YOUR REQUEST HAS BEEN SUBMITTED
      </p>
      <p className="text-center font-sans text-display-3 dxl:text-display-6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <section
        className="relative mt-2 flex h-8 w-[120px] items-center font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 lg:mt-[15px] xl:h-[53px] xl:w-[220px] xl:text-display-17 dxl:mt-[20px]"
        // onClick={handleSubmit}
      >
        <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[48px] xl:w-[217px]"></div>
        <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[48px] xl:w-[217px]"></div>
        <button
          type="submit"
          className="relative flex w-full items-center justify-center xl:h-[47px]"
        >
          Browse All Watches
        </button>
      </section>
    </main>
  )
}
export default VipFormConfirmation
