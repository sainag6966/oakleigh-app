import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderBanner from "../components/ContentBlocks/HeaderBanner";
import UspBlock from "../components/ContentBlocks/UspBlock";
import BrandWidget from "../components/ContentBlocks/BrandWidget";
import TwoAdBlock from "../components/ContentBlocks/TwoAdBlock";
import headerBanner from "../../public/Images/headerBanner.svg";
import UspBlockMweb from "@/components/ContentBlocks/UspBlockMweb";
import ThreeAdBlock from "@/components/ContentBlocks/ThreeAdBlock";
import Image from "next/image";
import InsightBlock from "@/components/ContentBlocks/InsightBlock";
import AboutBlock from "@/components/ContentBlocks/AboutBlock";
import PromiseBlock from "@/components/ContentBlocks/PromiseBlock";
import VipAdBlock from "@/components/ContentBlocks/VipAdBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const headerBannerSrc = "/Images/headerBanner.svg";
  const headerBannerMob = "/Images/headerBannerMob.svg";
  const extImage =
    "https://png.pngtree.com/background/20230517/original/pngtree-wolfs-full-hd-wallpaper-art-wallpaper-1920x1080-1080p-picture-image_2634113.jpg";
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' });

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
    <div className="flex flex-col justify-between h-screen">
      <header>
        <Header data={data} />
      </header>
      <main className="w-full h-auto">
        <HeaderBanner />
        {isDesktop ? <UspBlockMweb/> : <UspBlock/> }
        {/* <BrandWidget/> */}
        <TwoAdBlock/>
        <AboutBlock/>
        <VipAdBlock/>
        <PromiseBlock/>
        <ThreeAdBlock/>
        <InsightBlock/>
        
        {/* <div className="relative w-full h-[578px]">
          <Image
            src={headerBannerSrc}
            alt="headerBanner"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ objectPosition: "center" }}
          />
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const username = "oakleighcdadevel";
    const password = "QsJY lkVy QxL8 3iFY NhhP Cto1";
    const response = await fetch(
      "https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=18",
      {
        method: "get",
        headers: {
          "Content-Type": "text/plain",
          Authorization: "Basic " + btoa(username + ":" + password),
        },
      }
    );

    if (!response.ok) {
      // Handle non-successful responses (e.g., 404, 500)
      console.error(`API request failed with status ${response.status}`);
      return {
        notFound: true,
      };
    }

    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error fetching data from API:", error);
    return {
      props: {
        data: null, // You can set a default value or handle this case in your component
      },
    };
  }
}
