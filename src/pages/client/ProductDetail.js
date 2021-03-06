import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Categories from '../../components/client/Categories';
import ProductItem from '../../components/client/ProductItem';
import productApi from '../../api/productApi';
import { addToCart, getTotalItemOnCart, prices, SuccessMessage } from '../../utils/util';


const ProductDetail = () => {

    const { id: idProduct } = useParams()
    console.log(idProduct)

    const [product, setProduct] = useState()
    useEffect(() => {
        const getProductById = async () => {
            const { data } = await productApi.read(idProduct);
            console.log(data);
            setProduct(data)
        }
        getProductById()
    }, [idProduct])

    const [productsRelated, setProductsRelated] = useState([])
    useEffect(() => {
        const getProductsRelated = async () => {
            const { data } = await productApi.relateProduct(idProduct);
            console.log(data);
            setProductsRelated(data)
        }
        getProductsRelated()
    }, [idProduct])
    return (
        <div>
            <ToastContainer />
            <div className="content bg-gray-100 pb-8 pt-5">
                <div className=" mx-auto grid grid-cols-4 gap-5" style={{ width: '1200px' }}>
                    <aside className="col-span-1 bg-gray-100">
                        <Categories></Categories>
                        <div className="mt-6">
                            <img className="shadow-md transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg" alt="" />
                        </div>
                    </aside>
                    <div className="col-span-3 bg-white shadow-md pb-4">
                        <h3 className="font-bold text-lg mt-4 ml-4">{product && product.name}</h3>
                        <hr className="mt-3" />
                        <div className="grid grid-cols-11">
                            <div className="col-span-5" style={{ width: '400px', height: '350px' }}>
                                <img className="h-full mt-12 mx-auto" src={product && product.image} alt="" />
                            </div>
                            <div className="col-span-6 mt-4">
                                <span className="text-red-500 text-3xl font-bold">{prices(Number(product && product.priceSale)).replace('VND', '??')}</span> <span className="text-lg text-gray-500 font-bold  ml-3 italic line-through">{prices(Number(product && product.price)).replace('VND', '??')}</span>
                                <p className="text-sm mt-2"><span className="font-semibold">B???o h??nh: </span><span className="text-lg font-bold">{product && product.guarantee}</span></p>
                                <p className="text-sm mt-1"><span className="font-semibold">S??? l?????ng trong kho: </span><span className="text-lg font-bold">{product && product.quantity}</span></p>
                                <p className="text-sm mt-4"><span className="text-base text-green-500"><i className="fas fa-check-square" /></span> H??ng M???i V???</p>
                                <p className="text-sm"><span className="text-base text-green-500"><i className="fas fa-check-square" /></span> Mua h??ng tr?????c 15/01/2021 Gi???m ngay 1.000.000 vn??</p>
                                <div className="mt-8">
                                    <div className="bg-red-500 rounded-lg text-center mt-3" style={{ width: '430px' }}>
                                        <button onClick={() => {
                                            addToCart(product._id, product.name, product.image, product.priceSale);
                                            getTotalItemOnCart();
                                            SuccessMessage("Th??m s???n ph???m v??o gi??? h??ng th??nh c??ng!")
                                        }}>
                                            <p className="text-white font-bold text-lg pt-1">Th??m v??o gi??? h??ng</p>
                                            <p className="text-white font-semibold text-sm mt-1 pb-2">Giao t???n n??i ho???c nh???n ??? c???a h??ng</p>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-3" style={{ width: '430px' }}>
                                        <div className="bg-blue-500 rounded-lg text-center ml-1 hover:bg-blue-900">
                                            <Link to="/">
                                                <p className="text-white font-bold text-sm pt-1">TR??? G??P % QUA TH???</p>
                                                <p className="text-white text-xs mt-1 pb-1">Visa, Master Card, JCB</p>
                                            </Link>
                                        </div>
                                        <div className="bg-blue-500 rounded-lg text-center mr-1 hover:bg-blue-900">
                                            <Link to="/">
                                                <p className="text-white font-bold text-sm pt-1">????NG K?? TR??? G??P</p>
                                                <p className="text-white text-xs mt-1 pb-1">X??t duy???t nhanh qua ??i???n tho???i</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-20">
                            <div>
                                <div className="border border-green-400 rounded-lg relative py-6 ml-10" style={{ width: '430px' }}>
                                    <div className="bg-green-400 rounded-full absolute" style={{ top: '-17px', left: '20px' }}>
                                        <p className="py-1 px-3"><span><i className="fas fa-gift" /></span> Qu?? t???ng/Khuy???n m??i</p>
                                    </div>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> T???ng Windows 10 b???n quy???n theo m??y</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Mi???n ph?? c??n m??u m??n h??nh c??ng ngh??? cao</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Balo th???i trang + t??i ch???ng s???c cao c???p</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> Chu???t kh??ng d??y + B??n di cao c???p ch??nh h??ng</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> T???ng g??i c??i ?????t, b???o d?????ng ch??m s??c m??y tr???n ?????i</p>
                                    <p className="text-sm mt-2 ml-6 text-xs"><span className="text-green-400 text-xs"><i className="fas fa-check-circle" /></span> T???ng Voucher gi???m gi?? cho l???n mua ti???p theo</p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-500 rounded-lg relative py-4 ml-12" style={{ width: '350px' }}>
                                    <h4 className="text-base text-center text-red-500 mt-[7px]">Y??N T??M MUA S???M T???I LAPTOPAZ</h4>
                                    <p className="text-sm mt-[6px] ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Ch???t l?????ng s???n ph???m l?? h??ng ?????u</p>
                                    <p className="text-sm mt-[6px] ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> D??ng test m??y 15 ng??y ?????u l???i 1 ?????i 1</p>
                                    <p className="text-sm mt-[6px] ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> H??? tr??? v?? h???u m??i sau b??n h??ng t???t nh???t</p>
                                    <p className="text-sm mt-[6px] ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Tr??? g??p l??i su???t 0% qua th??? visa</p>
                                    <p className="text-sm mt-[6px] ml-3 text-base"><span className="text-yellow-500 text-base mr-2"><i className="fas fa-star" /></span> Giao h??ng to??n qu???c nhanh nh???t</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 mx-auto bg-white shadow-md" style={{ width: '1200px' }}>
                    <h4 className="font-bold text-lg mt-4 pl-4 py-2 border-b">S???n ph???m li??n quan</h4>
                    <div className="mx-auto grid grid-cols-3 gap-8 text-center mt-8 pb-8 px-8">
                        {productsRelated.map(item => {
                            return (
                                <ProductItem key={item._id} product={item} className="" />
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* <Footer></Footer> */}
        </div>
    )
}

export default ProductDetail
