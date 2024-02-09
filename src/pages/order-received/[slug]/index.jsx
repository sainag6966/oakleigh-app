import { useRouter } from 'next/router'

function OrderReceived() {
  const router = useRouter()
  const { query, asPath } = router
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center">
      <p>THANK YOU FOR YOUR ORDER</p>
      <section className="flex gap-2">
        <p>Order Number:</p>
        <p>#{query?.slug}</p>
      </section>
    </section>
  )
}
export default OrderReceived
