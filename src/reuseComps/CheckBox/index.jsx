import ProgressiveImageComp from '../ProgressiveImageComp'
function CheckBox({ setIsChecked, isChecked }) {
  const checkIcon = '/Images/check.svg'

  const handleSetChecked = () => {
    if (!setIsChecked) {
      return
    }
    setIsChecked(!isChecked)
    return
  }
  return (
    <section
      className={`h-3 w-3 border-[1px] ${
        isChecked ? 'bg-footerBg' : 'bg-none'
      } cursor-pointer border-textSecondary dxl:h-5 dxl:w-5`}
      onClick={handleSetChecked}
    >
      {/* {isChecked && (
        <section className="h-auto w-full">
          <ProgressiveImageComp src={checkIcon} alt="" />
        </section>
      )} */}
    </section>
  )
}
export default CheckBox
