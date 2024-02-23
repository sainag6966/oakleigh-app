import { useRouter } from 'next/router'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function BecomeVip() {
  const router = useRouter()
  const vipIcon = '/Images/Sample/vipBlock1.svg'

  return (
    <section className="flex h-auto w-full flex-col gap-[15px] bg-search p-[30px] xl:p-[50px] dxl:gap-[30px]">
      <section className="flex flex-col gap-5 font-sans dxl:gap-[30px]">
        <section className="flex items-center justify-start gap-3 dxl:gap-5">
          <section className="h-[72px] w-[40px]">
            <ProgressiveImageComp src={vipIcon} alt="vipIcon" />
          </section>
          <p className="dxl-text-display-13 font-cormorant text-display-11">
            Become A VIP
          </p>
        </section>
        <p className="text-display-3 dxl:text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>
        <p className="text-display-5 dxl:text-display-16">
          What Are The Benefits?
        </p>
        <ul className="flex list-disc flex-col gap-5 pl-3 text-display-3 dxl:gap-[30px] dxl:text-display-6">
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </li>
        </ul>
        <section className="flex items-center justify-start gap-7 dxl:gap-[50px]">
          <section
            className="relative flex h-8 w-[120px] items-center font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 xl:h-[53px] xl:w-[180px] xl:text-display-17 dxl:w-[220px]"
            onClick={() => {
              router.push('/vip-club')
            }}
          >
            <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[177px] dxl:w-[217px]"></div>
            <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[177px] dxl:w-[217px]"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center xl:h-[47px]"
            >
              Apply Now
            </button>
          </section>
          <p>
            <u>Read More</u>
          </p>
        </section>
      </section>
    </section>
  )
}
export default BecomeVip
