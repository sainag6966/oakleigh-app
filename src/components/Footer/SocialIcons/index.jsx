import NextImage from "../../../reuseComps/NextImage";

function SocialIcons() {
  const facebookIcon = "/Images/facebookIcon.svg";
  const instagramIcon = "/Images/instagramIcon.svg";
  const youtubeIcon = "/Images/youtubeIcon.svg";
  const twitterIcon = "/Images/twitterIcon.svg";
  return (
    <div className="flex w-32 max-h-[19px] gap-4 justify-center items-center">
      <NextImage src={youtubeIcon} width="22" height="16" alt="youtube" />
      <NextImage src={facebookIcon} width="9" height="19" alt="facebook" />
      <NextImage src={twitterIcon} width="18" height="15" alt="twitter" />
      <NextImage src={instagramIcon} width="19" height="19" alt="instagram" />
    </div>
  );
}
export default SocialIcons;
