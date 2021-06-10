import React from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';

import './ProductItemApp.scss';

export const ProductItemApp = ( { product} ) => {

    const history = useHistory();

    const handleLink = () => {
        history.push(`items/${product.id}`);
    }
    
    return (
        <>
            <div className="product-item-app" onClick={ handleLink }>
                <img className="producto-item-img-app" src={product.picture}  alt={product.title}/>
                <div className="product-description-app"> 
                    <h3>$ {product.price?.amount}</h3>   
                    <p>{product.title}</p>
                </div>
            </div>
        </>
    )
}

ProductItemApp.prototype = {
    product: PropTypes.object.isRequired
}