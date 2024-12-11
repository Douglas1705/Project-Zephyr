import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import { MemoryRouter } from 'react-router-dom';

// Mock do CapePages para evitar erros no teste
jest.mock('../../components/capePages/PagesCape', () => () => (
  <div>Mocked CapePages</div>
));

test('renders Contact component with title', () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

  // Verificar se o título h1 está presente no documento
  const titleElement = screen.getByRole('heading', {
    level: 1,
    name: /Get In Touch With Us/i,
  });
  expect(titleElement).toBeInTheDocument();
});

test('displays error message for invalid name input', () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

  // Verificar se o campo de nome está presente
  const nameInput = screen.getByLabelText(/Your Name/i);
  expect(nameInput).toBeInTheDocument();

  // Simular entrada inválida no campo de nome
  fireEvent.change(nameInput, { target: { value: '12' } });

  // Submeter o formulário
  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  // Verificar se a mensagem de erro está presente
  const nameError = screen.queryByText(/This name is not valid/i);
  expect(nameError).toBeInTheDocument();
});
