import React from 'react';
import Marquee from "react-fast-marquee";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Outlet,
    Navigate
} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className=" container mx-auto flex py-1 justify-between items-center " style={{ maxWidth: '1200px' }}>
                    <div className>
                        <NavLink to="/"><img className="h-24 w-40" src="https://laptopaz.vn/media/banner/logo_laptopaz%20(2).jpg" alt="" /></NavLink>
                    </div>
                    <div className>
                        <form>
                            <input className="search-input py-2 px-3 border border-blue-500 text-sm outline-none" id="inputSearch" type="text" placeholder="Bạn muốn tìm sản phẩm gì?" style={{ width: '370px' }} />
                            <input className="-ml-2 bg-blue-500 border border-blue-500 text-white text-sm px-2 py-2 cursor-pointer" id="btn_search" type="submit" defaultValue="Search" />
                        </form>
                    </div>
                    <div className="text-center text-black text-base font-semibold">
                        <p className="text-red-600 text-sm"><span><i className="fas fa-phone-alt" /></span> HOTLINE</p>
                        <p className="text-sm ">09865.02468 - 08586.02468</p>
                        <p className="text-sm">Địa chỉ: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội</p>
                        <div className="bg-blue-500 rounded-md text-white mt-1">
                            <NavLink className="mr-8 " to="/about">Giới thiệu</NavLink>
                            <NavLink className to="/contact">Liên hệ</NavLink>
                        </div>
                    </div>
                    <div className="items-center">
                        <div className="flex">
                            <div className="text-center">
                                <a href="/#/shopcart">
                                    <span className="text-red-600 text-lg cursor-pointer"><i className="fas fa-cart-plus" /></span>
                                    <p id="cart" className="text-sm font-medium cursor-pointer">Giỏ hàng</p>
                                    <span className="absolute rounded-full px-1.5 bg-red-600 text-sm text-white" id="totalCart" style={{ top: '20px', marginLeft: '3px' }} />
                                </a>
                            </div>
                            <div className="ml-12">
                                <a className="ml-2" href="/#/signin"><span className="text-red-600 text-lg"><i className="fas fa-user" /></span>
                                    <p id="login" className="text-sm font-medium">Login</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-blue-500">
                <div className="mx-auto" style={{ width: '1200px' }}>
                    <Marquee gradient='false'>
                        <p className="text-white font-semibold py-1">
                            <span>Địa chỉ: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội.</span>
                            <span className="ml-8">Hotline: 09865.02468 - 08586.02468.</span>
                            <span className="ml-8">Email: hotrolaptopaz@gmail.com.</span>
                            <span className="ml-8">Hỗ trợ kỹ thuật: 0989.52.4004</span>
                        </p>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Header
