import { Link } from "react-router-dom";
import { Product } from "../types";
import starImg from "../assets/star-outline.svg";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/${product.category}/${product.id}`} state={product}>
      <div className={`p-2 m-1 lg:m-4 animate-fade shadow-md rounded-lg`}>
        <div className="aspect-square w-auto flex flex-col">
          <img
            src={product.image}
            alt="Unable to Load"
            className={`w-full h-full`}
          />
        </div>
        <div>
          <h1 className="text-xs lg:text-lg font-bold h-11 lg:h-24 overflow-auto">
            {product.title}
          </h1>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <img src={starImg} alt="rating" className="w-5 lg:w-7" />
            <h1 className="text-sm font-medium">{product.rating.rate}</h1>
            <h1 className="text-sm font-thin"> ({product.rating.count})</h1>
          </div>
          <div className="px-2 flex items-center">
            <h1 className="text-sky-900 font-bold">${product.price}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
