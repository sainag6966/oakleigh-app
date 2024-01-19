import NextImage from '@/reuseComps/NextImage'
import Image from 'next/image'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import { useState } from 'react'
function BrandWidget() {
  const [expandBrands, setExpandBrands] = useState(false)
  const buttonText = expandBrands ? 'Collapse' : 'View All Brands'
  const data = [
    '/Images/Sample/brand1.svg',
    '/Images/Sample/brand2.svg',
    '/Images/Sample/brand3.svg',
    '/Images/Sample/brand4.svg',
    '/Images/Sample/brand5.svg',
    '/Images/Sample/brand3.svg',
    '/Images/Sample/brand4.svg',
    '/Images/Sample/brand5.svg',
  ]
  return (
    <section className="flex h-auto w-full flex-col items-center justify-between gap-[50px] px-[72px] pt-[60px]">
      <section
        className={`flex ${
          expandBrands ? 'h-auto' : 'h-[140px]'
        } w-full flex-wrap items-center justify-start gap-10 overflow-hidden`}
      >
        {data.map((e, index) => {
          return (
            <section
              key={index}
              className="flex aspect-[16/9] max-w-[85px] flex-auto items-center justify-center"
            >
              <ProgressiveImageComp src={e} alt="brandLogo" />
            </section>
          )
        })}
      </section>
      <u
        className="font-sans text-display-4"
        onClick={() => {
          setExpandBrands(!expandBrands)
        }}
      >
        <p>{buttonText}</p>
      </u>
    </section>
  )
}
export default BrandWidget
