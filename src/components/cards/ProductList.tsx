import { useEffect, useState } from 'react';
import ProductCard from './ProductCards';

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
}

function ProductList({ products }: ProductListProps) {
  const [localProducts, setLocalProducts] = useState<Product[]>(products || []);

  useEffect(() => {
    let isMounted = true; // Adicionar uma flag para verificar se o componente está montado

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
      isMounted = false; // Atualizar a flag quando o componente for desmontado
    };
  }, [products]);

  if (!localProducts || localProducts.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center sm:flex-row flex-wrap w-11/12 mx-auto gap-5 justify-center">
      {localProducts.map((product) =>
        product ? (
          <ProductCard key={product.key || product.id} product={product} />
        ) : null,
      )}
    </div>
  );
}

export default ProductList;
