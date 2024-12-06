import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homePage/HomePage';
import NotFound404 from './pages/404Notfound/NotFound404';
import ShopPage from './pages/shop/ShopPage';
import SingleProduct from './pages/singleProduct/SingleProducts';
import useFetchProducts from './hooks/UseFetchProducts';

function App() {
  useFetchProducts();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <SignedIn>
              <CheckoutPage />
            </SignedIn>
          }
        />
        <Route
          path="/sign-in"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
