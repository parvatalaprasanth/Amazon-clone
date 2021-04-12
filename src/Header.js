import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import { useHistory } from 'react-router-dom';


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history=useHistory();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  const handleOrders=()=>{
    if(user){
      history.push('/orders')
    }
    else{
      alert("Please login");
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="by Parvatala Prasanth" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
          
      <Link to="/login">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello {user?user.email.match(/^([^@]*)@/)[1] :"Guest"}</span>
            <span className="header__optionLineTwo">{user?'Sign Out' :"sign in"}</span>
          </div>
          </Link>

      <Link to={"/orders" }>  
          <div className="header__option" onClick={handleOrders}>
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        <Link to={"/prime" }> 
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
       

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;