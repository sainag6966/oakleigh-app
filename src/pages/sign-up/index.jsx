import SignupForm from '../../components/LoginAndSignup/SignUpForm'

function SignupPage() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between gap-[58px] px-[141px] pt-[25px] text-footerBg">
      <div className="w-full font-sans text-[15px]">
        BREADCRUMB / BREADCRUMB
      </div>
      <div className="flex h-auto w-full flex-col items-center justify-between gap-10">
        <div className="text-display-15">LOGIN OR CREATE AN ACCOUNT</div>
        <div className="w-full text-center font-sans text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </div>
        <div className="flex w-full items-start justify-between gap-8">
          <div className="flex w-auto max-w-[803px] flex-1 flex-col gap-7 bg-search p-[50px]">
            <p className="text-display-13">New Customers</p>
            <p className="h-auto w-full font-sans text-display-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </p>
            <SignupForm />
          </div>
          <div className="flex w-auto max-w-[803px] flex-1 flex-col gap-7 bg-search p-[50px]">
            <div className="text-display-13">Already Have An Account?</div>
            <p className="font-sans text-display-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="relative flex h-[53px] w-[220px] font-sans text-display-17">
              <div className="absolute bottom-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
              <div className="absolute right-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
              <div className="relative flex w-full items-center justify-center">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignupPage
