import { useOutletContext } from "react-router-dom";
import { CheckoutItem, OutletContextObject } from "../types";

interface ItemCardProps {
  item: CheckoutItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const { removeCheckoutItem }: OutletContextObject = useOutletContext();
  return (
    <div className="flex h-24 mt-5">
      <div className="flex">
        <div className="aspect-square w-32">
          <img
            src={item.product.image}
            alt="loading"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-sm font-bold">
            {item.product.title}
            <span className="text-xs font-thin"> x{item.quantity}</span>
          </div>
          <div className="flex justify-between">
            <div className="text-xs">${item.product.price * item.quantity}</div>
            <button type="button" onClick={() => removeCheckoutItem(item)}>
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
