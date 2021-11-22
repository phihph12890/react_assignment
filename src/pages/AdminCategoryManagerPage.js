import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import categoryApi from '../api/categoryApi';

const AdminCategoryManagerPage = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const { data } = await categoryApi.list();
            setCategories(data);
        }
        getCategories();
    }, [categories])

    const handleRemove = async (id) => {
        try {
            const { data } = await categoryApi.remove(id);
            const newCategories = categories.filter(item => item._id !== data._id);
            toast.success("Xoá danh mục thành công!");
            setCategories(newCategories);
        } catch (error) {
            toast.error(error.response.data);
        }
    }
    return (
        <>
            <ToastContainer />
            <div>
                <div className="pb-[300px]">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2 ml-5 mt-2">QUẢN TRỊ DANH MỤC</h1>
                    </div>
                    <div>
                        <div className="text-center mt-[30px]">
                            <Link to="add">
                                <button className="btn btn-primary mx-auto">Thêm Danh Mục</button>
                            </Link>
                        </div>
                        <table className="table table-hover mx-auto mt-[50px] text-center" style={{ width: '50%' }}>
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">STT</th>
                                    <th scope="col">TÊN DANH MỤC</th>
                                    <th className="text-center" colSpan={2} scope="col">TUỲ CHỌN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row" style={{ width: '100px' }}>{index + 1}</th>
                                            <td className="font-semibold" style={{ width: '480px' }}>{item.name}</td>
                                            <td>
                                                <Link className="text-sm px-1 rounded-lg bg-blue-500 hover:bg-blue-700 text-white btn btn-primary" to="/admin/category-update/{{cate._id}}">
                                                    <i className="px-1 far fa-edit" />
                                                </Link>
                                            </td>
                                            <td>
                                                <button onClick={() => { handleRemove(item._id) }} data-id={item._id} className="text-sm px-1 rounded-lg bg-red-500 hover:bg-red-700 text-white btn btn-danger btn-remove">
                                                    <i className="px-1 fas fa-trash-alt" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AdminCategoryManagerPage
