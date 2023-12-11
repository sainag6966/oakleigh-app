import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductListing = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const username = "ck_96e01d53953b1372491dc07807ed0f0bd896d3a3";
        const password = "cs_e6dc67bafbc6907125843f189e2c377eb1a40606";
        const response = await axios.get(
          `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/v3/products?page=${page}`,
          {
            headers: {
              "Content-Type": "text/plain",
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );
        const newData = response.data;

        // Assuming the API response has a property called 'items' containing the data
        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    // <div className="w-full h-auto flex flex-wrap justify-between items-center ">
    //   {data.map(
    //     (item) =>
    //       item.status === "publish" && (
    //         <div className="flex flex-col justify-center items-center gap-5 pt-14">
    //           <div className="relative w-[389px] h-[462px]" key={item.id}>
    //             <Image
    //               src={item.images[0]?.src}
    //               layout="fill"
    //               alt="AdBlock"
    //               objectFit="cover"
    //               quality={100}
    //               style={{ objectPosition: "center" }}
    //             />
    //           </div>
    //           <div className="flex flex-col gap-2 justify-center items-center">
    //             <p className="text-display-12 max-w-[389px]">{item.name}</p>
    //             <div className="font-sans text-display-16 ">£{item.price}</div>
    //           </div>
    //           <div className="w-[176px] h-[52px] relative border-[1px] flex justify-center items-center border-black max-w-[150px]">
    //             <button
    //               type="submit"
    //               className="absolute border-[1px] border-black w-full h-full top-1 right-1"
    //             >
    //               View Watch
    //             </button>
    //           </div>
    //         </div>
    //       )
    //   )}
    //   {loading && <p>Loading...</p>}
    //   <button onClick={handleLoadMore} disabled={loading}>
    //     Load More Watches
    //   </button>
    // </div>
    <div className="w-full p-[140px] flex">
      <div className="w-[30%]"></div>
    <div className="w-full h-auto flex flex-wrap justify-start gap-10 items-center ">
    {data.map(
      (item) =>
        item.status === "publish" && (
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative w-[389px] h-[462px]" key={item.id}>
              <Image
                src={item.images[0]?.src}
                layout="fill"
                alt="AdBlock"
                objectFit="cover"
                quality={100}
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-display-12 max-w-[389px] line-clamp-1">{item.name}</p>
              <p className="text-display-6">2019, box and papers</p>
              <div className="font-sans text-display-16 ">£{item.price}</div>
            </div>
            <div className="w-[176px] h-[52px] relative border-[1px] flex justify-center items-center border-black max-w-[150px]">
              <button
                type="submit"
                className="absolute border-[1px] border-black w-full h-full top-1 right-1"
              >
                View Watch
              </button>
            </div>
          </div>
        )
    )}
    <button onClick={handleLoadMore} disabled={loading}>
      Load More Watches
    </button>
  </div>
  </div>
  );
};

export default ProductListing;
