import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProviders';
import { auth } from '../firebase';
function Header() {
    const [{basket, user}, dispatch]= useStateValue();

    const handleAuth = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbEGoAAOT2e9grED4G3hqjiM1afks8nvii7PZGDe0dJeKnmrONwswHeD_N1gbDGCHNi8&usqp=CAU" alt="Amazon"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" text="text"/>
                <SearchIcon className="searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/Login'}>
                <div onClick={handleAuth} className="header_option">
                    <span className="header_option1">Hello ,<strong>{user?.email}</strong></span>
                    <span className="header_option2">{user ? 'Sign out': 'Sign in'}</span>
                </div>
                </Link>
                
                <div className="header_option">
                <span className="header_option1">Returns</span>
                <span className="header_option2">& orders</span>
                </div>
                
                <div className="header_option">
                <span className="header_option1">Your</span>
                <span className="header_option2">prime</span>
                </div>
                <Link to="/checkout">
                <div className="basket">
                    <ShoppingBasketIcon />
                    <span className="header_option2 header_bskcount ">{basket?.length}</span>
                </div>
                </Link>
            </div>
            
        </div>
    );
}

export default Header
