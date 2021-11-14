import './App.css';
import { useState, useEffect } from 'react';
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

import productApi from './api/productApi';
import categoryApi from './api/categoryApi';


export default function App() {

  const [showGoToTop, setShowGoToTop] = useState(false);
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  })

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productApi.list();
      console.log(data)
      setProducts(data)
    }
    getProducts();
  }, [])

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await categoryApi.list();
      console.log(data)
      setCategories(data)
    }
    getCategories();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <div className="">
          <Routes>
            {/* Layout Website */}
            <Route path="/" element={<LayoutWebsite />}>
              <Route index element={<HomePage data={products} />} />
              <Route path="categories" element={<CategoryPage data={categories} />} />
              <Route path="products" element={<ProductDetail />} />
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

      {showGoToTop && (
        <button onClick={ScrollTop} className="fixed bg-blue-500 px-2 py-1 rounded-sm right-[50px] bottom-[50px] duration-300">
          <span class="text-base text-white z-50"><i class="fas fa-arrow-up"></i></span>
        </button>
      )}
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





