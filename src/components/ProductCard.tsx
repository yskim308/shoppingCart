import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/${product.category}/${product.id}`} state={product}>
      <div className={`p-5 animate-fade`}>
        <div className="aspect-square w-auto flex flex-col">
          <img
            src={product.image}
            alt="Unable to Load"
            className={`w-full h-full`}
          />
        </div>
        <div>
          <h1>{product.title}</h1>
        </div>
        <div>
          <h1>${product.price}</h1>
        </div>
        <div className="flex">
          <h1>rating: {product.rating.rate}</h1>
          <h1>reviews: {product.rating.count}</h1>
        </div>
      </div>
    </Link>
  );
}
