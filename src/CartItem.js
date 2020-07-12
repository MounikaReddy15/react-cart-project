


import React from 'react';

// cartitem(class component) inheriting from a class called component inside the react package
class CartItem extends React.Component {
    // for defining a state
    constructor() {
        // whenevr we r using const'or in our classes we need to call super, to basically call const'or of parent cls,
        // if we are inheriting
        super();
        // default state, an obj
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            image: ''
        }
    }
    // for a class component to be react component we need to give it one method called render
    render () {
        // obj destructuring - want these properties from this obj
        const {price,title,qty} = this.state;

        // this method shud return some jsx, that basically describes the ui for that component
        return (
            // jsx code
            <div className = "cart-item">
                <div className="left-block">
                <img style = {styles.image}/>
                </div>
                <div className="right-block">
                {/* <div style = {{ fontSize:25}}> Phone </div>
                <div style = {{ fontSize:25}}> {this.state.title} </div> */}
                <div style = {{ fontSize:25}}> {title} </div>
                <div style = {{ color: '#777'}}> {price} </div>
                <div style = {{ color: '#777' }}> {qty} </div>
                <div className= "cart-item-actions">
                    {/* in curly braces we can write any js expression */}
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"/>
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg"/>
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/3096/3096673.svg"/>
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