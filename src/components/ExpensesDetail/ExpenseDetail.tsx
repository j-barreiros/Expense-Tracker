import { useContext } from "react";

//Context
import { GlobalContext } from "../../context/GlobalState";

export const CategoryPercentage = (props:any) => {
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
        if (amount.length == 0) return 1;
        let expenseTotal = amount.reduce((t: number, n: number) => t + n);
    
        return expenseTotal;
    }

    const {category} = props
    return <progress 
                value={Math.abs(getTotalByCategory(category))}
                max={Math.abs(getExpenseTotal())}
            ></progress>
}

const ExpenseDetail = () => {

    //const { transactions } = useContext(GlobalContext);


    return (
        <div>
            <h3>Details</h3>

            <CategoryPercentage category='food'/>
            <CategoryPercentage category='home'/>
            <CategoryPercentage category='education'/>
            <CategoryPercentage category='vehicle'/>
            <CategoryPercentage category='other'/>
        </div>
    )
}

export default ExpenseDetail;