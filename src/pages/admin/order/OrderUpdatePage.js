import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Order_update, Order_read } from '../../../slice/orderSlice';
import { SuccessMessage } from '../../../utils/util';
import Spin from "react-cssfx-loading/lib/Spin";
import orderApi from '../../../api/orderApi';

const OrderUpdatePage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(Order_read(id))
    }, [id])
    const orderCurrent = useSelector(state => state.order.data.order);
    const loading = useSelector(state => state.order.loading);
    const [order, setOrder] = useState()
    useEffect(() => {
        const getOrder = async () => {
            const { data } = await orderApi.read(id);
            setOrder(data);
            reset(data)
        }
        getOrder();
    }, [id])

    const onSubmit = (data) => {
        const newStatus = {
            ...order,
            status: data.status
        }
        dispatch(Order_update(newStatus));
        SuccessMessage("Cập nhật trạng thái thành công!");
        setTimeout(() => {
            navigate('/admin/orders')
        }, 1000);
    }

    return (
        <>
            <ToastContainer />
            <div className="pb-[660px]">
                {loading === false ? (
                    <div className="content-wrapper ">
                        <div className="container mx-auto pt-5 text-center">
                            <h3 className="text-center font-bold pb-4 text-xl">CẬP NHẬT TRẠNG THÁI ĐƠN HÀNG</h3>

                            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                                <p className="mt-10 font-semibold">Trạng thái: </p>
                                <select className=""{...register('status')} className="form-control mx-auto mt-2" id="status" style={{ width: '200px' }}>
                                    <option value="CHƯA DUYỆT">CHƯA DUYỆT</option>
                                    <option value="ĐÃ DUYỆT">ĐÃ DUYỆT</option>
                                    <option value="ĐÃ HOÀN THÀNH">ĐÃ HOÀN THÀNH</option>
                                </select>
                                <p className="error text-red-500 text-sm font-semibold" />
                                <input type="submit" value="Cập nhật trạng thái" name="btn_themdm" className="px-3 py-2 text-white bg-red-600 rounded-full mt-4 mb-5 font-semibold hover:bg-red-700" />
                            </form>
                        </div>
                        <div>
                            <div className="text-center mt-2">
                                <Link to="/admin/orders"><button className="btn btn-primary" type="button">Tất cả đơn hàng</button></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-[300px]">
                        <Spin className="mx-auto" color="#0d6efd" width="30px" height="30px" />
                    </div>
                )
                }
            </div>
        </>
    )
}

export default OrderUpdatePage
