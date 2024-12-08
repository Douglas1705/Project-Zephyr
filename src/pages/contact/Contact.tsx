import { useState, ChangeEvent, useCallback } from 'react';
import CapePages from '../../components/capePages/PagesCape';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import AppButton from '../../components/buttons/AppButton';

function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
    addOnAddress: '',
    additionalInfo: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    },
    [],
  );

  const validate = useCallback(() => {
    const newErrors = {
      firstName: '',
      email: '',
    };
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!nameRegex.test(formValues.firstName)) {
      newErrors.firstName = 'This name is not valid';
      isValid = false;
    }

    if (!emailRegex.test(formValues.email)) {
      newErrors.email = 'Invalid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formValues]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        <span></span>;
      }
    },
    [validate],
  );

  const divFormInput = 'flex flex-col gap-4';
  const labelCustom = 'font-bold text-base';
  const inputCustom =
    'border-2 border-gray-300 h-20 rounded-lg text-gray-700 pl-6';

  const divsAdress =
    'flex flex-col items-center text-center gap-5 lg:text-start lg:flex lg:flex-row lg:w-72 space-x-3';
  const h3Adress = 'text-2xl font-semibold';
  const pAdress = 'text-gray-700';

  return (
    <section id="container-title">
      <CapePages title="Contact" />

      <main className="flex flex-col gap-10 gap-10 py-10 px-5">
        <article className="space-y-4 text-center lg:space-y-2 xl:py-14">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 lg:w-[644px] mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </article>

        <div className="flex flex-col  gap-10 py-10 px-5 lg:flex-row-reverse lg:px-6 lg:justify-center xl:gap-40">
          <form
            id="container-form"
            onSubmit={handleSubmit}
            className="space-y-10 lg:w-2/4 xl:w-[530px] xl:mt-6"
          >
            <div id="container-form-name" className={`${divFormInput}`}>
              <label htmlFor="firstName" className={`${labelCustom}`}>
                Your Name
              </label>
              <div id="container-warning" className="flex flex-col">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  placeholder="Abc"
                  className={`${inputCustom}`}
                />
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName}</span>
                )}
              </div>
            </div>

            <div className={`${divFormInput}`}>
              <label htmlFor="email" className={labelCustom}>
                Email Address
              </label>
              <div id="container-warning" className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Abc@def.com"
                  className={inputCustom}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
            </div>

            <div className={`${divFormInput}`}>
              <label htmlFor="addOnAddress" className={labelCustom}>
                Subject
              </label>
              <input
                type="text"
                id="addOnAddress"
                name="addOnAddress"
                value=""
                onChange={handleChange}
                className={inputCustom}
              />
            </div>

            <div className={`${divFormInput}`}>
              <label htmlFor="additionalInfo" className={labelCustom}>
                Message
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formValues.additionalInfo}
                onChange={handleChange}
                className={`${inputCustom} min-h-40 flex pt-5`}
                placeholder="Hi! I’d like to ask about"
              ></textarea>
            </div>

            <AppButton
              type="submit"
              className="bg-Goldenrod text-white w-full py-3 rounded-md md:w-56 hover-gold-custom"
            >
              Submit
            </AppButton>
          </form>

          <article id="container-addrees" className="flex flex-col gap-14">
            <div id="container-address" className={`${divsAdress}`}>
              <FaLocationDot className="text-4xl lg:mb-24 lg:text-4xl" />
              <div>
                <h3 className={`${h3Adress}`}>Address</h3>
                <p className={`${pAdress}`}>
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className={`${divsAdress}`}>
              <FaPhoneAlt className="text-4xl lg:mb-14 lg:text-2xl" />
              <div>
                <h3 className={`${h3Adress}`}>Phone</h3>
                <p className={`${pAdress}`}>Mobile: +(84) 546-6789</p>
                <p className={`${pAdress}`}>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className={`${divsAdress}`}>
              <MdAccessTimeFilled className="text-4xl lg:mb-28 lg:text-4xl" />
              <div>
                <h3 className={`${h3Adress}`}>Working Time</h3>
                <p className={`${pAdress}`}>Monday-Friday: 9:00 - 22:00</p>
                <p className={`${pAdress}`}>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
}

export default Contact;
