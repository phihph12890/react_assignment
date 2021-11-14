import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate
} from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Header from './components/client/Header';
import Footer from './components/client/Footer';

// import { BrowserRouter, Route } from 'react-router-dom';


export default function App() {

  // return (
  //   <ProductDetail></ProductDetail>
  // );
  return (
    <div className="App">
      <BrowserRouter>
        <div className="">
          <Routes>
            {/* Layout Website */}
            <Route path="/" element={<LayoutWebsite />}>
              <Route index element={<HomePage />} />
              <Route path="category" element={<CategoryPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>

            {/* Layout Admin */}
            <Route path="admin/*" element={<LayoutAdmin />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<div>Dashboard</div>} />
              <Route path="product" element={<div>Product Manager</div>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}
function LayoutAdmin() {
  return (
    <div>
      <div className="flex space-x-5">
        <NavLink to="/admin" activeClass="active">
          Dashboard
        </NavLink>
        <NavLink to="/admin/product" activeClass="active">
          Quản lý sản phẩm
        </NavLink>
        <NavLink to="/admin/category" activeClass="active">
          Quản lý danh mục
        </NavLink>
        <NavLink to="/" activeClass="active" className="text-red-500">
          Back to website
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
function LayoutWebsite() {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}





