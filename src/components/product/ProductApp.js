import React from 'react';
import {ProductItemApp} from './ProductItemApp';

import './ProductApp.scss';

const ProductApp = ( { products } ) => {

    return (
     <>
        <ol className="product-list">
            {
                products.map((product)=> (<ProductItemApp key={product.id} product={product} />))
            }
        </ol>
     </>
    )
}

export default ProductApp;