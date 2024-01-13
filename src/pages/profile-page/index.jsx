import { useRouter } from 'next/router'
import { getNonce } from '@/utils/nonce'

function ProfilePage() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    getNonce()
    router.push('/')
  }

  return (
    <div>
      <p>this is the profile page</p>
      <button
        className="ml-5 mt-5 h-10 w-20 border-2 border-textSecondary"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
export default ProfilePage
