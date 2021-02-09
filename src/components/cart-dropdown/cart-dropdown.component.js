import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'> 
    {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
    }
    </div>
    <CustomButton>Checkout</CustomButton>
    </div>
)
const mapStateToProps = (state)=> ({
    cartItems: selectCartItems(state)
})
export default connect(null, mapStateToProps)(CartDropdown) ;