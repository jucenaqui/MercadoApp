import React from 'react';

import SearchApp from '../search/SearchApp';

import './HeaderBarApp.scss';
// import logo from '../../assets/logo-header.png';

export const HeaderBarApp = ({history}) => {
    const logo = "https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/logo-header.png?alt=media&token=05b1170a-abb5-4159-ad6b-ae3f130392c5";
    return (
        <div className="header-bar">
            <div className="container-search">
                <img src={ logo } alt="logo" />
                <SearchApp history={ history } />
            </div>
        </div>
    )
}
