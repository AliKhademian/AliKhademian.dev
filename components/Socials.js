// links
import Link from "next/link";

// icons
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://instagram.com/alikhademian.dev"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/AliKhademian"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://github.com/alikhademian"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://youtube.com/alikhademian"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeFill />
      </Link>
    </div>
  );
};

export default Socials;
