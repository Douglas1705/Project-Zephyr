import { useState, useCallback } from 'react';
import { addToCart } from '../../utils/localStorageUtils';
import ConfirmationMessage from './ConfirmationMessage';
import { FaShareAlt } from 'react-icons/fa';

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

  const handleAddToCart = useCallback(() => {
    addToCart(product, 1);
    setShowConfirmation(true);
  }, [product]);

  const handleClose = useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const handleViewProduct = useCallback(() => {
    window.location.href = `/single-product/${product.id}`;
  }, [product.id]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-gray-900 bg-opacity-55 p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-center">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white text-4xl hover:text-red-400"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-8  items-center">
          <button
            onClick={handleAddToCart}
            className="bg-white text-Goldenrod  hover:bg-Goldenrod hover:text-white py-3 w-10/12 font-semibold"
          >
            Add to cart
          </button>
          <button
            onClick={handleViewProduct}
            className="bg-white text-Goldenrod w-10/12 py-3 hover:bg-Goldenrod hover:text-white font-semibold"
          >
            Visualizar
          </button>
          <div className="flex gap-4">
            <div className="flex items-center gap-1 hover:border-b-2 hover:border-white">
              <img
                src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/gridicons_share.svg"
                alt=""
                width={16}
              />
              <p className="text-white cursor-pointer ">Share</p>
            </div>
            <div className="flex gap-1 hover:border-b-2 hover:border-white">
              <img
                src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/Vector-compare.svg"
                alt=""
                width={16}
              />
              <p className="text-white">Compare</p>
            </div>
            <div className="flex gap-1 hover:border-b-2 hover:border-white">
              <img
                src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/Heart.svg"
                alt=""
                width={16}
              />
              <p className="text-white">Like</p>
            </div>
          </div>
        </div>
        {showConfirmation && (
          <ConfirmationMessage
            message="Produto adicionado ao carrinho!"
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

export default ModalCard;
