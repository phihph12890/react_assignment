import React from 'react'

const Categories = () => {
    return (
        <aside className="col-span-1 bg-gray-100">
            <div className="nav shadow-lg">
                <h2 className="bg-blue-500 text-white text-base uppercase py-3 px-3 rounded-t-md ">
                    <span><i className="fas fa-bars px-5" /></span>
                    <span className="ml-6 font-semibold">Danh mục</span></h2>
                <ul>
                    <li>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">MACBOOK</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP ACER</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP DELL</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP ASUS</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP MSI</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP LENOVO</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">LAPTOP HP</a>
                        <a href="./category.html" className="block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white">EVOO GAMING</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Categories
