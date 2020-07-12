


import React from 'react';

// cartitem(class component) inheriting from a class called component inside the react package
class CartItem extends React.Component {
    // for a class component to be react component we need to give it one method called render
    render () {
        // this method shud return some jsx, that basically describes the ui for that component
        return (
            // jsx code
            <div className = "cart-item">
                <div className="left-block">
                <img style = {styles.image}/>
                </div>
                <div className="right-block">
                <div style = {{ fontSize:25}}> Phone </div>
                <div style = {{ color: '#777'}}> Rs 999 </div>
                <div style = {{ color: '#777' }}> Qty: 1 </div>
                <div className= "cart-item-actions">
                    {/* in curly braces we can write any js expression */}
                    {/* Buttons */}
                </div>
                </div>

            </div>
        );
    }

}

// style obj
// we can give diff properties to obj
const styles= {
    image: {
        height: 110,
        width:110,
        borderRadius:4,
        background: '#ccc'

    }
}



export default CartItem;