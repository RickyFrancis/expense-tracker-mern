const transactionType = (transactions) => {
  return transactions.map((transaction) => {
    if (transaction.type === 'INCOME') {
      return transaction.amount;
    } else if (transaction.type === 'EXPENSE') {
      return transaction.amount * -1;
    } else {
      return 0;
    }
  });
};

export default transactionType;
