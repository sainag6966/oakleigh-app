import CountrySelector from '@/reuseComps/CountrySelector'
import { useState } from 'react'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function ShippingAddress() {
  const [countryCode, setCountryCode] = useState('')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    apartment: '',
    city: '',
    post_code: '',
    phone: '',
  })
  const leftIcon = '/Images/leftArrow.svg'

  const handleChange = (e) => {
    e.preventDefault
  }

  return (
    <section className="flex w-full flex-col gap-4 dxl:mt-[30px] dxl:gap-5">
      <p className="text-display-11 dxl:text-display-12">Shipping Address</p>
      <section className="w-full dxl:mt-[5px]">
        <CountrySelector setCountryCode={setCountryCode} selectedCountry={''} />
      </section>
      <section className="h-auto w-full">
        <form className="flex w-full flex-col gap-3 font-sans lg:gap-5">
          <section className="flex h-auto w-full flex-col gap-3 sm:flex-row lg:gap-5">
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              placeholder="First Name*"
              onChange={handleChange}
              className="selection: h-[40px] w-full appearance-none bg-search  px-3 py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              placeholder="Last Name*"
              onChange={handleChange}
              className="focus:shadow-outline h-[40px] w-full appearance-none bg-search px-3 py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
          </section>
          <section>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.last_name}
              placeholder="Address*"
              onChange={handleChange}
              className="focus:shadow-outline h-[40px] w-full appearance-none bg-search px-3  py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
          </section>
          <section>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.last_name}
              placeholder="Apartment, Suite, Etc.(Optional)"
              onChange={handleChange}
              className="focus:shadow-outline h-[40px] w-full appearance-none bg-search px-3  py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
          </section>
          <section className="flex h-auto w-full flex-col gap-3 sm:flex-row lg:gap-5">
            <input
              type="text"
              id="city"
              name="city"
              value={formData.last_name}
              placeholder="City"
              onChange={handleChange}
              className="h-[40px] w-full appearance-none bg-search px-3 py-2  text-display-3 leading-tight focus:shadow dxl:h-[50px] dxl:text-display-6"
            />
            <input
              type="text"
              id="post_code"
              name="post_code"
              value={formData.last_name}
              placeholder="Postcode*"
              onChange={handleChange}
              className="focus:shadow-outline h-[40px] w-full appearance-none bg-search px-3  py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
          </section>
          <section>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.last_name}
              placeholder="Phone*"
              onChange={handleChange}
              className="focus:shadow-outline h-[40px] w-full appearance-none bg-search px-3  py-2 text-display-3 leading-tight dxl:h-[50px] dxl:text-display-6"
            />
          </section>
        </form>
      </section>
      <section className="flex h-auto w-full items-center justify-between dxl:mt-[10px]">
        <section className="flex flex-1 items-center justify-start gap-[2px]">
          <section className="h-3 w-3 dxl:mt-[3px] dxl:h-4 dxl:w-4">
            <ProgressiveImageComp src={leftIcon} alt="left" />
          </section>
          <p className="font-sans text-display-4 dxl:text-display-17">
            <u>Return To Basket</u>
          </p>
        </section>
        <section
          className="relative mt-1 flex h-[42px] w-full flex-1 font-sans lg:max-w-[180px] dxl:h-[53px] dxl:max-w-[279px]"
          onClick={() => {
            router.push('/basket/checkoutPage')
          }}
        >
          <div className="absolute bottom-0 h-[39px] w-[98.5%] border-[0.8px] border-textSecondary bg-textSecondary sm:w-[99%] dxl:h-[50px]" />
          <div className="absolute right-0 h-[39px] w-[98.5%] border-[0.8px] border-textSecondary sm:w-[99%] dxl:h-[50px]" />
          <div className="absolute bottom-[3px] left-[1.5%] right-[1.5%] h-[36px] w-[97%] border-b-[0.5px] border-l-[0.5px] border-textPrimary sm:left-[1%] sm:right-[1%] sm:w-[98%] dxl:h-[47px]" />
          <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary dxl:text-display-17">
            Checkout Securely
          </div>
        </section>
      </section>
    </section>
  )
}
export default ShippingAddress
