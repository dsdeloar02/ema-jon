import React from 'react';
// import fakeData from '../../fakeData';
import { useEffect , useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,10)));
    }, []);
    return(
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd}> </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>THis is cart</h3>
            </div>
        </div>
    );
};

export default Shop;