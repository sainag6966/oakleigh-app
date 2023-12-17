import NextImage from '@/reuseComps/NextImage'

function UspBlockMweb({ trayData }) {
  const data = trayData?.ub_list

  return (
    <div className="dxl:px-[268px] flex h-[115px] w-full items-center justify-evenly bg-uspBlockBackground">
      {data.map((e, index) => {
        return (
          <>
            <div className="flex w-auto items-center justify-center gap-5">
              <NextImage
                src={e.ub_image}
                width="40"
                height="40"
                alt="uspIcon"
              />
              <p className="text-display-18">{e.ub_title}</p>
            </div>
            {data.length - 1 !== index && (
              <div className="h-[0.5px] min-w-[60px] grow-[0.1] bg-black"></div>
            )}
          </>
        )
      })}
    </div>
  )
}
export default UspBlockMweb
