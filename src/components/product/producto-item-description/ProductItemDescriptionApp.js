import React from 'react';

import './ProductItemDescriptionApp.scss';

export const ProductItemDescriptionApp = ( { product } ) => {
    
    return (
        <>
      
            <div className="product-item">
                <div className="container-product">
                    <div className="container-product-item">
                        <img className="producto-item-img" src={product.picture}  alt={product.title}/>
                        <div className="product-item-params">
                            <span className="producto-item-condition">{ product?.condition === 'new' ? 'Nuevo': product?.condition } - {product?.sold_quantity } Vendidos </span>
                            <p className="producto-item-title">{product.title}</p>
                            <h2>$ {product.price?.amount}</h2>   
                            <button className="producto-item-button">Comprar</button>
                        </div>
                    </div>
                    <div className="product-item-description-app"> 
                        <h2>Descrición del producto</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
