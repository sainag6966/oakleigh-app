function VipOnlyBlock({ data }) {
  const htmlString = data?.vip_benefits
  const regex = /<li>(.*?)<\/li>/g
  const matches = htmlString.match(regex) || []
  const arrayFromHTML = matches.map((match) =>
    match.replace(/<li>|<\/li>/g, ''),
  )
  const vipIcon = '/Images/Sample/vipBlock1.svg'
  const CtaLabel = 'Upgrade To A VIP'

  return (
    <section className="flex h-auto w-full flex-col gap-6 xl:gap-5 txl:gap-[30px]">
      <p className="text-display-3 dxl:text-display-6">
        This item is on pre-release to our VIP customers only.
      </p>
      <section className="relative flex h-[42px] w-full cursor-pointer lg:h-[53px]">
        <div className="absolute bottom-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary bg-textSecondary sm:w-[99.5%] lg:h-[50px]" />
        <div className="absolute right-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary sm:w-[99.5%] lg:h-[50px]" />
        <div className="absolute bottom-[3px] left-[1%] right-[1%] h-9 w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary sm:left-[0.5%] sm:right-[0.5%] sm:w-[99%] lg:h-[47px]" />
        <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary xl:text-display-17">
          {CtaLabel}
        </div>
      </section>
      <div className="relative mt-[30px] flex w-full flex-col items-center justify-center gap-3 bg-uspBlockBackground px-10 py-6 xl:mt-[60px] xl:gap-6 xl:px-[76px] xl:py-10">
        <section className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:flex-row  sm:gap-6 xl:gap-5">
          <img
            src={vipIcon}
            alt="vipIcon"
            className="h-10 w-10 xl:h-12 xl:w-12 dxl:h-16 dxl:w-16"
          />
          <p className="font-cormorant text-display-11 xl:text-display-13 dxl:text-display-14">
            VIP CLUB BENEFITS
          </p>
        </section>
        <section className="ml-3 flex h-auto w-full justify-center">
          <div className="flex justify-start font-sans text-display-3 dxl:text-display-6">
            <ul className="list-disc pl-4">
              {arrayFromHTML.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
      </div>
    </section>
  )
}
export default VipOnlyBlock
