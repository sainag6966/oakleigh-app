import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FooterDweb from "@/components/Footer/FooterDweb";
import FooterTop from "@/components/Footer/FooterTop";
import TwoAdBlock from "@/components/ContentBlocks/TwoAdBlock";
import InsightBlock from "@/components/ContentBlocks/InsightBlock";
import SliderBlock from "@/components/ContentBlocks/SliderBlock";
import PlainTextBlock from "@/components/ContentBlocks/PlainTextBlock";
import ImageAndTextBlock from "@/components/ContentBlocks/ImageAndTextBlock";
import ImageTextOnLeft from "@/components/ContentBlocks/ImageTextOnLeft";
import FullWidthVipAdBlock from "@/components/ContentBlocks/FullWidthVipAdBlock";

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
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex gap-6 xl:gap-[48px] 3xl:gap-[98px] p-[32px] xl:p-[60px] 2xl:p-[100px] 3xl:p-[140px] justify-center items-start">
          <div className="min-w-[180px] xl:min-w-[240px] 3xl:min-w-[320px] h-auto ">
            <div className="w-full h-auto flex justify-between items-center pb-[30px] border-b-[1.5px] border-filterBorder">
              <p className="text-display-11 xl:text-display-12 3xl:text-display-13">Filters</p>
              <u>
                <p className="text-display-1 xl:text-display-4 3xl:text-display-17 font-sans">X Clear Filters</p>
              </u>
            </div>
            <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
              <div className="flex justify-between items-center mb-5">
                <p className="text-display-17 xl:text-display-11">Gender</p>
                <img
                  className="w-4 h-3 mt-1"
                  src="/Images/upArrow.svg"
                  alt="upArrow"
                />
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">{`Men's Watches`}</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">{`Women's Watches`}</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Unisex Watches</p>
                </label>
              </div>
            </div>
            <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
              <div className="flex justify-between items-center mb-5">
                <p className="text-display-17 xl:text-display-11">Model</p>
                <img
                  className="w-4 h-3 mt-1"
                  src="/Images/upArrow.svg"
                  alt="upArrow"
                />
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Model</p>
                </label>
              </div>
            </div>
            <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
              <div className="flex justify-between items-center mb-5">
                <p className="text-display-17 xl:text-display-11">{`What's Included`}</p>
                <img
                  className="w-4 h-3 mt-1"
                  src="/Images/upArrow.svg"
                  alt="upArrow"
                />
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Full Set</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Box and Papers</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">With Box</p>
                </label>
              </div>
            </div>
            <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
              <div className="flex justify-between items-center mb-5">
                <p className="text-display-17 xl:text-display-11">Condition</p>
                <img
                  className="w-4 h-3 mt-1"
                  src="/Images/upArrow.svg"
                  alt="upArrow"
                />
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Unworn</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Excellent</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Very Good</p>
                </label>
              </div>
            </div>
            <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
              <div className="flex justify-between items-center mb-5">
                <p className="text-display-17 xl:text-display-11">Availability</p>
                <img
                  className="w-4 h-3 mt-1"
                  src="/Images/upArrow.svg"
                  alt="upArrow"
                />
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Available</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Reserved</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Coming Soon</p>
                </label>
              </div>
              <div className="flex items-center justify-start space-x-4">
                <label className="flex justify-center items-center gap-[18px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 xl:w-5 xl:h-5"
                    // checked={selectedFilters.includes("men")}
                    // onChange={() => handleFilterChange("men")}
                  />
                  <p className="text-display-6">Sold</p>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col">
            <div className="w-full h-auto flex flex-wrap justify-start gap-[18px] 3xl:gap-[26px] items-center ">
              {data.map(
                (item, index) =>
                  item.status === "publish" && (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center grow-[1]"
                    >
                      <div
                        className="relative w-[195px] h-[298px] xl:w-[260px] xl:h-[340px] 2xl:w-[320px] 2xl:h-[400px] 3xl:w-[389px] 3xl:h-[462px]"
                        key={item.id}
                      >
                        <Image
                          src={item.images[0]?.src}
                          layout="fill"
                          alt="AdBlock"
                          objectFit="cover"
                          quality={100}
                          style={{ objectPosition: "center" }}
                        />
                      </div>
                      <div className="flex flex-col gap-[2px] xl:gap-1 2xl:gap-[6px] 3xl:gap-2 justify-center items-center">
                        <p className="text-display-4 xl:text-display-17 3xl:text-display-12 max-w-[180px] xl:max-w-[260px] 2xl:max-w-[320px] 3xl:max-w-[389px] line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-display-3 2xl:text-display-6">2019, box and papers</p>
                        <div className="font-sans text-display-5 xl:text-display-16 ">
                          £{item.price}
                        </div>
                      </div>
                      <div className="w-[100px] h-[28px] xl:w-[176px] xl:h-[52px] relative border-[1px] flex justify-center items-center border-black max-w-[150px]">
                        <button
                          type="submit"
                          className="absolute border-[1px] flex justify-center items-center text-display-4 xl:text-display-17 border-black w-full h-full top-1 right-1"
                        >
                          View Watch
                        </button>
                      </div>
                    </div>
                  )
              )}
            </div>
            <button
              className="text-display-9 mt-[100px]"
              onClick={handleLoadMore}
              disabled={loading}
            >
              <u>Load More Watches</u>
            </button>
          </div>
        </div>
        <PlainTextBlock />
        <TwoAdBlock />
        <ImageAndTextBlock />
        <ImageTextOnLeft />
        {/* <FullWidthVipAdBlock /> */}
        <InsightBlock />
        <SliderBlock />
      </div>
      <FooterTop/>
      <FooterDweb />
    </>
  );
};

export default ProductListing;
