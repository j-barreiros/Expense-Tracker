import React, { useContext } from "react";

//Context
import { GlobalContext } from "../../context/GlobalState";


const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);
    
    const amounts: number[] = transactions.map((transaction:any) => transaction.amount);
    
    const total: number = parseFloat(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));

    return (
        <>
            <h4>Your Balance:</h4>
            <h1 id='balance'>${total}</h1>
        </>
    )
}

export default Balance;