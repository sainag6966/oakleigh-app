import React, { useState, useEffect } from 'react'

const Toast = ({ message, showToast, setShowToast }) => {
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [showToast, setShowToast])

  return (
    <div
      className={`relative rounded-[8px] bg-uspBlockBackground p-3 font-sans text-footerBg ${
        showToast ? 'visible' : 'invisible'
      }`}
    >
      {message}
    </div>
  )
}

export default Toast
