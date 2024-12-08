import {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useAddress } from '../../components/apiAdress/AddressForm';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  country: string;
  streetAddress: string;
  townCity: string;
  state: string;
}

interface FormsCheckHandle {
  validate: () => boolean;
}

function FormsCheck(props: {}, ref: React.Ref<FormsCheckHandle>) {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    country: '',
    streetAddress: '',
    townCity: '',
    state: '',
  });

  const { address, isFetching } = useAddress(formValues.zipCode);

  useEffect(() => {
    if (!isFetching && address.street && address.city && address.state) {
      setFormValues((prevValues) => ({
        ...prevValues,
        streetAddress: address.street,
        townCity: address.city,
        state: address.state,
      }));
    }
  }, [address, isFetching]);

  const [errors, setErrors] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    country: '',
    streetAddress: '',
    townCity: '',
    state: '',
  });

  useImperativeHandle(ref, () => ({
    validate() {
      const newErrors = {
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        country: '',
        streetAddress: '',
        townCity: '',
        state: '',
      };
      let isValid = true;

      const nameRegex = /^[A-Za-z\s]{2,}$/;
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      if (!nameRegex.test(formValues.firstName)) {
        newErrors.firstName = 'This name is not valid';
        isValid = false;
      }

      if (!nameRegex.test(formValues.lastName)) {
        newErrors.lastName = 'This name is not valid';
        isValid = false;
      }

      if (!emailRegex.test(formValues.email)) {
        newErrors.email = 'Invalid email';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    },
  }));

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const divFormInput = 'flex flex-col gap-4';
  const labelCustom = 'font-bold text-base';
  const inputCustom =
    'border-2 border-gray-300 h-16 rounded-lg text-gray-700 pl-6';

  return (
    <div className="lg:w-9/12  lg:px-5 xl:w-5/12 xl:mr-24 xl:px-0 xl:pr-0">
      <form className="flex flex-col gap-8 py-10">
        <div className="xl:flex xl:flex-row">
          <div
            id="container-form-input"
            className={`${divFormInput} xl:w-5/12 xl:mr-10`}
          >
            <label htmlFor="firstName" className={`${labelCustom}`}>
              First Name
            </label>
            <div id="container-warning" className="flex flex-col">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className={`${inputCustom}`}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName}</span>
              )}
            </div>
          </div>

          <div className={`${divFormInput} xl:w-6/12`}>
            <label htmlFor="lastName" className={labelCustom}>
              Last Name
            </label>
            <div id="container-warning" className="flex flex-col">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className={`${inputCustom}`}
              />
              {errors.lastName && (
                <span className="text-red-500 mt-0">{errors.lastName}</span>
              )}
            </div>
          </div>
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="company-name" className={labelCustom}>
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company-name"
            name="company-name"
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="zip-code" className={labelCustom}>
            ZIP code
          </label>
          <input
            type="text"
            id="zip-code"
            name="zipCode"
            value={formValues.zipCode}
            onChange={handleChange}
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="country" className={labelCustom}>
            Country / Region
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="street-address" className={labelCustom}>
            Street address
          </label>
          <input
            type="text"
            id="street-address"
            name="streetAddress"
            value={formValues.streetAddress}
            onChange={handleChange}
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="town-city" className={labelCustom}>
            Town / City
          </label>
          <input
            type="text"
            id="town-city"
            name="townCity"
            value={formValues.townCity}
            onChange={handleChange}
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="state" className={labelCustom}>
            Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formValues.state}
            onChange={handleChange}
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="add-on-address" className={labelCustom}>
            Add-on address
          </label>
          <input
            type="text"
            id="add-on-address"
            name="addOnAddress"
            className={inputCustom}
          />
        </div>

        <div className={`${divFormInput}`}>
          <label htmlFor="email" className={labelCustom}>
            Email address
          </label>
          <div id="container-warning" className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={inputCustom}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
        </div>

        <textarea
          id="additional-info"
          name="additional-info"
          className={`${inputCustom} mt-5 flex pt-5 `}
          placeholder="Additional information"
        ></textarea>
      </form>
    </div>
  );
}

export default forwardRef<FormsCheckHandle, {}>(FormsCheck);
