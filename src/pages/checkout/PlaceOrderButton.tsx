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
            background: 'rgba(0, 0, 0, 0.35)',
          },
          content: {
            maxWidth: '25.25rem',
            height: '30rem',
            margin: 'auto',
            borderRadius: '33px',
            padding: '0px',
            backgroundImage:
              'url(https://i.ytimg.com/vi/UoJ2egwV84Y/maxresdefault.jpg)',
          },
        }}
      >
        <div className="flex flex-col items-center justify-center bg-modalCongratulations border-4  h-full rounded-3xl text-center">
          <h2 className="text-xl font-bold xl:text-2xl text-white tracking-wider text-shadow-cape">
            Congratulations
          </h2>
          <img
            src="https://media.tenor.com/0EflySmYSuAAAAAi/check-mark-button-joypixels.gif"
            alt=""
            className="w-3/12 pr-5"
          />

          <p className="text-2xl my-8 text-black font-semibold tracking-wider ">
            {user ? user.firstName : 'Guest'}
          </p>
          <p className="text-slate-800 px-10 text-sm md:text-lg mb-10 tracking-wide">
            We are happy to know that we left your space with more style and
            refinement.
          </p>
          <button
            className="bg-orange-400 text-white py-1 px-4 w-6/12 mb-10 text-xl rounded-3xl hover:bg-black hover:text-white "
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
