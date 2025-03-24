export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CheckoutItem {
  product: Product;
  quantity: number;
}

export interface OutletContextObject {
  products: Product[];
  addCheckoutItem: (item: CheckoutItem) => void;
  removeCheckoutItem: (item: CheckoutItem) => void;
}

export interface NavbarProps {
  cartSize: number;
}
