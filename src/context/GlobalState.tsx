import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// Initial state
const InitialState = {
    transactions: []
}

// Create context
export const GlobalContext:any = createContext(InitialState)

// Provider Component
export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    //Actions
    function deleteTransaction(id: number): void {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction: any): void {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
