import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Outlet,
    Navigate
} from "react-router-dom";

const Categories = () => {
    return (
        <aside className="col-span-1 bg-gray-100">
            <div className="nav shadow-lg">
                <h2 className="bg-blue-500 text-white text-base uppercase py-3 px-3 rounded-t-md ">
                    <span><i className="fas fa-bars px-5" /></span>
                    <span className="ml-6 font-semibold">Danh mục</span></h2>
                <ul>
                    <li>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">MACBOOK</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP ACER</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP DELL</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP ASUS</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP MSI</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP LENOVO</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP HP</NavLink>
                        <NavLink to="/category" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">EVOO GAMING</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Categories
