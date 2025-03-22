import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { Product } from "../types";
import { useEffect, useState } from "react";

export default function ItemPage() {
  const [itemToDisplay, setItemToDisplay] = useState<Product | null>(null);
  const products: Product[] = useOutletContext();
  const { itemId } = useParams();

  // getting in passed state
  const location = useLocation();
  const passedItem: Product = location.state;

  useEffect(() => {
    if (!passedItem && itemId) {
      // if no item passed, find it in outlet context
      const foundProduct = products.find(
        (item: Product) => item.id === parseInt(itemId),
      );
      if (foundProduct) setItemToDisplay(foundProduct);
    } else if (passedItem) {
      // if item passed, just set it
      setItemToDisplay(passedItem);
    } else {
      alert("item doesn't exist?"); // to be honest, not really sure how this block would ever be triggered
    }
  }, [itemId, passedItem, products]);
  return (
    <div className="flex">
      <div>{itemToDisplay?.title}</div>
      <div>{itemToDisplay?.description}</div>
    </div>
  );
}
