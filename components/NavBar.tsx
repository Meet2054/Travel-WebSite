import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center container mx ps-10 relative z-30 py-5">

      <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" height={10} width={80} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex flex-center">
        {NAV_LINKS.map((link) => (
            <Link href={link.href}  key={link.key} 
            className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold">
              {link.label}
            </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button  type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image className=" inline-block courser-pointer lg:hidden "
      alt="menu"
      src="menu.svg"
      width={32}
      height={32}
      >

      </Image>
    </nav>
  );
};

export default NavBar;
