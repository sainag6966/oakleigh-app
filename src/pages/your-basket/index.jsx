import axios from 'axios'
import { useEffect, useState } from 'react'

function YourBasket() {
  const [data, setData] = useState([])
  // const [cartKey, setCartKey] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const cartKey = localStorage.getItem('cartKey')
      try {
        // const username = 'ck_96e01d53953b1372491dc07807ed0f0bd896d3a3'
        // const password = 'cs_e6dc67bafbc6907125843f189e2c377eb1a40606'
        const response = await axios.get(
          `https://oakleigh.cda-development3.co.uk/cms/wp-json/cocart/v2/cart?cart_key=${cartKey}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // Authorization: 'Basic ' + btoa(username + ':' + password),
            },
          },
        )
        const newData = response.data
        setData(newData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
    console.log(data || [])
  }, [])

  return (
    <div>
      {data?.items?.map((e) => {
        return e.name
      })}
    </div>
  )
}
export default YourBasket
