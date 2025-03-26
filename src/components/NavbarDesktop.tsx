import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { NavbarProps } from "../types";

export default function NavbarDesktop({ cartSize }: NavbarProps) {
  return (
    <div className="hidden lg:flex justify-between p-5 bg-sky-50 w-full">
      <div className="flex items-center">
        <Link className="text-3xl text-sky-900 font-bold" to="/">
          HOME
        </Link>
        <div className="ml-10">
          <Link
            className="mx-3 p-3 hover:underline text-sky-950 font-semibold"
            to="electronics"
          >
            Electronics
          </Link>
          <Link
            className="mx-3 p-3 hover:underline text-sky-950 font-semibold"
            to="clothes-f"
          >
            Women's Clothing
          </Link>
          <Link
            className="mx-3 p-3 hover:underline text-sky-950 font-semibold"
            to="clothes-m"
          >
            Men's Clothing
          </Link>
          <Link
            className="mx-3 p-3 hover:underline text-sky-950 font-semibold"
            to="jewelery"
          >
            Jewelery
          </Link>
        </div>
      </div>
      <div className="flex">
        <CartIcon cartSize={cartSize} key={cartSize} />
      </div>
    </div>
  );
}
