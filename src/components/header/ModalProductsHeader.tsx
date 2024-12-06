import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RxLockClosed, RxLockOpen2 } from 'react-icons/rx';
import { TbXboxXFilled } from 'react-icons/tb';
import { MdOutlineClose } from 'react-icons/md';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorageUtils';

interface ModalProductsHeaderProps {
  onClose: () => void;
}

function ModalProductsHeader({ onClose }: ModalProductsHeaderProps) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const items = loadFromLocalStorage('cartItems') || [];
    setCartItems(items);
    calculateSubtotal(items);
  }, []);

  const calculateSubtotal = useCallback((items: any[]) => {
    const total = items.reduce(
      (acc, item) =>
        acc + item.quantity * (item.discountedPrice || item.originalPrice),
      0,
    );
    setSubtotal(total);
  }, []);

  const handleRemoveItem = useCallback(
    (id: number) => {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
      saveToLocalStorage('cartItems', updatedItems);
      calculateSubtotal(updatedItems);
    },
    [cartItems, calculateSubtotal],
  );

  return (
    <div className="px-6 r-52 bg-white z-40 ">
      <div className="flex items-center border-b-2 border-gray-200 justify-between py-6">
        <h3 className="text-2xl font-semibold bg-white">Shopping Cart</h3>
        <div className="flex gap-2">
          {cartItems.length === 0 ? (
            <RxLockClosed className="" />
          ) : (
            <RxLockOpen2 className="text-base text-gray-400" />
          )}
          <MdOutlineClose
            onClick={onClose}
            className="cursor-pointer text-red-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-10 ">
        <div className="max-h-60 overflow-y-auto overflow-x-hidden no-scrollbar">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center  mb-5 flex-col gap-5 md:flex-row"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-32 md:w-24 md:h-24 md:mr-10"
              />
              <div className="flex flex-row items-center gap-16">
                <div className="flex border-y-2 pb-2">
                  <h4 className="text-base ">{item.name}</h4>

                  <p className="  ">
                    <span className="pr-2">{item.quantity}</span> x{' '}
                    <span className="text-Goldenrod text-Goldenrod pl-2">
                      {item.discountedPrice || item.originalPrice}
                    </span>
                  </p>
                </div>
                <TbXboxXFilled
                  onClick={() => handleRemoveItem(item.id)}
                  className="cursor-pointer text-md text-gray-400 "
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-20 border-b-2 border-gray-400 md:mt-44 pb-8">
          <p>Subtotal</p>
          <p className="text-base font-semibold text-Goldenrod">
            Rs. {subtotal}
          </p>
        </div>

        <div className="flex justify-between h-auto pb-2 md:py-5 gap-3 flex-col md:flex-row">
          <Link
            to="/cart"
            onClick={onClose}
            className="border-2 border-black h-9 px-8 rounded-3xl text-xs flex items-center justify-center"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            onClick={onClose}
            className="border-2 border-black h-9 px-8 rounded-3xl text-xs flex items-center justify-center"
          >
            Checkout
          </Link>
          <button
            disabled
            className="border-2 border-black h-9 px-8 rounded-3xl text-xs flex items-center justify-center"
          >
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProductsHeader;
