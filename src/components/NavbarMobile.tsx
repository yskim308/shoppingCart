import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { NavbarProps } from "../types";
import menu from "../assets/menu.svg";

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
        className={`w-3/4 fixed z-30  shadow-2xl rounded-tr-xl border-sky-950 bg-sky-50 h-full ease-out duration-150 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col m-4" onClick={closeSidebar}>
          <Link className="text-3xl font-medium mb-3" to="/">
            HOME
          </Link>
          <Link
            to="electronics"
            className="my-2 p-2 shadow text-sky-950 rounded-lg"
          >
            Electronics
          </Link>
          <Link
            to="clothes-f"
            className="my-2 p-2 shadow text-sky-950 rounded-lg"
          >
            Women's Clothing
          </Link>
          <Link
            to="clothes-m"
            className="my-2 p-2 shadow text-sky-950 rounded-lg"
          >
            Men's Clothing
          </Link>
          <Link
            to="jeweler"
            className="my-2 p-2 shadow text-sky-950 rounded-lg"
          >
            Jewelery
          </Link>
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
    <div className="lg:hidden flex bg-sky-50">
      <div className="flex justify-between p-3 w-full">
        <div>
          <button type="button" onClick={() => setShowSideBar(true)}>
            <img src={menu} alt="menu" className="w-6" />
          </button>
        </div>
        <div>
          <CartIcon cartSize={cartSize} key={cartSize} />
        </div>
      </div>
      <Sidebar closeSidebar={closeSideBar} isOpen={showSidebar} />
    </div>
  );
}
