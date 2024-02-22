import { useState } from 'react'
import { useRouter } from 'next/router'
import { getNonce } from '@/utils/nonce'
import Breadcrumbs from '@/components/BreadCrumbs'
import SummaryBlock from '@/components/Profile/SummaryBlock'
import ImageAndTextBlock from '@/components/ContentBlocks/ImageAndTextBlock'
import SliderBlock from '@/components/ContentBlocks/SliderBlock'
import ServiceEnquiry from '@/components/Profile/ServiceEnquiry'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function ProfilePage() {
  const router = useRouter()
  const [isSeriveEnqOpen, setIsServiceEnqOpen] = useState(false)
  const vipIcon = '/Images/Sample/vipBlock1.svg'
  const closeIcon = 'Images/closeIcon.svg'

  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    getNonce()
    router.push('/')
  }

  const handleEnquireNow = () => {
    setIsServiceEnqOpen(!isSeriveEnqOpen)
  }

  return (
    <section className="flex h-auto w-full flex-col items-start">
      <section className="mb-[30px] w-full px-9 pt-[14px] lg:px-20 dxl:px-[140px]">
        <section>
          <Breadcrumbs />
        </section>
        <section className="mt-5 flex h-auto w-full justify-start text-display-12 sm:justify-center dxl:mb-[10px] dxl:mt-[58px] dxl:text-display-15">
          <p>HI PERSON NAME, WELCOME BACK</p>
        </section>
      </section>
      <section className="mb-[30px] px-9 lg:px-20 dxl:px-[140px]">
        <div className="relative flex w-full flex-col gap-3 bg-uspBlockBackground px-10 py-10">
          <section className="absolute right-8 top-7 h-3 w-3 lg:right-10 xl:h-4 xl:w-4">
            <ProgressiveImageComp src={closeIcon} alt="close" />
          </section>
          <section className="flex flex-col items-center justify-center gap-3 sm:flex-row dxl:gap-5">
            <section className=" h-[26px] w-[45px] dxl:h-[40px] dxl:w-[72px]">
              {' '}
              <ProgressiveImageComp src={vipIcon} alt="vipIcon" />
            </section>
            <p className="text-display-9 sm:text-display-12 dxl:text-display-15">
              CONGRATULATIONS!
            </p>
          </section>
          <p className="text-center text-display-3 dxl:text-display-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr.
          </p>
          <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
          <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
        </div>
      </section>
      <SummaryBlock handleLogout={handleLogout} />
      <ImageAndTextBlock handleButtonClick={handleEnquireNow} />
      <section className="h-auto w-full">
        {' '}
        <SliderBlock />
      </section>
      {isSeriveEnqOpen && (
        <ServiceEnquiry handleEnquireNow={handleEnquireNow} />
      )}
    </section>
  )
}
export default ProfilePage
