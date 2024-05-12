import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
  } from "react-router-dom";
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/CheckOut/Checkout';
import Profile from './pages/profile/Profile';
import Blogs from './pages/Blogs/Blogs';
import Post from './pages/Post/Post';
import BuyCredits from './pages/BuyCredits/BuyCredits';
import ContactUs from './pages/contact us/ContactUs';
import TermsAndConditon from './pages/TermsAndConditon/TermsAndConditon';
import Policy from './pages/TermsAndConditon/Policy';
import SignUp from './pages/SignUp/SignUp';
import Loader from './components/loader/Loader';

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: (
       <>
       <Loader />
        <Main />
       </>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "cart/checkout",
          element: <Checkout  />,
        },
        {
          path: "/profile",
          element: <Profile  />,
        },
        {
          path: "/blogs",
          element: <Blogs  />,
        },
        {
          path: "/post/:id",
          element: <Post  />,
        },
        {
          path: "/buycredits",
          element: <BuyCredits  />,
        },
        {
          path: "/contactus",
          element: <ContactUs  />,
        },
        {
          path: "/terms",
          element: <TermsAndConditon  />,
        },
        {
          path: "/policy",
          element: <Policy  />,
        },
        {
          path: "/register",
          element: <SignUp  />,
        },
        {
          path: "/*",
          element: <Navigate to={"/"} />,
        },
      ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;