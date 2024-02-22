import { useState } from 'react'
import CheckBox from '@/reuseComps/CheckBox'
import { useSearchParams } from 'next/navigation'

function VipSignupForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedBrands, setSelectedBrands] = useState([])
  const formFields = [
    { name: 'first_name', placeholder: 'First name', value: '', errorMsg: '' },
    { name: 'last_name', placeholder: 'Last name', value: '', errorMsg: '' },
    { name: 'email', placeholder: 'Email address', value: '', errorMsg: '' },
    { name: 'dob', placeholder: 'Date of birth', value: '', errorMsg: '' },
  ]

  const brandList = [
    'Rolex',
    'Omega',
    'Philhuges',
    'Fasttrack',
    'Titan',
    'Timex',
    'Solex',
    'Mmega',
    'Ihilhuges',
    'Masttrack',
    'Litan',
    'Limex',
  ]

  const budgetRangeList = [
    '£0 - £1000',
    '£1001 - £2000',
    '£2001 - £5000',
    '£5,001 - £10,000',
    '£10,001 - £20,000',
    '£20,001 - £30,000',
    '£30,001 - £50,000',
    'Over £50,000',
  ]
  const [formData, setFormData] = useState(formFields)

  const handleBrandSel = (brand) => {
    if (selectedBrands.includes(brand)) {
      const filteredBrands = selectedBrands.filter((e) => {
        return e !== brand
      })
      setSelectedBrands(filteredBrands)
      return
    }
    setSelectedBrands((prev) => {
      return [...prev, brand]
    })
  }

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
    if (name === 'dob') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Date of birth is required' }
              : field,
          ),
        )
      } else if (!/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value)) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? {
                  ...field,
                  value,
                  errorMsg: 'Please enter a valid date in dd/mm/yyyy format',
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Check if any field is empty
    const hasEmptyField = formData.some((field) => !field.value.trim())
    if (hasEmptyField) {
      // Set error messages for empty fields
      setFormData((prevFormData) =>
        prevFormData.map((field) =>
          !field.value.trim()
            ? { ...field, errorMsg: `${field.placeholder} is required` }
            : field,
        ),
      )
      window.scroll(0, 300)
      return
    }
  }

  return (
    <main className="flex h-auto w-full max-w-[804px] flex-col gap-[15px] bg-search p-[30px] font-sans xl:p-[50px] dxl:gap-[30px]">
      <p className="font-cormorant text-display-11 dxl:text-display-13">
        Sign Up
      </p>
      <p className="text-display-3 dxl:text-display-6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua
      </p>
      <section>
        <section className="flex flex-1 flex-col gap-3">
          {formData.map((field, index) => {
            return (
              <section
                key={index}
                className="h-auto font-sans text-display-3 opacity-100"
              >
                {index === formFields.length - 1 && (
                  <p className="mb-4 mt-7 text-display-extra leading-normal dxl:mb-7 dxl:mt-[50px] dxl:text-display-16">
                    So We Can Send You A Birthday Gift...
                  </p>
                )}
                <input
                  type="text"
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
      </section>
      <section className="flex flex-col">
        <p className="mb-4 mt-3 text-display-extra leading-normal dxl:mb-7 dxl:mt-4 dxl:text-display-16">
          Which Are Your Favourite Watch Brands?
        </p>
        <section className="grid grid-cols-2 justify-between gap-y-4 sm:grid-cols-3 lg:grid-cols-4 dxl:gap-y-[30px]">
          {brandList.map((brand, index) => {
            const selBrand = selectedBrands.includes(brand)
            return (
              <section
                key={index}
                className="flex flex-wrap items-center gap-2 dxl:gap-4"
                onClick={() => {
                  handleBrandSel(brand)
                }}
              >
                <CheckBox
                  isChecked={selBrand ? true : false}
                  setIsChecked={setIsChecked}
                />
                <p className="text-display-3 dxl:text-display-6">{brand}</p>
              </section>
            )
          })}
        </section>
      </section>
      <section className="flex flex-col">
        <p className="mb-4 mt-3 text-display-extra leading-normal dxl:mb-7 dxl:mt-4 dxl:text-display-16">
          Are There Any Specific Watches You Would Like To Own?
        </p>
        <textarea
          type="text"
          id={'desc'}
          name={'desc'}
          //   value={field?.value || ''}
          placeholder={'Enter as many watches as you would like...'}
          onChange={handleChange}
          className="selection: h-[40px] min-h-[200px] w-full appearance-none bg-textPrimary px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
        />
      </section>
      <section className="flex flex-col">
        <p className="mb-4 mt-3 text-display-extra leading-normal dxl:mb-7 dxl:mt-4 dxl:text-display-16">
          What Is Your Average Budget When Purchasing A Watch?
        </p>
        <section className="grid grid-cols-1 justify-between gap-y-4 sm:grid-cols-2 lg:grid-cols-3 dxl:gap-y-[30px]">
          {budgetRangeList.map((brand, index) => {
            return (
              <section
                key={index}
                className="flex flex-wrap items-center gap-2 dxl:gap-4"
              >
                <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                <p className="text-display-3 dxl:text-display-6">{brand}</p>
              </section>
            )
          })}
        </section>
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
          Submit Application
        </button>
      </section>
    </main>
  )
}
export default VipSignupForm
