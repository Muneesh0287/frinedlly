import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Man from './components/header/Man';
import Women from './components/header/Women';
import Kids from './components/header/homepage/Kids';
import Products from './components/header/homepage/Products';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Cartpage from './components/Cartpage';
import Productdetail from './components/productdetail';
// import Navbar from './components/header/Navbar';
import Mainpage from './components/header/homepage/Mainpage';
import Footer from './footer/Footer';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
    <ToastContainer theme='colored'></ToastContainer>
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/home" element={<Home/>}/>
       
          <Route path="/products" element={<Products/ >}/>
          <Route path="/products/:id" element={<Productdetail />} />
          <Route path="/mens" element={<Man/>}/>
          <Route path="/womens" element={<Women/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="/main" element={<Mainpage/>}/>

          <Route path="/register" element={<Registerpage/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
        </Routes>
        <Footer />
      </Router>

 
    </div>
  );
}

export default App;
