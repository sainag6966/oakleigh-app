import Image from 'next/image'

function ProgressiveImageComp({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      objectFit="contain"
      className="h-full w-full"
    />
  )
}
export default ProgressiveImageComp
