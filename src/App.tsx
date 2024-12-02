import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homePage/HomePage';
import NotFound404 from './pages/404Notfound/NotFound404';
import ShopPage from './pages/shop/ShopPage';
import SingleProducts from './pages/singleProduct/SingleProducts';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/single-product" element={<SingleProducts />} />
        <Route path="*" element={<NotFound404 />} /> {/* Rota 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
