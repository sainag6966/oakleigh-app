// pages/[...slug].js

import { useRouter } from 'next/router'
import Link from 'next/link'

const Breadcrumbs = () => {
  const router = useRouter()
  const { query, asPath } = router
  const urlString = asPath || ''
  const pathArray = urlString.split('/').filter(Boolean)
  const uppercasedArray = pathArray.map((str) => str.toUpperCase())
  const shopAllRoute = uppercasedArray.slice(0, -1)
  const routeArr = pathArray.includes('shop-all')
    ? shopAllRoute
    : uppercasedArray

  // Render the breadcrumbs
  return (
    <section className="w-full font-sans text-display-1 xl:text-[15px]">
      <Link href="/">HOME</Link>
      {routeArr.map((segment, index) => (
        <span key={index}>
          {' / '}
          {routeArr.length === index + 1 ? (
            <span className="font-bold">{segment}</span>
          ) : (
            <Link
              href={`/${pathArray.slice(0, index + 1).join('/')}`}
              className="font-normal"
            >
              {segment}
            </Link>
          )}
        </span>
      ))}
    </section>
  )
}

export default Breadcrumbs
