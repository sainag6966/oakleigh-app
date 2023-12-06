import Image from "next/image";

function NextImage ({src, width, height, alt}) {
    return(
        <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    )
}
export default NextImage;