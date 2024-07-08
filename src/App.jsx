
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
import SingleProduct from "./Pages/SingleProduct"

function App() {


  return (
   <Router>
   <Navbar/>
    <Routes>
      <Route index  element={<ProductPage />} />
      <Route path="/products/:productId"  element={<SingleProduct />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
