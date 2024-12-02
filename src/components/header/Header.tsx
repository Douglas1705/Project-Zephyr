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
    <header
      className="
    flex px-4 justify-between items-center h-20 w-auto

    md:h-24

    xl:px-16

    border-2 border-red-500
    "
    >
      {/* Container logo e titulo */}
      <div className="flex items-center gap-2">
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/logo-furniro.svg"
          alt="Image of two lines representing the Ovenmaker"
          title="Furniro-logo"
          className="w-9 sm:w-14"
        />
        <h1 className="text-2xl sm:text-4xl font-bold">Furniro</h1>
      </div>

      {/* Container nav icons */}
      <div className="flex gap-5 border-2 lg:w-4/6 justify-between">
        {/* Botão Hamburguer */}
        <button className="block lg:hidden" onClick={handleMenuToggle}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Navbar */}
        <nav
          className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} 
          
          absolute  top-16 left-0 w-full  bg-white  z-10 items-center
            
          lg:static lg:w-auto lg:bg-transparent
          `}
        >
          <ul
            className="
            
            flex flex-col  gap-4 lg:gap-24 text-base font-medium p-4  border-2 
            
            lg:flex-row md:p-0 md:border-0
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
        <div className="flex gap-4 xl:gap-8">
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
