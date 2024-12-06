import { useEffect, useState, useCallback } from 'react';
import { TbTrashFilled } from 'react-icons/tb';
import AppButton from '../../components/buttons/AppButton';
import CapePages from '../../components/capePages/CapePages';
import CounterCards from '../../components/counter/CounterCards';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorageUtils';
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

  useEffect(() => {
    const items = loadFromLocalStorage('cartItems') || [];
    setCartItems(items);
    calculateSubtotal(items);
  }, []);

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      setCartItems(updatedItems);
      saveToLocalStorage('cartItems', updatedItems);
      calculateSubtotal(updatedItems);
    },
    [cartItems],
  );

  const calculateSubtotal = useCallback((items: Product[]) => {
    const total = items.reduce(
      (acc, item) =>
        acc + item.quantity * (item.discountedPrice || item.originalPrice),
      0,
    );
    setSubtotal(total);
  }, []);

  const removeItem = useCallback(
    (id: number) => {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
      saveToLocalStorage('cartItems', updatedItems);
      calculateSubtotal(updatedItems);
    },
    [cartItems, calculateSubtotal],
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <section>
      <CapePages title="Cart" />

      <article
        className="xl:flex xl
      py-10 xl:px-20 xl:gap-10"
      >
        <div>
          <div className="flex flex-row gap-6 items-center justify-center h-14 bg-warm-cream md:gap-16 lg:gap-18 xl:w-[817px] xl:gap-24">
            <p>Product</p>
            <p>Price</p>
            <p className="lg:pl-10 xl:pl-10">Quantity</p>
            <p>Subtotal</p>
          </div>

          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col flex-wrap items-center py-5 px-2 gap-8 border-y-4 md:flex-row xl:border-y-0 lg:justify-start lg:w-[818px] lg:mx-auto"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="md:w-28 lg:border-4 w-[111px]"
                />

                <p className="text-4xl text-gray-500 md:w-[100px] md:text-base lg:w-[100px] lg:flex-wrap ">
                  {item.name}
                </p>

                <div className="flex flex-wrap items-center justify-between space-y-5 md:gap-5 lg:w-[450px] md:space-y-0 ">
                  <p className="w-auto h-auto text-2xl text-gray-500 pb-10 md:text-base md:pb-0 md:w-[145px]">
                    RS.{' '}
                    {formatCurrency(item.discountedPrice || item.originalPrice)}
                  </p>

                  <CounterCards
                    className="xl:py-1"
                    initialCount={item.quantity}
                    onCountChange={(quantity) =>
                      updateQuantity(item.id, quantity)
                    }
                  />

                  <p className="text-2xl mx-auto md:text-base w-auto h-auto ">
                    {formatCurrency(
                      item.quantity *
                        (item.discountedPrice || item.originalPrice),
                    )}
                  </p>
                </div>

                <TbTrashFilled
                  onClick={() => removeItem(item.id)}
                  className="cursor-pointer text-4xl text-yellow-700 md:w-full xl:w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-warm-cream w-[393px] h-[390px] px-20 font-medium">
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
          <AppButton className="border-2 border-black rounded-xl py-4 w-full md:w-[222px]">
            Check Out
          </AppButton>
        </div>
      </article>

      <SectionQuality />
    </section>
  );
}

export default Cart;
