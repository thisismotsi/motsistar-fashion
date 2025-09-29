import Link from "next/link";
import { NavLink } from "./types";

interface NavItemProps {
  link: NavLink;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ link, mobile = false }) => {
  const baseClasses = mobile
    ? "block px-3 py-2 rounded text-ivory hover:bg-gold hover:text-navy"
    : "text-ivory hover:text-gold";

  return (
    <Link href={link.href} className={baseClasses}>
      {link.name}
    </Link>
  );
};

export default NavItem;
