// src/pages/homePage/HomePage.tsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/cards/ProductCards';
import BrowseSec from './BrowseSec';
import CapaSec from './CapaSec';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
}

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <CapaSec />
      <BrowseSec />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default HomePage;
