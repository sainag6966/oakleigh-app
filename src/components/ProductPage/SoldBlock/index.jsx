import { useState } from 'react'
import CheckBox from '@/reuseComps/CheckBox'

function SoldBlock() {
  const [postCode, setPostCode] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const label =
    'This item has been sold, please enter your email address in below and we will contact you regarding any similar watches.'
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e?.target
    setPostCode(value)
  }

  return (
    <section className="flex h-auto w-full flex-col items-start justify-between gap-6 font-sans xl:gap-5 txl:gap-[30px]">
      <p className="flex text-display-3 xl:text-display-6">{label}</p>
      <section className="flex h-auto w-full flex-col lg:flex-row">
        <form className="flex h-auto w-full gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={postCode}
            placeholder="Enter Your email address"
            onChange={handleChange}
            className="h-[41px] w-full flex-1 appearance-none border bg-search px-7 py-2 font-sans text-display-3 text-black dxl:h-[50px] dxl:text-display-6"
          />
          <div className="relative flex h-[41px] w-[110px] font-sans text-display-4 dxl:h-[50px] dxl:w-[150px] dxl:text-display-17">
            <div className="absolute bottom-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary dxl:h-[47px] dxl:w-[147px]"></div>
            <div className="absolute right-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary dxl:h-[47px] dxl:w-[147px]"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <section className="flex h-auto w-full items-center justify-start gap-2 dxl:gap-4">
        <section className="h-3 w-3 dxl:h-4 dxl:w-4">
          <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
        </section>
        <p className="text-display-3 dxl:text-display-6">
          I’d like to receive Oakleigh updates
        </p>
      </section>
    </section>
  )
}
export default SoldBlock
