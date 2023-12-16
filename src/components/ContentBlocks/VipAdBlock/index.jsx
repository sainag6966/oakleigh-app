import SimpleSlider from '@/reuseComps/Slider'
import Image from 'next/image'

function VipAdBlock() {
  const vipIcon = '/Images/Sample/vipBlock1.svg'
  const data = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'Rolex 16523 ‘Zenith’ Daytona',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      buttonTitle: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'Zenith Defy EL Primero 21',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      buttonTitle: '',
      price: '',
    },
  ]
  return (
    <div className="txl:px-[140px] flex h-auto w-full flex-col justify-between gap-6 px-9 pt-[60px] lg:flex-row lg:pt-[100px] xl:px-20 ">
      <div className="flex flex-col justify-between gap-6 lg:w-[60%]">
        <div className="flex h-auto w-full flex-col items-center justify-between lg:flex-row">
          <span className="dxl:text-display-14 text-display-12">
            Watches Coming Soon
          </span>
          <u>
            <span className="dxl:text-display-17 font-sans text-display-4">
              View All Coming Soon
            </span>
          </u>
        </div>
        <div className="flex flex-wrap justify-between gap-6 lg:flex-nowrap">
          <SimpleSlider trayData={data} navButtons={false} slidesToShow={2} />
        </div>
      </div>
      <div className="dxl:p-[60px] relative flex w-full flex-col items-center justify-around gap-6 bg-uspBlockBackground lg:w-[35%] lg:p-5 xl:w-[30%] xl:p-[40px]">
        <img src={vipIcon} alt="vipIcon"></img>
        <p className="dxl:text-display-15 text-center text-display-13">
          JOIN THE VIP CLUB
        </p>
        <p className="text-center text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="relative flex h-8 w-48 items-center justify-center border-[1px] border-black">
          <button
            type="submit"
            className="absolute right-[1px] top-[1px] h-full w-full border-[1px] border-black"
          >
            JOIN NOW FOR FREE
          </button>
        </div>
        <u>
          <span className="font-sans text-display-4">Find Out More</span>
        </u>
        <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
      </div>
    </div>
  )
}
export default VipAdBlock
