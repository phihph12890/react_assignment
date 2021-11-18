import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productApi from '../api/productApi';
import categoryApi from '../api/categoryApi';

// import Header from '../components/client/Header';
// import Banner from '../components/client/Banner';
// import Footer from '../components/client/Footer';
import Categories from '../components/client/Categories';
import ProductItem from '../components/client/ProductItem';
import ListProduct from '../components/client/ListProduct';

export default function CategoryPage() {

    const { id:idCategory } = useParams();
    const [category, setCategory] = useState('');
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await categoryApi.read(idCategory);
            console.log(data);
            setCategory(data);
        }
        getCategory();
    }, [idCategory])

    const [productsByCategory, setProductsByCategory] = useState([]);
    useEffect(() => {
        const getProductsByCategory = async () => {
            const { data } = await productApi.productByCategory(idCategory);
            setProductsByCategory(data);
        }
        getProductsByCategory();
    }, [idCategory])

    return (
        <>
            {/* <Header></Header> */}
            <div className="content bg-gray-100 pb-8" id="content">
                <div className=" mx-auto grid grid-cols-4 gap-8 pt-5" style={{ width: '1200px' }}>
                    <aside className="col-span-1 bg-gray-100">
                        <Categories></Categories>
                        <div id="sticky" className="mt-8 sticky top-[30px]">
                            <img className="shadow-md transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg" alt="" />
                            <img className="shadow-md mt-10 transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/11_Oct876d50f755e454ecda95d81a959c3685.jpg" alt="" />
                        </div>
                    </aside>
                    <div className="col-span-3">
                        <h5 className="mt-1">
                            <span><i className="fas fa-laptop" /> Sản phẩm</span><i className="fas fa-angle-double-right text-xs px-1" />
                            <span className="text-blue-600 font-semibold text-sm">{category.name}</span>
                        </h5>
                        <div>
                            <ListProduct data={productsByCategory} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}




