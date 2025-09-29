import { NavButton as NavButtonType } from "./types";
import { Button, buttonVariants } from "./Button";
import Link from "next/link";

interface Props {
  button: NavButtonType;
  mobile?: boolean;
}

const NavButton: React.FC<Props> = ({ button, mobile = false }) => {
  if (button.href) {
    return (
      <Link href={button.href}>
        <Button variant="primary" size={mobile ? "md" : "md"} className={mobile ? "w-full" : ""}>
          {button.label}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      onClick={button.onClick}
      variant="primary"
      size={mobile ? "md" : "md"}
      className={mobile ? "w-full" : ""}
    >
      {button.label}
    </Button>
  );
};

export default NavButton;
