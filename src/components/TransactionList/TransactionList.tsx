import React, { useContext } from "react";

//Context
import { GlobalContext, TransactionType, TransactionListType } from "../../context/GlobalState";

//Components
import Transaction from "../Transaction/Transaction";

const TransactionList = () => {

    const { transactions }:TransactionListType = useContext(GlobalContext);

    return (
        <details open>
            <summary>
                <h3>History</h3>
            </summary>
            <ul id="list" className="list">
                {transactions.map((transaction: TransactionType) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </details>
    )
}

export default TransactionList;