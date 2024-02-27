import dynamic from 'next/dynamic'
import { useState } from 'react'

function DefaultBillingAddress() {
  const CountrySelector = dynamic(
    () => import('../../../reuseComps/CountrySelector'),
  )
  const StateSelector = dynamic(
    () => import('../../../reuseComps/StateSelector'),
  )
  const [countryCode, setCountryCode] = useState('')
  const [stateCode, setStateCode] = useState('')
  const selectedCountry = ''
  const selectedState = ''

  const formFields = [
    {
      name: 'address_1',
      placeholder: 'Address Line 1',
      value: '',
      errorMsg: '',
    },
    {
      name: 'address_2',
      placeholder: 'Address Line 2',
      value: '',
      errorMsg: '',
    },
    {
      name: 'country',
      placeholder: 'Country',
      value: '',
      errorMsg: '',
    },
    { name: 'postcode', placeholder: 'Postcode', value: '', errorMsg: '' },
    {
      name: 'city',
      placeholder: 'Village / City / Town',
      value: '',
      errorMsg: '',
    },
    {
      name: 'county',
      placeholder: 'County',
      value: '',
      errorMsg: '',
    },
  ]
  const [formData, setFormData] = useState(formFields)

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    if (name === 'address_1') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Address is required' }
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
    if (name === 'address_2') {
      setFormData((prevFormData) =>
        prevFormData.map((field) =>
          field.name === name ? { ...field, value, errorMsg: '' } : field,
        ),
      )
    }
    if (name === 'city') {
      setFormData((prevFormData) =>
        prevFormData.map((field) =>
          field.name === name ? { ...field, value, errorMsg: '' } : field,
        ),
      )
    }
    if (name === 'postcode') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Postcode is required' }
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
          if (field?.name === 'country' && countryCode) {
            return !field.value.trim() ? { ...field, errorMsg: '' } : field
          }
          if (field?.name === 'address_2' || field?.name === 'city') {
            return !field.value.trim() ? { ...field, errorMsg: '' } : field
          }
          if (field?.name === 'county' && stateCode) {
            return !field.value.trim() ? { ...field, errorMsg: '' } : field
          }
          return !field.value.trim()
            ? { ...field, errorMsg: `${field.placeholder} is required` }
            : field
        }),
      )
      return
    }
  }
  return (
    <section className="flex h-auto w-full flex-col gap-[15px] pt-[15px] dxl:gap-[30px] dxl:pt-[30px]">
      {' '}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {formData.map((field, index) => {
          return (
            <section
              key={index}
              className="h-auto font-sans text-display-3 opacity-100"
            >
              {field?.name === 'country' ? (
                <CountrySelector
                  setCountryCode={setCountryCode}
                  selectedCountry={countryCode ? countryCode : selectedCountry}
                />
              ) : field?.name === 'county' ? (
                <StateSelector
                  selectedCountry={countryCode ? countryCode : selectedCountry}
                  selectedState={stateCode ? stateCode : selectedState}
                  setStateCode={setStateCode}
                />
              ) : (
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
                  placeholder={
                    field?.name === 'address_2' || field?.name === 'city'
                      ? field?.placeholder
                      : `${field.placeholder}*`
                  }
                  onChange={handleChange}
                  className="selection: h-[40px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
                />
              )}
              {field?.errorMsg && (
                <p className="mt-1 text-sm text-red-500">{field?.errorMsg}</p>
              )}
            </section>
          )
        })}
      </section>
      <section
        className="relative mt-2 flex h-8 w-[120px] items-center font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 lg:mt-[15px] dxl:mt-[20px] dxl:h-[53px] dxl:w-[220px] dxl:text-display-17"
        onClick={handleSubmit}
      >
        <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[35px] sm:w-[147px] dxl:h-[48px] dxl:w-[217px]"></div>
        <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[35px] sm:w-[147px] dxl:h-[48px] dxl:w-[217px]"></div>
        <button
          type="submit"
          className="relative flex w-full items-center justify-center xl:h-[47px]"
        >
          Save Changes
        </button>
      </section>
    </section>
  )
}
export default DefaultBillingAddress
