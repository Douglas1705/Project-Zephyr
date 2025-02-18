import { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addItemToCart } from '../../redux/cartSlice';
import ConfirmationMessage from './ConfirmationMessage';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdCompareArrows } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';

interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    imageUrl: string;
    new?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

function ModalCard({ product, isOpen, onClose }: Props) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = useCallback(() => {
    const existingItemById = cartItems.find((item) => item.id === product.id);
    const existingItemByName = cartItems.find(
      (item) => item.name === product.name,
    );

    if (existingItemById || existingItemByName) {
      setConfirmationMessage('Product already added to cart!');
      setShowConfirmation(true);
    } else {
      const cartItem = {
        ...product,
        quantity: 1,
      };

      dispatch(addItemToCart(cartItem));
      setConfirmationMessage('Product added to cart!');
      setShowConfirmation(true);

      fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      }).catch(() => {});
    }
  }, [product, cartItems, dispatch]);

  const handleClose = useCallback(() => {
    setShowConfirmation(false);
    onClose();
  }, [onClose]);

  const handleViewProduct = useCallback(() => {
    window.location.href = `/single-product/${product.id}`;
  }, [product.id]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative bg-gray-900 bg-opacity-55 p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-center"
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white text-4xl hover:text-red-400"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-8 items-center z-0">
          <button
            onClick={handleAddToCart}
            className="bg-white text-Goldenrod hover:bg-Goldenrod hover:text-white py-3 w-10/12 font-semibold"
          >
            Add to cart
          </button>
          <button
            onClick={handleViewProduct}
            className="bg-white text-Goldenrod w-10/12 py-3 hover:bg-Goldenrod hover:text-white font-semibold"
          >
            View Product
          </button>
          <div className="flex item gap-4">
            <div className="flex items-center gap-1 hover:border-b-2 hover:border-white">
              <IoShareSocialSharp className="text-white" />

              <p className="text-white cursor-pointer">Share</p>
            </div>
            <div className="flex items-center gap-1 hover:border-b-2 hover:border-white">
              <MdCompareArrows className="text-white text-2xl" />

              <p className="text-white">Compare</p>
            </div>
            <div className="flex items-center gap-1 hover:border-b-2 hover:border-white">
              <IoMdHeartEmpty className="text-white text-xl" />

              <p className="text-white">Like</p>
            </div>
          </div>
        </div>
        {showConfirmation && (
          <ConfirmationMessage
            message={confirmationMessage}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

export default ModalCard;
