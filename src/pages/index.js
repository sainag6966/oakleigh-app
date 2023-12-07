import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/ContentBlocks/HeaderBanner';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  // const [item, setItem] = useState([])
  // const username = 'oakleighcdadevel';
  // const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1';
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch('https://oakleigh.cda-development3.co.uk/wp-json/wp/v2/pages/2?acf_format=standard', {
  //       method: 'get',
  //       headers: {
  //         "Content-Type": "text/plain",
  //         'Authorization': 'Basic ' + btoa(username + ":" + password),
  //       },
  //     });
  //     const data = await response?.json() || [];
  //     setItem(data || []);
  //   };
  //   getData();
  // }, []);

  return (
    <div className='flex flex-col justify-between max-h-screen'>
      <header>
        <Header data={data} />
      </header>
      <main>
        {/* <HeaderBanner/> */}
      </main>
      <footer>
        <Footer/>
      </footer>
      </div>

  )
}

export async function getServerSideProps(context) {
  const username = 'oakleighcdadevel';
  const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1';
  const response = await fetch('https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=18', {
    method: 'get',
    headers: {
      "Content-Type": "text/plain",
      'Authorization': 'Basic ' + btoa(username + ":" + password),
    },
  });
  const data = await response?.json();
  return {
    props: {
      data,
    }
  }
}
