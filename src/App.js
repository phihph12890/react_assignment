import './App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import Header from './components/client/Header';
import Footer from './components/client/Footer';
import HomePage from './pages/client/HomePage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import CategoryPage from './pages/client/CategoryPage';
import ProductDetail from './pages/client/ProductDetail';
import SearchPage from './pages/client/SearchPage';

import AdminLayout from './components/admin/AdminLayout';
import AdminCategoryManagerPage from './pages/admin/AdminCategoryManagerPage';
import AdminProductManagerPage from './pages/admin/AdminProductManagerPage';
import Dashboard from './pages/admin/Dashboard';

import "react-toastify/dist/ReactToastify.css";
import { Category_list } from './slice/categorySlice'


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
  })

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            {/* Layout Website */}
            <Route path="/" element={<LayoutWebsite />}>
              <Route index element={<HomePage />} />
              <Route path="categories/:id" element={<CategoryPage />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>

            {/* Layout Admin */}
            <Route path="admin/*" element={<LayoutAdmin />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<AdminProductManagerPage />} />
              <Route path="categories" element={<AdminCategoryManagerPage />} />
            </Route>
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





