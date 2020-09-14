import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Should render properly!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("App");
  expect(linkElement).toBeInTheDocument();
});
