import React, { useState, useCallback } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

function FormsCheck() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const validate = (): boolean => {
    const newErrors = { firstName: '', lastName: '', email: '' };
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

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
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        // Formulário válido, prossiga com o envio dos dados ou outras ações
      } else {
        // Formulário inválido, lide com os erros
      }
    },
    [formValues],
  );

  const inputCustom = 'border-2 border-gray-400 w-10/12 h-12 mb-10 mx-auto';
  const labelCustom = 'text-base font-medium pb-4 text-center';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="firstName" className={labelCustom}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className={inputCustom}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className={labelCustom}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            className={inputCustom}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName}</span>
          )}
        </div>

        <div className="flex flex-col">
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

        <div className="flex flex-col">
          <label htmlFor="zip-code" className={labelCustom}>
            ZIP code
          </label>
          <input
            type="text"
            id="zip-code"
            name="zip-code"
            className={inputCustom}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="country" className={labelCustom}>
            Country / Region
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className={inputCustom}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="street-address" className={labelCustom}>
            Street address
          </label>
          <input
            type="text"
            id="street-address"
            name="street-address"
            className={inputCustom}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="town-city" className={labelCustom}>
            Town / City
          </label>
          <input
            type="text"
            id="town-city"
            name="town-city"
            className={inputCustom}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className={labelCustom}>
            Province
          </label>
          <input type="text" id="state" name="state" className={inputCustom} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="add-on-address" className={labelCustom}>
            Add-on address
          </label>
          <input
            type="text"
            id="add-on-address"
            name="add-on-address"
            className={inputCustom}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className={labelCustom}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={inputCustom}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <textarea
          id="additional-info"
          name="additional-info"
          className="border-2 border-gray-400 w-10/12 h-16 mb-10 text-gray-300 mx-auto"
          placeholder="Additional information"
        ></textarea>
      </form>
    </div>
  );
}

export default FormsCheck;
