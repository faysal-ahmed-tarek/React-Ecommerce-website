import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './ProductStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faEye, faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const ProductStyle = (props) => {
    const { category,name,price,img } = props.product_content;
    console.log("sdfs" , props.buttonChange);
    //add to cart button change to view cart
    const [Button,set_Button] = useState(true);
    function buttonChange(){
        set_Button(false)
    }
    console.log(Button);
    return (
        <>
          <div className="Product_container">
             <div className="product_category">
                <p>{category}</p>
             </div>
             <div className="product_title">
                <Link to={`/product/${slugify(name) }`}><h5>{name.substring(0,45)}</h5></Link>
             </div>
             <div className="product_img">
             <Link to={`/product/${slugify(name) }`}><img src={img} /></Link>
             </div>
             <div className="row Price_Cart">
                <span className="col-4">${price}</span>
                <button className="col-7 add_to_cart" onClick={buttonChange}>{Button ? <><FontAwesomeIcon icon={faShoppingCart}/>&nbsp; add to cart </>: <><Link to="/cart"
                ><FontAwesomeIcon icon={faEye} />&nbsp; view cart</Link> </>}</button>
             </div>
             <div className="Compare_Wishlist row">
                <span className="col-6"> <FontAwesomeIcon icon={faHeart} />&nbsp; wishlist</span>
                <span className="col-6"> <FontAwesomeIcon icon={faCompressArrowsAlt} />&nbsp; compare</span>
             </div>
          </div>
        </>
    );
};

export default ProductStyle;

// {props.buttonChange ? <FontAwesomeIcon icon={faShoppingCart} />&nbsp; Add To Cart : <FontAwesomeIcon icon={faShoppingCart} />&nbsp; view cart }