import { useState } from 'react'
import { useRouter } from 'next/router'

function LoginDropdown({ handleSuccessfulLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      )

      if (response.ok) {
        const responseData = await response.json() // Parse the response body as JSON
        const token = responseData.token
        if (token) {
          handleSuccessfulLogin()
          router.push('/profile-page')
        }
        console.log('Signup successful!')
      } else {
        // Handle errors
        console.error('Signup failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="absolute z-[1] h-full w-full border-t-[1px] border-colorBlack bg-colorBlack bg-opacity-75">
      <div className="absolute top-0 z-[2] flex h-auto w-full items-start justify-between gap-8 bg-textPrimary px-[140px] py-[50px] text-footerBg">
        <div className="flex w-auto max-w-[803px] flex-1 flex-col justify-between gap-7 self-stretch bg-search p-[50px]">
          <p className="text-display-13">New Customers</p>
          <p className="h-auto w-full font-sans text-display-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua
          </p>
          <form
            className="flex w-full flex-col gap-5 font-sans"
            onSubmit={handleSubmit}
          >
            <div className="h-[50px]">
              <input
                type="username"
                id="username"
                name="username"
                placeholder="Email address*"
                value={formData.username}
                onChange={handleChange}
                className="focus:shadow-outline h-full w-full appearance-none rounded border px-3 py-2 text-display-6 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </div>
            <div className="h-[50px]">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password*"
                value={formData.password}
                onChange={handleChange}
                className="focus:shadow-outline h-[50px] w-full appearance-none rounded border px-3 py-2 text-display-6 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </div>
            <div className="flex w-full items-center gap-10">
              <div className="relative flex h-[53px] w-[174px] font-sans text-display-17">
                <div className="absolute bottom-0 h-[50px] w-[171px] border-[0.5px] border-textSecondary"></div>
                <div className="absolute right-0 h-[50px] w-[171px] border-[0.5px] border-textSecondary"></div>
                <button
                  type="submit"
                  className="relative flex w-full items-center justify-center"
                >
                  Login
                </button>
              </div>
              <p className="font-sans text-display-17">
                <u>Forgotten Your Password ?</u>
              </p>
            </div>
          </form>
        </div>
        <div className="flex w-auto max-w-[803px] flex-1 flex-col justify-between gap-7 self-stretch bg-search p-[50px]">
          <div className="text-display-13">Don’t Have An Account?</div>
          <p className="font-sans text-display-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <p className="font-sans text-display-6">
            Takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore. Tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
          <div className="relative flex h-[53px] w-[220px] font-sans text-display-17">
            <div className="absolute bottom-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
            <div className="absolute right-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
            <div className="relative flex w-full items-center justify-center">
              Create An Account
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginDropdown
