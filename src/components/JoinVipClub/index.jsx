import VipSignupForm from './VipSignupForm'
import Breadcrumbs from '../BreadCrumbs'

function JoinVipClub() {
  return (
    <main className="flex h-auto w-full flex-col items-center gap-6 px-9 pt-[14px] xl:gap-10 xl:px-[64px] dxl:gap-14 dxl:px-[132px]">
      <Breadcrumbs />
      <p className="text-display-12 dxl:text-display-15">
        JOIN THE OAKLEIGH VIP CLUB
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
      <VipSignupForm />
    </main>
  )
}
export default JoinVipClub
