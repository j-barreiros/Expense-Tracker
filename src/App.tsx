import React from 'react';
import './App.css';

//Components
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import AddTransaction from './components/AddTransaction/AddTransaction';
import ExpenseDetail from './components/ExpensesDetail/ExpenseDetail';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header>Expense Tracker</Header>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <ExpenseDetail/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
