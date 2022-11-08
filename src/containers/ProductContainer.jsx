import React from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import '@styles/ProductContainer.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductContainer = () => {

    const products = useGetProducts(API);

    return (
        <section className="main-container">
            <div className="cards-container">
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
            </div>
        </section>
    );
}

export default ProductContainer;