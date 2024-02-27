import { useGlobalState } from "../../context/GlobalState";

function IncomeExpenses() {

  const {transaction} = useGlobalState();

  const amounts =  transaction.map((transaction) => transaction.amount);

  const income = amounts.filter(item => item > 0 ).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = amounts.filter(item => item < 0 ).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1;


  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <h4>{expense}</h4>
      </div>
    </>
  );
}

export default IncomeExpenses;
