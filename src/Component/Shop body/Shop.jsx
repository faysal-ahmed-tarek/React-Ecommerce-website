import React, { useState } from 'react';
import './Shop.css';
import '../Header Section/Header.css';
import fakeData from '../../fakeData';
import ProductStyle from './ProductStyle';

const First_section = () => {

    //all products
    const [Products,setProducts] = useState(fakeData.slice(0,8));
    return (
        <>
        <section className="Shop_section">
            <div className="container-fluid">
                <div className="custom_container">
                    <div className="row shop_body">
                        {
                            Products.map( (Product) => <div className="col-lg-3"><ProductStyle product_content={Product} /></div> )
                        }
                    </div>
                </div>
            </div>
        </section>    
        </>
    );
};
export default First_section;

