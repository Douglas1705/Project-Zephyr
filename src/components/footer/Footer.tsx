import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// {`${iconsCustom}`}

function Footer() {
  const iconsCustom = 'p-3 rounded-full shadow-ShadowComplete text-2xl';

  const containersLinks = 'flex flex-col gap-5';

  const h3custom = 'text-lg font-medium text-gray-400';

  const subContainerLinks = 'flex flex-row gap-4 justify-center flex-wrap text-lg xl:flex-col';

  return (
    <footer className="text-center px-4 py-10 border-2 flex flex-col gap-10 xl:flex-row xl:pl-24 xl:text-start">
      <div id="container-Funiro" className="flex flex-col gap-7 items-center">
        <h2 className="text-3xl font-bold">Funiro.</h2>
        <div className="text-gray-500">
          <p className="mb-2">400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        <div id="container-icons" className="flex mx-auto gap-5">
          <a
            className={`${iconsCustom}`}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialFacebook className="" />
          </a>

          <a
            className={`${iconsCustom}`}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram />
          </a>

          <a
            className={`${iconsCustom}`}
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            className={`${iconsCustom}`}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div id="container-links" className={`${containersLinks}`}>
        <h3 className="text-lg font-medium text-gray-400">Links</h3>

        <nav className={`${subContainerLinks}`}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div id="container-help" className={`${containersLinks}`}>
        <h3 className={`${h3custom}`}>Help</h3>

        <div className={`${subContainerLinks}`}>
          <a href="https://www.exemplo.com/payment-options" target="_blank">
            Payment Options
          </a>

          <a href="https://www.exemplo.com/returns" target="_blank">
            Returns
          </a>

          <a href="https://www.exemplo.com/privacy-policies" target="_blank">
            Privacy Policies
          </a>
        </div>
      </div>

      <div id="container-Newsletter" className={`${containersLinks}`}>
        <h3 className={`${h3custom}`}>Newsletter</h3>

        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="border-b-2 border-black text-center text-lg md:w-8/12 md:mx-auto"
          />

          <a
            href="#"
            className="text-2xl border-b-2 border-black cursor-pointer font-medium w-32 mx-auto">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
