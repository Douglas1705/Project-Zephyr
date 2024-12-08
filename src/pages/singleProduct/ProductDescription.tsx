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
  new: boolean;
}

interface ProductDescriptionProps {
  product: Product;
}

function ProductDescription({ product }: ProductDescriptionProps) {
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const price = useMemo(() => {
    return product.discountedPrice > 0
      ? product.discountedPrice
      : product.originalPrice;
  }, [product.discountedPrice, product.originalPrice]);

  const formatCurrency = (value: number) => {
    return value
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('$', 'Rs. ');
  };

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
    <article className="px-5 py-10 lg:py-0">
      <section
        id="subcontainer-single-first"
        className="flex flex-col lg:flex-row lg:gap-10 lg:py-8 xl:gap-24"
      >
        <div
          id="container-single-images"
          className="flex justify-center lg:w-auto xl:pl-20 xl:gap-10"
        >
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Group+99.webp"
            alt=""
            className="hidden xl:block xl:w-20 xl:h-[416px]"
          />

          <figure className="lg:w-[400px] xl:w-[481px] xl:h-[500px]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="bg-warm-cream py-10 px-10 xl:px-0 cover w-full"
            />
          </figure>
        </div>

        <div className="flex flex-col">
          <div
            id="container-single-descriptions"
            className="flex flex-col gap-3 py-5"
          >
            <div className="space-y-5">
              <h1 className="text-2xl xl:text-5xl">{product.name}</h1>
              <p className="text-base text-gray-500 xl:text-3xl">
                {formatCurrency(price)}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-1 items-center border-r-2 border-gray-400 pr-4 py-1">
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStarHalf className="text-yellow-500 text-lg" />
              </div>
              <p className="text-gray-400 text-lg">5 Customer Review</p>
            </div>

            <p className="text-sm text-justify lg:w-9/12 xl:text-sm xl:w-[424px] xl:text-left">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>

          <div className="text-gray-400 py-5 space-y-3">
            <h2>Size</h2>
            <div className="space-x-4">
              <button className="px-5 py-2 bg-Goldenrod text-white rounded-lg">
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
              <button className="p-4 xl:p-5 rounded-full bg-blue-800"></button>
              <button className="p-4 xl:p-5 rounded-full bg-black"></button>
              <button className="p-4 xl:p-5 rounded-full bg-Goldenrod"></button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 pb-10  lg:items-start xl:flex-row xl:items-start xl:justify-start">
            <CounterCards initialCount={1} onCountChange={handleCountChange} />
            <AppButton
              type="button"
              className="border-2 border-black rounded-xl px-4 w-full sm:w-[215px] xl:text-xl xl:py-6 xl:px-8 hover-white-custom"
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

          <section
            id="subcontainer-single-2"
            className="flex gap-4 text-gray-500 lg:justify-start border-t-2 border-gray-400 py-10"
          >
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
                <a
                  href="https://web.facebook.com/?locale=pt_BR&_rdc=1&_rdr"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl text-black hover:text-Goldenrod" />
                </a>
                <a href="https://br.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-2xl text-black hover:text-Goldenrod" />
                </a>
                <a href="https://x.com/?lang=pt-br" target="_blank">
                  <AiFillTwitterCircle className="text-2xl text-black hover:text-Goldenrod" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}

export default ProductDescription;
