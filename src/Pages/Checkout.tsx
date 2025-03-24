import { useOutletContext } from "react-router-dom";
import { CheckoutItem, OutletContextObject } from "../types";
import ItemCard from "../components/CheckoutItem";

export default function Checkout() {
  const { checkoutItems, removeCheckoutItem }: OutletContextObject =
    useOutletContext();

  const refreshCheckout = () => {
    checkoutItems.forEach((item: CheckoutItem) => {
      removeCheckoutItem(item);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 m-10">
        {checkoutItems.map((item) => {
          return <ItemCard item={item} key={item.product.id} />;
        })}
        <button type="button" onClick={refreshCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
