import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import ProductApp from './product/ProductApp';
import { getProducts } from '../hooks/GetProducts';
import { HeaderBarApp } from './header/HeaderBarApp';

const BaseApp = ( { history, location } ) => {

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
    }, [search ])

    return (
        <>
            <HeaderBarApp setProducts={setProducts} history={ history } location={ location } />
            {
                items && <ProductApp products= { items } />
            }
        </>
    )
}

export default BaseApp;