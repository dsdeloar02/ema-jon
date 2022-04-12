import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopingCart } from '@fortawesome/pro-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { image, title, price } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{title}</h4>
                <br />
                <p>by : Seller </p>
                <p>${price}</p>
                <p>Only stock left in stock - Order soon </p>
                <div className="main-button">
                <FontAwesomeIcon icon={faShopingCart} />
                    add to cart
                </div>
            </div>

        </div>
    );
}

export default Product;
