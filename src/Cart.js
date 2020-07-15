


import React from 'react';
import CartItem from './CartItem';

// Cart(class component) inheriting from a class called component inside the react package
// cart component, wrapper around cart products
class Cart extends React.Component {
    // for a class component to be react component we need to give it one method called render
    render () {
        return (
            // jsx code
            <div className = "cart">
                {/* we are using the same components, we have hard coded the data  */}
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        ); 
    }

    
}
export default Cart;