import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ImageComp from '@/reuseComps/ImageComp'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import CustomVimeoPlayer from '@/reuseComps/CustomVimeoPlayer'

function DescAndSpec({ data }) {
  const specs = [
    { key: 'What’s Included', value: 'Box & Papers' },
    { key: 'Brand', value: 'Breitling' },
    { key: 'Model', value: 'M2004' },
    { key: 'Year', value: '2023' },
    { key: 'Reference Number', value: 'A3239' },
    { key: 'Dial Colour', value: 'white' },
    { key: 'Bracelet Size', value: '44' },
    { key: 'Case Material', value: 'Stainless Steel' },
    { key: 'Diameter', value: '45mm' },
    { key: 'Bracelet/Strap', value: 'Leather' },
    { key: 'Condition', value: 'Unworn' },
    { key: 'Movement Calibre', value: 'Breitling 32' },
    { key: 'Movement Type', value: 'Automatic' },
  ]
  return (
    <section className="flex h-auto w-full flex-col gap-[30px] pt-[30px] font-sans lg:gap-9 lg:pt-9">
      <section>
        <p className="text-start text-display-3 xl:text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </section>
      <section className="flex h-auto w-full flex-col gap-5  lg:max-h-[250px] lg:flex-wrap xl:max-h-[400px]">
        {specs.map((item, index) => {
          return (
            <section
              key={index}
              className="flex h-auto w-full items-center justify-between gap-5 lg:w-1/2"
            >
              <section className="flex-1 text-display-5 leading-none xl:text-display-16">
                {item?.key}:
              </section>
              <section className="flex h-auto w-full flex-1 items-center justify-start text-display-3 leading-none xl:text-display-6">
                {item?.value}
              </section>
            </section>
          )
        })}
      </section>
    </section>
  )
}

function WhyWeLove() {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const isTablet = useMediaQuery({ query: '(min-width:600px)' })
  const isLargeScreen = useMediaQuery({ query: '(min-width:1280px)' })
  const isxLargeScreen = useMediaQuery({ query: '(min-width:1680px)' })
  const label =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'

  const getVimeoId = () => {
    const requiredMetaData = []
    const urlObject = requiredMetaData.filter((e) => {
      return e?.key === '_jet_woo_product_vimeo_video_url'
    })
    const vimeoUrl = urlObject[0]?.value
    const regex = /vimeo\.com\/(\d+)\?/
    const match = vimeoUrl?.match(regex)
    const vimeoVideoId = (match && match[1]) || '246115326'
    return vimeoVideoId
  }

  return (
    <section className="flex h-auto w-full flex-col gap-[30px] pt-[30px]">
      <section className="font-sans text-display-3 xl:text-display-6">
        {label}
      </section>
      <section className="h-full w-full">
        <CustomVimeoPlayer
          getVimeoId={getVimeoId}
          videoId={'310209874'}
          width={
            isxLargeScreen
              ? 804
              : isLargeScreen
                ? 552
                : isDesktop
                  ? 400
                  : isTablet
                    ? 528
                    : 288
          }
          height={
            isxLargeScreen
              ? 452
              : isLargeScreen
                ? 320
                : isDesktop
                  ? 230
                  : isTablet
                    ? 300
                    : 170
          }
        />
      </section>
    </section>
  )
}

function DeliveryAndReturns() {
  return (
    <section className="flex h-auto w-full flex-col gap-[30px] pt-[30px] font-sans text-display-3 xl:text-display-6">
      <section>
        <b>Delivery</b> - Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      </section>
      <section>
        <b>Returns</b> - Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      </section>
    </section>
  )
}

function Faqs({ data }) {
  const { acf } = data
  const [labelClicked, setLabelClicked] = useState('')
  const upArrowIcon = '/Images/upArrowSmall.svg'
  const downArrowIcon = '/Images/downArrowSmall.svg'
  const faqData = acf?.faqs

  const handleLabelClick = (label) => {
    if (label?.question === labelClicked) {
      setLabelClicked('')
      return
    }
    // setShouldOpenDropDown(!shouldOpenDropDown)
    setLabelClicked(label?.question)
  }
  return (
    <section className="relative flex h-auto w-full flex-col gap-[30px] pt-[30px] text-display-3">
      <section className="h-auto w-full bg-search px-5 py-7">
        {faqData.map((e, index) => {
          return (
            <section
              key={index}
              className="h-auto w-full border-y-[1px] border-orderSummaryBorder py-5"
            >
              <section
                className="flex items-center justify-between"
                onClick={() => {
                  handleLabelClick(e)
                }}
              >
                <p className="text-display-9 leading-normal lg:text-display-12">
                  {e?.question}
                </p>
                <div className="relative z-[1] flex min-h-[8px] min-w-[14px] items-center justify-center">
                  <ImageComp
                    src={
                      e?.question === labelClicked ? upArrowIcon : downArrowIcon
                    }
                    layout="fill"
                    alt={'upArrowIcon'}
                    objectFit="cover"
                    quality={100}
                    style={{ objectPosition: 'center' }}
                    className="mix-blend-overlay"
                  />
                </div>
              </section>
              {e?.question === labelClicked && (
                <section className="font-sans text-display-3 xl:text-display-6">
                  {e?.answer}
                </section>
              )}
            </section>
          )
        })}
      </section>
    </section>
  )
}

function AboutOakleigh() {
  const img1 = '/Images/Sample/twoAdBlock1.svg'
  const img2 = '/Images/Sample/twoAdBlock2.svg'
  return (
    <section className="flex h-auto w-full flex-col gap-[30px] pt-[30px] font-sans text-display-3">
      <section className="flex gap-2">
        <section className="flex-1">
          {' '}
          <ProgressiveImageComp src={img1} alt={'img'} />
        </section>
        <section className="flex-1">
          {' '}
          <ProgressiveImageComp src={img1} alt={'img'} />
        </section>
      </section>
      <section>
        <p className="text-display-3 xl:text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum
        </p>
      </section>
    </section>
  )
}

function Sustainability() {
  const img1 = '/Images/Sample/twoAdBlock1.svg'
  return (
    <section className="flex h-auto w-full flex-col gap-[30px] pt-[30px] font-sans text-display-3 xl:text-display-6">
      <section className="flex h-auto w-full">
        <ProgressiveImageComp src={img1} alt={'img'} />
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum
        </p>
      </section>
    </section>
  )
}

function ProductMeta({ data }) {
  const [labelClicked, setLabelClicked] = useState('')
  const metaArr = [
    'DESCRIPTION & SPECIFICATION',
    'Why We Love It',
    'Delivery & Returns',
    'FAQs',
    'About Oakleigh Watches',
    'Sustainability',
  ]
  const upArrowIcon = '/Images/upArrowSmall.svg'
  const downArrowIcon = '/Images/downArrowSmall.svg'

  const handleLabelClick = (label) => {
    if (label === labelClicked) {
      setLabelClicked('')
      return
    }
    // setShouldOpenDropDown(!shouldOpenDropDown)
    setLabelClicked(label)
  }

  const renderBlock = (label) => {
    switch (label) {
      case 'DESCRIPTION & SPECIFICATION':
        return <DescAndSpec data={data} />
      case 'Why We Love It':
        return <WhyWeLove data={data} />
      case 'Delivery & Returns':
        return <DeliveryAndReturns data={data} />
      case 'FAQs':
        return <Faqs data={data} />
      case 'About Oakleigh Watches':
        return <AboutOakleigh data={data} />
      case 'Sustainability':
        return <Sustainability data={data} />
    }
  }

  return (
    <section className="flex h-auto w-auto max-w-[804px] flex-col">
      {metaArr.map((e, index) => {
        return (
          <section
            key={index}
            className="h-auto w-full cursor-pointer border-y-[1px] border-metaBorder py-[30px]"
          >
            <section
              className="flex items-center justify-between"
              onClick={() => {
                handleLabelClick(e)
              }}
            >
              <p className="line-clamp-1 text-display-11 xl:text-display-12">
                {e}
              </p>
              <div className="relative flex h-[8px] w-[14px] items-center justify-center">
                <ImageComp
                  src={e === labelClicked ? upArrowIcon : downArrowIcon}
                  layout="fill"
                  alt={'upArrowIcon'}
                  objectFit="cover"
                  quality={100}
                  style={{ objectPosition: 'center' }}
                  className="mix-blend-overlay"
                />
              </div>
            </section>
            {e === labelClicked && renderBlock(e)}
          </section>
        )
      })}
    </section>
  )
}
export default ProductMeta
