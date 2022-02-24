import React, { useContext } from "react";

//Context
import { GlobalContext } from "../../context/GlobalState";

//Components
import Transaction from "../Transaction/Transaction";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((transaction: any) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList;