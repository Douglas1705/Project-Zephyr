import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// {`${iconsCustom}`}

function Footer() {
  const iconsCustom =
    'p-3 rounded-full shadow-ShadowComplete text-2xl xl:text-sm hover:bg-Goldenrod hover:text-white';

  const containersLinks = 'flex flex-col gap-5 xl:gap-8';

  const h3custom = 'text-lg font-medium text-gray-400 xl:text-base';

  const subContainerLinks =
    'flex flex-row gap-4 font-medium justify-center flex-wrap text-lg xl:flex-col xl:text-base xl:gap-12 ';

  return (
    <footer className="border-t-2 border-gray-300">
      <div
        id="containter-footer"
        className="
        text-center px-4 py-10 border-b-2 border-gray-300 flex flex-col gap-10 xl:flex-row xl:text-start xl:w-11/12 xl:mt-10 xl:mx-auto xl:items-start xl:py-0 xl:px-0 xl:justify-start xl:gap-24 xl:pb-10"
      >
        <div
          id="container-Funiro"
          className="flex flex-col gap-7 items-center xl:items-start xl:gap-10"
        >
          <h2 className="text-3xl font-bold xl:text-2xl">Funiro.</h2>
          <div className="text-gray-400">
            <p className="mb-2 xl:text-base w-5/6">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p>FL 33134 USA</p>
          </div>

          <div id="container-icons" className="flex mx-auto gap-5 xl:ml-0">
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
              className={`${iconsCustom} `}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div id="container-links" className={`${containersLinks} `}>
          <h3 className="text-lg font-medium text-gray-400">Links</h3>

          <nav className={`${subContainerLinks}`}>
            <Link className="hover:text-Goldenrod" to="/">
              Home
            </Link>
            <Link className="hover:text-Goldenrod" to="/shop">
              Shop
            </Link>
            <Link className="hover:text-Goldenrod" to="/about">
              About
            </Link>
            <Link className="hover:text-Goldenrod" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div id="container-help" className={`${containersLinks} `}>
          <h3 className={`${h3custom}`}>Help</h3>

          <div className={`${subContainerLinks}`}>
            <a
              href="https://www.exemplo.com/payment-options"
              target="_blank"
              className="hover:text-Goldenrod"
            >
              Payment Options
            </a>

            <a
              href="https://www.exemplo.com/returns"
              target="_blank"
              className="hover:text-Goldenrod"
            >
              Returns
            </a>

            <a
              href="https://www.exemplo.com/privacy-policies"
              target="_blank"
              className="hover:text-Goldenrod"
            >
              Privacy Policies
            </a>
          </div>
        </div>

        <div id="container-Newsletter" className={`${containersLinks} `}>
          <h3 className={`${h3custom}`}>Newsletter</h3>

          <div className="flex flex-col gap-8 xl:flex-row xl:gap-2 xl:items-center">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-black text-center text-lg md:w-8/12 md:mx-auto xl:text-sm xl:text-start xl:w-6/12  xl:ml-0 xl:mx-0"
            />

            <a
              href="#"
              className="text-2xl border-b-2 border-black cursor-pointer font-medium w-32 mx-auto xl:text-sm xl:ml-0 xl:mx-0"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      </div>

      <p className="pl-16 py-8 text-base">2023 furino. All rights reverved</p>
    </footer>
  );
}

export default Footer;
