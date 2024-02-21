import { useState } from 'react'
import { useRouter } from 'next/router'
import { getNonce } from '@/utils/nonce'
import Breadcrumbs from '@/components/BreadCrumbs'
import SummaryBlock from '@/components/Profile/SummaryBlock'
import ImageAndTextBlock from '@/components/ContentBlocks/ImageAndTextBlock'
import SliderBlock from '@/components/ContentBlocks/SliderBlock'
import ServiceEnquiry from '@/components/Profile/ServiceEnquiry'

function ProfilePage() {
  const router = useRouter()
  const [isSeriveEnqOpen, setIsServiceEnqOpen] = useState(false)

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
