import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SingleProducts from './pages/singleProduct/SingleProducts';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ShopPage />
      <SingleProducts />
      <Cart />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
