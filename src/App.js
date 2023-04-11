import { Navbar, Footer } from './components';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import CartModal from './components/CartModal'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/shop' element={<Shop />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/cart' element={<CartModal />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>

  );
}

export default App;
