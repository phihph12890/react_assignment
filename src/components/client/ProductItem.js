import React from 'react';
import { NavLink } from 'react-router-dom';
import { prices } from '../../utils/util'

const ProductItem = (props) => {
    return (
        <div className="group overflow-hidden shadow-md bg-white ">
            <div className="bg-white overflow-hidden ">
                <div className="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                    <NavLink to={`/products/${props.product._id}`} ><img className="mx-auto" src={props.product.image} alt="" width="80%" /></NavLink>
                </div>
                <NavLink to="/product"><span className="text-center text-sm pt-1 group-hover:text-yellow-600 px-2">{props.product.name}</span></NavLink>
                <p className="text-red-500 text-lg font-bold py-1">{prices(Number(props.product.priceSale)).replace('VND', 'Đ')}<span className="text-gray-500 text-base ml-2 font-bold pt-1italic line-through">{prices(Number(props.product.price)).replace('VND', 'Đ')}</span></p>
                <div className="transition duration-300 ease-in-out transform translate-y-24 group-hover:-translate-y-0">
                    <button className="bg-blue-500 text-white text-base font-bold rounded-md btn_addCart mb-2 hover:bg-black" style={{ padding: '6px 50px' }} data-id="">
                        THÊM GIỎ HÀNG
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
