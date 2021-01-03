import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompressArrowsAlt, faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
        <section className="Header_section">
            <div className="container-fluid">
                <div className="custom_container">
                    <div className="row header">

                        <div className="logo col-lg-2">
                            <img src="image/martfurry.png" />
                        </div>
                        <div className="search_bar col-lg-6 col-sm-12">
                            <input type="text" placeholder="Search for product" />
                            <select>
                                <option>select category</option>
                                <option>item 2</option>
                                <option>item 3</option>
                                <option>item 4</option>
                                <option>item 5</option>
                                <option>item 6</option>
                            </select>
                            <button><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                        <div className="top_header_nav col-lg-4">
                            <li>LOG IN / REGISTER</li>
                            <li><FontAwesomeIcon icon={faHeart} /><span class="badge">0</span></li>
                            <li><FontAwesomeIcon icon={faCompressArrowsAlt} /><span class="badge">0</span></li>
                            <li><FontAwesomeIcon icon={faShoppingCart} /><span class="badge">0</span>&nbsp;32423</li>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Header;