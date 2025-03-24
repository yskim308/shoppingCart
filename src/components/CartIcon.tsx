import { Link } from "react-router-dom";

interface CartIconProps {
  cartSize: number;
}

export default function CartIcon({ cartSize }: CartIconProps) {
  return (
    <div>
      <Link to="checkout">
        <h1>cart: {cartSize} </h1>
      </Link>
    </div>
  );
}
