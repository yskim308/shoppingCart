import { useState } from "react";

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
        className={`w-3/4 fixed z-30 bg-red-50 h-full ease-in-out duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={handleOutsideClick}
      >
        <ul>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
      </div>
    </>
  );
}

export default function NavbarMobile() {
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="lg:hidden flex">
      <h1>this is the mobile navbar</h1>
      <button type="button" onClick={() => setShowSideBar(true)}>
        show sidebar
      </button>
      <Sidebar closeSidebar={closeSideBar} isOpen={showSidebar} />
    </div>
  );
}
