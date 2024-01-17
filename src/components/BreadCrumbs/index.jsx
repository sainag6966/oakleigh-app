// pages/[...slug].js

import { useRouter } from 'next/router'
import Link from 'next/link'

const Breadcrumbs = () => {
  const router = useRouter()
  const { query, asPath } = router
  const urlString = asPath || ''
  const pathArray = urlString.split('/').filter(Boolean)

  // Extract the path segments from the query object
  const pathSegments = query.slug || []
  console.log(pathArray, '!! bread')

  // Render the breadcrumbs
  return (
    <section className="w-full font-sans text-[10px] sm:text-display-1 xl:text-[15px]">
      <p>
        <Link href="/">HOME</Link>
        {pathArray.map((segment, index) => (
          <span key={index}>
            {' / '}
            <Link href={`/${pathArray.slice(0, index + 1).join('/')}`}>
              {segment}
            </Link>
          </span>
        ))}
      </p>
    </section>
  )
}
{
  /* <div className="w-full font-sans text-[10px] sm:text-display-1 xl:text-[15px]">
<Breadcrumbs />
</div> */
}

export default Breadcrumbs
