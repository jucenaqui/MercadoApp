import React from 'react';

import PropTypes from 'prop-types';

import './ProductItemDescriptionApp.scss';

export const ProductItemDescriptionApp = ( { product, categories } ) => {
    
    return (
        <>
            <p className="product-category"> 
                { 
                    categories && categories.map(item => item.name).join(' > ')
                } 
            </p>
            <div className="product-item animate__animated animate__fadeIn">
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
                        <h2 className="description-title">Descrición del producto</h2>
                        <p className="description">{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

ProductItemDescriptionApp.propTypes = {
    product: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}
