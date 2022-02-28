import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// Initial state
const InitialState = {
    transactions: []
}

// Create context
export const GlobalContext:any = createContext(InitialState)

//Types
type GlobalProviderProps = {
    children: JSX.Element | JSX.Element[]; 
}

export type TransactionType = {
    id:number;
    text:string;
    amount:number;
    category?:string;
}

export type TransactionListType = {
    transactions: TransactionType[];
}

// Provider Component
export const GlobalProvider = (props: GlobalProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    //Actions
    function deleteTransaction(id: number): void {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction: TransactionType): void {
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
            {props.children}
        </GlobalContext.Provider>
    );
}
