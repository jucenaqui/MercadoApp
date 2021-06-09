import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { getProducts } from '../hooks/GetProducts';
import ProductApp from './product/ProductApp';

const BaseApp = ({location}) => {

    const { search = '' } = queryString.parse( location.search );

    const [ products, setProducts ] = useState({
        items: [],
        search
    });

    const { items } = products;

    useEffect(()=> {
        getProducts(search)
        .then( (items) => {
            setProducts( value => { 
                return {
                    ...value,
                    items
                }
            });
        });
    }, [search])

    return (
        <>
            { items.length > 0 && <ProductApp products={ items } /> }
        </>
    )
}

export default BaseApp;