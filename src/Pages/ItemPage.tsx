import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { OutletContextObject, Product } from "../types";
import { FormEvent, useEffect, useState } from "react";
import Alert from "../components/Alert";
import starIcon from "../assets/star-outline.svg";

export default function ItemPage() {
  const [itemToDisplay, setItemToDisplay] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(0);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { products, addCheckoutItem }: OutletContextObject = useOutletContext();
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
    <>
      <Alert message="Added to Cart" show={showAlert} />
      <div className="flex flex-col items-center w-full h-full mt-5 lg:mt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 md:w-3/5">
          <div className="aspect-square">
            <img
              src={itemToDisplay?.image}
              alt="Loading"
              className="w-full h-full"
            />
          </div>
          <div className="py-10 lg:py-0 lg:ml-10">
            <h1 className="text-xl font-bold text-sky-950">
              {itemToDisplay?.title}
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={starIcon} alt="star" className="w-5" />
                <p>{itemToDisplay?.rating.rate}</p>
                <p className="font-thin mx-1">
                  ({itemToDisplay?.rating.count} reviews)
                </p>
              </div>
              <h1 className="font-bold flex items-center text-sky-900">
                ${itemToDisplay?.price}
              </h1>
            </div>
            <h1 className="text-xs mt-2 text-sky-950">
              {itemToDisplay?.description}
            </h1>
            <form
              className="flex justify-between mt-5 items-center"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (itemToDisplay) {
                  addCheckoutItem({ product: itemToDisplay, quantity: count });
                }
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 2000);
                setCount(0);
              }}
            >
              <div className="text-sky-950 font-light">
                <label htmlFor="count">Quantity:</label>
                <input
                  type="number"
                  className="ml-2 w-15 p-2 shadow rounded"
                  id="count"
                  name="count"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl shadow shadow-sky-900 p-3 text-sky-950"
              >
                add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
