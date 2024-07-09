import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import SingleProduct from "./Pages/SingleProduct";
import { AppContext } from "./Contexts/AppContent";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [modal,setModal] = useState(false);

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

  const closeModal = () => {
    setModal(false);
  }

  return (
    <AppContext.Provider value={{ cart, setCart, addToCart }}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<ProductPage />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
