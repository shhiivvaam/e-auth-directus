import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';

const OrderedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const orderedProducts = await productService.getOrderedProducts();
                setProducts(orderedProducts);
            } catch (error) {
                console.error('Failed to fetch ordered products', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Ordered Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderedProducts;
