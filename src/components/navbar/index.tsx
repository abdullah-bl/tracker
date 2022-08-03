import {
  FileIcon,
  GearIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShadowIcon,
} from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between px-4 border-b dark:border-slate-800 border-slate-200 mb-2">
      <h1 className="font-mono text-lg font-bold flex items-center">
        <ShadowIcon width={32} height={32} />
      </h1>
      <ul className="flex items-center gap-4">
        <NavItem label="" to={"/"} active={pathname === "/"}>
          <HomeIcon width={22} height={22} />
        </NavItem>
        <NavItem label="" to={"/search"} active={pathname.includes("/search")}>
          <MagnifyingGlassIcon width={22} height={22} />
        </NavItem>
        <NavItem
          label=""
          to={"/reports"}
          active={pathname.includes("/reports")}
        >
          <FileIcon width={22} height={22} />
        </NavItem>
      </ul>
      <ul className="flex items-center gap-4">
        <NavItem
          label=""
          to={"/settings"}
          active={pathname.includes("/settings")}
        >
          <GearIcon width={22} height={22} />
        </NavItem>
      </ul>
    </nav>
  );
}

const NavItem: React.FC<{
  children: ReactNode;
  label: string;
  to: string;
  active: boolean;
}> = ({ to, label, children, active }) => (
  <Link to={to}>
    <li
      className={`flex items-center gap-2 cursor-pointer p-3 ${
        active ? "font-bold border-b-2 border-black dark:border-white" : ""
      }`}
    >
      {children}
      {label}
    </li>
  </Link>
);
