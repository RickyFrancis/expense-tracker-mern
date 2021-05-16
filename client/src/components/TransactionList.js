import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import Alert from './Alert';

const TransactionList = () => {
  const { error, loading, transactions, getTransactions } =
    useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <i
              className="fa-3x fas fa-circle-notch fa-spin"
              style={{
                color: '#9c88ff',
              }}
            ></i>
          </div>
        ) : (
          transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction._id} />
          ))
        )}
        {error && error.length > 0
          ? error.map((error) => <Alert>{error}</Alert>)
          : null}
      </ul>
    </>
  );
};

export default TransactionList;
