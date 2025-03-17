import { useOutletContext, useParams } from "react-router-dom";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { category } = useParams();
  let filterWord = category;
  if (category === "clothes-m") {
    filterWord = "men's clothing";
  } else if (category === "clothes-f") {
    filterWord = "women's clothing";
  }
  const products: Product[] = useOutletContext();
  const filteredProducts = products.filter((product) => {
    return product.category === filterWord;
  });
  console.log(filterWord);

  return (
    <div className="flex justify-center p-10 w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 md:w-4/5">
        {filteredProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
