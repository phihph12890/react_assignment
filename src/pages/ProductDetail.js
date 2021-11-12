import React from 'react';
import Header from '../components/client/Header';
import Footer from '../components/client/Footer';
import Categories from '../components/client/Categories';

const ProductDetail = () => {
    return (
        <div>
            <Header></Header>
            <div className="content bg-gray-100 pb-8 pt-5">
                <div className=" mx-auto grid grid-cols-4 gap-5" style={{ width: '1200px' }}>
                    <aside className="col-span-1 bg-gray-100">
                        <Categories></Categories>
                        <div className="mt-6">
                            <img className="shadow-md transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg" alt="" />
                        </div>
                    </aside>
                    <div className="col-span-3 bg-white shadow-md pb-4">
                        <h3 className="font-bold text-lg mt-4 ml-4">Laptop Acer Gaming Nitro 5 AN515-45-R3SM (NH.QBMSV.005)</h3>
                        <hr className="mt-3" />
                        <div className="grid grid-cols-11">
                            <div className="col-span-5" style={{ width: '400px', height: '350px' }}>
                                <img className="h-full mt-16 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-9d7cc.appspot.com/o/images%2F1.jpg?alt=media&token=20aec449-5f39-4494-a511-a8da10aa5ddb" alt="" />
                            </div>
                            <div className="col-span-6 mt-4">
                                <span className="text-red-500 text-3xl font-bold">21.000.000 VND</span> <span className="text-lg text-gray-500 font-bold  ml-3 italic line-through">20.000.000 VND</span>
                                <p className="text-sm mt-2"><span className="font-semibold">Bảo hành: </span><span className="text-lg font-bold">12 tháng</span></p>
                                <p className="text-sm mt-1"><span className="font-semibold">Số lượng trong kho: </span><span className="text-lg font-bold">20</span></p>
                                <p className="text-sm mt-4"><span className="text-base text-green-500"><i className="fas fa-check-square" /></span> Hàng Mới Về</p>
                                <p className="text-sm"><span className="text-base text-green-500"><i className="fas fa-check-square" /></span> Mua hàng trước 15/01/2021 Giảm ngay 1.000.000 vnđ</p>
                                <div className="mt-8">
                                    <div className="bg-red-500 rounded-lg text-center mt-3" style={{ width: '430px' }}>
                                        <a href onclick="alert('Hãy đăng nhập để mua hàng!')">
                                            <p className="text-white font-bold text-lg pt-1">Thêm vào giỏ hàng</p>
                                            <p className="text-white font-semibold text-sm mt-1 pb-2">Giao tận nơi hoặc nhận ở cửa hàng</p>
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-2  gap-2 mt-5" style={{ width: '430px' }}>
                                        <div className="bg-blue-500 rounded-lg text-center ml-1 hover:bg-blue-900">
                                            <a href>
                                                <p className="text-white font-bold text-sm pt-1">TRẢ GÓP % QUA THẺ</p>
                                                <p className="text-white text-xs mt-1 pb-1">Visa, Master Card, JCB</p>
                                            </a>
                                        </div>
                                        <div className="bg-blue-500 rounded-lg text-center mr-1 hover:bg-blue-900">
                                            <a href>
                                                <p className="text-white font-bold text-sm pt-1">ĐĂNG KÝ TRẢ GÓP</p>
                                                <p className="text-white text-xs mt-1 pb-1">Xét duyệt nhanh qua điện thoại</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 mb-8">
                                    <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-800 showdetail" id="showdetail">Xem đặc điểm và cấu hình chi tiết</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-8">
                            <div>
                                <div className="border border-green-400 rounded-lg relative py-6 ml-10" style={{ width: '430px' }}>
                                    <div className="bg-green-400 rounded-full absolute" style={{ top: '-17px', left: '20px' }}>
                                        <p className="py-1 px-3"><span><i className="fas fa-gift" /></span> Quà tặng/Khuyến mãi</p>
                                    </div>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Tặng Windows 10 bản quyền theo máy</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Miễn phí cân màu màn hình công nghệ cao</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Balo thời trang + túi chống sốc cao cấp</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Chuột không dây + Bàn di cao cấp chính hãng</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Tặng gói cài đặt, bảo dưỡng chăm sóc máy trọn đời</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Tặng Voucher giảm giá cho lần mua tiếp theo</p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-500 rounded-lg relative py-4 ml-12" style={{ width: '350px' }}>
                                    <h4 className="text-base text-center text-red-500">YÊN TÂM MUA SẮM TẠI LAPTOPAZ</h4>
                                    <p className="text-sm mt-1 ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Chất lượng sản phẩm là hàng đầu</p>
                                    <p className="text-sm mt-1 ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Dùng test máy 15 ngày đầu lỗi 1 đổi 1</p>
                                    <p className="text-sm mt-1 ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Hỗ trợ và hậu mãi sau bán hàng tốt nhất</p>
                                    <p className="text-sm mt-1 ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Trả góp lãi suất 0% qua thẻ visa</p>
                                    <p className="text-sm mt-1 ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Giao hàng toàn quốc nhanh nhất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="in4 grid grid-cols-7 gap-5 mx-auto pb-5" style={{ maxWidth: '1200px' }}>
                    <div className="col-span-5 bg-white">
                        <div className="mt-1">
                            <div className="px-4 shadow-md pb-4">
                                <h3 className="font-bold text-lg mt-2">Đặc điểm nổi bật</h3>
                                <hr className="mt-1 mb-2" />

                            </div>
                            <div className="py-2 bg-gray-100" />
                            <div className="bg-white rounded-t-md shadow-md">
                                <div className="bg-gray-200">
                                    <h3 className="font-bold py-2 px-5">Đánh giá &amp; nhận xét</h3>
                                </div>
                                <div className="px-5">
                                    <div className="flex justify-between">
                                        <p><span className="text-xs mr-2"><i className="fas fa-dot-circle" /></span> Sản phẩm chất lượng</p>
                                        <p className="text-sm mt-1 italic"><span className=" font-bold">hoangphi, </span> 2020-10-7</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p><span className="text-xs mr-2"><i className="fas fa-dot-circle" /></span> Sản phẩm tốt</p>
                                        <p className="text-sm mt-1 italic"><span className=" font-bold">admin, </span> 2020-10-7</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p><span className="text-xs mr-2"><i className="fas fa-dot-circle" /></span> Giá cả phù hợp</p>
                                        <p className="text-sm mt-1 italic"><span className=" font-bold">letuan, </span> 2020-10-7</p>
                                    </div>
                                </div>
                                <div className="pb-3 mt-3 bg-gray-200 pt-4">
                                    <div className="grid grid-cols-12 gap-4 ">
                                        <div className="col-span-1">
                                            <a href><img className="h-auto ml-5" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/72783406_1871285719684709_7378698143161909248_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=052ybVltGaYAX8PAk7o&_nc_ht=scontent-hkg4-1.xx&oh=d66a04e615a21a0320cfe4783ae78675&oe=6028FCC0" alt="" /></a>
                                        </div>
                                        <div className="col-span-11">
                                            <textarea className="border border-gray-600 px-2 py-1 ml-5" name id cols={93} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <input className="px-5 mt-1 rounded-md bg-red-500 text-white py-1 cursor-pointer mr-8" type="submit" defaultValue="Gửi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white shadow-md">
                            <h3 className="font-bold text-lg ml-5 pt-2">Thông số kỹ thuật</h3>
                            <hr className="mt-1" />
                            <div className="px-2 mt-2">

                            </div>
                        </div>
                        <div className="bg-white mt-5 shadow-md ">
                            <h3 className="font-bold text-lg ml-5 pt-2">Sản phẩm liên quan</h3>
                            <hr className="mt-1" />
                            <div>
                                <div className="group bg-white overflow-hidden shadow-md text-center py-2">
                                    <div className="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                                        <a href="/#/product"><img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-9d7cc.appspot.com/o/images%2F1.jpg?alt=media&token=20aec449-5f39-4494-a511-a8da10aa5ddb" alt="" width="70%" /></a>
                                    </div>
                                    <a className="hover:text-yellow-600" href="/#/product"><h4 className="text-sm px-2 pt-1 group-hover:text-yellow-600">Laptop Acer Gaming Nitro 5 AN515-45-R3SM (NH.QBMSV.005)</h4></a>
                                    <p className="text-red-500 text-lg font-bold pt-1  italic">21.000.000 VND<span className="text-gray-500 text-sm ml-2 font-bold pt-1  italic line-through">20.000.000 VND</span></p>
                                    <div className="transition duration-300 ease-in-out pt-2 transform translate-y-24 group-hover:-translate-y-0">
                                        <button className="bg-blue-500 text-white bg-black text-base rounded-md font-bold btn_addCart" data-id="${relateProduct._id}" style={{ padding: '6px 70px' }}>THÊM GIỎ HÀNG</button>
                                    </div>
                                </div>
                                <hr className />
                            </div>
                            <div>
                                <div className="group bg-white overflow-hidden shadow-md text-center py-2">
                                    <div className="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                                        <a href="/#/product"><img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-9d7cc.appspot.com/o/images%2F1.jpg?alt=media&token=20aec449-5f39-4494-a511-a8da10aa5ddb" alt="" width="70%" /></a>
                                    </div>
                                    <a className="hover:text-yellow-600" href="/#/product"><h4 className="text-sm px-2 pt-1 group-hover:text-yellow-600">Laptop Acer Gaming Nitro 5 AN515-45-R3SM (NH.QBMSV.005)</h4></a>
                                    <p className="text-red-500 text-lg font-bold pt-1  italic">21.000.000 VND<span className="text-gray-500 text-sm ml-2 font-bold pt-1  italic line-through">20.000.000 VND</span></p>
                                    <div className="transition duration-300 ease-in-out pt-2 transform translate-y-24 group-hover:-translate-y-0">
                                        <button className="bg-blue-500 text-white bg-black text-base rounded-md font-bold btn_addCart" data-id="${relateProduct._id}" style={{ padding: '6px 70px' }}>THÊM GIỎ HÀNG</button>
                                    </div>
                                </div>
                                <hr className />
                            </div>
                            <div>
                                <div className="group bg-white overflow-hidden shadow-md text-center py-2">
                                    <div className="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                                        <a href="/#/product"><img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-9d7cc.appspot.com/o/images%2F1.jpg?alt=media&token=20aec449-5f39-4494-a511-a8da10aa5ddb" alt="" width="70%" /></a>
                                    </div>
                                    <a className="hover:text-yellow-600" href="/#/product"><h4 className="text-sm px-2 pt-1 group-hover:text-yellow-600">Laptop Acer Gaming Nitro 5 AN515-45-R3SM (NH.QBMSV.005)</h4></a>
                                    <p className="text-red-500 text-lg font-bold pt-1  italic">21.000.000 VND<span className="text-gray-500 text-sm ml-2 font-bold pt-1  italic line-through">20.000.000 VND</span></p>
                                    <div className="transition duration-300 ease-in-out pt-2 transform translate-y-24 group-hover:-translate-y-0">
                                        <button className="bg-blue-500 text-white bg-black text-base rounded-md font-bold btn_addCart" data-id="${relateProduct._id}" style={{ padding: '6px 70px' }}>THÊM GIỎ HÀNG</button>
                                    </div>
                                </div>
                                <hr className />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProductDetail
