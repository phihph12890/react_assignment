import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Product_update, Product_read } from '../../../slice/productSlice';
import { SuccessMessage } from '../../../utils/util';
import productApi from '../../../api/productApi';
import categoryApi from '../../../api/categoryApi';
import Spin from "react-cssfx-loading/lib/Spin";
import '../../../firebase/index';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from '@firebase/storage';

const ProductUpdatePage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const inputRef = useRef();
    useEffect(() => {
        dispatch(Product_read(id))
    }, [])

    const categories = useSelector(state => state.category.data);
    const product = useSelector(state => state.product.data.product);
    console.log(product);
    const loading = useSelector(state => state.product.loading)
    const [listCategories, setListCategories] = useState(categories);
    // useEffect(() => {
    //     reset({
    //         name: product.name,
    //         image: product.image,
    //         price: product.price,
    //         priceSale: product.priceSale,
    //         guarantee: product.guarantee,
    //         quantity: product.quantity,
    //     })
    //     let indexCate;
    //     categories.forEach((item, index) => {
    //         if (item._id === product.category._id) {
    //             indexCate = index
    //         }
    //     })
    //     setListCategories(arraySort(categories, indexCate))
    // }, [id])

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await productApi.read(id);
            reset(data)
        }
        getProduct()
    }, [id])


    const onSubmit = (data) => {
        if (typeof data.image === "object") {
            const img = data.image[0];
            const storage = getStorage();
            const storageRef = ref(storage, `images/${img.name}`);
            const UploadTask = uploadBytesResumable(storageRef, img);
            uploadBytes(storageRef, img).then(() => {
                getDownloadURL(UploadTask.snapshot.ref).then((url) => {
                    data.image = url;
                    dispatch(Product_update(data))
                    SuccessMessage("Th??m s???n ph???m th??nh c??ng!")
                    setTimeout(() => {
                        navigate("/admin/products")
                    }, 1500)
                })
            })
        } else {
            dispatch(Product_update(data))
            SuccessMessage("C???p nh???t s???n ph???m th??nh c??ng!")
            setTimeout(() => {
                navigate("/admin/products")
            }, 1500)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="pb-[560px]">
                {loading === false ? (
                    <div className="content-wrapper pb-[360px]">
                        <div className="container mx-auto pt-5">
                            <h3 className="text-center font-bold pb-4 text-xl">C???P NH???T S???N PH???M</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2">
                                    <div className="ml-48">
                                        <p className="font-semibold">DANH M???C S???N PH???M</p>
                                        <select autoFocus {...register("category", { required: true })} className="form-control border border-black px-2" id="product_category" style={{ width: '465px' }}>
                                            {categories && categories.map(item => {
                                                return (
                                                    <option key={item._id} value={item._id}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                        <div>
                                            {errors.category && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>
                                        <p className="font-semibold mt-3">T??N S???N PH???M:</p>
                                        <textarea className="px-2 form-control checkValidate" {...register("name", { required: true })} id="product_name" cols={60} rows={3} style={{ width: '465px' }} />
                                        <div>
                                            {errors.name && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>

                                        <p className="font-semibold mt-3">???NH</p>
                                        <input id="chooseImage" type="file" className="checkValidate" {...register("image",)} id="product_image" />
                                        <img src={product.image} className="w-[170px]" />

                                    </div>
                                    <div className="ml-24" style={{ width: '700px' }}>
                                        <p className="font-semibold">GI?? TI???N</p>
                                        <input type="number" className="px-2 form-control checkValidate" {...register("price", { required: true })} id="product_price" style={{ width: '465px', height: '30px' }} />
                                        <div>
                                            {errors.price && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>

                                        <p className="font-semibold mt-3">GI?? KHUY???N M??I</p>
                                        <input type="number" className="px-2 form-control checkValidate" {...register("priceSale", { required: true })} id="product_priceSale" style={{ width: '465px', height: '30px' }} />
                                        <div>
                                            {errors.priceSale && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>

                                        <p className="font-semibold mt-3">B???O H??NH</p>
                                        <input type="text" className="px-2 form-control checkValidate" {...register("guarantee", { required: true })} id="product_guarantee" style={{ width: '465px', height: '30px' }} />
                                        <div>
                                            {errors.guarantee && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>

                                        <p className="font-semibold mt-3">S??? L?????NG</p>
                                        <input type="number" className="px-2 form-control checkValidate" {...register("quantity", { required: true })} id="product_quantity" style={{ width: '465px', height: '30px' }} />
                                        <div>
                                            {errors.quantity && <span className="text-red-500 font-bold">H??y nh???p ?????y ????? th??ng tin!</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input id="btn_add" className="text-center mt-5 px-3 py-2 text-white bg-red-600 rounded-full mb-5 font-semibold hover:bg-red-700" type="submit" value="C???P NH???T S???N PH???M" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="text-center mt-2">
                                <Link to="/admin/products"><button className="btn btn-primary" type="button">T???t c??? s???n ph???m</button></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-[300px]">
                        <Spin className="mx-auto" color="#0d6efd" width="30px" height="30px" />
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductUpdatePage
