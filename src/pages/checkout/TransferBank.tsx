import { useState, ChangeEvent, useCallback } from 'react';

function TransferBank() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  }, []);

  const getTextForSelectedOption = (option: string) => {
    switch (option) {
      case 'bankTransfer1':
        return 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.';
      case 'bankTransfer2':
        return 'Ensure the payment is made with the correct reference to avoid any delays.';
      case 'cashOnDelivery':
        return 'Cash on delivery is a type of transaction in which the recipient makes payment for a good at the time of delivery.';
      default:
        return '';
    }
  };

  return (
    <article className="py-10 space-y-5 lg:w-11/12lg:pr-14 xl:w-full xl:pl-7">
      <div>
        <input
          type="radio"
          id="bankTransfer1"
          name="paymentMethod"
          value="bankTransfer1"
          checked={selectedOption === 'bankTransfer1'}
          onChange={handleOptionChange}
          className="form-radio accent-black"
        />
        <label
          htmlFor="bankTransfer1"
          className={`ml-2 ${selectedOption === 'bankTransfer1' ? 'text-black' : 'text-gray-400'}`}
        >
          Direct Bank Transfer
        </label>
        {selectedOption === 'bankTransfer1' && (
          <p
            className="text-gray-400 text-justify w-10/12 mt-3 lg:w-full"
            id="text-selected"
          >
            {getTextForSelectedOption('bankTransfer1')}
          </p>
        )}
      </div>

      <div>
        <input
          type="radio"
          id="bankTransfer2"
          name="paymentMethod"
          value="bankTransfer2"
          checked={selectedOption === 'bankTransfer2'}
          onChange={handleOptionChange}
          className="form-radio accent-black"
        />
        <label
          htmlFor="bankTransfer2"
          className={`ml-2 ${selectedOption === 'bankTransfer2' ? 'text-black' : 'text-gray-400'}`}
        >
          Direct Bank Transfer
        </label>
        {selectedOption === 'bankTransfer2' && (
          <p
            className="text-gray-400 text-justify w-8/12 mt-3 lg:w-full"
            id="text-selected"
          >
            {getTextForSelectedOption('bankTransfer2')}
          </p>
        )}
      </div>

      <div>
        <input
          type="radio"
          id="cashOnDelivery"
          name="paymentMethod"
          value="cashOnDelivery"
          checked={selectedOption === 'cashOnDelivery'}
          onChange={handleOptionChange}
          className="form-radio accent-black"
        />
        <label
          htmlFor="cashOnDelivery"
          className={`ml-2 text-justify ${selectedOption === 'cashOnDelivery' ? 'text-black' : 'text-gray-400'}`}
        >
          Cash On Delivery
        </label>
        {selectedOption === 'cashOnDelivery' && (
          <p
            className="text-gray-400 text-justify w-8/12 mt-3 lg:w-full"
            id="text-selected"
          >
            {getTextForSelectedOption('cashOnDelivery')}
          </p>
        )}
      </div>

      <p className="text-justify md:w-10/12 md:mx-auto lg:w-full">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <span className="font-semibold">privacy policy.</span>
      </p>
    </article>
  );
}

export default TransferBank;
