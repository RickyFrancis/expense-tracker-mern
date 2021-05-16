const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_TRANSACTIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        error: [],
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
        loading: false,
        error: [],
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        loading: false,
        error: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
