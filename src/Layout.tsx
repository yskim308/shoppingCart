import { Outlet } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import { useEffect, useState } from "react";
import { Product, CheckoutItem } from "./types";

export default function Layout() {
  const [products, setProducts] = useState<Product[]>([]);

  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const addCheckoutItem = (item: CheckoutItem) => {
    if (item.quantity > 0) {
      setCheckoutItems((prevItems) => {
        if (prevItems.find((i) => i.product.id === item.product.id)) {
          // if the item alreaydy exists, just update the quantity
          return prevItems.map((i) =>
            i.product.id === item.product.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          );
        } else {
          // otherwise add it to the list
          return [...prevItems, item];
        }
      });
    }
  };
  const removeCheckoutItem = (item: CheckoutItem) => {
    setCheckoutItems(checkoutItems.filter((product) => product !== item));
  };
  const clearCheckout = () => {
    setCheckoutItems([]);
  };

  const outletObject = {
    products: products,
    checkoutItems: checkoutItems,
    clearCheckout: clearCheckout,
    addCheckoutItem: addCheckoutItem,
    removeCheckoutItem: removeCheckoutItem,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          alert(`unable to fetch, error status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        alert(`error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <NavbarMobile cartSize={checkoutItems.length} />
      <NavbarDesktop cartSize={checkoutItems.length} />
      <Outlet context={outletObject} />
    </div>
  );
}
