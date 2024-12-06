import { useState, useEffect } from 'react';
import { loadFromLocalStorage } from '../../utils/localStorageUtils';

interface CartItem {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
  discount?: number;
}

function ProductsCheck() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const items = loadFromLocalStorage('cartItems') || [];
    setCartItems(items);
    calculateTotals(items);
  }, []);

  const calculateTotals = (items: CartItem[]) => {
    let sub = 0;
    let tot = 0;

    items.forEach((item) => {
      const itemTotal = item.originalPrice * item.quantity;
      const itemDiscountedTotal =
        (item.discountedPrice > 0 ? item.discountedPrice : item.originalPrice) *
        item.quantity;
      sub += itemTotal;
      tot += itemDiscountedTotal;
    });

    setSubtotal(sub);
    setTotal(tot);
  };

  const formatCurrency = (value: number) => {
    return value
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('$', 'Rs. ');
  };

  return (
    <article>
      <thead>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <th>
              <p>
                {item.name} x {item.quantity}
              </p>
            </th>
            <td>
              <p>
                {formatCurrency(
                  (item.discountedPrice > 0
                    ? item.discountedPrice
                    : item.originalPrice) * item.quantity,
                )}
              </p>
            </td>
          </tr>
        ))}
        <tr>
          <th>Subtotal</th>
          <td>
            <p>{formatCurrency(subtotal)}</p>
          </td>
        </tr>
        <tr>
          <th>Total</th>
          <td>
            <p>{formatCurrency(total)}</p>
          </td>
        </tr>
      </tbody>
    </article>
  );
}

export default ProductsCheck;
