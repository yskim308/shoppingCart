import { Link } from "react-router-dom";
interface CartIconProps {
  cartCount: number;
}

export default function CartIcon({ cartCount }: CartIconProps) {
  return (
    <div>
      <Link to="checkout">
        <h1>cart: {cartCount}</h1>
      </Link>
    </div>
  );
}
