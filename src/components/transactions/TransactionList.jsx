import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  const { transaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul>
        {transaction.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
