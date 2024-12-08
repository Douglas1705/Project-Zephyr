import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useUser } from '@clerk/clerk-react';
import { clearCart, loadFromLocalStorage } from '../../utils/localStorageUtils';

interface PlaceOrderButtonProps {
  validateForm: () => boolean;
}

function PlaceOrderButton({ validateForm }: PlaceOrderButtonProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const cart = loadFromLocalStorage('cartItems');
    setCartIsEmpty(!cart || cart.length === 0);
  }, []);

  const handlePlaceOrder = useCallback(() => {
    const isValid = validateForm();
    if (isValid) {
      setModalIsOpen(true);
      clearCart('cartItems');
    }
  }, [validateForm]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    navigate('/');
  }, [navigate]);

  return (
    <>
      <button
        className="w-full mx-auto border-2 border-black py-4 rounded-2xl text-xl mb-4 md:w-80 md:mr-52 lg:mx-auto hover-white-custom"
        onClick={handlePlaceOrder}
        disabled={cartIsEmpty}
      >
        Place Order
      </button>
      {cartIsEmpty && (
        <p className="text-red-600 text-center mb-14 md:mr-52 lg:mx-auto">
          O carrinho está vazio.
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
            maxWidth: '500px',
            height: '400px',
            margin: 'auto',
            textAlign: 'center',
            background:
              'linear-gradient(225deg, rgba(255,243,227,1) 0%, rgba(184,142,47,1) 49%, rgba(236,237,237,0.9847161572052402) 100%)',
            borderRadius: '10px',
          },
        }}
      >
        <div className="bg-Goldenrod bg-opacity-50 rounded-xl">
          <h2 className="text-2xl mb-4 font-bold xl:text-4xl text-rose-800">
            Congratulations
          </h2>
          <p className="text-xl mb-4 text-white font-bold xl:text-4xl">
            {user ? user.firstName : 'Guest'}
          </p>
          <p className="text-white text-2xl mb-10">
            We are happy to know that we left your space with more style and
            refinement.
          </p>
          <button
            className="bg-white text-black py-4 px-4 w-8/12 mb-10 text-2xl rounded-lg hover:bg-black hover:text-white"
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
