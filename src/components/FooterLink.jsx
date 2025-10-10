import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Zoop from "./Zoop";

const FooterLink = ({href, link, social}) => {
  return (
    <Link
      to={href}
      onClick={() => !social && window.scrollTo({top: 0, behavior: "smooth"})}
      className="text-sm md:text-base lg:text-lg tracking-wide  hover:text-text-grey h-fit hover-transition"
    >
      <div className={`flex items-center justify-between ${social ? "w-26  md:w-32 lg:w-36" : "w-20 md:w-25 lg:w-30" }  h-fit`}>
        <Zoop text={link} />
        <ArrowUpRight className="w-4 md:w-5 lg:w-6" />
      </div>
    </Link>
  );
};

export default FooterLink;
