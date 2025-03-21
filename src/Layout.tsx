import { Outlet } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import { useEffect, useState } from "react";
import { Product } from "./types";

export default function Layout() {
  const [products, setProducts] = useState<Product[]>([]);

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
      <NavbarMobile />
      <NavbarDesktop />
      <Outlet context={products} />
      <div className="mt-auto text-3xl">footer</div>
    </div>
  );
}
