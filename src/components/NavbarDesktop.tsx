import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex justify-between">
      <div className="flex items-center">
        <Link className="text-3xl" to="/">
          LOGO
        </Link>
        <div>
          <Link className="mx-3" to="electronics">
            Electronics
          </Link>
          <Link className="mx-3" to="clothes-f">
            Women's Clothing
          </Link>
          <Link className="mx-3" to="clothes-m">
            Men's Clothing
          </Link>
          <Link className="mx-3" to="jewelery">
            Jewelery
          </Link>
        </div>
      </div>
      <div className="flex">
        <CartIcon cartCount={3} />
      </div>
    </div>
  );
}
