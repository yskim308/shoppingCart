import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex justify-between">
      <div>
        <Link className="text-3xl" to="/">
          LOGO
        </Link>
      </div>
      <div className="flex">
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
        <div className="mx-2">PLACEHOLDER FOR ICON</div>
      </div>
    </div>
  );
}
