import React from 'react';
import {ProductItemApp} from './ProductItemApp';

const ProductApp = ( { products } ) => {

    return (
     <>
        <ol>
            {
                products.map((product)=> (<ProductItemApp key={product.id} product={product} />))
            }
        </ol>
     </>
    )
}

export default ProductApp;