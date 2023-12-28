import Image from 'next/image'
function ImageComp({ src, alt }) {
  return (
    <Image
      src={src}
      layout="fill"
      alt={alt}
      objectFit="cover"
      quality={100}
      style={{ objectPosition: 'center' }}
      className="mix-blend-overlay"
    />
  )
}
export default ImageComp
