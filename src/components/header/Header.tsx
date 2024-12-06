import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import Modal from 'react-modal';
import { IoIosUnlock, IoIosLock } from 'react-icons/io';
import ModalProductsHeader from './ModalProductsHeader';

Modal.setAppElement('#root');

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleUserIconClick = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleLogin = useCallback(() => {
    navigate('/sign-in');
    handleCloseModal();
  }, [navigate, handleCloseModal]);

  const handleLogout = useCallback(() => {
    signOut();
    handleCloseModal();
  }, [signOut, handleCloseModal]);

  const handleCartIconClick = useCallback(() => {
    setIsCartModalOpen((prevState) => !prevState);
  }, []);

  const handleCloseCartModal = useCallback(() => {
    setIsCartModalOpen(false);
  }, []);

  const isModalActive = isModalOpen || isCartModalOpen;

  return (
    <header className="flex justify-between items-center w-auto min-h-16 px-5 lg:min-h-24 lg:px-16">
      <div className="flex items-center gap-2">
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/logo-furniro.svg"
          alt="Image of two lines representing the Ovenmaker"
          title="Furniro-logo"
          className="w-8 md:w-10 lg:w-14"
        />
        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          Furniro
        </h1>
      </div>

      <div className="flex gap-5 md:justify-between lg:w-8/12">
        <button className="block lg:hidden" onClick={handleMenuToggle}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        <nav
          className={`lg:flex ${isMenuOpen && !isModalActive ? 'block' : 'hidden'} 
            absolute top-14 left-0 w-full bg-white z-10 lg:static lg:w-auto lg:bg-transparent`}
        >
          <ul
            className={`flex flex-col gap-4 text-base font-medium p-4 border-2 items-center lg:flex-row lg:gap-20 lg:p-0 lg:border-0 xl:gap-24 xl:text-lg ${isModalActive ? 'hidden' : ''}`}
            onClick={handleLinkClick}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="relative flex gap-3 items-center lg:gap-8">
          <span>{user ? `Olá, ${user.firstName}` : ''}</span>
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/nav/Vector.svg"
            alt="icon representing a user"
            title="user-icon"
            className="w-6 lg:w-7 cursor-pointer"
            onClick={handleUserIconClick}
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/nav/ant-design_shopping-cart-outlined.svg"
            alt="icon representing a shopping affection"
            title="shopping-affection-icon"
            className="w-6 lg:w-7 cursor-pointer"
            onClick={handleCartIconClick}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="User Modal"
        className="absolute top-20 right-10 mt-2 rounded-XL shadow-lg z-50 w-48 outline-none hover:bg-white hover:text-black"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {user ? (
          <button
            onClick={handleLogout}
            className="block w-full text-center text-white py-2 px-4 hover:text-black"
          >
            <IoIosUnlock />
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full bg-Goldenrod text-center text-white py-2 px-4 flex flex-col items-center hover:text-black hover:bg-white"
          >
            <IoIosLock className="text-3xl" />
            LOGIN
          </button>
        )}
      </Modal>

      <Modal
        isOpen={isCartModalOpen}
        onRequestClose={handleCloseCartModal}
        contentLabel="Cart Modal"
        className="absolute top-0 right-0 mt-2 rounded-XL shadow-lg z-50 outline-none bg-white text-black w-auto xl:w-[430px]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <ModalProductsHeader onClose={handleCloseCartModal} />
      </Modal>
    </header>
  );
}

export default Header;
