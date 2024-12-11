import { render, screen, fireEvent } from '@testing-library/react';
import AppButton from './AppButton';
import { MemoryRouter } from 'react-router-dom';

// Teste 1: Renderizar como um botão
test('renders as a button with correct attributes', () => {
  const handleClick = jest.fn();
  render(
    <AppButton label="Click Me" onClick={handleClick} className="btn-class" />,
  );

  const buttonElement = screen.getByRole('button', { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('btn-class');

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Teste 2: Renderizar como um link (react-router-dom)
test('renders as a Link with correct attributes', () => {
  render(
    <MemoryRouter>
      <AppButton label="Go to Page" to="/page" className="link-class" />
    </MemoryRouter>,
  );

  const linkElement = screen.getByRole('link', { name: /go to page/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass('link-class');
  expect(linkElement).toHaveAttribute('href', '/page');
});

// Teste 3: Renderizar como um link (a)
test('renders as an anchor with correct attributes', () => {
  render(
    <AppButton
      label="Visit Site"
      href="https://example.com"
      className="anchor-class"
    />,
  );

  const anchorElement = screen.getByRole('link', { name: /visit site/i });
  expect(anchorElement).toBeInTheDocument();
  expect(anchorElement).toHaveClass('anchor-class');
  expect(anchorElement).toHaveAttribute('href', 'https://example.com');
});

// Teste 4: Renderizar com children
test('renders with children', () => {
  render(
    <AppButton className="child-class">
      <span>Child Element</span>
    </AppButton>,
  );

  const childElement = screen.getByText(/child element/i);
  expect(childElement).toBeInTheDocument();
  expect(childElement.closest('button')).toHaveClass('child-class');
});
