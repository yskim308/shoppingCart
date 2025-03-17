import { useOutletContext, useParams } from "react-router-dom";
import { Product } from "../types";

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
    <div>
      <h1>hello from {category}</h1>
      {filteredProducts.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
          </div>
        );
      })}
    </div>
  );
}
