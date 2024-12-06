import { useState, useCallback, useMemo } from 'react';
import { FaFacebook, FaLinkedin, FaStar, FaStarHalf } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import CounterCards from '../../components/counter/CounterCards';
import AppButton from '../../components/buttons/AppButton';
import { addToCart } from '../../utils/localStorageUtils';
import ConfirmationMessage from '../../components/cards/ConfirmationMessage';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  new: string;
}

interface ProductDescriptionProps {
  product: Product;
}

function ProductDescription({ product }: ProductDescriptionProps) {
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const ImagestaticCustom = 'hidden xl:block';

  const price = useMemo(() => {
    return product.discountedPrice > 0
      ? product.discountedPrice
      : product.originalPrice;
  }, [product.discountedPrice, product.originalPrice]);

  const handleAddToCart = useCallback(() => {
    addToCart(product, quantity);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  }, [product, quantity]);

  const handleCloseConfirmation = useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const handleCountChange = useCallback((count: number) => {
    setQuantity(count);
  }, []);

  return (
    <article className="px-5 py-10">
      <section id="subcontainer-single-first">
        <div id="container-single-images">
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`${ImagestaticCustom} `}
          />
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`${ImagestaticCustom} `}
          />
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`${ImagestaticCustom} `}
          />
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`${ImagestaticCustom} `}
          />

          <figure>
            <img src={product.imageUrl} alt={product.name} />
          </figure>
        </div>

        <div
          id="container-single-descriptions"
          className="flex flex-col gap-3 py-5"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-bold ">{product.name}</h1>
            <p className="text-base text-gray-500">Rs. {price}</p>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-1 items-center border-r-2 border-gray-400 pr-4 py-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalf className="text-yellow-500" />
            </div>
            <p className="text-gray-400">5 Customer Review</p>
          </div>

          <p className="text-sm text-justify">{product.description}</p>
        </div>

        <div className="text-gray-400 py-5 space-y-3">
          <h2>Size</h2>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              L
            </button>
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              XL
            </button>
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              Xs
            </button>
          </div>
        </div>

        <div className="space-y-3 pb-8">
          <h2 className="text-gray-400">Color</h2>
          <div className="space-x-4">
            <button className="p-4 rounded-full bg-blue-800"></button>
            <button className="p-4 rounded-full bg-black"></button>
            <button className="p-4 rounded-full bg-Goldenrod"></button>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center border-2 gap-6 pb-6">
        <CounterCards initialCount={1} onCountChange={handleCountChange} />
        <AppButton
          type="button"
          className="border-2 border-black rounded-xl px-4 w-full"
          onClick={handleAddToCart}
        >
          Add To Cart
        </AppButton>
        {showConfirmation && (
          <ConfirmationMessage
            message="Produto adicionado ao carrinho!"
            onClose={handleCloseConfirmation}
          />
        )}
      </div>

      <section id="subcontainer-single-2" className="flex gap-4 text-gray-500">
        <div className="space-y-3">
          <p>SKU</p>
          <p>Category</p>
          <p>Tags</p>
          <p>Share</p>
        </div>

        <div className="space-y-3">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>

        <div className="space-y-3">
          <div className="space-y-3">
            <p>SS001</p>
            <p>Sofas</p>
            <p>Sofa, Chair, Home, Shop</p>
          </div>

          <div className="flex gap-4">
            <FaFacebook className="text-2xl text-black" />
            <FaLinkedin className="text-2xl text-black" />
            <AiFillTwitterCircle className="text-2xl text-black" />
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProductDescription;
