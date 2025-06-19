import SingleContactSocial from "./SingleContactSocial";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.facebook.com/dearjiban" Icon={SiFacebook} />
      <SingleContactSocial link="https://x.com/OggyGJiban" Icon={FaTwitter} />
      <SingleContactSocial link="https://www.instagram.com/musicworld_status/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.youtube.com/@oggytheplayz" Icon={SiYoutubekids} />
    </div>
  );
};

export default ContactSocial;
