import { Link } from "react-router-dom";
import cartImg from "../assets/cart-outline.svg";

interface CartIconProps {
  cartSize: number;
}

export default function CartIcon({ cartSize }: CartIconProps) {
  return (
    <div className="animate-jump">
      <Link to="checkout">
        <div className="flex">
          <img src={cartImg} alt="cart" className="w-6" />
          <div className="text-sm">{cartSize}</div>
        </div>
      </Link>
    </div>
  );
}
