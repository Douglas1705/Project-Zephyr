import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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

      {/* Container nav icons */}
      <div className="flex gap-5 md:justify-between lg:w-8/12">
        {/* Botão Hamburguer */}
        <button className="block lg:hidden" onClick={handleMenuToggle}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Navbar */}
        <nav
          className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} 
            absolute top-14 left-0 w-full  bg-white  z-10
            
            lg:static lg:w-auto lg:bg-transparent
            `}
        >
          <ul
            className="
            flex flex-col gap-4  text-base font-medium p-4  border-2 items-center
            
            lg:flex-row lg:gap-20  lg:p-0 lg:border-0

            xl:gap-24 xl:text-lg
            "
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

        {/* Icones do header */}
        <div className="flex gap-3 lg:gap-8 ">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/nav/Vector.svg"
            alt="icon representing a user"
            title="user-icon"
            className="w-6 lg:w-7"
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/nav/ant-design_shopping-cart-outlined.svg"
            alt="icon representing a shopping affection"
            title="shopping-affection-icon"
            className="w-6 lg:w-7"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
