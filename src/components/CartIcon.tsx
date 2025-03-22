interface CartIconProps {
  cartCount: number;
}

export default function CartIcon({ cartCount }: CartIconProps) {
  return (
    <div>
      <h1>cart: {cartCount}</h1>
    </div>
  );
}
