import { CheckoutItem } from "../types";

interface ItemCardProps {
  item: CheckoutItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="flex flex-col">
      <h1>the fuck?</h1>
      <div>{item.product.title}</div>
      <div>{item.quantity}</div>
    </div>
  );
}
