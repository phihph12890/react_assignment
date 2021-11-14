import React from 'react';
import { useState, useEffect } from 'react';
import productApi from '../api/productApi'

// import Header from '../components/client/Header';
import Banner from '../components/client/Banner';
// import Footer from '../components/client/Footer';
import Categories from '../components/client/Categories';
import ProductItem from '../components/client/ProductItem';
import ListProduct from '../components/client/ListProduct';

export default function HomePage(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await productApi.list();
            console.log(data)
            setProducts(data)
        }
        getProducts();
    }, [])

    return (
        <>
            {/* <Header></Header> */}
            <Banner></Banner>
            <div className="content bg-gray-100 pb-8 pt-8" id="content">
                <div className=" mx-auto grid grid-cols-4 gap-8" style={{ width: '1200px' }}>
                    <aside className="col-span-1 bg-gray-100">
                        <Categories></Categories>
                        <div id="sticky" className="mt-8 sticky top-[30px]">
                            <img className="shadow-md transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg" alt="" />
                            <img className="shadow-md mt-10 transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/11_Oct876d50f755e454ecda95d81a959c3685.jpg" alt="" />
                        </div>
                    </aside>
                    <div className="col-span-3">
                        <div className="mx-auto flex">
                            <select className="form-control rounded-md font-semibold px-3" name id="sort" style={{ width: '240px' }}>
                                <option value selected disabled> --- Sắp xếp sản phẩm --- </option>
                                <option value="asc">Giá từ thấp đến cao</option>
                                <option value="desc">Giá từ cao đến thấp</option>
                            </select>
                            <select className="form-control rounded-md font-semibold px-2 ml-3" name id="filter" style={{ width: '255px' }}>
                                <option value selected disabled> --- Lọc sản phẩm theo giá --- </option>
                                <option value="0-1500000">Dưới 15 triệu đồng</option>
                                <option value="15000000-30000000">15 triệu - 30 triệu</option>
                                <option value="30000000-40000000">30 triệu - 40 triệu</option>
                                <option value="40000000-990000000">Trên 40 triệu đồng</option>
                            </select>
                        </div>
                        <div  id="list_product">
                            <ListProduct data={products} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}




