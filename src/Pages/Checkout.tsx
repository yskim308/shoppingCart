import { useOutletContext } from "react-router-dom";
import { OutletContextObject } from "../types";
import ItemCard from "../components/CheckoutItem";
import { useState } from "react";
import Alert from "../components/Alert";

export default function Checkout() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { checkoutItems, clearCheckout }: OutletContextObject =
    useOutletContext();

  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const checkoutClick = () => {
    clearCheckout();
    displayAlert();
  };

  return (
    <>
      <Alert show={showAlert} message="items checked out" />
      <div className="flex flex-col items-center w-full">
        {checkoutItems.map((item) => {
          return <ItemCard item={item} key={item.product.id} />;
        })}
        <button type="button" onClick={checkoutClick}>
          CHECKOUT
        </button>
      </div>
    </>
  );
}
