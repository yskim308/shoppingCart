# README

This README provides a description of each file and function within the `src` directory of this React application.
(live preview)[https://yskim308shop.netlify.app/electronics]
## `src/routes.js`

This file defines the routing configuration for the application using `react-router-dom`.

**Imports:**

* `Layout` from `./Layout`: The main layout component that wraps other pages.
* `App` from `./Pages/App`: The home page component.
* `Category` from `./Pages/Category`: The component to display products within a specific category.
* `Checkout` from `./Pages/Checkout`: The component for the shopping cart checkout page.
* `ItemPage` from `./Pages/ItemPage`: The component to display details for a single product item.

**Exports:**

* `routes`: An array of route objects that define the application's navigation structure.

**`routes` Array:**

This array contains a single main route object:

* **Path: `/`**:
    * `element`: `<Layout />`: Specifies that the `Layout` component should be rendered for this path and its children.
    * `children`: An array of nested route objects:
        * **Index Route (`index: true`)**:
            * `element`: `<App />`: Specifies that the `App` component should be rendered when the root path `/` is accessed directly.
        * **Path: `/:category`**:
            * `element`: `<Category />`: Specifies that the `Category` component should be rendered when a path with a category parameter (e.g., `/electronics`) is accessed. The `:category` part is a dynamic parameter that can be accessed within the `Category` component.
        * **Path: `/:category/:itemId`**:
            * `element`: `<ItemPage />`: Specifies that the `ItemPage` component should be rendered when a path with both a category and an item ID parameter (e.g., `/electronics/1`) is accessed. `:category` and `:itemId` are dynamic parameters.
        * **Path: `checkout`**:
            * `element`: `<Checkout />`: Specifies that the `Checkout` component should be rendered when the `/checkout` path is accessed.

## `src/main.js`

This is the entry point of the React application. It sets up the React Router and renders the main application component within a `StrictMode`.

**Imports:**

* `StrictMode` from `"react"`: A React component that helps highlight potential problems in an application during development.
* `createRoot` from `"react-dom/client"`: A function to create a React root for rendering in the browser.
* `createBrowserRouter`, `RouterProvider` from `"react-router-dom"`: Functions and components from React Router for creating and providing the router configuration to the application.
* `./index.css`: Global CSS styles for the application.
* `{ routes }` from `./routes`: The routing configuration defined in `routes.js`.

**Code:**

* `const router = createBrowserRouter(routes);`: Creates a browser router instance using the `routes` configuration. This router will handle navigation within the application.
* `createRoot(document.getElementById("root")!).render(...)`: Selects the DOM element with the ID "root" (typically in `public/index.html`) and renders the following within it:
    * `<StrictMode>`: Wraps the application to enable strict mode checks.
    * `<RouterProvider router={router} />`: Provides the created `router` instance to the application, making routing functionality available to all components.

## `src/Layout.js`

This component provides the main layout structure for the application, including navigation bars and a mechanism to share state with its child routes.

**Imports:**

* `Outlet` from `"react-router-dom"`: A component that renders the current route's component.
* `NavbarMobile` from "./components/NavbarMobile": The navigation bar component for mobile devices.
* `NavbarDesktop` from "./components/NavbarDesktop": The navigation bar component for desktop devices.
* `useEffect`, `useState` from `"react"`: React hooks for managing state and side effects.
* `Product`, `CheckoutItem` from "./types": Interfaces defining the structure of product and checkout item data.

**State Variables:**

* `products`: A state variable (initialized as an empty array of `Product` objects) that stores the fetched product data.
* `checkoutItems`: A state variable (initialized as an empty array of `CheckoutItem` objects) that stores the items currently in the shopping cart.

**Functions:**

* `addCheckoutItem(item: CheckoutItem)`:
    * Takes a `CheckoutItem` object as input.
    * If the item's `quantity` is greater than 0:
        * Updates the `checkoutItems` state.
        * If an item with the same `product.id` already exists in `checkoutItems`, it updates the `quantity` of the existing item.
        * Otherwise, it adds the new `item` to the `checkoutItems` array.
* `removeCheckoutItem(item: CheckoutItem)`:
    * Takes a `CheckoutItem` object as input.
    * Updates the `checkoutItems` state by filtering out the provided `item`.
* `clearCheckout()`:
    * Updates the `checkoutItems` state to an empty array, effectively clearing the shopping cart.

**`outletObject`:**

* An object created to be passed as the `context` to the `Outlet` component. This allows child routes rendered within the `Layout` to access and modify the shared state and functions.
* Contains:
    * `products`: The `products` state.
    * `checkoutItems`: The `checkoutItems` state.
    * `clearCheckout`: The `clearCheckout` function.
    * `addCheckoutItem`: The `addCheckoutItem` function.
    * `removeCheckoutItem`: The `removeCheckoutItem` function.

**`useEffect` Hook:**

* This hook runs once after the initial render (due to the empty dependency array `[]`).
* It defines an asynchronous function `fetchData` that:
    * Fetches product data from the "https://fakestoreapi.com/products" API.
    * Handles potential network errors and API response issues.
    * Parses the JSON response into an array of `Product` objects.
    * Updates the `products` state with the fetched data.
    * Includes error handling using a `try...catch` block to display an alert if the fetch fails.

**Return Statement:**

* Renders a `div` with a flex layout.
* Includes `NavbarMobile` and `NavbarDesktop` components, passing the current `checkoutItems.length` as the `cartSize` prop.
* Renders the `<Outlet context={outletObject} />`. The `Outlet` will render the component matching the current route, and the `context` prop makes the `outletObject` (containing shared state and functions) available to these child components via the `useOutletContext` hook.

## `src/types.ts`

This file defines TypeScript interfaces to provide type safety for the application's data structures and component props.

**Interfaces:**

* `Product`: Defines the structure of a product object, including properties like `id`, `title`, `price`, `description`, `category`, `image`, and `rating` (which is an object containing `rate` and `count`).
* `CheckoutItem`: Defines the structure of an item in the checkout cart, containing a `product` (of type `Product`) and its `quantity`.
* `OutletContextObject`: Defines the type of the `context` object passed by the `Layout` component to its child routes via the `Outlet`. It includes the `products` array, `checkoutItems` array, and the `addCheckoutItem`, `removeCheckoutItem`, and `clearCheckout` functions.
* `NavbarProps`: Defines the props expected by the navigation bar components (`NavbarMobile` and `NavbarDesktop`), which currently only includes `cartSize` (the number of items in the cart).

## `src/pages/App.js`

This component represents the home page of the application.

**Function:**

* `App()`:
    * Renders a simple welcome message and a brief explanation that a dedicated homepage design is not yet implemented.

**Return Statement:**

* Returns a `div` that centers the content on the page.
* Contains a nested `div` with padding.
* Displays a heading (`h1`) with a welcome message and a paragraph (`p`) explaining the lack of a detailed homepage design.

## `src/pages/Category.js`

This component displays a list of products belonging to a specific category.

**Imports:**

* `useOutletContext`, `useParams` from `"react-router-dom"`: React Router hooks to access the outlet context and URL parameters.
* `OutletContextObject`, `Product` from "../types": Interfaces for the outlet context and product data.
* `ProductCard` from "../components/ProductCard": A component to display a single product card.
* `useEffect`, `useState` from `"react"`: React hooks for managing state and side effects.

**State Variables:**

* `filterWord`: A state variable to store the processed category name for filtering.
* `filteredProducts`: A state variable to store the array of products that match the current category.

**Variables from Hooks:**

* `{ category } = useParams()`: Extracts the `category` parameter from the URL.
* `{ products }: OutletContextObject = useOutletContext()`: Accesses the `products` array from the outlet context provided by the `Layout` component.

**`useEffect` Hook:**

* This hook runs whenever `category`, `products`, or `filterWord` change.
* It processes the `category` parameter from the URL:
    * Maps specific URL category slugs (`clothes-m`, `clothes-f`) to their full API category names (`men's clothing`, `women's clothing`).
    * Otherwise, it uses the `category` parameter directly.
    * Updates the `filterWord` state with the processed category name.
* It then filters the `products` array (obtained from the outlet context) to find products whose `category` property matches the `filterWord`.
* Updates the `filteredProducts` state with the filtered array.

**Return Statement:**

* Renders a `div` that centers the product grid.
* Contains a `div` with a grid layout (`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`) to display the product cards.
* Maps over the `filteredProducts` array and renders a `ProductCard` component for each product, passing the `product` data and a unique `key`.

## `src/pages/Checkout.js`

This component displays the items in the shopping cart and provides a checkout button.

**Imports:**

* `useOutletContext` from `"react-router-dom"`: React Router hook to access the outlet context.
* `OutletContextObject` from "../types": Interface for the outlet context.
* `ItemCard` from "../components/CheckoutItem": A component to display a single item in the checkout cart.
* `useState` from `"react"`: React hook for managing state.
* `Alert` from "../components/Alert": A component to display a temporary alert message.

**State Variable:**

* `showAlert`: A boolean state variable to control the visibility of the checkout success alert.

**Variables from Hooks:**

* `{ checkoutItems, clearCheckout }: OutletContextObject = useOutletContext()`: Accesses the `checkoutItems` array and the `clearCheckout` function from the outlet context.

**Functions:**

* `displayAlert()`:
    * Sets the `showAlert` state to `true` to display the alert.
    * Uses `setTimeout` to set `showAlert` back to `false` after 2 seconds, hiding the alert.
* `checkoutClick()`:
    * Calls the `clearCheckout` function (from the outlet context) to empty the shopping cart.
    * Calls the `displayAlert` function to show the checkout success message.

**Return Statement:**

* Returns a React fragment (`<>`).
* Renders the `Alert` component, passing the `showAlert` state and a checkout success message as props.
* Renders a `div` that centers the checkout content.
* Contains a nested `div` with a flex column layout and centered items.
* Conditionally renders a "No items!" message if the `checkoutItems` array is empty.
* Maps over the `checkoutItems` array and renders an `ItemCard` component for each item, passing the `item` data and a unique `key`.
* Renders a "CHECKOUT" button that, when clicked, calls the `checkoutClick` function.

## `src/pages/ItemPage.js`

This component displays the detailed information for a single product item and allows the user to add it to the cart.

**Imports:**

* `useLocation`, `useOutletContext`, `useParams` from `"react-router-dom"`: React Router hooks to access the current location's state, the outlet context, and URL parameters.
* `OutletContextObject`, `Product` from "../types": Interfaces for the outlet context and product data.
* `FormEvent`, `useEffect`, `useState` from `"react"`: React hooks for handling form events, managing state, and side effects.
* `Alert` from "../components/Alert": A component to display a temporary alert message.
* `starIcon` from "../assets/star-outline.svg": An image asset for the star icon.

**State Variables:**

* `itemToDisplay`: A state variable to store the details of the product to be displayed (initialized as `null`).
* `count`: A state variable to store the quantity of the item the user wants to add to the cart (initialized as `0`).
* `showAlert`: A boolean state variable to control the visibility of the "Added to Cart" alert.

**Variables from Hooks:**

* `{ products, addCheckoutItem }: OutletContextObject = useOutletContext()`: Accesses the `products` array and the `addCheckoutItem` function from the outlet context.
* `{ itemId } = useParams()`: Extracts the `itemId` parameter from the URL.
* `location = useLocation()`: Provides access to the current location object, including any state passed during navigation.
* `passedItem: Product = location.state`: Retrieves the `product` object that might have been passed as state when navigating to this page.

**`useEffect` Hook:**

* This hook runs whenever `itemId`, `passedItem`, or `products` change.
* It determines how to fetch or access the product details to display:
    * If `passedItem` exists (meaning the product was passed as state during navigation), it sets `itemToDisplay` to `passedItem`. This avoids an unnecessary API call if the product data is already available.
    * If `passedItem` is null but `itemId` exists, it searches for the product within the `products` array (from the outlet context) whose `id` matches the `itemId` from the URL. If found, it sets `itemToDisplay`.
    * The `else` block includes an alert as a fallback, although the comment suggests it might not be commonly triggered in the intended application flow.

**Return Statement:**

* Returns a React fragment (`<>`).
* Renders the `Alert` component, passing the `showAlert` state and an "Added to Cart" message as props.
* Renders a main `div` with a flex column layout and centered items.
* Contains a nested `div` with a grid layout (1 column on smaller screens, 2 columns on larger screens) to display the product image and details.
* Displays the product image.
* Displays the product `title`, rating (using the `starIcon`), review count, price, and description.
* Renders a `form` that allows the user to select the quantity and add the item to the cart:
    * The `onSubmit` handler prevents the default form submission.
    * It calls the `addCheckoutItem` function (from the outlet context) with the current `itemToDisplay` and the selected `count`.
    * It displays the "Added to Cart" alert for 2 seconds.
    * Resets the `count` state to `0`.
    * Includes a label and a number input for the quantity.
    * Includes an "add to cart" button to submit the form.

## `src/components/Alert.js`

This component renders a temporary alert message that appears at the top of the screen.

**Interface:**

* `AlertProps`: Defines the props for the `Alert` component:
    * `message`: The string message to display in the alert.
    * `show`: A boolean indicating whether the alert should be visible.

**Function:**

* `Alert({ message, show }: AlertProps)`:
    * Renders a `div` that is styled to be fixed at the top-center of the screen (`fixed z-40 left-1/2 -translate-x-1/2`).
    * Uses Tailwind CSS classes and conditional class names to control the vertical positioning of the alert based on the `show` prop. When `show` is true, it translates to `translate-0`, making it visible. When `show` is false, it translates to `-translate-y-full`, moving it off the top of the screen with a smooth transition.
    * Contains a nested `div` with styling for the alert background, font, and rounded corners, displaying the `message`.

## `src/components/CartIcon.js`

This component renders a link to the checkout page with an icon and the current cart size.

**Imports:**

* `Link` from `"react-router-dom"`: A component for creating navigation links.
* `cartImg` from "../assets/cart-outline.svg": An image asset for the cart icon.

**Interface:**

* `CartIconProps`: Defines the props for the `CartIcon` component:
    * `cartSize`: The number of items
