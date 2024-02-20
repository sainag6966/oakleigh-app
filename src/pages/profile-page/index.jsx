import { useRouter } from 'next/router'
import { getNonce } from '@/utils/nonce'
import Breadcrumbs from '@/components/BreadCrumbs'
import SummaryBlock from '@/components/Profile/SummaryBlock'

function ProfilePage() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    getNonce()
    router.push('/')
  }

  return (
    <section className="flex h-auto w-full flex-col items-start gap-[30px] px-9 xl:px-20 dxl:px-[140px]">
      <section className="w-full pt-[14px]">
        <section>
          <Breadcrumbs />
        </section>
        <section className="mt-[18px] flex h-auto w-full justify-start text-display-12 sm:justify-center dxl:mb-[10px] dxl:mt-[58px] dxl:text-display-15">
          <p>HI PERSON NAME, WELCOME BACK</p>
        </section>
      </section>
      <SummaryBlock />
    </section>
  )
}
export default ProfilePage
