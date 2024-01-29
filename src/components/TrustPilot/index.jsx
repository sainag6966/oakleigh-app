import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import React, { useEffect, useRef } from 'react'
import { ProgressBar } from 'react-loader-spinner'

const TrustBox = () => {
  const trustDesign = '/Images/trustpilotBack.svg'
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = useRef(null)

  useEffect(() => {
    // If window.Trustpilot is available, it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded just yet.
    // When it is, it will automatically load the TrustBox.
    if (typeof window.Trustpilot !== 'undefined') {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])

  return (
    <section className="relative flex h-auto w-full flex-col">
      {/* <section className="h-[60px] bg-search">
        <section className="absolute top-9">
          <ProgressiveImageComp src={trustDesign} alt={'design'} />
        </section>
      </section> */}
      <section className="w-full items-center justify-center py-[50px]">
        <div
          ref={ref} // We need a reference to this element to load the TrustBox in the effect.
          className="trustpilot-widget" // Renamed this to className.
          // [ long list of data attributes...]
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="53da56ff0000640005792dae"
          data-style-height="130px"
          data-style-width="100%"
          data-theme="light"
          data-stars="4,5"
          data-locale="en-US"
        >
          <a
            href="https://www.trustpilot.com/review/example.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </section>
      {/* <section className="relative h-[60px] bg-search">
        <section className="absolute bottom-9">
          <ProgressiveImageComp src={trustDesign} alt={'design'} />
        </section>
      </section> */}
    </section>
  )
}

export default TrustBox
