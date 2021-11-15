import React from 'react';
import ProductItem from './ProductItem';

const ListProduct = (props) => {
    return (
        <div className="grid grid-cols-3 gap-6 gap-y-6 mt-5 text-center">
            {props.data.map((item) => (
                <ProductItem product={item} />
            ))}
        </div>
    )
}

export default ListProduct
