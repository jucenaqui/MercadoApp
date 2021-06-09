import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { getProductsById } from '../../../helpers/GetProductsById';
import { ProductItemDescriptionApp } from '../producto-item-description/ProductItemDescriptionApp';

export const ProductListApp = () => {

    const { id } = useParams();

    const [productItem, setProductItem] = useState({
        item: {},
        categories: [],
        author: {}
    })
    
    const { item , categories } = productItem;

    useEffect(() => {
        getProductsById( id )
        .then( ({ item, categories,author }) => {
           setProductItem( prods => {
               return {
                   ...prods,
                   item,
                   categories
               }
           } );
        })
    }, [id]);

    return (
        <div>
            {
                item && <ProductItemDescriptionApp product={item} categories={ categories } />
            }
        </div>
    )
}
