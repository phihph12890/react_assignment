import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Order_read } from '../../slice/orderSlice';
import { prices } from '../../utils/util';

const OrderDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Order_read(id))
    }, [id])

    const order = useSelector(state => state.order.data.order);
    const { cart } = order;
    console.log("cart", cart.length);
    return (
        <>
            <div className="mx-auto grid grid-cols-6 gap-2" style={{ width: '1200px' }}>
                <div className="col-span-2 text-left  ">
                    <h4 className="text-center text-2xl font-semibold border-b py-2">Thông tin người mua hàng</h4>
                    <div className="px-4 mt-4">
                        <div>
                            <p className="mt-3"><span className="font-semibold">Họ và tên:</span> <span>{order.name}</span></p>
                            <p className="mt-3"><span className="font-semibold">Địa chỉ:</span> <span>{order.address}</span></p>
                            <p className="mt-3"><span className="font-semibold">SDT:</span> <span>{order.phoneNumber}</span></p>
                            <p className="mt-3"><span className="font-semibold">Email:</span> <span>{order.email}</span></p>
                            {/* <p className="mt-3"><span className="font-semibold">Ngày đặt:</span> <span>{order.createdAt.split('T')[0]}</span></p> */}
                            <p className="mt-3"><span className="font-semibold">Số sản phẩm:</span> <span>{order.cartNumber}</span></p>
                            <p className="mt-3"><span className="font-semibold">Tổng tiền:</span> <span className="font-semibold text-red-500">{prices(Number(order.totalPrice)).replace('VND', 'Đ')}</span></p>
                            <p className="mt-3"><span className="font-semibold">Trạng thái:</span> <span>{order.status}</span></p>
                            <p className="mt-3"><span className="font-semibold">Ghi chú: </span> {order.note}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ">
                    <h4 className="text-center text-2xl font-semibold py-2">Thông tin sản phẩm</h4>
                    <table className="mx-auto text-center table table-hover">
                        <thead>
                            <tr className="text-center">
                                <th style={{ width: '50px' }}>STT
                                </th><th style={{ width: '300px' }}>Tên sản phẩm
                                </th><th style={{ width: '150px' }}>Đơn giá
                                </th><th style={{ width: '100px' }}>Số lượng
                                </th><th style={{ width: '150px' }}>Thành tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody id="showListOrder">
                            {(order.cartNumber === 1) ? (
                                <tr className="text-center">
                                    <td>1</td>
                                    <td className=" grid grid-cols-4">
                                        <img className="col-span-1" src={order.cart[0].image} alt="" width={90} />
                                        <p className="col-span-3">{order.cart[0].name}</p>
                                    </td>
                                    <td><span className="cart_price_show">{prices(Number(order.cart[0].price)).replace('VND', 'Đ')}</span><span className="cart_price hidden">{Number(order.cart[0].price)}</span></td>
                                    <td>{order.cart[0].quantity}</td>
                                    <td><span className="cart_cost_show font-semibold ">{prices(Number(order.cart[0].price) * Number(order.cart[0].quantity)).replace('VND', 'Đ')}</span><span className="cart_cost hidden ">{Number(order.cart[0].price) * Number(order.cart[0].quantity)}</span></td>
                                </tr>
                            ) : (

                                <tr></tr>
                            )}
                            {/* {order.cart.map((item, index) => {
                                return (
                                    <tr className="text-center">
                                        <td>{index + 1}</td>
                                        <td className=" grid grid-cols-4">
                                            <img className="col-span-1" src={item.image} alt="" width={90} />
                                            <p className="col-span-3">{item.name}</p>
                                        </td>
                                        <td><span className="cart_price_show">{prices(Number(item.price)).replace('VND', 'Đ')}</span><span className="cart_price hidden">{Number(item.price)}</span></td>
                                        <td>{item.quantity}</td>
                                        <td><span className="cart_cost_show">{prices(Number(item.price) * Number(item.quantity)).replace('VND', 'Đ')}</span><span className="cart_cost hidden ">{Number(item.price) * Number(item.quantity)}</span></td>
                                    </tr>
                                )
                            })} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OrderDetailPage
