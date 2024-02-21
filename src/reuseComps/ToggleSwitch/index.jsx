import { useState } from 'react'

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div
      className={`relative inline-block h-8 w-[52px] rounded-full p-1 ${
        isOn ? 'bg-toggleSwitchOn' : 'bg-toggleSwitchOff'
      }`}
      onClick={toggleSwitch}
    >
      <div
        className="absolute h-6 w-6 transform rounded-full bg-white transition-transform"
        style={{ left: isOn ? '23px' : '0.25rem' }}
      />
    </div>
  )
}

export default ToggleSwitch
