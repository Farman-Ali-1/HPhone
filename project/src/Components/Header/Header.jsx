import React from 'react';
import { useEffect,useState,useContext } from 'react';
import "./Header.scss";
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg'; // Corrected import
import { AiOutlineHeart } from 'react-icons/ai';
import cart from '../Cart/Cart';
import {Context} from '../../Utils/Context';

function Header() {
  const[scrool,setScrool]=useState(false);
  const handleScrool = ()=>{
    const offset=window.screenY;
    if(offset>200)
    {
      setScrool(false)
    }
    else{
      setScrool(true)
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScrool);
  },[]);

  return (
    <header className={`main-header ${scrool ? "sticky-header" : " "}`}>
      <div className='header-context'>
        <ul className='left'>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className='center'>JSDEVSTOR</div>
        <div className='right'>
          <TbSearch />
          <AiOutlineHeart />
          <span className='cart-icon'>
            <CgShoppingCart />
            <span >5</span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
