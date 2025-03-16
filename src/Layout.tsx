import { Outlet } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";

export default function Layout() {
  return (
    <div className="flex flex-col w-full h-full">
      <NavbarMobile />
      <NavbarDesktop />
      <Outlet />
      <div className="mt-auto text-3xl">footer</div>
    </div>
  );
}
