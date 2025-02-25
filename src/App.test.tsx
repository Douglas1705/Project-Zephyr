import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/redux/store';

// Importe whatwg-fetch para configurar o fetch
import 'whatwg-fetch';

beforeEach(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
});

afterEach(() => {
  const root = document.getElementById('root');
  if (root) {
    document.body.removeChild(root);
  }
});

test('renders loading screen', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    { container },
  );

  expect(screen.getByAltText(/Loading.../i)).toBeInTheDocument();
  expect(screen.getByText(/Zephyr/i)).toBeInTheDocument();

  // Remover o contêiner específico do root após o teste
  document.body.removeChild(container);
});
