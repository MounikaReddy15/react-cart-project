


import React from 'react';
import CartItem from './CartItem';

// getting props from react, props have products and funcs
const Cart = (props) => {
        const{products} = props;
        return (
           
            // jsx code
            <div className = "cart">
                {/* this is jsx we can pass any js expression inside curly braces */}
                {/* map is an iterator, item is callback */}
                {/* { arr.map((item) => {
                    return item+5
                }) } */}
                {/* we are using the same components, we have hard coded the data  */}
                {/* passing props by specifying attributes  */}
                {/* <CartItem qty={1} price={99} title= {"watch"} img={''} /> */}
                {/* <CartItem/> */}
                {/* we can pass products as props instead of passing evry field */}
                {products.map((product) => {
                    return ( 
                       <CartItem 
                            product= {product} 
                            key={product.id}

                            // we are getting these funcs via props from app and we are passing it to CI with same name
                            onIncreaseQuantity = {props.onIncreaseQuantity}
                            onDecreaseQuantity = {props.onDecreaseQuantity}
                            onDeleteProduct    = {props.onDeleteProduct}

                            // we can basically pass anything
                            // func = {()=> console.log('hi')}
                            // isloggedin={true}
                            // jsx={<h1>Test</h1>} this o
                            // comp={<CartItem/>}
                        />
                    )
                })}
                
            </div>
        ); 
    }

    
export default Cart;