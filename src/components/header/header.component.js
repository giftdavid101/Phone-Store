import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import{selectCurrentUser} from '../../redux/user/user.selectors'


const Header = ({currentUser,hidden}) => (
    <div className="header"> 
     <Link to="/">
     <span>Boutique</span>
     </Link>
    <div className='options'>
    <Link to='/shop' className='option'> Shop </Link>
    <Link to='/shop' className='option'> Contact</Link>
    {
        currentUser ?
        (<div className="option" onClick={() => auth.signOut()}>sign out</div>)
        :
        (<Link className="option" to="/signin">Sign in</Link>)
    }
     <CartIcon/>
    </div>
   { hidden ? null :
       <CartDropdown/>

   }
    </div>
)

const mapStateToProps = createStructuredSelector({
 currentUser:selectCurrentUser,
 hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);