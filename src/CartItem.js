


import React from 'react';

// cartitem(class component) inheriting from a class called component inside the react package
class CartItem extends React.Component {
    // for defining a state
    // constructor() {
    //     // whenevr we r using const'or in our classes we need to call super, to basically call const'or of parent cls, if we are inheriting
    //     // whenever we are inheriting from another class, we are inheriting from component class in react, we need to first call the const'or
    //     //  of that parent, if we use constructor
    //     super();
    //     // default state, it is an obj
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         image: ''
    //     }
    //     // binding in constructor 
    //     // this.increaseQuantity= this.increaseQuantity.bind(this);
    //     // this.testing();
    // }

    // testing() {
    //     // using promise to simulate an api call
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })
    //     // passing a callback
    //     promise.then(() => {
    //         // setS acts like sync call
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});
    //         console.log('state', this.state)
    //     });
    // }


    // arrow func for binding
    // increaseQuantity = () => {
        // this.state.qty+=1;
        // console.log('this', this.state);
        // this func is inherited from component class in react
        // there are two ways to call this func
        // to change/modify our state
        // calling setState triggers a re-render of our component
        // setState form 1, by giving it an obj
        // no matter how many times we call setState it will render only once coz of batching
        // this.setState({
        //      changes we want to make
        //     qty: this.state.qty+1
        // });
        // this.setState({
        //  changes we want to make
        // qty: this.state.qty+5
        // });

        // setState form 2 - if prevState required use this
            // this.setState((prevState) => {
            //     return {
            //         qty: prevState.qty+1
            //     }
            // });
            // this.setState((prevState) => {
            //     return {
            //         qty: prevState.qty+1
            //     }
            // });
    //         this.setState((prevState) => {
    //             return {
    //                 qty: prevState.qty+1
    //             }
    //         }, () => {
    //             // callback when state call is finished
    //             console.log('this.state', this.state);
    //         });
            
               
            
    // }

    // decreaseQuantity = () => {
    //     console.log('this', this.state);

    //     // destructuring
    //     const {qty} = this.state;
    //     if(qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty-1
    //         }
    //     },() => {
    //         console.log('this.state', this.state);
    //     });
    // }

    // for a class component to be react component we need to give it one method called render
    render () {
        
        // console.log('render');   ye print kar raha hai waha par line 108 console me jo props details print ho raha hai wo yaha se ho raha hai aurpahg me jo show hota hai wo return ke andar ka code hota hai
       console.log('this.props', this.props);  // now see on console only jsx aayega
        // obj destructuring - want these properties from this obj
        // const {price,title,qty} = this.state;
        // product is an obj with these properties
        const {price,title,qty} = this.props.product;
        const{product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        } = this.props;

        // this method shud return some jsx, that basically describes the ui for that component
        return (
            // jsx code
            <div className = "cart-item">
                {/* {this.props.jsx}  */}
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
                        // onClick= {this.increaseQuantity}
                        // calling the func when user clicks
                        // onClick= {() => this.props.onIncreaseQuantity(this.props.product)}
                        onClick= {() => onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992683.svg"
                        // onClick= {this.decreaseQuantity}
                        onClick= {() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                        onClick= {() => onDeleteProduct(product.id)}
                    />
                   
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