import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Link,
    Outlet,
    Navigate
} from "react-router-dom";
import categoryApi from '../../api/categoryApi';

const Categories = () => {

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
        <aside className="col-span-1 bg-gray-100">
            <div className="nav shadow-lg">
                <h2 className="bg-blue-500 text-white text-base uppercase py-3 px-3 rounded-t-md ">
                    <span><i className="fas fa-bars px-5" /></span>
                    <span className="ml-6 font-semibold">Danh mục</span></h2>
                <ul>
                    <li>
                        {categories.map(item => {
                            return (
                                <Link to={`/categories/${item._id}`} key={item._id} className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">{item.name}</Link>
                            )
                        })}
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Categories
