import React from 'react';
// import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

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
          // {
          //     price: 99,
          //     title: 'Watch',
          //     qty: 1,
          //     image: 'https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          //     id:1
          // },
          // {
          //     price: 999,
          //     title: 'Mobile Phone',
          //     qty: 10,
          //     image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
          //     id:2
          // },
          // {
          //     price: 999,
          //     title: 'Laptop',
          //     qty: 4,
          //     image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          //     id:3
          // }
      ],
      loading: true
  }
  // instead of calling mutilple times in the func
  this.db = firebase.firestore();
}

componentDidMount() {
  // method chaining
  //  firebase
  //  .firestore()
  //  .collection('products')
  //  //this returns a promise  
  //  .get()
  //  //snapshot gives snapshot of that database at that particular time  
  //  .then((snapshot) => {
  //    console.log(snapshot);
  //    //doc property which is an arr in snapshot is of product collection  
  //    snapshot.docs.map((doc) => {
  //      //data func which retrievs all the fields in the doc as an obj
  //      console.log(doc.data())
  //    });
  //    //when we fetch the prods we will setS, brow will re-render and display all the prods
  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       data['id'] = doc.id
  //       return data;
  //     }) 
  //      this.setState({
  //        products,
  //        loading: false
  //      }) 
  //  })

  // firebase
  //  .firestore()
  this.db
   .collection('products')
    // which fb provides, it is called whenever something changes in products coll in fb
   .onSnapshot((snapshot) => {
     
     console.log(snapshot);
     
     snapshot.docs.map((doc) => {
        console.log(doc.data())
     });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id
        return data;
      }) 
       this.setState({
         products,
         loading: false
       }) 
   })
}

// product - which product qty we want to inc
handleIncreaseQuantity = (product) => {
  console.log('hey inc the qty of product', product);
  const {products} = this.state;
  // indexing to find that particular prod which we want to inc
  const index = products.indexOf(product);

  // products[index].qty += 1;
  // // obj
  // this.setState({
  //     // products in state to products in this func
  //     // products: products
  //     //  we can use shorthand property
  //     products
  // })

  // getting the ref of the particular prod
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty: products[index].qty+1
  })
  .then(() => {
    console.log('updated successfully')
  })
  .catch((error) => {
    console.log('Error: ', error)
  })
}

handleDecreaseQuantity = (product) => {
  console.log('hey dec the qty of product', product);
  const {products} = this.state;
  const index = products.indexOf(product);
  if( products[index].qty === 0) {
     return;
  }
  // products[index].qty -= 1;
  // this.setState({
       
  //     products
  // })
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty: products[index].qty-1
  })
  .then(() => {
    console.log('decremented successfully')
  })
  .catch((error) => {
    console.log('Error: ', error)
  })
}

handleDeleteProduct = (id) => {
 
  const {products} = this.state;
  // this will return an array containing products whose id is not equal to the id that is passed [{}]
  // const items = products.filter((item) => item.id !== id);

  // this.setState({
  //     products: items
  
  // })
  const docRef = this.db.collection('products').doc(id);
  docRef
  .delete()
  .then(() => {
    console.log('deleted successfully')
  })
  .catch((error) => {
    console.log('Error: ', error)
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
  products.map(product => {
    if(product.qty>0) {
    cartTotal += product.qty * product.price

  }
  return '';
  });

  return cartTotal;
}

addProduct = () => {
this.db
 .collection('products')
 .add({
   image: '',
   price:900,
   qty:3,
   title: 'Washing Machine'
 })
  // this will be converted into doc and added to our coll prods
 .then((docRef) => {
  console.log('Product has been added', docRef);
 })
 .catch((err) => {
  console.log('Error:', err);
 })
}

  render () {
    // getting products from state
    const {products, loading} = this.state;
  return (
    <div className="App">
      {/* passing a prop count */}
      <Navbar count = {this.getCartCount()}/>
      {/* <button onClick = {this.addProduct} style={{padding:20, fontSize:20}}> Add a Product</button> */}
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct    = {this.handleDeleteProduct}
      />
      {/* using conditional rendering */}
      {loading && <h1>Loading products...</h1>}
      <div style = {{padding: 10, fontSize: 20}}> TOTAL: {this.getCartTotal()} </div>
    </div>
  );
}
}
export default App;
