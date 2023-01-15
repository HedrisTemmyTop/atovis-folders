import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import Vendor from "./pages/VendorLanding";
import Sidebar from "./pages/Sidebar";
import FeaturedProducts from "./pages/Buyer/FeaturedProduct";
import RecentlyAdded from "./pages/Buyer/RecentlyAdded";
import FrequentlyPurchased from "./pages/Buyer/FrequentlyPurchased";
import MyCart from "./pages/Buyer/MyCart";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Buyer/Checkout";
import PlaceOrder from "./pages/Buyer/PlaceOrder";
import Footer from "./components/Footer";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Header from "./components/Header";
import Wallet from "./components/vendor/Wallet";
import Order from "./components/Orders/Order";
import Product from "./components/vendor/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vendor" element={<Vendor />} />
        <Route path="sidebar/*" element={<Sidebar />} />
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="recently" element={<RecentlyAdded />} />
        <Route path="frequent" element={<FrequentlyPurchased />} />
        <Route path="cart" element={<MyCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order/*" element={<PlaceOrder />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="orders" element={<Order />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
