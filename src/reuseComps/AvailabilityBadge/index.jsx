const SoldBadge = () => {
  return (
    <section className="relative flex h-full w-auto">
      <section className="absolute left-[8px] top-0 z-0 h-[36px] w-[68px] bg-uspBlockBackground lg:left-[12px] lg:h-[52px] lg:w-[120px]"></section>
      <section className="relative flex h-[28px] w-[84px] items-center justify-center bg-uspBlockBackground text-display-17 leading-none lg:h-[40px] lg:w-[144px] lg:text-display-11">
        <p className="mt-1 lg:mt-3">SOLD</p>
      </section>
    </section>
  )
}

const ReservedBadge = () => {
  return (
    <section className="relative flex h-full w-auto">
      <section className="absolute left-[8px] top-0 z-0 h-[36px] w-[92px] bg-reservedColor lg:left-[13px] lg:h-[52px] lg:w-[160px]"></section>
      <section className="relative flex h-[28px] w-[108px] items-center justify-center bg-reservedColor text-display-17 leading-none lg:h-[40px] lg:w-[186px] lg:text-display-11">
        <p className="mt-1 lg:mt-3">RESERVED</p>
      </section>
    </section>
  )
}

const ComingSoonBadge = () => {
  return (
    <section className="relative flex h-full w-auto text-uspBlockBackground">
      <section className="absolute left-[8px] top-0 z-0 h-[36px] w-[68px] bg-footerBg lg:left-[13px] lg:h-[52px] lg:w-[200px]"></section>
      <section className="font-regular relative flex h-[28px] w-[84px] items-center justify-center bg-footerBg text-display-17 leading-none lg:h-[40px] lg:w-[226px] lg:text-display-11">
        <p className="mt-1 xl:mt-3">COMING SOON</p>
      </section>
    </section>
  )
}

const VipOnlyBadge = () => {
  return (
    <section className="relative flex h-full w-auto text-uspBlockBackground">
      <section className="absolute left-[8px] top-0 z-0 h-[36px] w-[92px] bg-footerBg lg:left-[13px] lg:h-[52px] lg:w-[160px]"></section>
      <section className="relative flex h-[28px] w-[108px] items-center justify-center bg-footerBg text-display-17 leading-none lg:h-[40px] lg:w-[186px] lg:text-display-11">
        <p className="mt-1 lg:mt-3">VIP ONLY</p>
      </section>
    </section>
  )
}

function AvailabilityBadge({ status }) {
  const getStatusBadge = () => {
    switch (status) {
      case 'Sold':
        return <SoldBadge />
      case 'Reserved':
        return <ReservedBadge />
      case 'COMINGSOON':
        return <ComingSoonBadge />
      case 'VIP Only':
        return <VipOnlyBadge />
      default:
        return null
    }
  }
  return getStatusBadge()
}
export default AvailabilityBadge
