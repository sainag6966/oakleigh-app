import { useState } from 'react'
import CheckBox from '@/reuseComps/CheckBox'

function CheckoutLogin() {
  const [postCode, setPostCode] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e?.target
    setPostCode(value)
  }

  return (
    <section className="flex h-auto w-full flex-col gap-3 font-sans dxl:mt-[30px]">
      <section className="flex w-full items-center justify-between">
        <p className="font-cormorant text-display-11 dxl:text-display-12">
          Contact
        </p>
        <section className="mt-[2px] flex items-center justify-between gap-2">
          <p className="mt-[2px] text-display-3 dxl:text-display-6">
            Have An Account?
          </p>
          <p className="text-display-4 dxl:text-display-17">
            <u>Log In</u>
          </p>
        </section>
      </section>
      <section className="h-auto w-full">
        <form className="flex h-auto w-full gap-5">
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={postCode}
            placeholder="Email Address*"
            onChange={handleChange}
            className="h-[41px] w-full flex-1 appearance-none border bg-search px-7 py-2 font-sans text-display-3 text-footerBg dxl:h-[50px] dxl:text-display-6"
          />
        </form>
      </section>
      <section className="flex items-center justify-start gap-2">
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
        <p className="text-display-3 dxl:text-display-6">
          Email me with news and offers
        </p>
      </section>
    </section>
  )
}
export default CheckoutLogin
