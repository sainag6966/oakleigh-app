import React, { useState } from 'react'

const OverlayWindow = ({ isOverlayOpen, setIsOverlayOpen }) => {
  const heading =
    isOverlayOpen === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'
  return (
    <>
      {isOverlayOpen && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 px-7 py-7 lg:px-[90px] lg:py-[40px] dxl:px-[300px] dxl:py-[90px]">
          <div className="flex h-full w-full flex-col gap-4 overflow-y-scroll rounded bg-white px-6 py-6 lg:py-[50px] lg:pl-[100px] lg:pr-[50px] xl:gap-10">
            <section className="flex items-center justify-between">
              <p className="font-cormorant text-display-11 dxl:text-display-14">
                {heading}
              </p>
              <div className="flex  justify-end">
                <button
                  className="h-4 w-4 font-sans text-gray-500"
                  onClick={() => {
                    setIsOverlayOpen('')
                  }}
                >
                  X
                </button>
              </div>
            </section>
            <section className="h-auto w-full pb-6 pr-5 ">
              <p className="font-sans text-display-3 dxl:text-display-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default OverlayWindow
