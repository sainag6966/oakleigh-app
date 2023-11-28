import Image from "next/image";

function NextImage ({src, width, height}) {
    return(
        <Image
        src={src}
        width={width}
        height={height}
        alt="oakleigh"
      />
    )
}
export default NextImage;