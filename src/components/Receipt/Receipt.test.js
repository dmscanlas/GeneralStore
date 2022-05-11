import { render, screen } from '@testing-library/react';
import Receipt from './Receipt';
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom';

const rcpt = {
        "OrderId": 10,
        "CustomerId": 12,
        "CustomerName": "Joseph",
        "Total": "$40.00",
        "Date": "2021-02-01 08:30:00.000",
        "Items": [
            {
                "Item": "Candle",
                "ItemPrice": "$3.00",
                "Quantity": "3"
            },
            {
                "Item": "Apple",
                "ItemPrice": "$15.00",
                "Quantity": "1"
            },
            {
                "Item": "Cereal",
                "ItemPrice": "$8.00",
                "Quantity": "1"
            },
            {
                "Item": "Paper",
                "ItemPrice": "$5.25",
                "Quantity": "1"
            }
        ]
    };


test('Should render single receipt', () => {

  render(
    <Receipt receipt={rcpt}/>
  );
  const receiptElement = screen.getByTestId('rcpt-1');
  expect(receiptElement).toHaveTextContent('Order#: 10');
  expect(receiptElement).toHaveTextContent('CustomerID: 12');
  expect(receiptElement).toHaveTextContent('Date: 2/1/2021');
});
