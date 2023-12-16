import SimpleSlider from '@/reuseComps/Slider'

function SliderBlock() {
  const data = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'Rolex 16523 ‘Zenith’ Daytona',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '12000',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'Zenith Defy EL Primero 21',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '13000',
    },
    {
      url: '/Images/Sample/insight3.svg',
      title: 'Rolex 226570 Explorer II',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '14000',
    },
    {
      url: '/Images/Sample/insight4.svg',
      title: 'Rolex 226570 Explorer II',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '15000',
    },
  ]
  return (
    <div className="dxl:pt-[120px] dxl:px-[140px] flex flex-col items-center justify-center gap-10 px-9 pt-[60px] lg:px-20 lg:pt-[100px]">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:justify-between">
        <p className="dxl:text-display-14 text-display-12">
          Currently Available
        </p>
        <u>
          <p className="dxl:text-display-17 text-display-4">View All</p>
        </u>
      </div>
      <SimpleSlider trayData={data} navButtons slidesToShow={3} />
    </div>
  )
}
export default SliderBlock
