import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../App";
import ErrorPage from "../componenets/ErrorPage";
import Body from "../componenets/Body";
import Shimmer from "../componenets/Shimmer";
import Contact from "../componenets/Contact";
import Cart from "../componenets/Cart";
import RestaurantMenu from "../componenets/RestaurantMenu";

const Instamart = lazy(() => import("../componenets/Instamart"));
const About = lazy(() => import("../componenets/About"));

const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default AppProvider;
