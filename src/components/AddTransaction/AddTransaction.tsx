import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

//Icons
import { AiFillHome } from 'react-icons/ai';
import {BiHomeCircle} from "react-icons/bi";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    
    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (event:any) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 999999), 
            text,
            amount: +amount,
            category: category,
        }

        addTransaction(newTransaction);

        setText('');
        setAmount('');
        setCategory('');
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="Enter amount..." 
                    />
                </div>

                <div className={`form-control category-section ${amount.includes('-') ? 'visible' : ''}`}>
                    <label htmlFor="categories">Categories <br /></label>
                    <select
                        className="categories"
                        onChange={(event) => setCategory(event.target.value)}
                        value={category}
                    >
                        <option value=''>-----</option>
                        <option value='food'>Food</option>
                        <option value='education'>Education</option>
                        <option value='vehicle'>Vehicle</option>
                        <option value='home'>Home</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;