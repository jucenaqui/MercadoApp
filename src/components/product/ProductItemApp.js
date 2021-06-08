import React from 'react';

import './ProductItemApp.scss';

export const ProductItemApp = ( { product}) => {
    
    return (
        <>
      
            <div className="product-item">
                <img className="producto-item-img" src={product.thumbnail}  alt={product.title}/>
                <div className="product-item-description"> 
                <h3>$ {product.price}</h3>   
                <p>{product.title}</p>
                </div>
            </div>
        </>
    )
}
