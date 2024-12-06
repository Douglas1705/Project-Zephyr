import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ProductDescription from './ProductDescription';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  price: number;
}

function SingleProducts() {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (product) => product.id === id || product.id === parseInt(id, 10),
      );
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  if (products.length === 0) {
    return <div>Carregando...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <section>
      <div className="h-24 bg-warm-cream flex gap-4 items-center justify-center">
        <p className="border-r-2 border-gray-300 pr-6 py-1 flex gap-2 text-gray-400">
          Home <span className="text-black">&gt;</span> Shop{' '}
          <span className="text-black">&gt;</span>
        </p>
        <span> &gt; {product.name}</span>
      </div>
      <ProductDescription product={product} />
    </section>
  );
}

export default SingleProducts;
