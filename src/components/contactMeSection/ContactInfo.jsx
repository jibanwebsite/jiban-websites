import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="iam.jiban11@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+977 9742274871" Image={FiPhone} />
      <SingleInfo text="London, United Kingdom" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
