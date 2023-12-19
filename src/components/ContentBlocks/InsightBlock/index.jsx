import Image from 'next/image'
import SimpleSlider from '@/reuseComps/Slider'

function InsightBlock({ trayData }) {
  const data = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'A Look At The Breitling Navitimer 806 A Unique Timeless Piece',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'What Watch Face Diameter Would Best Fit My Wrist?',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight3.svg',
      title: 'Top 10 Watch Care Tips',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight4.svg',
      title: 'IS The Age Of Your Watch Important When You Sell?',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
  ]
  return (
    <div className="flex h-auto w-full flex-col justify-between gap-[30px] px-9 pt-[60px] text-footerBg lg:px-20 lg:pt-[120px] dxl:gap-[50px] dxl:px-[140px]">
      <div className="flex h-auto w-full flex-col items-center justify-between lg:flex-row">
        <span className="text-display-12 dxl:text-display-14">
          Our Latest Insights
        </span>
        <u>
          <span className="font-sans text-display-4 dxl:text-display-17">
            View All Insights
          </span>
        </u>
      </div>
      <SimpleSlider trayData={data} navButtons={false} slidesToShow={4} />
    </div>
  )
}
export default InsightBlock
