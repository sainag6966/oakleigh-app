import SocialIcons from '../SocialIcons'
import CopyRightInfo from '../CopyRightInfo'
import MailingList from '../MailingList'

function FooterDweb({ dataItems }) {
  const useFulLinks = dataItems?.filter((item) => {
    return item.parent === 2582
  })
  const categories = dataItems?.filter((item) => {
    return item.parent === 2620
  })
  const usefulLinksTitles = useFulLinks.map((e) => {
    return e?.title?.rendered
  })
  const categorieTitles = categories.map((e) => {
    return e?.title?.rendered
  })

  const ourAddress =
    'Oakleigh Watches Tempus Works 2 Fletcher Way Norwich, NR3 3ST'

  return (
    <div className="flex max-h-[796px] w-full flex-col items-center bg-footerBg pt-[65px] text-textPrimary">
      <div className="dxl:px-[140px] flex w-full flex-wrap justify-start gap-9  px-[40px] pb-12">
        <div className="flex min-w-[340px] grow-[1] flex-col">
          <p className="text-[30px]">Useful Links</p>
          <div className="dxl:max-h-[150px] mt-3 flex max-h-[125px] flex-col flex-wrap items-start justify-start gap-[12px]">
            {usefulLinksTitles.map((e, index) => {
              return (
                <div
                  key={index}
                  className="dxl:text-[17px] font-sans text-[14px] font-medium"
                >
                  {e}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex min-w-[250px] grow-[1] flex-col">
          <p className="text-[30px]">Categories</p>
          <div className="dxl:max-h-[150px] mt-3 flex max-h-[100px] flex-col flex-wrap items-start justify-start gap-[12px]">
            {categorieTitles.map((e, index) => {
              return (
                <div
                  key={index}
                  className="dxl:text-[17px] font-sans text-[14px] font-medium"
                >
                  {e}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex grow-[1] flex-col">
          <p className="text-[30px]">Our Address</p>
          <div className="dxl:w-[160px] mt-3 flex max-h-[100px] w-[130px] flex-col flex-wrap items-start justify-start gap-[6px]">
            <div className="dxl:text-[17px] font-sans text-[14px] font-medium leading-7">
              {ourAddress}
            </div>
          </div>
          <SocialIcons />
        </div>
        <MailingList />
      </div>
      <CopyRightInfo />
    </div>
  )
}
export default FooterDweb
