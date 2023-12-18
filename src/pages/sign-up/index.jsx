function SignupPage() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between gap-[58px] px-[141px] pt-[25px]">
      <div className="w-full font-sans text-[15px]">
        BREADCRUMB / BREADCRUMB
      </div>
      <div className="flex h-auto w-full flex-col items-center justify-between gap-10">
        <div className="text-display-15">LOGIN OR CREATE AN ACCOUNT</div>
        <div className="w-full text-center text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </div>
        <div className="flex w-full items-start justify-center gap-8">
          <div className="w-auto bg-search p-[50px]">
            <p className="text-display-13">New Customers</p>
            <div className="relative flex h-[53px] w-[220px] font-sans text-display-17">
              <div className="border-textSecondary absolute bottom-0 h-[50px] w-[217px] border-[0.5px]"></div>
              <div className="border-textSecondary absolute right-0 h-[50px] w-[217px] border-[0.5px]"></div>
              <div className="relative flex w-full items-center justify-center">
                Create Account
              </div>
            </div>
          </div>
          <div className="w-auto bg-search p-[50px] text-display-13">
            Already Have An Account?
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignupPage
