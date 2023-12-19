import NextImage from '@/reuseComps/NextImage'

function UspBlock({ trayData }) {
  const data = trayData?.ub_list[1]

  return (
    <div className="flex h-[115px] w-full justify-between bg-uspBlockBackground">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="h-[0.5px] min-w-[30px] grow-[0.4] bg-black" />
        <div className="flex w-auto items-center justify-center gap-5">
          <NextImage src={data.ub_image} width="38" height="38" alt="uspIcon" />
          <p className="text-display-9 text-footerBg">{data.ub_title}</p>
        </div>
        <div className="h-[0.5px] min-w-[30px] grow-[0.4] bg-black" />
      </div>
    </div>
  )
}
export default UspBlock
