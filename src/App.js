import * as React from 'react';
import Header from './components/Header/Header';
import Receipts from './components/Receipts/Receipts';
import { useState, useEffect } from 'react';


const App = () => {

  const [receipts, setReceipts] = useState([])
  useEffect(() => {
      const getReceipts = async () => {
        const receiptsFromURL = await fetchReceipts()
        setReceipts(receiptsFromURL)
      }

      getReceipts()
    }, [])

  const fetchReceipts = async () => {
    const res = await fetch('https://doc.strider.tech/content/receipts.json')
    const data = await res.json()

    return data
  }

  return (
    <div>
      <div className='header'>
        <Header/>
      </div>
      <div>
        <Receipts receipts={receipts}/>
      </div>
    </div>
  )
}

export default App;
