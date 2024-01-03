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
      <div className="flex w-full flex-wrap justify-start gap-9 px-[40px]  pb-12 dxl:px-[140px]">
        <div className="flex min-w-[340px] grow-[1] flex-col">
          <p className="text-[30px]">Useful Links</p>
          <div className="mt-3 flex max-h-[125px] flex-col flex-wrap items-start justify-start gap-[12px] dxl:max-h-[150px]">
            {usefulLinksTitles.map((e, index) => {
              return (
                <div
                  key={index}
                  className="font-sans text-[14px] font-medium dxl:text-[17px]"
                >
                  <div dangerouslySetInnerHTML={{ __html: e }} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex min-w-[250px] grow-[1] flex-col">
          <p className="text-[30px]">Categories</p>
          <div className="mt-3 flex max-h-[100px] flex-col flex-wrap items-start justify-start gap-[12px] dxl:max-h-[150px]">
            {categorieTitles.map((e, index) => {
              return (
                <div
                  key={index}
                  className="font-sans text-[14px] font-medium dxl:text-[17px]"
                >
                  <div dangerouslySetInnerHTML={{ __html: e }} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex grow-[1] flex-col">
          <p className="text-[30px]">Our Address</p>
          <div className="mt-3 flex max-h-[100px] w-[130px] flex-col flex-wrap items-start justify-start gap-[6px] dxl:w-[160px]">
            <div className="font-sans text-[14px] font-medium leading-7 dxl:text-[17px]">
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
