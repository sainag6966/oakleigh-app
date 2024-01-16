import { useRouter } from 'next/router'
import { getNonce } from '@/utils/nonce'

function ProfilePage() {
  const router = useRouter()
  const getCheck = async () => {
    try {
      console.log('getcheck')
      const response = await fetch(
        'http://localhost/oakleigh/wp-json/custom/v1/clear-cart',
        {
          method: 'post',
          credentials: 'include',
          // headers,
        },
      )

      if (response.ok) {
        console.log(response, 'getcheck')
        // const data = await response.json()
        // const nonceid = data?.Nonce
        // setNonce(nonceid)
        // localStorage.setItem('nonce', nonceid)
      } else {
        const errorData = await response.json()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    getNonce()
    getCheck()
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
