import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import CartProvider from './CartContext';
import Gifts from './pages/Gifts';
import Learn from './pages/Learn';
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/shop' element={<Shop />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/gifts' element={<Gifts />} />
              <Route exact path='/learn' element={<Learn />} />
              <Route exact path='/success' element={<Success />} />
              <Route exact path='/cancel' element={<Cancel />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
