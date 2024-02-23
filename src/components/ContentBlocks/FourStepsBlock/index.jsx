import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function FourStepsBlock() {
  const trayData = [
    {
      url: '/Images/Sample/imageTextBlock.svg',
      title: 'Access To Exclusive Watches',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      url: '/Images/Sample/imageTextBlock.svg',
      title: 'Exclusive VIP Offers',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      url: '/Images/Sample/imageTextBlock.svg',
      title: '15% Off Watch Servicing',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      url: '/Images/Sample/imageTextBlock.svg',
      title: 'Brand Alerts',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ]
  return (
    <main className="flex h-auto w-full flex-wrap gap-[16px] px-[37px] pt-[60px] md:flex-nowrap lg:px-20 lg:pt-[100px] dxl:gap-[30px] dxl:px-[140px] dxl:pt-[120px]">
      {trayData.map((tray) => {
        return (
          <section className="flex flex-col justify-between gap-4 self-stretch lg:flex-1 dxl:gap-7">
            <figure className="aspect-square">
              <ProgressiveImageComp src={tray?.url} alt="productImage" />
            </figure>
            <p className="self-stretch text-display-17 leading-normal xl:text-display-11 dxl:text-display-12">
              {tray?.title}
            </p>{' '}
            <p className=" font-sans text-display-3 dxl:text-display-6">
              {tray?.description}
            </p>
          </section>
        )
      })}
    </main>
  )
}
export default FourStepsBlock
