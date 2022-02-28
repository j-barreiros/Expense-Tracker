import React, { useContext } from 'react';

import { GlobalContext, TransactionType } from '../../context/GlobalState';

type TransactionProps = {
    transaction: TransactionType;
}

const Transaction = (props:TransactionProps) => {
    const { id, text, amount } = props.transaction;

    const sign = amount > 0 ? '+' : '-';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li
            className={amount > 0 ? 'plus' : 'minus'}
        >
            {text}<span>{sign}${Math.abs(amount)}</span>
            <button
                className="delete-btn"
                onClick={() => deleteTransaction(id)}
            >
                x
            </button>
        </li>
    )
}

export default Transaction;