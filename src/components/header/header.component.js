import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className="header"> 
    <Link to="/">
    <span> Love</span>
    </Link>
    <div className='options'>
    <Link to='/shop' className='option'> Shop </Link>
    <Link to='/shop' className='option'> Contact</Link>
    </div>
    </div>
)
export default Header;