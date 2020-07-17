


import React from 'react';
import CartItem from './CartItem';

// Cart(class component) inheriting from a class called component inside the react package
// cart component, wrapper around cart products
class Cart extends React.Component {
    // for defining a state
    constructor() {
        // whenevr we r using const'or in our classes we need to call super, to basically call const'or of parent cls, if we are inheriting
        // whenever we are inheriting from another class, we are inheriting from component class in react, we need to first call the const'or
        //  of that parent, if we use constructor
        super();
        // default state, it is an obj
        this.state = {
            // here cart will have a list of products
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    image: '',
                    id:1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    image: '',
                    id:2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    image: '',
                    id:3
                }
            ]
        }
    }

    // product - which product qty we want to inc
    handleIncreaseQuantity = (product) => {
        console.log('hey inc the qty of product', product);
        const {products} = this.state;
        // indexing to find that particular prod which we want to inc
        const index = products.indexOf(product);

        products[index].qty += 1;
        // obj
        this.setState({
            // products in state to products in this func
            // products: products
            //  we can use shorthand property
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('hey dec the qty of product', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if( products[index].qty === 0) {
           return;
        }
        products[index].qty -= 1;
        this.setState({
             
            products
        })
    }

    handleDeleteProduct = (id) => {
       
        const {products} = this.state;
        // this will return an array containing products whose id is not equal to the id that is passed [{}]
        const items = products.filter((item) => item.id !== id);
    
        this.setState({
            products: items
        
        })
    }
    // for a class component to be react component we need to give it one method called render
    render () {
       
        // const arr = [1, 2, 3, 4, 5];
        const{products} = this.state;
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
                    return <CartItem 
                            product= {product} 
                            key={product.id}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteProduct    = {this.handleDeleteProduct}

                            // we can basically pass anything
                            // func = {()=> console.log('hi')}
                            // isloggedin={true}
                            // jsx={<h1>Test</h1>} this o
                            // comp={<CartItem/>}
                            />
                })}
                
            </div>
        ); 
    }

    
}
export default Cart;