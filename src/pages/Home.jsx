import React from 'react'
import Header from '@components/Header'
import ProductContainer from '@containers/ProductContainer';

const Home = () => {
    return (
        <div>
            <Header/>
            <ProductContainer/>
        </div>
    );
}

export default Home;