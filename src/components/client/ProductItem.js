import React from 'react'

const ProductItem = () => {
    return (
        <div className="group overflow-hidden shadow-md bg-white ">
            <div className="bg-white overflow-hidden ">
                <div className="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                    <a href="/#/product"><img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-9d7cc.appspot.com/o/images%2F1.jpg?alt=media&token=20aec449-5f39-4494-a511-a8da10aa5ddb" alt="" width="80%" /></a>
                </div>
                <a href="/#/product"><span className="text-center text-sm pt-1 group-hover:text-yellow-600 px-2">Laptop Acer Gaming Nitro 5 AN515-45-R3SM (NH.QBMSV.005)</span></a>
                <p className="text-red-500 text-lg font-bold py-1">21.000.000 VND<span className="text-gray-500 text-base ml-2 font-bold pt-1italic line-through">20.000.000 VND</span></p>
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
