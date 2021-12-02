import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Header from './components/client/Header';
import Footer from './components/client/Footer';
import HomePage from './pages/client/HomePage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import CategoryPage from './pages/client/CategoryPage';
import ProductDetail from './pages/client/ProductDetail';
import SearchPage from './pages/client/SearchPage';

import Error404Page from './pages/Error404Page';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

import AdminLayout from './components/admin/AdminLayout';
import CategoryAddPage from './pages/admin/category/CategoryAddPage';
import CategoryManagerPage from './pages/admin/category/CategoryManagerPage';
import ProductManagerPage from './pages/admin/ProductManagerPage';
import CategoryUpdatePage from './pages/admin/category/CategoryUpdatePage';
import Dashboard from './pages/admin/Dashboard';
import PrivateRoute from '../src/utils/privateRoute';

import "react-toastify/dist/ReactToastify.css";
import { Category_list } from './slice/categorySlice';
import { Product_list } from './slice/productSlice';


export default function App() {

  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(Category_list())
    dispatch(Product_list())
  })

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            {/* Layout Website */}
            <Route path="/" element={<LayoutWebsite />
            }>
              <Route index element={<HomePage />} />
              <Route path="categories/:id" element={<CategoryPage />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>

            {/* Layout Admin */}
            <Route path="admin/*" element={
              <PrivateRoute>
                <LayoutAdmin />
              </PrivateRoute>
            }>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<ProductManagerPage />} />
              <Route path="categories" element={<CategoryManagerPage />} />
              <Route path="categories/add" element={<CategoryAddPage />} />
              <Route path="categories/update/:id" element={<CategoryUpdatePage />} />
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/*" element={<Error404Page />} />
          </Routes>
        </div>
      </BrowserRouter>

      {showGoToTop && (
        <button onClick={ScrollTop} className="fixed bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-sm right-[50px] bottom-[50px] duration-300">
          <span className="text-base text-white z-50"><i className="fas fa-arrow-up"></i></span>
        </button>
      )}
    </div>
  );

}
function LayoutAdmin() {
  return (
    <div>
      <AdminLayout />
    </div>
  );
}
function LayoutWebsite() {
  return (
    <div>
      <Header ></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}





