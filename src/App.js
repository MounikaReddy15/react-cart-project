import React from 'react';
// import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

// function App() {
// making it a class compo
class App extends React.Component {
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
              image: 'https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              id:1
          },
          {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
              id:2
          },
          {
              price: 999,
              title: 'Laptop',
              qty: 4,
              image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
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

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
  count += product.qty;
})

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal += product.qty * product.price
  })

  return cartTotal;
}
  render () {
    // getting products from state
    const {products} = this.state;
  return (
    <div className="App">
      {/* passing a prop count */}
      <Navbar count = {this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct    = {this.handleDeleteProduct}
      />
      <div style = {{padding: 10, fontSize: 20}}> TOTAL: {this.getCartTotal()} </div>
    </div>
  );
}
}
export default App;
