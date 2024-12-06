import CapePages from '../../components/capePages/CapePages';
import { useState } from 'react';
import { useAddress } from '../../components/apiAdress/AddressForm'; // Importando o hook

function CheckoutPage() {
  const [zipCode, setZipCode] = useState('');
  const { address, isFetching } = useAddress(zipCode);
  const labelCustom = 'text-base font-medium pb-4 text-center';
  const inputCustom = 'border-2 border-gray-400 w-10/12 h-12 mb-10 mx-auto';

  return (
    <section>
      <CapePages title="Checkout" />
      <main>
        <article className="flex flex-col pt-5 px-4">
          <h3 className="text-4xl font-semibold text-center py-5">
            Billing details
          </h3>

          <label htmlFor="first-name" className={labelCustom}>
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className={inputCustom}
          />

          <label htmlFor="last-name" className={labelCustom}>
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className={inputCustom}
          />

          <label htmlFor="company-name" className={labelCustom}>
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company-name"
            name="company-name"
            className={inputCustom}
          />

          <label htmlFor="zip-code" className={labelCustom}>
            ZIP code
          </label>
          <input
            type="text"
            id="zip-code"
            name="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className={inputCustom}
          />

          <label htmlFor="street-address" className={labelCustom}>
            Street address
          </label>
          <input
            type="text"
            id="street-address"
            name="street-address"
            value={address.street}
            disabled={!address.street || isFetching}
            className={inputCustom}
          />

          <label htmlFor="town-city" className={labelCustom}>
            Town / City
          </label>
          <input
            type="text"
            id="town-city"
            name="town-city"
            value={address.city}
            disabled={!address.city || isFetching}
            className={inputCustom}
          />

          <label htmlFor="state" className={labelCustom}>
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            disabled={!address.state || isFetching}
            className={inputCustom}
          />

          <label htmlFor="email-address" className={labelCustom}>
            Email address
          </label>
          <input
            type="email"
            id="email-address"
            name="email-address"
            className={inputCustom}
          />

          <textarea
            id="additional-info"
            name="additional-info"
            className="border-2 border-gray-400 w-10/12 h-16 mb-10 text-gray-300 mx-auto"
            placeholder="Additional information"
          ></textarea>
        </article>

        <article>
          <div>
          <div>
            <h3>Product</h3>
            <p>{'Nome do produto'} <span>x {"quantidade"}</span></p>
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div>
            <p>Subtotal</p>
            <p>Rs. {'aqui vai o subtotal'}</p>
            <p>Rs. {'aqui vai o subtotal'}</p>
            <p>Rs. {'aqui vai o total'}</p>
          </div>
          </div>
        </article>

      </main>
    </section>
  );
}

export default CheckoutPage;
