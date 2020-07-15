


import React from 'react';

// cartitem(class component) inheriting from a class called component inside the react package
class CartItem extends React.Component {
    // for defining a state
    constructor() {
        // whenevr we r using const'or in our classes we need to call super, to basically call const'or of parent cls, if we are inheriting
        // whenever we are inheriting from another class, we are inheriting from component class in react, we need to first call the const'or
        //  of that parent, if we use constructor
        super();
        // default state, it is an obj
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            image: ''
        }
        // binding in constructor 
        // this.increaseQuantity= this.increaseQuantity.bind(this);
    }

    // arrow func for binding
    increaseQuantity = () => {
        // this.state.qty+=1;
        console.log('this', this.state);
        // this func is inherited from component class in react
        // there are two ways to call this func
        // to change/modify our state
        // calling setState triggers a re-render of our component
        // setState form 1, by giving it an obj
        // this.setState({
        //     // changes we want to make
        //     qty: this.state.qty+1
        // });

        // setState form 2
            this.setState((prevState) => {
                return {
                    qty: prevState.qty+1
                }
            });
        
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
                <div style = {{ color: '#777'}}>Rs {price} </div>
                <div style = {{ color: '#777' }}>Qty: {qty} </div>
                <div className= "cart-item-actions">
                    {/* in curly braces we can write any js expression */}
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        // camel case coz its jsx
                        // bind coz 'this' is lost when func called via variable
                        // we can bind in constructor as well
                        // onClick= {this.increaseQuantity.bind(this)}
                        onClick= {this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992683.svg"/>
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/3096/3096673.svg"/>
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