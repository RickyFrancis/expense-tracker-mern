import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Alert from '../components/Alert';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');

  const { error, loading, addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      type,
      amount: +amount,
    };

    addTransaction(newTransaction, setText, setAmount, setType);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input
            // required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="type">Transaction Type:</label> &nbsp;
          <label>
            <input
              // required
              type="radio"
              name="type"
              value="INCOME"
              checked={type === 'INCOME'}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
          &nbsp;
          <label>
            <input
              // required
              type="radio"
              name="type"
              value="EXPENSE"
              checked={type === 'EXPENSE'}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            // required
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn" type="submit">
          Add transaction &nbsp;{' '}
          {loading && (
            <i
              className="fas fa-circle-notch fa-spin"
              style={{
                color: 'white',
              }}
            ></i>
          )}
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
