function CheckBox({ setIsChecked, isChecked }) {
  return (
    <section
      className="h-full w-full border-[1px] border-textSecondary"
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    />
  )
}
export default CheckBox
