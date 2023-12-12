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
    <div className="w-full p-[140px] flex gap-[98px] justify-center items-start">
      <div className="min-w-[320px] h-auto ">
        <div className="w-full h-auto flex justify-between items-start pb-[30px] border-b-[1.5px] border-filterBorder">
          <p className="text-display-13">Filters</p>
          <u>
            <p className="text-display-17 font-sans">X Clear Filters</p>
          </u>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-11">Gender</p>
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
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Men's Watches</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Women's Watches</p>
            </label>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <label className="flex justify-center items-center gap-[18px]">
              <input
                type="checkbox"
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Unisex Watches</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-11">Model</p>
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Model</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-11">What's Included</p>
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">With Box</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-11">Condition</p>
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Very Good</p>
            </label>
          </div>
        </div>
        <div className="w-full h-auto py-[30px] border-b-[1.5px] border-filterBorder">
          <div className="flex justify-between items-center mb-5">
            <p className="text-display-11">Availability</p>
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
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
                className="w-5 h-5"
                // checked={selectedFilters.includes("men")}
                // onChange={() => handleFilterChange("men")}
              />
              <p className="text-display-6">Sold</p>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-start gap-[26px] items-center ">
        {data.map(
          (item) =>
            item.status === "publish" && (
              <div className="flex flex-col justify-center items-center">
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
                  <p className="text-display-12 max-w-[389px] line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-display-6">2019, box and papers</p>
                  <div className="font-sans text-display-16 ">
                    £{item.price}
                  </div>
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
