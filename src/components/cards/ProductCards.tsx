// src/components/ProductCard.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    description,
    originalPrice,
    discountedPrice,
    discount,
    imageUrl,
  } = product;

  return (
    <article>
      <figure>
        <img src={imageUrl} alt={name} />
        {discount > 0 && <span>{discount}% off</span>}
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Original Price: RP {originalPrice.toLocaleString()}</p>
        {discountedPrice > 0 && (
          <p>Discounted Price: RP {discountedPrice.toLocaleString()}</p>
        )}
      </figure>
    </article>
  );
};

export default ProductCard;
