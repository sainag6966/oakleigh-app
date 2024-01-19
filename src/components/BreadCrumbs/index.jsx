// pages/[...slug].js

import { useRouter } from 'next/router'
import Link from 'next/link'

const Breadcrumbs = () => {
  const router = useRouter()
  const { query, asPath } = router
  const urlString = asPath || ''
  const pathArray = urlString.split('/').filter(Boolean)
  const uppercasedArray = pathArray.map((str) => str.toUpperCase())

  // Render the breadcrumbs
  return (
    <section className="w-full font-sans text-display-1 xl:text-[15px]">
      <Link href="/">HOME</Link>
      {uppercasedArray.map((segment, index) => (
        <span key={index}>
          {' / '}
          <Link
            href={`/${pathArray.slice(0, index + 1).join('/')}`}
            className={`${
              uppercasedArray.length === index + 1 ? 'font-bold' : 'font-normal'
            }`}
          >
            {segment}
          </Link>
        </span>
      ))}
    </section>
  )
}

export default Breadcrumbs
