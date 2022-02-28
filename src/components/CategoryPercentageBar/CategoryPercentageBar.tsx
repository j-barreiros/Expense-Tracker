import { useContext } from "react";

//Context
import { GlobalContext } from "../../context/GlobalState"

//Style
import './CategoryPercentageBar.style.css'


//Type
type CategoryPercentageBarProps = {
    title: string;
    category: 'food' | 'education' | 'vehicle' | 'home' | 'other'; 
}

export const CategoryPercentageBar = (props: CategoryPercentageBarProps) => {
    const { transactions } = useContext(GlobalContext);

    function getTotalByCategory(category: string) {
        if (transactions.length <= 0) return 0;
        let total = 0;
        let filteredAmounts = transactions.filter((transaction: any) => transaction.category === category).map((transaction: any) => transaction.amount)

        if (filteredAmounts.length <= 0) return 0;

        total = filteredAmounts.reduce((total: any, amount: any) => total + amount);
        return total;
    }

    function getExpenseTotal() {
        let amount = transactions.map((t: any) => t.amount).filter((a: any) => a < 0);
        if (amount.length === 0) return 1;
        let expenseTotal = amount.reduce((t: number, n: number) => t + n);

        return expenseTotal;
    }

    const { title, category } = props;
    const percentage = (getTotalByCategory(category) / getExpenseTotal()) * 100;

    if(percentage !== 0) {
        return (
            <article>
                <h4>{title}</h4>
                <div className='progress-container'>
                    <div className='progress-bar' style={{width: `${percentage}%`}}></div>
                </div>
            </article>
        )
    } else {
        return <></>
    }
}

export default CategoryPercentageBar;