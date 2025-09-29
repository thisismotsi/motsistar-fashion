export interface NavLink {
  name: string;
  href: string;
}

export interface NavButton {
  label: string;
  href?: string;
  onClick?: () => void;
}
