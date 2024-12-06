import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from '../redux/reducer';

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          dispatch(setProducts(data));
        } else {
        }
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, [dispatch]);
};

export default useFetchProducts;
