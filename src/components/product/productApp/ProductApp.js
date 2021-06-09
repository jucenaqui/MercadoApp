import React from 'react';
import {ProductItemApp} from '../producto-item/ProductItemApp';

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