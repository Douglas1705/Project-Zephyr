import { useState, useEffect } from 'react';

interface Address {
  street: string;
  city: string;
  state: string;
}

export function useAddress(zipCode: string) {
  const [address, setAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
  });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchAddress = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${zipCode}/json/`,
        );
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
        error;
        setAddress({
          street: '',
          city: '',
          state: '',
        });
      }
      setIsFetching(false);
    };

    if (zipCode.length === 8) {
      fetchAddress();
    }
  }, [zipCode]);

  return { address, isFetching };
}
