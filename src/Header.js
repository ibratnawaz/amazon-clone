import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='header'>

            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header_search">
                <input className="header_search_input" type="text" />
                <SearchIcon className="header_search_icon"/>
            </div>

            <div className="header_nav">
                <div className="header_nav_item">
                    <span className="header_nav_item_1">Hello</span>
                    <span className="header_nav_item_2">Sign In</span>
                </div>

                <div className="header_nav_item">
                    <span className="header_nav_item_1">Returns</span>
                    <span className="header_nav_item_2">& Orders</span>
                </div>

                <div className="header_nav_item">
                    <span className="header_nav_item_1">Try</span>
                    <span className="header_nav_item_2">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_basket">
                        <ShoppingBasketIcon />
                        <span className="header_nav_item_2 header_basket_count">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            
        </div>

    )
}

export default Header
