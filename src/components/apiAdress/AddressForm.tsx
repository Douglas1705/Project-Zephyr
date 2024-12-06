import { useState, useEffect } from 'react';

export function useAddress(zipCode) {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
  });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (zipCode.length === 8) {
      fetchAddress();
    }
  }, [zipCode]);

  const fetchAddress = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress({
          street: data.logradouro,
          city: data.localidade,
          state: data.uf,
        });
      } else {
        setAddress({
          street: '',
          city: '',
          state: '',
        });
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
    setIsFetching(false);
  };

  return { address, isFetching };
}
