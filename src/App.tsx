import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import useFetchProducts from './hooks/UseFetchProducts';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SingleProduct = lazy(
  () => import('./pages/singleProduct/SingleProducts'),
);
const NotFound404 = lazy(() => import('./pages/404Notfound/NotFound404'));

function App() {
  useFetchProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <img
          src="https://i.ibb.co/WvdvGJtd/1474.gif"
          alt="Loading..."
          className="w-20 h-20"
        />
        <h3 className="font-bold text-4xl">Furniro.</h3>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-white">
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/1474.gif"
              alt="Loading..."
              className="w-20 h-20"
            />
            <h3 className="font-bold text-4xl">Furniro.</h3>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <>
                <SignedIn>
                  <CheckoutPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
