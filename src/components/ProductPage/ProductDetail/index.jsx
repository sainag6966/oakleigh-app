function ProductDetail({ data }) {
  const { acf } = data
  const stockStatus = data?.stock_status
  const price = data?.price

  return (
    <section className="flex h-auto w-full flex-col gap-[15px] font-sans">
      <h1 className="font-cormorant text-display-12 xl:text-display-13 dxl:text-display-14">
        {data?.name}
      </h1>
      {stockStatus ? (
        <h5 className="text-display-10 font-semibold xl:text-display-10 dxl:text-[25px]">
          £{price}
        </h5>
      ) : (
        <p>Sold</p>
      )}
      <section className="mt-[15px] flex flex-col items-start justify-between gap-4 border-0 border-search text-[11px] text-display-3 lg:flex-row lg:items-center lg:gap-0 lg:border-y-[1px] lg:py-5 dxl:py-[30px] dxl:text-display-6">
        <div className="flex items-center justify-start gap-1 dxl:gap-2">
          <p className="font-semibold">Ref No:</p>
          <p>{acf?.ref_no}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="font-semibold">Year:</p>
          <p>{data?.year}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="font-semibold">{`What's Included:`}</p>
          <p className="line-clamp-1">Box & Papers</p>
        </div>
      </section>
    </section>
  )
}
export default ProductDetail
