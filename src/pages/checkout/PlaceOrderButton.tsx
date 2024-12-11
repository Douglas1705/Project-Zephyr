import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useUser } from '@clerk/clerk-react';

interface CartItem {
  id: number;
  [key: string]: any;
}

interface PlaceOrderButtonProps {
  validateForm: () => boolean;
}

function PlaceOrderButton({ validateForm }: PlaceOrderButtonProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then((response) => response.json())
      .then((cartItems: CartItem[]) => setCartIsEmpty(cartItems.length === 0));
  }, []);

  const handlePlaceOrder = useCallback(() => {
    if (validateForm()) {
      setModalIsOpen(true);
    }
  }, [validateForm]);

  const clearCart = useCallback(() => {
    fetch('http://localhost:3001/cart')
      .then((response) => response.json())
      .then((cartItems: CartItem[]) => {
        if (cartItems.length > 0) {
          const deleteRequests = cartItems.map((item: CartItem) =>
            fetch(`http://localhost:3001/cart/${item.id}`, {
              method: 'DELETE',
            }),
          );
          return Promise.all(deleteRequests);
        }
      });
  }, []);

  const closeModal = useCallback(() => {
    clearCart();
    setModalIsOpen(false);
    navigate('/');
  }, [clearCart, navigate]);

  return (
    <>
      <button
        className="w-full mx-auto border-2 border-black py-4 rounded-2xl text-xl mb-16 md:w-80 md:mr-52 lg:mx-auto hover-white-custom"
        onClick={handlePlaceOrder}
        disabled={cartIsEmpty}
      >
        Place Order
      </button>
      {cartIsEmpty && (
        <p className="text-red-600 text-center mb-14 lg:mx-auto">
          The cart is empty.
        </p>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Validation Success"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            color: 'black',
            maxWidth: '31.25rem',
            height: '30rem',
            margin: 'auto',
            textAlign: 'center',
            borderRadius: '10px',
          },
        }}
      >
        <div className="bg-white rounded-xl py-10">
          <h2 className="text-xl mb-4 font-bold xl:text-4xl text-rose-800">
            Congratulations
          </h2>
          <p className="text-2xl mb-4 text-black font-semibold ">
            {user ? user.firstName : 'Guest'}
          </p>
          <p className="text-black text-sm md:text-2xl mb-10">
            We are happy to know that we left your space with more style and
            refinement.
          </p>
          <button
            className="bg-white text-black py-4 px-4 w-8/12 mb-10 text-2xl rounded-lg hover:bg-black hover:text-white border-2 border-black"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PlaceOrderButton;
