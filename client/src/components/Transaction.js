import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.type === 'EXPENSE' ? '-' : '+';

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteTransaction(id);
    }
  };

  return (
    <li
      key={transaction.id}
      className={transaction.type === 'EXPENSE' ? 'minus' : 'plus'}
    >
      {transaction.text}{' '}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={(e) => deleteHandler(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
