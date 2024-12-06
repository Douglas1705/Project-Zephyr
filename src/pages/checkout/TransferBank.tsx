import React, { useState } from 'react';

function TransferBank() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

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
    <article>
      <div>
        <input
          type="radio"
          id="bankTransfer1"
          name="paymentMethod"
          value="bankTransfer1"
          checked={selectedOption === 'bankTransfer1'}
          onChange={handleOptionChange}
        />
        <label
          htmlFor="bankTransfer1"
          style={{
            color: selectedOption === 'bankTransfer1' ? 'black' : 'inherit',
          }}
        >
          Direct Bank Transfer
        </label>
        {selectedOption === 'bankTransfer1' && (
          <p id="text-selected">{getTextForSelectedOption('bankTransfer1')}</p>
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
        />
        <label
          htmlFor="bankTransfer2"
          style={{
            color: selectedOption === 'bankTransfer2' ? 'black' : 'inherit',
          }}
        >
          Direct Bank Transfer
        </label>
        {selectedOption === 'bankTransfer2' && (
          <p id="text-selected">{getTextForSelectedOption('bankTransfer2')}</p>
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
        />
        <label
          htmlFor="cashOnDelivery"
          style={{
            color: selectedOption === 'cashOnDelivery' ? 'black' : 'inherit',
          }}
        >
          Cash On Delivery
        </label>
        {selectedOption === 'cashOnDelivery' && (
          <p id="text-selected">{getTextForSelectedOption('cashOnDelivery')}</p>
        )}
      </div>

      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <span>privacy policy.</span>
      </p>
    </article>
  );
}

export default TransferBank;
