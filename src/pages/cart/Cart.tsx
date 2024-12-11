import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { TbTrashFilled } from 'react-icons/tb';
import AppButton from '../../components/buttons/AppButton';
import CapePages from '../../components/capePages/PagesCape';
import CounterCards from '../../components/counter/CounterCards';
import SectionQuality from '../../components/SectionQuality/SectionQuality';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  quantity: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const calculateSubtotal = useCallback((items: Product[]) => {
    const total = items.reduce(
      (acc, item) =>
        acc + item.quantity * (item.discountedPrice || item.originalPrice),
      0,
    );
    setSubtotal(total);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then((response) => response.json())
      .then((items) => {
        setCartItems(items);
        calculateSubtotal(items);
      })
      .catch(() => {});
  }, [calculateSubtotal]);

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      setCartItems(updatedItems);

      fetch(`http://localhost:3001/cart/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...cartItems.find((item) => item.id === id),
          quantity,
        }),
      }).catch(() => {});

      calculateSubtotal(updatedItems);
    },
    [cartItems, calculateSubtotal],
  );

  const removeItem = useCallback(
    (id: number) => {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);

      fetch(`http://localhost:3001/cart/${id}`, {
        method: 'DELETE',
      }).catch(() => {});

      calculateSubtotal(updatedItems);
    },
    [cartItems, calculateSubtotal],
  );

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleCheckout = useCallback(() => {
    if (isSignedIn) {
      navigate('/checkout');
    } else {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  const handleCountChange = useCallback(
    (id: number) => (quantity: number) => {
      updateQuantity(id, quantity);
    },
    [updateQuantity],
  );

  const handleRemoveItem = useCallback(
    (id: number) => {
      removeItem(id);
    },
    [removeItem],
  );

  const handleRemoveItemClick = useCallback(
    (id: number) => (_event: React.MouseEvent<SVGElement, MouseEvent>) => {
      handleRemoveItem(id);
    },
    [handleRemoveItem],
  );

  return (
    <section>
      <CapePages title="Cart" />

      <article className="xl:flex xl py-10 xl:px-20 xl:gap-10 max-w-screen-2xl xl:mx-auto">
        <div>
          <div className="flex flex-row gap-6 items-center justify-center h-14 bg-warm-cream md:gap-16 lg:gap-18 xl:w-[817px] xl:gap-24">
            <p>Product</p>
            <p>Price</p>
            <p className="lg:pl-10 xl:pl-10">Quantity</p>
            <p>Subtotal</p>
          </div>

          <div>
            {cartItems.length === 0 ? (
              <p className="text-center text-2xl py-10">Cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col flex-wrap items-center py-5 px-2 gap-8 border-y-4 md:flex-row xl:border-y-0 lg:justify-start lg:w-[818px] lg:mx-auto"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="md:w-28 w-[111px] rounded-xl"
                  />

                  <p className="text-4xl text-gray-500 md:w-[100px] md:text-base lg:w-[100px] lg:flex-wrap ">
                    {item.name}
                  </p>

                  <div className="flex flex-wrap flex-col md:flex-row items-center justify-between space-y-5 md:gap-5 lg:w-[450px] md:space-y-0 ">
                    <p className="w-auto h-auto text-2xl text-gray-500 pb-10 md:text-base md:pb-0 md:w-[145px]">
                      RS.{' '}
                      {formatCurrency(
                        item.discountedPrice || item.originalPrice,
                      )}
                    </p>

                    <CounterCards
                      className="xl:py-1"
                      initialCount={item.quantity}
                      onCountChange={handleCountChange(item.id)}
                    />

                    <p className="text-2xl mx-auto md:text-base w-auto h-auto ">
                      {formatCurrency(
                        item.quantity *
                          (item.discountedPrice || item.originalPrice),
                      )}
                    </p>
                  </div>

                  <TbTrashFilled
                    onClick={handleRemoveItemClick(item.id)}
                    className="cursor-pointer text-4xl text-yellow-700 md:w-full xl:w-auto hover:text-red-600"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-10 xl:mt-0 bg-warm-cream mx-auto w-[393px] h-[390px] px-20 font-medium xl:mx-0">
          <h3 className="font-semibold text-3xl text-center mb-20 pt-4">
            Cart Totals
          </h3>
          <div className="flex justify-between mb-7">
            <p>Subtotal</p>
            <p className="text-gray-400">{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex justify-between mb-10">
            <p>Total</p>
            <p className="text-xl text-Goldenrod">{formatCurrency(subtotal)}</p>
          </div>
          <AppButton
            onClick={handleCheckout}
            className="border-2 border-black rounded-xl py-4 w-full md:w-[222px] hover-white-custom"
          >
            Check Out
          </AppButton>
        </div>
      </article>

      <SectionQuality />
    </section>
  );
}

export default Cart;
