import { useState, useEffect } from 'react';

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
    fetch('http://localhost:3001/cart')
      .then((response) => response.json())
      .then((items) => {
        setCartItems(items);
        calculateTotals(items);
      })
      .catch(() => {});
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
    <article className="h-auto py-8 border-b-2 mx-auto w-11/12 md:w-6/12 lg:w-11/12 lg:borde-2 pl-0 lg:pl-0 xl:w-full xl:pl-10">
      <table>
        <thead>
          <tr>
            <th className="w-36 text-start text-2xl font-medium pb-4 md:w-7/12 lg:w-8/12 ">
              Product
            </th>
            <th className="text-right pb-4 text-2xl font-medium w-48">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={2} className="text-center text-2xl py-10">
                Cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <th className="text-start text-gray-400 pb-4 font-normal">
                  <p>
                    {item.name}
                    <span className="text-black mx-2"> x </span>
                    <span className="text-black">{item.quantity}</span>
                  </p>
                </th>
                <td className="text-right pb-5">
                  <p>
                    {formatCurrency(
                      (item.discountedPrice > 0
                        ? item.discountedPrice
                        : item.originalPrice) * item.quantity,
                    )}
                  </p>
                </td>
              </tr>
            ))
          )}
          <tr>
            <th className="text-left font-normal">Subtotal</th>
            <td className="">
              <p className="text-right">{formatCurrency(subtotal)}</p>
            </td>
          </tr>
          <tr>
            <th className="text-left font-normal pt-4">Total</th>
            <td>
              <p className="pt-4 font-bold text-lg text-Goldenrod text-right xl:text-2xl xl:w-80">
                {formatCurrency(total)}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default ProductsCheck;
