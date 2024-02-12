import ProgressiveImageComp from '../ProgressiveImageComp'
function CheckBox({ setIsChecked, isChecked }) {
  const checkIcon = '/Images/check.svg'
  return (
    <section
      className={`h-3 w-3 border-[1px] ${
        isChecked ? 'bg-footerBg' : 'bg-none'
      } border-textSecondary dxl:h-5 dxl:w-5`}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
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
