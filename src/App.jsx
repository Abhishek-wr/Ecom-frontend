import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import React from "react";
import Cart from "./components/cart/Cart";
import LogIn from "./components/auth/LogIn";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/auth/Register";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar/>  
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/products' element={<Products/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>
        <Route path = '/contact' element = {<Contact/>}></Route>
        <Route path = '/cart' element = {<Cart/>}></Route>
        
        <Route path = '/' element={<PrivateRoute publicPage />}>
          <Route path = '/login' element ={<LogIn/>}/>
          <Route path = '/register' element={<Register/>}/>
          
        </Route>
        <Route path = '/' element={<PrivateRoute/>}>
          <Route path = '/checkout' element = { <Checkout/> }></Route>
        </Route>
      </Routes>
    </Router>
    <Toaster position="bootom-center:"/>
    </React.Fragment>
  );
}
export default App;
