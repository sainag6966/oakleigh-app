import { useState } from 'react'
import CheckBox from '@/reuseComps/CheckBox'
import { isLoggedIn } from '@/utils/auth'
import LoginDropdown from '@/components/LoginDropdown'

function CheckoutLogin({
  handleLoginClick,
  setEmail,
  setEmailError,
  email,
  emailError,
  basketData,
}) {
  // const [email, setEmail] = useState('')
  // const [emailError, setEmailError] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const initialEmail = basketData?.billing_address?.email
  let isUserLoggedIn = false

  if (typeof window !== 'undefined') {
    isUserLoggedIn = isLoggedIn()
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    if (!value) {
      setEmailError('Email address is required')
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
    setEmail(value)
  }

  return (
    <section className="flex h-auto w-full flex-col gap-3 font-sans dxl:mt-[30px]">
      <section className="flex w-full items-center justify-between">
        <p className="font-cormorant text-display-11 dxl:text-display-12">
          Contact
        </p>
        {!isUserLoggedIn && (
          <section className="mt-[2px] flex items-center justify-between gap-2">
            <p className="mt-[2px] text-display-3 dxl:text-display-6">
              Have An Account?
            </p>
            <p
              className="cursor-pointer text-display-4 dxl:text-display-17"
              onClick={handleLoginClick}
            >
              <u>Log In</u>
            </p>
          </section>
        )}
      </section>
      <section className="h-auto w-full">
        <form className="flex h-auto w-full flex-col gap-5">
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={email || ''}
            placeholder="Email Address*"
            onChange={handleChange}
            className="h-[41px] w-full flex-1 appearance-none border bg-search px-7 py-2 font-sans text-display-3 text-footerBg dxl:h-[50px] dxl:text-display-6"
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-500">{emailError}</p>
          )}
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
