import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { getProducts } from '../helpers/GetProducts';
import ProductApp from './product/productApp/ProductApp';

const BaseApp = ({location}) => {

    const searchLimit = 4;
    const { search = '' } = queryString.parse( location.search );

    const [ products, setProducts ] = useState({
        items: [],
        categories: '',
        search: '',
        author: {}
    });

    const { items, categories } = products;

    useEffect(()=> {
        getProducts(search, searchLimit)
        .then( ({ items, categories, author }) => {
            setProducts( value => { 
                return {
                    ...value,
                    items,
                    categories,
                    author
                }
            });
        });
    }, [search])

    return (
        <>
            { items.length > 0 && <ProductApp products={ items } categories={ categories } /> }
        </>
    )
}

export default BaseApp;