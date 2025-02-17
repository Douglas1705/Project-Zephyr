import { useState, useCallback } from 'react';
import ModalCard from './ModalCard';

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
}

function ProductCard({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <article className="relative mb-10">
      <figure
        className="relative bg-gray-100 border-4 w-72 "
        onClick={handleOpenModal}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-80 w-full"
        />
        {product.discount > 0 && (
          <span className="absolute top-5 right-5 bg-red-400 px-2 py-4 rounded-full text-white">
            -{product.discount}%
          </span>
        )}
        {product.new === 'New' && (
          <span className="absolute top-5 right-5 bg-teal-500 px-3 py-4 rounded-full text-white">
            New
          </span>
        )}
        <div className="p-3 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.description}</p>
          <div className="flex justify-between">
            {product.discountedPrice > 0 ? (
              <>
                <p className="text-xl font-semibold">
                  RP {product.discountedPrice.toLocaleString()}
                </p>
                <p className="text-gray-400 line-through">
                  RP {product.originalPrice.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="text-xl font-semibold">
                RP {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </figure>
      <ModalCard
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </article>
  );
}

export default ProductCard;
