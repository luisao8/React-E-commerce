import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import LoginPage from './pages/LoginPage';
import CartProvider from './CartContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Store /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
