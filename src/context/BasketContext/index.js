import React, { createContext, useState, useEffect } from 'react'

const CartdataContext = createContext()

export const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState({})

  useEffect(() => {
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const headers = { 'Content-Type': 'text/plain', Nonce: nonce }
    const getCartData = async () => {
      if (loginToken) {
        headers['Authorization'] = `Bearer ${loginToken}`
      }
      try {
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart',
          {
            method: 'get',
            headers,
            credentials: 'include',
          },
        )
        const responseData = await response.json()
        if (responseData) {
          setCartData(responseData)
        }
      } catch (error) {}
    }
    getCartData()
  }, [])

  return (
    <CartdataContext.Provider value={cartData}>
      {children}
    </CartdataContext.Provider>
  )
}

export default CartdataContext
