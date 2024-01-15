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
      className={`relative rounded-md bg-black p-6 text-white ${
        showToast ? 'visible' : 'invisible'
      }`}
    >
      {message}
    </div>
  )
}

export default Toast
