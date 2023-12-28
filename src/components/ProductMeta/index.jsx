import ImageComp from '@/reuseComps/ImageComp'
import { useState } from 'react'

function DescAndSpec() {
  return (
    <section className="h-auto w-full gap-9 pt-9">
      <section>
        <p className="text-start text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </section>
    </section>
  )
}

function WhyWeLove() {
  return <section>this is why we love</section>
}

function DeliveryAndReturns() {
  return <section>this is delivery and returns</section>
}

function Faqs() {
  return <section>this is faqs</section>
}

function AboutOakleigh() {
  return <section>this is about Oakleigh</section>
}

function Sustainability() {
  return <section>this is about Sustainability</section>
}

function ProductMeta() {
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
        return <DescAndSpec />
      case 'Why We Love It':
        return <WhyWeLove />
      case 'Delivery & Returns':
        return <DeliveryAndReturns />
      case 'FAQs':
        return <Faqs />
      case 'About Oakleigh Watches':
        return <AboutOakleigh />
      case 'Sustainability':
        return <Sustainability />
    }
  }

  return (
    <section className="flex h-auto w-[804px] flex-col">
      {metaArr.map((e) => {
        return (
          <section className="border-metaBorder h-auto w-full border-y-[1px] py-[30px]">
            <section
              className="flex items-center justify-between"
              onClick={() => {
                handleLabelClick(e)
              }}
            >
              <p className="text-display-12">{e}</p>
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
