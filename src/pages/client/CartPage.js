import React from 'react';
import { Link } from 'react-router-dom';
import { prices } from '../../utils/util';


const CartPage = () => {
    let productOnCart = JSON.parse(localStorage.getItem('cart'));
    console.log(productOnCart)
    return (
        <div>
            <div className="div-content bg-gray-100 pb-8">
                <div className="content1 mx-auto" style={{ maxWidth: '1200px' }}>
                    <div className="flex justify-between items-center py-2">
                        <h5 className="py-3 font-semibold">
                            <i className="fas fa-home px-1"></i>
                            <Link to="/">Trang chủ</Link>
                            <i className="fas fa-angle-double-right text-xs px-1" />
                            <i className="fas fa-shopping-cart px-1"></i>
                            <Link to="/cart">Giỏ hàng</Link>
                        </h5>
                    </div>
                    <div id="list_cart">
                        <div>
                            <div className="text-right mb-2"><button id="removeCart" className="btn btn-danger">Xoá giỏ hàng</button></div>
                            <table>
                                <thead>
                                    <tr className="text-center">
                                        <th className="border border-gray-300" style={{ width: '50px' }}>STT
                                        </th><th className="border border-gray-300" style={{ width: '500px' }}>Tên sản phẩm
                                        </th><th className="border border-gray-300" style={{ width: '150px' }}>Đơn giá
                                        </th><th className="border border-gray-300" style={{ width: '150px' }}>Số lượng
                                        </th><th className="border border-gray-300" style={{ width: '150px' }}>Thành tiền
                                        </th><th className="border border-gray-300" style={{ width: '50px' }}>Xoá
                                        </th></tr>
                                </thead>
                                <tbody id="showListCart">
                                    {productOnCart.map((item, index) => {
                                        return (
                                            <tr key={item.id} className="text-center">
                                                <td className="border border-gray-300">{index + 1}</td>
                                                <td className="border border-gray-300 flex"><img src={item.image} alt="" width={70} />
                                                    <p className="px-2">{item.name}</p>
                                                </td>
                                                <td className="border border-gray-300"><span className="cart_price_show">{prices(Number(item.price)).replace('VND', 'Đ')}</span><span className="cart_price hidden">{Number(item.price)}</span></td>
                                                <td className="border border-gray-300">
                                                    <button className="text-sm border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_minus" data-id="${item.id}">-</button>
                                                    <input type="number" className="w-16 pl-4 border border-gray-200 rounded-md cart_quantity" disabled />
                                                    <button className="text-sm border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_plus" data-id="${item.id}">+</button>
                                                </td>
                                                <td className="border border-gray-300"><span className="cart_cost_show">{prices(Number(item.price) * Number(item.quantity)).replace('VND', 'Đ')}</span><span className="cart_cost hidden ">{Number(item.price) * Number(item.quantity)}</span></td>
                                                <td className="border border-gray-300"><div><button className="text-sm px-1 border border-gray-600 rounded-lg bg-red-500 hover:bg-red-700 text-white btn btn-danger btn-remove" data-id="${item.id}"><i className="px-1 fas fa-trash-alt" /></button></div></td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td colSpan={2} className="border border-gray-400" />
                                        <td colSpan={4} className="border border-gray-400">
                                            <p className="text-red-500 font-bold my-3 ml-3 text-lg">Tổng tiền: <span id="totalCost" /></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-end mt-4 pb-4">
                                <a href="/#/"><button className="btn btn-primary mr-4">Tiếp tục mua hàng</button></a>
                                ${'{'}SessionCart(){'}'}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="bg-gray-100 hidden" id="oderPage">
                <div className="mx-auto" style={{ maxWidth: '1230px' }}>
                    <div className=" px-3 pb-5">
                        <form className="grid grid-cols-5 gap-3" id="form_addOder">
                            <div className="col-span-3 border">
                                <div className="border-b pt-1 px-3">
                                    <h3 className="text-lg pb-1 font-semibold">1. Khách hàng khai báo thông tin</h3>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-base mt-4 font-semibold">Thông tin người mua</h4>
                                    <p className="text-sm mt-1">Những phần đánh dấu * là bắt buộc</p>
                                    <div className="flex  mt-4">
                                        <p style={{ minWidth: '120px' }}>Họ tên *</p>
                                        <input type="text" className="form-control checkValidate" id="fullname" placeholder="Nguyễn Văn A" style={{ width: '420px', height: '30px' }} />
                                    </div>
                                    <div className="flex mt-4">
                                        <p style={{ minWidth: '120px' }}>Địa chỉ*</p>
                                        <input type="text" className="form-control checkValidate" id="address" placeholder="Số 165 - Cầu Giấy - Quận Cầu Giấy - Hà Nội" style={{ width: '420px', height: '30px' }} />
                                    </div>
                                    <div className="flex mt-4">
                                        <p style={{ minWidth: '120px' }}>Số điện thoại*</p>
                                        <input type="text" className="form-control checkValidate" id="phoneNumber" placeholder="+84 xxx xxx xxx" style={{ width: '420px', height: '30px' }} />
                                    </div>
                                    <div className="flex mt-4">
                                        <p style={{ minWidth: '120px' }}>Email</p>
                                        <input type="text" className="form-control checkValidate" id="email" placeholder="abc@xyz.com" style={{ width: '420px', height: '30px' }} />
                                    </div>
                                    <div><p className="errorEmail text-red-500 text-sm font-semibold mt-1" style={{ marginLeft: '120px' }} /></div>
                                </div>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className="border-t border-l border-r pt-1 px-3">
                                        <h3 className="text-lg pb-1 font-semibold">2. Ghi chú cho đơn hàng</h3>
                                    </div>
                                    <div className="p-2 border">
                                        <textarea id="note" rows={3} className="w-full form-control checkValidate"  />
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                    <div className="border-t border-l border-r pt-1 px-3">
                                        <h3 className="text-lg pb-1 font-semibold">3. Chọn phương thức thanh toán</h3>
                                    </div>
                                    <div className="p-3 border">
                                        <div><input name="checkPay" type="radio" /> Thanh toán tại cửa hàng</div>
                                        <div className="mt-1"><input name="checkPay" type="radio" defaultChecked /> Thanh toán khi nhận hàng (COD)</div>
                                        <div className="mt-1"><input name="checkPay" type="radio" id="radio3" disabled /> Thanh toán trực tuyến bằng thẻ ATM, IB, QR Code </div>
                                        <div className="mt-1"><input name="checkPay" type="radio" id="radio4" disabled /> Thanh toán trả góp online</div>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <input type="submit" className="btn btn-primary py-2" value="GỬI ĐƠN HÀNG" />
                                </div>
                            </div></form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
