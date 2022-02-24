import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export interface Props {
    transaction: {
        id: number,
        text: string,
        amount: number
    }
}

const Transaction = (props: Props) => {
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
            >x</button>
        </li>
    )
}

export default Transaction;