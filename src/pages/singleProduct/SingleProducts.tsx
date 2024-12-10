import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ProductDescription from './ProductDescription';
import { useEffect, useState, useCallback } from 'react';
import DescriptionArticle from './DescriptionArticle';
import ProductList from '../../components/cards/ProductList';
import AppButton from '../../components/buttons/AppButton';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  price: number;
  new: boolean;
}

function SingleProducts() {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const [product, setProduct] = useState<Product | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState<number>(4);

  useEffect(() => {
    if (products.length > 0 && id) {
      const numericId = Number(id);
      const foundProduct = products.find(
        (product) => Number(product.id) === numericId,
      );
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setProduct(null);
      }
    }
  }, [products, id]);

  const handleShowMore = useCallback(() => {
    setDisplayedProducts((prev) => prev + 4);
  }, []);

  if (products.length === 0) {
    return <div>Carregando...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <section>
      <div className="h-24 bg-warm-cream flex gap-4 items-center justify-center xl:justify-start xl:pl-28">
        <p className="md:border-r-2 md:border-gray-400 py-1 flex gap-2 text-gray-400">
          Home <span className="text-black md:pl-4 md:pr-5">&gt;</span> Shop{' '}
          <span className="text-black md:pl-4 md:pr-5">&gt;</span>
        </p>
        <span>{product.name}</span>
      </div>
      <ProductDescription product={product} />
      <DescriptionArticle />
      <article>
        <h3 className="text-center font-medium text-4xl py-10">
          Related Products
        </h3>
        <ProductList limit={displayedProducts} />
        <div className="flex justify-center py-10 md:py-0 md:pb-10 xl:pb-20">
          <AppButton
            onClick={handleShowMore}
            className="w-10/12 py-4 md:w-[245px] border-2 border-Goldenrod text-Goldenrod hover-white-gold-custom"
          >
            Show More
          </AppButton>
        </div>
      </article>
    </section>
  );
}

export default SingleProducts;
