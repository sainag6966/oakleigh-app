import React, { createContext, useContext, useState } from 'react'

const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketData, setBasketData] = useState(null)

  const updateBasketData = (data) => {
    setBasketData(data)
  }

  return (
    <BasketContext.Provider value={{ basketData, updateBasketData }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasketContext = () => {
  return useContext(BasketContext)
}
