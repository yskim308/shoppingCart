import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { NavbarProps } from "../types";

interface SidebarProps {
  closeSidebar: () => void;
  isOpen: boolean;
}

function Sidebar({ closeSidebar, isOpen }: SidebarProps) {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed h-full w-full z-20"
          onClick={handleOutsideClick}
        ></div>
      )}
      <div
        className={`w-3/4 fixed z-30 bg-red-50 h-full ease-out duration-150 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col" onClick={closeSidebar}>
          <Link className="text-3xl" to="/">
            HOME
          </Link>
          <Link to="electronics">Electronics</Link>
          <Link to="clothes-f">Women's Clothing</Link>
          <Link to="clothes-m">Men's Clothing</Link>
          <Link to="jewelery">jewelery</Link>
        </ul>
      </div>
    </>
  );
}

export default function NavbarMobile({ cartSize }: NavbarProps) {
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="lg:hidden flex justify-between">
      <div>
        <button type="button" onClick={() => setShowSideBar(true)}>
          show sidebar
        </button>
      </div>
      <div>
        <CartIcon cartSize={cartSize} />
      </div>
      <Sidebar closeSidebar={closeSideBar} isOpen={showSidebar} />
    </div>
  );
}
