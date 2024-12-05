import { useEffect, useState } from 'react';
import ProductList from '../cards/ProductList';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../../utils/localStorageUtils';

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

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

interface FilteredProductListProps {
  showCount: number;
  filters: Filters;
}

function FilteredProductList({ showCount, filters }: FilteredProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;

    const localProducts = loadFromLocalStorage('products');
    if (localProducts) {
      setProducts(localProducts);
      setDisplayedProducts(generateCyclicList(localProducts, showCount));
    } else {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3001/products');
          const data = await response.json();
          if (isMounted) {
            setProducts(data);
            saveToLocalStorage('products', data);
            setDisplayedProducts(generateCyclicList(data, showCount));
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }

    return () => {
      isMounted = false;
    };
  }, [showCount]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = applyFilters(products, filters);
      setDisplayedProducts(generateCyclicList(filtered, showCount));
      saveToLocalStorage(
        'displayedProducts',
        generateCyclicList(filtered, showCount),
      );
    }
  }, [filters, products, showCount]);

  const applyFilters = (products: Product[], filters: Filters): Product[] => {
    let filteredProducts = products;

    if (filters.all) {
      return filteredProducts;
    }
    if (filters.name) {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    }
    if (filters.price) {
      filteredProducts = filteredProducts.sort(
        (a, b) => a.originalPrice - b.originalPrice,
      );
    }
    if (filters.discount) {
      filteredProducts = filteredProducts.sort(
        (a, b) => b.discount - a.discount,
      );
    }
    if (filters.new) {
      filteredProducts = filteredProducts.filter(
        (product) => product.new === 'New',
      );
    }

    return filteredProducts;
  };

  const generateCyclicList = (
    productList: Product[],
    count: number,
  ): Product[] => {
    const cyclicList: Product[] = [];
    for (let i = 0; i < count; i++) {
      const product = productList[i % productList.length];
      cyclicList.push({ ...product, key: `${product.id}-${i}` });
    }
    return cyclicList;
  };

  return <ProductList products={displayedProducts} />;
}

export default FilteredProductList;
