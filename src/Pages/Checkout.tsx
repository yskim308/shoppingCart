import { useOutletContext } from "react-router-dom";
import { OutletContextObject } from "../types";
import ItemCard from "../components/CheckoutItem";

export default function Checkout() {
  const { checkoutItems, clearCheckout }: OutletContextObject =
    useOutletContext();

  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 m-10">
        {checkoutItems.map((item) => {
          return <ItemCard item={item} key={item.product.id} />;
        })}
        <button type="button" onClick={clearCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
