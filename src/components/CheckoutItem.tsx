import { useOutletContext } from "react-router-dom";
import { CheckoutItem, OutletContextObject } from "../types";
import trashImg from "../assets/trash-can-outline.svg";

interface ItemCardProps {
  item: CheckoutItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const { removeCheckoutItem }: OutletContextObject = useOutletContext();
  return (
    <div className="flex h-28 w-11/12 mt-5 shadow p-1 rounded-lg">
      <div className="flex h-full w-full">
        <div className="aspect-square">
          <img
            src={item.product.image}
            alt="loading"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between w-full h-full p-2">
          <div className="text-sm font-bold max-h-16 overflow-auto text-sky-950">
            {item.product.title}
          </div>
          <div>
            <div className="font-thin text-xs">quantity: {item.quantity}</div>
            <div className="flex justify-between">
              <div className="text-sm font-bold text-sky-900">
                ${item.product.price * item.quantity}
              </div>
              <button type="button" onClick={() => removeCheckoutItem(item)}>
                <img src={trashImg} alt="x" className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
