import { useState } from 'react'

function ServiceEnquiry({ handleEnquireNow }) {
  const formFields = [
    { name: 'first_name', placeholder: 'First name', value: '', errorMsg: '' },
    { name: 'last_name', placeholder: 'Last name', value: '', errorMsg: '' },
    { name: 'email', placeholder: 'Email address', value: '', errorMsg: '' },
    { name: 'phone', placeholder: 'Phone number', value: '', errorMsg: '' },
    { name: 'make', placeholder: 'Make', value: '', errorMsg: '' },
    { name: 'model', placeholder: 'Model', value: '', errorMsg: '' },
    {
      name: 'referenceNumber',
      placeholder: 'Reference number',
      value: '',
      errorMsg: '',
    },
    { name: 'year', placeholder: 'Year', value: '', errorMsg: '' },
    {
      name: 'description',
      placeholder: 'Brief description of the problem',
      value: '',
      errorMsg: '',
    },
  ]

  const [formData, setFormData] = useState(formFields)
  const yourDetailsArr = formData.slice(0, 4)
  const yourWatchArr = formData.slice(4, 8)
  const descArr = formData.slice(8)

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
        console.log(value, '!!')
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
              ? { ...field, value, errorMsg: 'Please enter only numbers' }
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
    if (name === 'make') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Make is required' }
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
    if (name === 'model') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Model is required' }
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
    if (name === 'referenceNumber') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Reference number is required' }
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
    if (name === 'year') {
      if (!value) {
        setFormData((prevFormData) =>
          prevFormData.map((field) =>
            field.name === name
              ? { ...field, value, errorMsg: 'Year is required' }
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
    setFormData((prevFormData) => {
      return prevFormData.map((field) =>
        field.name === name ? { ...field, value } : field,
      )
    })
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
      return
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 px-7 py-7 lg:px-[200px] lg:py-[40px] xl:px-[250px] dxl:px-[300px] dxl:py-[90px]">
      <div className="flex h-full w-full flex-col gap-4 overflow-y-scroll rounded bg-white px-6 py-6 lg:py-[50px] lg:pl-[100px] lg:pr-[50px] xl:gap-10">
        <section className="flex items-center justify-between">
          <p className="font-cormorant text-display-11 dxl:text-display-14">
            Service Enquiry
          </p>
          <div className="flex  justify-end">
            <button
              className="h-4 w-4 font-sans text-gray-500"
              onClick={handleEnquireNow}
            >
              X
            </button>
          </div>
        </section>
        <section className="h-auto w-full pb-3 pr-5 ">
          <p className="font-sans text-display-3 dxl:text-display-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </section>
        <section className="flex h-auto w-full flex-col justify-between gap-4 sm:flex-row">
          <section className="flex flex-1 flex-col gap-3">
            <p className="text-display-12">Your Details</p>
            {yourDetailsArr.map((field) => {
              return (
                <section className="h-auto font-sans text-display-3 opacity-100">
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field?.value || ''}
                    placeholder={`${field.placeholder}*`}
                    onChange={handleChange}
                    className="selection: h-[40px] w-full appearance-none bg-search px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
                  />
                  {field?.errorMsg && (
                    <p className="mt-1 text-sm text-red-500">
                      {field?.errorMsg}
                    </p>
                  )}
                </section>
              )
            })}
          </section>
          <section className="flex flex-1 flex-col gap-3">
            <p className="text-display-12">Your Watch</p>
            {yourWatchArr.map((field) => {
              return (
                <section className="h-auto font-sans text-display-3 opacity-100">
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field?.value || ''}
                    placeholder={`${field.placeholder}*`}
                    onChange={handleChange}
                    className="selection: h-[40px] w-full appearance-none bg-search px-3 py-2 text-display-3 leading-tight focus:border-none focus:outline-none focus:ring-0 dxl:h-[50px] dxl:text-display-6"
                  />
                  {field?.errorMsg && (
                    <p className="mt-1 text-sm text-red-500">
                      {field?.errorMsg}
                    </p>
                  )}
                </section>
              )
            })}
          </section>
        </section>
        <section
          className="relative flex h-8 w-[120px] font-sans text-display-1 sm:h-[40px] sm:w-[150px] sm:text-display-4 xl:h-[53px] xl:w-[220px] xl:text-display-17"
          onClick={handleSubmit}
        >
          <div className="absolute bottom-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[217px]"></div>
          <div className="absolute right-0 h-[29px] w-[117px] border-[0.5px] border-textSecondary sm:h-[37px] sm:w-[147px] xl:h-[50px] xl:w-[217px]"></div>
          <button
            type="submit"
            className="relative flex w-full items-center justify-center"
          >
            Submit Details
          </button>
        </section>
      </div>
    </div>
  )
}
export default ServiceEnquiry
