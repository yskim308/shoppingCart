import { useOutletContext, useParams } from "react-router-dom";
import { OutletContextObject, Product } from "../types";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Category() {
  const [filterWord, setFilterWord] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { category } = useParams();
  const { products }: OutletContextObject = useOutletContext();

  useEffect(() => {
    let processedString = category;
    if (category === "clothes-m") {
      processedString = "men's clothing";
    } else if (category === "clothes-f") {
      processedString = "women's clothing";
    } else {
      if (category) processedString = category;
      else processedString = "";
    }
    setFilterWord(processedString);

    const filtered = products.filter((product) => {
      return product.category === filterWord;
    });
    setFilteredProducts(filtered);
  }, [category, products, filterWord]);

  return (
    <div className="flex justify-center lg:p-10 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 md:w-4/5 lg:grid-cols-4 lg:w-4/5">
        {filteredProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
