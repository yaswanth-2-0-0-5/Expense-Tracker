// CurrencyConverter.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = ({ amount, baseCurrency }) => {
  const [convertedAmount, setConvertedAmount] = useState(amount);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const rate = response.data.rates['USD']; // Convert to USD as an example
      setConvertedAmount(amount * rate);
    };

    fetchConversionRate();
  }, [amount, baseCurrency]);

  return <div>Converted Amount: {convertedAmount.toFixed(2)}</div>;
};

export default CurrencyConverter;
