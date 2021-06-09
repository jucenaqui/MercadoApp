import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { getProductsById } from '../../../hooks/GetProductsById';
import { ProductItemDescriptionApp } from '../producto-item-description/ProductItemDescriptionApp';

export const ProductListApp = () => {

    const { id } = useParams();

    const [productItem, setProductItem] = useState({})
    
    const item = productItem;

    useEffect(() => {
        getProductsById( id )
        .then( prods => {
           setProductItem( prods );
           console.log(prods)
        })
    }, [id]);

    return (
        <div>
            {
                item && <ProductItemDescriptionApp product={item} />
            }
        </div>
    )
}
