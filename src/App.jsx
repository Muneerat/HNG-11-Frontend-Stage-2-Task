import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import SingleProduct from "./Pages/SingleProduct";
import { AppContext } from "./Contexts/AppContent";
import { useState } from "react";
import Modal from "./Components/Modal";
import { useEffect } from "react";
import Checkout from "./Pages/checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [modal,setModal] = useState(false);
  const [totalItems, setTotalItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0); 

  //Add to cart
  const addToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      // If the product is already in the cart, increase its quantity
      const newCart = cart.map((item) => 
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
      console.log(newCart);
    } else {
      // If the product is not in the cart, add it with an amount of 1
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
    setModal(true)
  };

    // Increment the quantity
    const increaseItem = (id) => {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
   
      setCart(newCart);
    };
  
    //Decrement the quantity
    const decreaseItem = (id) => {
     const cartItem = cart.find((item) => {
       return item.id === id;
     })
     if(cartItem){
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
     
  
    }
      if (cartItem.amount < 2) {
         removeItem(id);
      }
    };
  
    //Remove the item from cart
    const removeItem = (id) => {
      let updatedCart = cart.filter((prod) => prod.id !== id );
      setCart(updatedCart)
    }

  const closeModal = () => {
    setModal(false);
  }
  useEffect(() => {
    if(cart){
      const totalPrice = cart.reduce((accumulator, currentItem) =>{
        return accumulator + (currentItem.amount * currentItem.price)
      },0)
      setTotalPrice(totalPrice);
    }
   })

  return (
    <AppContext.Provider value={{ cart, setCart, addToCart,increaseItem,decreaseItem,removeItem,totalPrice }}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<ProductPage />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <Modal isOpen={modal} onRequestClose={closeModal} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
