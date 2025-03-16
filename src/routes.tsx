import Layout from "./Layout";
import App from "./Pages/App";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import ItemPage from "./Pages/ItemPage";
export { routes };

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: ":category",
        element: <Category />,
      },
      {
        path: ":category/:item",
        element: <ItemPage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
];
