import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { useMediaQuery } from 'react-responsive'
import HeaderBanner from '../components/ContentBlocks/HeaderBanner'
import UspBlock from '../components/ContentBlocks/UspBlock'
import TwoAdBlock from '../components/ContentBlocks/TwoAdBlock'
import UspBlockMweb from '@/components/ContentBlocks/UspBlockMweb'
import ThreeAdBlock from '@/components/ContentBlocks/ThreeAdBlock'
import InsightBlock from '@/components/ContentBlocks/InsightBlock'
import AboutBlock from '@/components/ContentBlocks/AboutBlock'
import PromiseBlock from '@/components/ContentBlocks/PromiseBlock'
import VipAdBlock from '@/components/ContentBlocks/VipAdBlock'
import SliderBlock from '@/components/ContentBlocks/SliderBlock'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const trayData = data?.acf?.flexible_listing

  function getTrays(tray) {
    switch (tray.acf_fc_layout) {
      case 'header_banner':
        return <HeaderBanner trayData={tray} />
      case 'usp_block':
        return isDesktop ? (
          <UspBlockMweb trayData={tray} />
        ) : (
          <UspBlock trayData={tray} />
        )
      case 'ad_block':
        return <TwoAdBlock trayData={tray} />
      case 'product_slider':
        return <SliderBlock trayData={tray} />
      case 'about_block':
        return <AboutBlock trayData={tray} />
      case 'the_oakleigh_promise':
        return <PromiseBlock trayData={tray} />
      case 'our_latest_insights':
        return <InsightBlock trayData={tray} />
      case 'ad_block_three':
        return <ThreeAdBlock trayData={tray} />
      case 'vip_ad_block_with_products':
        return <VipAdBlock trayData={tray} />
      default:
        return null
    }
  }

  return (
    <main className="h-auto w-full">
      {trayData ? (
        trayData.map((tray) => {
          return getTrays(tray)
        })
      ) : (
        <p>Something went wrong unable to fetch the data</p>
      )}
    </main>
  )
}

export async function getServerSideProps(context) {
  try {
    const username = 'oakleighcdadevel'
    const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'
    const response = await fetch(
      'http://localhost/oakleigh/wp-json/wp/v2/pages/55?acf_format=standard',
      {
        method: 'get',
        headers: {
          'Content-Type': 'text/plain',
          Authorization: 'Basic ' + btoa(username + ':' + password),
        },
      },
    )
    if (!response.ok) {
      // Handle non-successful responses (e.g., 404, 500)
      console.error(`API request failed with status ${response.status}`)
      return {
        notFound: true,
      }
    }
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error fetching data from API:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}
