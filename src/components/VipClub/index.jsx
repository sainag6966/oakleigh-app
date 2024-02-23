import Router, { useRouter } from 'next/router'
import FourStepsBlock from '../ContentBlocks/FourStepsBlock'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import Breadcrumbs from '../BreadCrumbs'

function VipClub() {
  const router = useRouter()
  const vipIcon = '/Images/Sample/vipBlock1.svg'
  return (
    <main className="flex h-auto w-full flex-col items-center">
      <section className="mb-[30px] w-full px-9 pt-[14px] lg:px-20 dxl:px-[140px]">
        <section>
          <Breadcrumbs />
        </section>
      </section>
      <section className="mb-[30px] h-auto w-full px-9 lg:px-20 dxl:px-[140px]">
        <div className="relative flex w-full flex-col gap-3 bg-uspBlockBackground px-10 py-10">
          <section className="flex flex-col items-center justify-center gap-3 sm:flex-row dxl:gap-5">
            <section className=" h-[26px] w-[45px] dxl:h-[40px] dxl:w-[72px]">
              {' '}
              <ProgressiveImageComp src={vipIcon} alt="vipIcon" />
            </section>
            <p className="text-display-9 sm:text-display-12 dxl:text-display-15">
              THE OAKLEIGH VIP CLUB
            </p>
          </section>
          <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
        </div>
      </section>
      <section className="mb-[30px] w-full px-9 pt-[14px] lg:px-20 dxl:px-[140px]">
        <p className="text-center font-sans text-display-3 dxl:text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </section>
      <section
        className="relative flex h-8 w-[120px] items-center font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 xl:h-[53px] xl:w-[220px] xl:text-display-17"
        onClick={() => {
          router.push('vip-club/join-vip-club')
        }}
      >
        <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[48px] xl:w-[217px]"></div>
        <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[48px] xl:w-[217px]"></div>
        <button
          type="submit"
          className="relative flex w-full items-center justify-center xl:h-[47px]"
        >
          Join Now For Free
        </button>
      </section>
      <FourStepsBlock />
    </main>
  )
}
export default VipClub
