import { useState, useCallback } from 'react';
import { addToCart } from '../../utils/localStorageUtils';
import ConfirmationMessage from './ConfirmationMessage';

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
      <div className="relative bg-black p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-center">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Adicionar ao carrinho
          </button>
          <button
            onClick={handleViewProduct}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Visualizar
          </button>
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
