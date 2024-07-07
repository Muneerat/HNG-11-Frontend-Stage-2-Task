
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import Navbar from "./Components/Navbar"

function App() {


  return (
   <Router>
   <Navbar/>
    <Routes>
      <Route index  element={<ProductPage />} />
    </Routes>
   </Router>
  )
}

export default App
