import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser}) => (
    <div className="header"> 
     <Link to="/">
     <span> PhoneStor</span>
     </Link>
    <div className='options'>
    <Link to='/shop' className='option'> Shop </Link>
    <Link to='/shop' className='option'> Contact</Link>
    {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>sign out</div>
        :
        <Link className="option" to="/signin">Sign in</Link>
    }
    </div>
    </div>
)

const mapStateToProps = state =>{
 currentUser: state.user.currentUser
}
export default connect(mapStateToProps)(Header);