import Nav from "../components/Nav";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { TransactionsModal } from "../components/TransactionModal";
import {
  useTransactionsStore,
  useTransactionTypeStore,
} from "../store/transactionsStores";
import {
  useModaltypeStore,
  useSelectedTransaction,
  useShowModal,
} from "../store/modalTypeStore";
import { destroyTransactions } from "../lib/poster";
import toast from "react-hot-toast";

export default function Transactions() {
  const { transactions, setTransactions } = useTransactionsStore();
  const { showModal, setShowModal } = useShowModal();
  const { transactionType, setTransactionType } = useTransactionTypeStore();
  const { modalType, setModalType } = useModaltypeStore();
  const { selectedTransaction, setSelectedTransaction } =
    useSelectedTransaction();

  const handleDelete = async (transactionId) => {
    const response = await destroyTransactions(transactionId);

    if (response.status === 200) {
      const indexTransactions = transactions.indexOf(transactionId);
      const transactionsCopy = transactions;
      const transactionRemove = transactionsCopy.splice(indexTransactions, 1);

      setTransactions(transactionsCopy);
      toast.success(
        `transaction ${transactionRemove[0].description}  supprimé avec succès ✅`
      );
    } else {
      toast.error("error lors de la suppression de la transactiion❌");
    }
  };

  return (
    <div>
      <Nav />
      <div className=" max-w-[80vw] max-h-full absolute left-60 right-60 top-40 ">
        <div className="flex flex-col gap-2 px-3 py-4">
          <h1 className="text-4xl font-bold">Transactions</h1>
        </div>
        {/* transactions table */}
        <Table className="w-[65vw]">
          <TableCaption>
            {transactions
              ? "Listes de toutes les transactions "
              : " Auncunes transactions pour le moment"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-indigo-800">
                Description
              </TableHead>
              <TableHead className="text-center text-indigo-800">
                Categorie
              </TableHead>
              <TableHead className="text-center text-indigo-800">
                Date
              </TableHead>

              <TableHead className="text-center text-indigo-800">
                Montant
              </TableHead>
              <TableHead className="text-center text-indigo-800">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions &&
              transactions.map((transaction) => (
                <TableRow key={transaction.id} className="even:bg-gray-200">
                  <TableCell className="font-medium capitalize">
                    {transaction?.description}
                  </TableCell>
                  <TableCell className="font-medium text-center capitalize">
                    {transaction?.Category?.name}
                  </TableCell>
                  <TableCell className="font-medium  capitalize text-center">
                    {transaction.date ? transaction.date : "-"}
                  </TableCell>

                  <TableCell
                    className={
                      transaction?.type === "income"
                        ? "text-green-500 text-center"
                        : "text-rose-800 text-center"
                    }
                  >
                    FCFA {transaction?.amount}
                  </TableCell>

                  <TableCell className="flex justify-center gap-2">
                    <button
                      className=" cursor-pointer hover:scale-105"
                      onClick={() => {
                        setModalType("edit");
                        setSelectedTransaction(transaction);
                        setShowModal(true);
                      }}
                    >
                      <img
                        className="w-4 h-4 "
                        src="src/assets/editer.png"
                        alt="trash icon"
                      />
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(transaction.id);
                      }}
                      className="  cursor-pointer hover:scale-105"
                    >
                      <img
                        className="w-4 h-4 "
                        src="src/assets/trash-close.png"
                        alt="trash icon"
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TransactionsModal
          transactionType={transactionType}
          showModal={showModal}
          onClose={() => setShowModal(false)}
          modalType={modalType}
          selectedTransaction={selectedTransaction}
        />
      </div>
    </div>
  );
}
