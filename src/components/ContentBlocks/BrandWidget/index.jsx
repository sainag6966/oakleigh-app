import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import NextImage from '@/reuseComps/NextImage'
import Image from 'next/image'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function BrandWidget() {
  const [expandBrands, setExpandBrands] = useState(false)
  const buttonText = 'View All Brands'
  const isLargeScreen = useMediaQuery({ query: '(min-width:1280px)' })
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const isTablet = useMediaQuery({ query: '(min-width:600px)' })
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
  const arraySlice = isLargeScreen
    ? data.slice(0, 5)
    : isDesktop
      ? data.slice(0, 4)
      : isTablet
        ? data.slice(0, 8)
        : data.slice(0, 4)
  const workArray = expandBrands ? data : arraySlice
  return (
    <section className="flex h-auto w-full flex-col items-center justify-between gap-[50px] px-[80px] pt-[60px] lg:flex-row lg:pt-[100px] dxl:px-[140px] dxl:pt-[140px]">
      <section
        className="grid-rows-auto grid h-auto w-full
        grid-cols-2 gap-16 sm:grid-cols-4 lg:gap-20 xl:grid-cols-5 dxl:gap-28"
      >
        {workArray.map((e, index) => {
          return (
            <section key={index} className="aspect-[16/9]">
              <ProgressiveImageComp src={e} alt="brandLogo" />
            </section>
          )
        })}
      </section>
      {!expandBrands && (
        <u
          className="w-[160px] cursor-pointer font-sans text-display-4 xl:text-display-17"
          onClick={() => {
            setExpandBrands(!expandBrands)
          }}
        >
          <p className="flex w-full items-center justify-center">
            {buttonText}
          </p>
        </u>
      )}
    </section>
  )
}
export default BrandWidget
