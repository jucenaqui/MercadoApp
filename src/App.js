import React from 'react';
import {Helmet} from "react-helmet";
import { AppRouter } from './router/AppRouter';

const App = () => {

    return (
      <>
       <Helmet>
            <meta charSet="UTF-8" />
            <title>MercadoApp</title>

            <link rel="icon" href=".%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Busca tus productos favoritos"
            />
            <link rel="manifest" href=".%PUBLIC_URL%/manifest.json" />
        </Helmet>
        <AppRouter />
      </>
  )
}

export default App;
