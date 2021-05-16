import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import transactionType from '../utils/transactionType';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactionType(transactions);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
