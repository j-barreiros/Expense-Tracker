//Style
import './ExpensesDetail.style.css'

//Components
import CategoryPercentageBar from "../CategoryPercentageBar/CategoryPercentageBar";

const ExpenseDetail = () => {

    return (
        <details>
            <summary>
                <h3>Details</h3>
            </summary>

            <CategoryPercentageBar title='food:' category='food' />

            <CategoryPercentageBar title='education:' category='education' />

            <CategoryPercentageBar title='vehicle:' category='vehicle' />

            <CategoryPercentageBar title='home:' category='home' />
            
            <CategoryPercentageBar title='other:' category='other' />
        </details>
    )
}

export default ExpenseDetail;