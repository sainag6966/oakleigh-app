import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'
import Filters from '@/reuseComps/Filters'
import FiltersMweb from '@/reuseComps/FiltersMweb'

const ProductListing = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const username = 'ck_96e01d53953b1372491dc07807ed0f0bd896d3a3'
        const password = 'cs_e6dc67bafbc6907125843f189e2c377eb1a40606'
        const response = await axios.get(
          `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/v3/products?page=${page}`,
          {
            headers: {
              'Content-Type': 'text/plain',
              Authorization: 'Basic ' + btoa(username + ':' + password),
            },
          },
        )
        const newData = response.data

        // Assuming the API response has a property called 'items' containing the data
        setData((prevData) => [...prevData, ...newData])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [page])

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <div className="flex w-full flex-col">
      <div className="dxl:p-[100px] txl:gap-[98px] txl:p-[140px] flex w-full flex-col items-start justify-center gap-6 p-[32px] lg:flex-row xl:gap-[48px] xl:p-[60px]">
        {isDesktop ? <Filters /> : <FiltersMweb />}
        <div className="h-auto w-full flex-col items-center justify-center">
          <div className="txl:gap-[26px] grid h-auto w-full grid-cols-1 items-center gap-[18px] lg:grid-cols-3">
            {data.map(
              (item, index) =>
                item.status === 'publish' && (
                  <div
                    key={index}
                    className="flex grow-[1] flex-col items-center justify-center"
                  >
                    <div
                      className="dxl:w-[320px] dxl:h-[400px] txl:h-[462px] txl:w-[389px] relative h-[420px] w-full lg:h-[298px] lg:w-[195px] xl:h-[340px] xl:w-[260px]"
                      key={item.id}
                    >
                      <Image
                        src={item.images[0]?.src}
                        layout="fill"
                        alt="AdBlock"
                        objectFit="cover"
                        quality={100}
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div className="dxl:gap-[6px] txl:gap-2 flex flex-col items-center justify-center gap-[2px] xl:gap-1">
                      <p className="dxl:max-w-[320px] txl:max-w-[389px] txl:text-display-12 line-clamp-1 max-w-[180px] text-display-4 xl:max-w-[260px] xl:text-display-17">
                        {item.name}
                      </p>
                      <p className="dxl:text-display-6 text-display-3">
                        2019, box and papers
                      </p>
                      <div className="font-sans text-display-5 xl:text-display-16 ">
                        £{item.price}
                      </div>
                    </div>
                    <div className="relative flex h-[28px] w-[100px] max-w-[150px] items-center justify-center border-[1px] border-black xl:h-[52px] xl:w-[176px]">
                      <button
                        type="submit"
                        className="absolute right-1 top-1 flex h-full w-full items-center justify-center border-[1px] border-black text-display-4 xl:text-display-17"
                      >
                        View Watch
                      </button>
                    </div>
                  </div>
                ),
            )}
          </div>
          <button
            className="mt-[48px] w-full text-display-9"
            onClick={handleLoadMore}
            disabled={loading}
          >
            <u>Load More Watches</u>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListing
