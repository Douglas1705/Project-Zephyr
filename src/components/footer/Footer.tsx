import { useState, ChangeEvent, useCallback } from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppButton from '../../components/buttons/AppButton';

function Footer() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const iconsCustom =
    'p-3 rounded-full shadow-ShadowComplete text-2xl xl:text-sm hover:bg-Goldenrod hover:text-white';
  const containersLinks = 'flex flex-col gap-5 xl:gap-8';
  const h3custom = 'text-lg font-medium text-gray-400 xl:text-base';
  const subContainerLinks =
    'flex flex-row gap-4 font-medium justify-center flex-wrap text-lg xl:flex-col xl:text-base xl:gap-12';

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubscribe = useCallback(() => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegex.test(email)) {
      setEmailValid(true);
      setShowModal(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <footer className="border-t-2 border-gray-300 xl:pl-12 w-full xl:flex xl:flex-col xl:items-center max-w-screen-2xl mx-auto">
      <div
        id="containter-footer"
        className="
        text-center px-4 py-10 border-b-2 border-gray-300 flex flex-col gap-10 xl:flex-row xl:text-start xl:w-10/12 xl:mt-10 xl:ml-0 xl:items-start xl:py-0 xl:px-0 xl:justify-start xl:gap-20 xl:pb-10"
      >
        <div
          id="container-Funiro"
          className="flex flex-col gap-7 items-center xl:items-start xl:gap-10"
        >
          <h2 className="text-3xl font-bold xl:text-2xl">Zephyr</h2>
          <div className="text-gray-400">
            <p className="mb-2 xl:text-base w-5/6 mx-auto xl:mx-0">
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
              className={`${iconsCustom}`}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div id="container-links" className={`${containersLinks} xl:mr-4`}>
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

        <div id="container-help" className={`${containersLinks}`}>
          <h3 className={`${h3custom}`}>Help</h3>

          <div className={`${subContainerLinks}`}>
            <a href="#" target="_blank" className="hover:text-Goldenrod">
              Payment Options
            </a>

            <a href="#" target="_blank" className="hover:text-Goldenrod">
              Returns
            </a>

            <a href="#" target="_blank" className="hover:text-Goldenrod">
              Privacy Policies
            </a>
          </div>
        </div>

        <div id="container-Newsletter" className={`${containersLinks}`}>
          <h3 className={`${h3custom}`}>Newsletter</h3>

          <div className="flex flex-col gap-10 xl:flex-row xl:gap-0  ">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={handleChange}
                className={`border-b-2 text-center text-lg md:w-8/12 md:mx-auto xl:text-sm xl:text-start xl:w-full xl:ml-0 xl:mx-0 h-7 outline-none ${
                  emailValid ? 'border-black' : 'border-red-500'
                }`}
              />
              {!emailValid && (
                <p className="text-red-500 text-sm">Email Invalid</p>
              )}
            </div>
            <AppButton
              onClick={handleSubscribe}
              className="text-2xl border-b-2 border-black cursor-pointer font-medium w-36 mx-auto pl-2 xl:text-sm xl:ml-4 xl:h-7 xl:px-0 xl:w-auto xl:py-0"
            >
              SUBSCRIBE
            </AppButton>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/logo-furniro.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-2xl font-bold mb-10">Zephyr</p>
            <h3 className="text-2xl font-bold mb-4">
              Thank You for Subscribing!
            </h3>
            <p className="mb-4">Your subscription has been confirmed.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-Goldenrod text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="xl:w-10/12">
        <p className="md:pl-0 xl:text-left py-8 text-base text-center pl-0">
          2023 furino. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
