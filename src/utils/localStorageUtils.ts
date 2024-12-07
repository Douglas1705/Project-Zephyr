export function saveToLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function addToCart(product: any, quantity: number) {
  const cart = loadFromLocalStorage('cartItems') || [];
  const productInCart = cart.find(
    (item: { id: number }) => item.id === product.id,
  );

  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveToLocalStorage('cartItems', cart);
}

export function clearCart(key: string) {
  localStorage.removeItem(key);
}
