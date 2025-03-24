import { useOutletContext } from "react-router-dom";
import { OutletContextObject } from "../types";
import ItemCard from "../components/CheckoutItem";

export default function Checkout() {
  const { checkoutItems, removeCheckoutItem }: OutletContextObject =
    useOutletContext();

  return (
    <div>
      <h1>checkout page</h1>
      {checkoutItems.map((item) => {
        return <ItemCard item={item} key={item.product.id} />;
      })}
    </div>
  );
}
