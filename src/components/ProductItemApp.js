import React from 'react';

export const ProductItemApp = ( { product}) => {
    
    return (
        <>
      
       <div>
                    <img src={product.thumbnail}  alt={product.title}/>
                    <p>{product.title}</p>
                    <h3>{product.price}</h3>
                </div>
        </>
    )
}
