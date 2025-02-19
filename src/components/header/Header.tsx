import { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import Modal from 'react-modal';
import { IoIosUnlock } from 'react-icons/io';
import ModalProductsHeader from './ModalProductsHeader';
import { FaRegUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import useScroll from './UseScrool';

Modal.setAppElement('#root');

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isNavVisible = useScroll();

  useEffect(() => {
    if (isSignedIn && location.pathname === '/sign-in') {
      navigate('/');
    }
  }, [isSignedIn, location.pathname, navigate]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleUserIconClick = useCallback(() => {
    if (isSignedIn) {
      setIsModalOpen((prevState) => !prevState);
    } else {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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

  const liCustom =
    'hover:text-Goldenrod px-5 hover:border-l-2 hover:border-black lg:hover:border-b-4 lg:hover:border-black lg:hover:border-l-0 lg:px-0';

  return (
    <>
      <div className={`navbar ${!isNavVisible ? 'navbar-hidden' : ''}`}>
        <header className="flex justify-between items-center max-h-20 px-5 lg:min-h-24 lg:px-4 xl:px-16 xl:max-w-screen-2xl xl:mx-auto w-full bg-white overflow-hidden">
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                src="https://i.ibb.co/PGhMLmtL/Zephyr-1.png"
                alt="Image of two lines representing the Ovenmaker"
                title="Logotipo ZPhyr"
                className="w-10/12 h-16 md:w-10/12 md:h-16 lg:w-52 lg:h-36 "
              />
            </a>
          </div>
          <div className="flex gap-5 md:justify-between lg:w-9/12 xl:w-8/12">
            <button className="block lg:hidden" onClick={handleMenuToggle}>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>

            <nav
              className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} 
                absolute top-14 left-0 w-full bg-white z-10 lg:static lg:w-auto lg:bg-transparent`}
              aria-label="Main Navigation"
            >
              <ul
                className={`flex flex-col gap-4 text-base font-medium p-4 border-2 items-center lg:flex-row lg:gap-20 lg:p-0 lg:border-0 xl:gap-24 xl:text-lg ${isModalActive ? 'hidden' : ''}`}
                onClick={handleLinkClick}
              >
                <li className={`${liCustom}`}>
                  <Link to="/" aria-label="Home Page" title="Home Page">
                    Home
                  </Link>
                </li>
                <li className={`${liCustom}`}>
                  <Link to="/shop" aria-label="Shop Page" title="Shop Page">
                    Shop
                  </Link>
                </li>
                <li className={`${liCustom}`}>
                  <Link
                    to="/about"
                    aria-label="About Us Page"
                    title="About Us Page"
                  >
                    About
                  </Link>
                </li>
                <li className={`${liCustom}`}>
                  <Link
                    to="/contact"
                    aria-label="Contact Page"
                    title="Contact Page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="relative flex gap-3 h-auto items-center lg:gap-8">
              <span className="hidden md:block xl:text-xl">
                {user ? `Olá, ${user.firstName}` : ''}
              </span>
              <span
                role="img"
                aria-label="icon representing a user"
                title="Login to your account"
                className="cursor-pointer"
                onClick={handleUserIconClick}
              >
                <FaRegUser className="w-6 lg:w-7 lg:h-6 cursor-pointer hover:text-amber-600" />
              </span>
              <span
                role="img"
                aria-label="icon representing a shopping affection"
                title="Your cart"
                className="cursor-pointer"
                onClick={handleCartIconClick}
              >
                <IoCartOutline className="w-5 h-6 lg:w-7 lg:h-10 cursor-pointer hover:text-amber-600" />
              </span>
            </div>
          </div>
        </header>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="User Modal"
        className="absolute top-20 right-10 mt-2 rounded-XL shadow-lg z-50 w-48 outline-none hover:bg-white hover:text-black"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <button
          onClick={handleLogout}
          className="w-full bg-Goldenrod text-center text-white py-2 px-4 flex flex-col items-center hover:text-black hover:bg-white"
        >
          <IoIosUnlock />
          Logout
        </button>
      </Modal>

      <Modal
        isOpen={isCartModalOpen}
        onRequestClose={handleCloseCartModal}
        contentLabel="Cart Modal"
        className="fixed inset-0 flex items-center justify-center p-4 rounded-XL shadow-lg z-50 outline-none  text-black w-auto max-w-lg mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <ModalProductsHeader onClose={handleCloseCartModal} />
      </Modal>
    </>
  );
}

export default Header;
