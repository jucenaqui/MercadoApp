import React from 'react';
import { useHistory } from "react-router-dom";

import './ProductItemApp.scss';

export const ProductItemApp = ( { product} ) => {

    const history = useHistory();

    const handleLink = () => {
        history.push(`items/${product.id}`);
    }
    
    return (
        <>
      
            <div className="product-item-app" onClick={ handleLink }>
                <img className="producto-item-img-app" src={product.thumbnail}  alt={product.title}/>
                <div className="product-description-app"> 
                <h3>$ {product.price}</h3>   
                <p>{product.title}</p>
                </div>
            </div>
        </>
    )
}
