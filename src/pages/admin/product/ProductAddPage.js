import React from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { Category_create } from '../../../slice/categorySlice';
import { useNavigate, Link } from 'react-router-dom';


const ProductAddPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(state => state.category.data)

    const onSubmit = (data) => {
        console.log(1)
    }
    return (
        <>
            <ToastContainer />
            <div>
                <div className="content-wrapper pb-[360px]">
                    <div className="container mx-auto pt-5">
                        <h3 className="text-center font-bold pb-4 text-xl">THÊM SẢN PHẨM</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2">
                                <div className="ml-48">
                                    <p className="font-semibold">DANH MỤC SẢN PHẨM</p>
                                    <select className="form-control border border-black px-2" id="product_category" style={{ width: '465px' }}>
                                        {categories.map(item => {
                                            return (
                                                <option key={item.id} value={item._id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                    <p className="font-semibold mt-3">TÊN SẢN PHẨM:</p>
                                    <textarea className="px-2 form-control checkValidate" {...register("name", { required: true })} id="product_name" cols={60} rows={3} style={{ width: '465px' }} />

                                    <p className="font-semibold mt-3">ẢNH</p>
                                    <input type="file" className="checkValidate" {...register("image", { required: true })} id="product_image" />
                                </div>
                                <div className="ml-24" style={{ width: '700px' }}>
                                    <p className="font-semibold">GIÁ TIỀN</p>
                                    <input type="number" className="px-2 form-control checkValidate" {...register("price", { required: true })} id="product_price" style={{ width: '465px', height: '30px' }} />

                                    <p className="font-semibold mt-3">GIÁ KHUYẾN MÃI</p>
                                    <input type="number" className="px-2 form-control checkValidate" {...register("priceSale", { required: true })} id="product_priceSale" style={{ width: '465px', height: '30px' }} />

                                    <p className="font-semibold mt-3">BẢO HÀNH</p>
                                    <input type="text" className="px-2 form-control checkValidate" {...register("guarantee", { required: true })} id="product_guarantee" style={{ width: '465px', height: '30px' }} />

                                    <p className="font-semibold mt-3">SỐ LƯỢNG</p>
                                    <input type="number" className="px-2 form-control checkValidate" {...register("quantity", { required: true })} id="product_quantity" style={{ width: '465px', height: '30px' }} />
                                </div>
                            </div>
                            {/* <div className="mx-auto" style={{ width: '1150px' }}>
                                <div className="divcheckValidate mt-5">
                                    <p className="font-semibold">CẤU HÌNH</p>
                                    <textarea className="px-2 mx-auto checkValidate" id="product_config" cols={60} rows={5} defaultValue={""} />
                                </div>
                                <div className="divcheckValidate mt-5">
                                    <p className="font-semibold">ĐẶC ĐIỂM</p>
                                    <textarea className="px-2 checkValidate" id="product_description" cols={60} rows={5} defaultValue={""} />
                                </div>
                            </div> */}
                            <div className="text-center">
                                <input id="btn_add" className="text-center mt-5 px-3 py-2 text-white bg-red-600 rounded-full mb-5 font-semibold hover:bg-red-700" type="submit" value="THÊM SẢN PHẨM" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="text-center mt-2">
                            <Link to="/admin/products"><button className="btn btn-primary" type="button">Tất cả sản phẩm</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAddPage

