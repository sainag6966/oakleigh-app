import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'

function AccountInfoBlock() {
  const CountrySelector = dynamic(
    () => import('../../../reuseComps/CountrySelector'),
  )
  const formFields = [
    { name: 'first_name', placeholder: 'First name', value: '', errorMsg: '' },
    { name: 'last_name', placeholder: 'Last name', value: '', errorMsg: '' },
    { name: 'email', placeholder: 'Email address', value: '', errorMsg: '' },
    { name: 'phone', placeholder: 'Phone number', value: '', errorMsg: '' },
    {
      name: 'newPassword',
      placeholder: 'New Password',
      value: '',
      errorMsg: '',
    },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm New Password',
      value: '',
      errorMsg: '',
    },
  ]
  const [formData, setFormData] = useState(formFields)
  const [passwordEntered, setPasswordEntered] = useState(false)
  const istabScreen = useMediaQuery({ query: '(min-width:600px)' })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    if (name === 'first_name') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'First name is required' }
              : field,
          ),
        )
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Please enter only alphabets' }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
    if (name === 'last_name') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Last name is required' }
              : field,
          ),
        )
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Please enter only alphabets' }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
    if (name === 'email') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Email address is required' }
              : field,
          ),
        )
      } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? {
                  ...field,
                  value,
                  errorMsg: 'Please enter a valid email address',
                }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
    if (name === 'phone') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Phone number is required' }
              : field,
          ),
        )
      } else if (!/^\d+$/.test(value)) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? {
                  ...field,
                  value,
                  errorMsg: 'Please enter a valid phone number (digits only)',
                }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
    if (name === 'newPassword') {
      setPasswordEntered(true)
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Password is required' }
              : field,
          ),
        )
      } else if (value.length < 8) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? {
                  ...field,
                  value,
                  errorMsg: 'Password must be at least 8 characters',
                }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
    if (name === 'confirmPassword') {
      const passwordField = formData.find(
        (field) => field.name === 'newPassword',
      )
      if (passwordField && value !== passwordField.value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Passwords do not match' }
              : field,
          ),
        )
      } else {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name ? { ...field, value, errorMsg: '' } : field,
          ),
        )
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hasEmptyField = formData.some((field) => !field.value.trim())
    if (hasEmptyField) {
      // Set error messages for empty fields
      setFormData((prevFormData) =>
        prevFormData.map((field) => {
          if (
            !passwordEntered &&
            (field?.name === 'newPassword' || field?.name === 'confirmPassword')
          ) {
            return
          }
          return !field.value.trim()
            ? { ...field, errorMsg: `${field.placeholder} is required` }
            : field
        }),
      )
      window.scroll(0, 300)
      return
    }
  }

  return (
    <section className=" flex flex-col gap-[15px] bg-search p-[30px] xl:p-[50px] dxl:gap-[30px]">
      <p className="text-display-11 dxl:text-display-13">Account Information</p>
      <section className="flex flex-col gap-[15px] border-b-[1px] border-orderSummaryBorder pb-[30px] font-sans dxl:gap-[30px] dxl:pb-[50px]">
        <p className="text-display-5 leading-none dxl:text-display-16">
          Account Details
        </p>
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {formData.map((field, index) => {
            return (
              <section
                key={index}
                className={`h-auto ${
                  index === formFields.length - 1 && istabScreen
                    ? 'mt-16'
                    : 'mt-0'
                } font-sans text-display-3 opacity-100`}
              >
                {index === formFields.length - 2 && (
                  <p className="mb-4 mt-7 text-display-5 leading-normal dxl:mb-7 dxl:mt-[50px] dxl:text-display-16">
                    Change Password
                  </p>
                )}
                <input
                  type={
                    field?.name === 'newPassword' ||
                    field?.name === 'confirmPassword'
                      ? 'password'
                      : 'text'
                  }
                  id={field.name}
                  name={field.name}
                  value={field?.value || ''}
                  placeholder={`${field.placeholder}*`}
                  onChange={handleChange}
                  className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
                />
                {field?.errorMsg && (
                  <p className="mt-1 text-sm text-red-500">{field?.errorMsg}</p>
                )}
              </section>
            )
          })}
        </section>
        <section
          className="relative mt-2 flex h-8 w-[120px] items-center font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 lg:mt-[15px] xl:h-[53px] xl:w-[220px] xl:text-display-17 dxl:mt-[20px]"
          onClick={handleSubmit}
        >
          <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[217px]"></div>
          <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[217px]"></div>
          <button
            type="submit"
            className="relative flex w-full items-center justify-center xl:h-[47px]"
          >
            Save Changes
          </button>
        </section>
      </section>
      <section className="pt-[30px] dxl:pb-[50px]">
        <p className="font-sans text-display-5 leading-none dxl:text-display-16">
          Default Billing Address
        </p>
        <CountrySelector />
      </section>
    </section>
  )
}
export default AccountInfoBlock
