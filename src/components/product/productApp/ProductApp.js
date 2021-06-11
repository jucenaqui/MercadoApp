import React from 'react';
import {ProductItemApp} from '../producto-item/ProductItemApp';
import PropTypes from 'prop-types';

import './ProductApp.scss';

const ProductApp = ( { products, categories } ) => {

    return (
     <>
        <p className="product-category"> 
        { 
            categories.map(item => item.name).join(' > ')
        } 
        </p>
        <ol className="product-list animate__animated animate__fadeIn">
            {
                products.map((product)=> (<ProductItemApp key={product.id} product={product} />))
            }
        </ol>
     </>
    )
}


ProductApp.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
}


export default ProductApp;