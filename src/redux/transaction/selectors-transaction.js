import { createSelector } from 'reselect';

const getIsLoading = state => state.transactions.loading;

const getAllTransactions = state => state.transactions.result;
const totalTransactions = state => getAllTransactions(state).length;

const getFilter = state => state.transactions.filter;

const filterTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    console.log(transactions);
    return transactions.filter(({ category }) =>
      category.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// eslint-disable-next-line
export default {
  getIsLoading,
  getAllTransactions,
  getFilter,
  filterTransactions,
  totalTransactions,
};
