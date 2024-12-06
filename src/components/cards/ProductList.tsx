import { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCards';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  new: string;
  key?: string;
}

interface ProductListProps {
  products?: Product[];
  limit?: number;
}

function ProductList({ products, limit }: ProductListProps) {
  const [localProducts, setLocalProducts] = useState<Product[]>(products || []);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        if (isMounted) {
          setLocalProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (!products) {
      fetchProducts();
    } else {
      setLocalProducts(products);
    }

    return () => {
      isMounted = false;
    };
  }, [products]);

  const displayedProducts = limit
    ? localProducts.slice(0, limit)
    : localProducts;

  if (!localProducts || localProducts.length === 0) {
    return (
      <div className="flex items-center justify-center text-center h-96">
        <div className="text-4xl font-bold">No products available :(</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center sm:flex-row flex-wrap w-11/12 mx-auto gap-5 justify-center">
      {displayedProducts.map((product) =>
        product ? (
          <ProductCard key={product.key || product.id} product={product} />
        ) : null,
      )}
    </div>
  );
}

export default ProductList;
