import { useState } from 'react'

function ServiceEnquiry({ handleEnquireNow }) {
  const yourDetailFields = [
    { name: 'first_name', placeholder: 'First name', value: '', errorMsg: '' },
    { name: 'last_name', placeholder: 'Last name', value: '', errorMsg: '' },
    { name: 'email', placeholder: 'Email address', value: '', errorMsg: '' },
    { name: 'phone', placeholder: 'Phone number', value: '', errorMsg: '' },
  ]

  const yourWatchFields = [
    { name: 'make', placeholder: 'Make', value: '', errorMsg: '' },
    { name: 'model', placeholder: 'Model', value: '', errorMsg: '' },
    {
      name: 'referenceNumber',
      placeholder: 'Reference number',
      value: '',
      errorMsg: '',
    },
    { name: 'year', placeholder: 'Year', value: '', errorMsg: '' },
  ]
  const [formData, setFormData] = useState(yourDetailFields)
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
        console.log(value, '!!')
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

    setFormData((prevFormData) => {
      return prevFormData.map((field) =>
        field.name === name ? { ...field, value } : field,
      )
    })
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
        <section className="h-auto w-full">
          <section className="flex flex-col gap-3">
            <p className="text-display-12">Your Details</p>
            {formData.map((field) => {
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
      </div>
    </div>
  )
}
export default ServiceEnquiry
