import { render, screen } from '@testing-library/react';
import Header from './Header';
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom';


test('Should render default Header component', () => {
  render(
    <Router><Header/></Router>
  );
  const headerElement = screen.getByTestId('header-1');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Strider General Store');
});

test('Should render custom Header component', () => {
  const head = 'Strider Not General'
  render(
    <Router><Header title={head}/></Router>
  );
  const headerElement = screen.getByTestId('header-1');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Strider Not General');
});
