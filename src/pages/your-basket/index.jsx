import axios from 'axios'
import { useEffect, useState } from 'react'

function YourBasket() {
  const [data, setData] = useState([])
  const [nonce, setNonce] = useState('')

  useEffect(() => {
    const getNouce = async () => {
      try {
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/wc-nonce',
          {
            method: 'get',
          },
        )

        if (response.ok) {
          const data = await response.json()
          const nonceid = data?.Nonce
          setNonce(nonceid)
        } else {
          console.error(
            'Failed to add item to the basket. Status:',
            response.status,
          )
          const errorData = await response.json()
          console.error('Error Details:', errorData)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    // getNouce()
    fetchData()
  }, [nonce])

  return (
    <div>
      {data?.items?.map((e) => {
        return e.name
      })}
    </div>
  )
}
export default YourBasket
