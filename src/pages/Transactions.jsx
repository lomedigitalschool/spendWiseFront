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
import { useState } from "react";

export default function Transactions() {
  const { transactions } = useTransactionsStore();
  const { showModal, setShowModal } = useShowModal();
  const { transactionType, setTransactionType } = useTransactionTypeStore();
  const { modalType, setModalType } = useModaltypeStore();

  const { selectedTransaction, setSelectedTransaction } =
    useSelectedTransaction();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("hello delete");
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
              ? "Listes de toutes les transaction "
              : " Auncunes transactions pour le moment"}
            s
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-indigo-800">
                Description
              </TableHead>
              <TableHead className="text-right text-indigo-800">
                Categorie
              </TableHead>
              <TableHead className="text-right text-indigo-800">Date</TableHead>

              <TableHead className="text-right text-indigo-800">
                Montant
              </TableHead>
              <TableHead className="text-right text-indigo-800">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions &&
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium capitalize">
                    {transaction?.description}
                  </TableCell>
                  <TableCell className="font-medium text-right capitalize">
                    {transaction?.category}
                  </TableCell>
                  <TableCell className="font-medium  capitalize">
                    {transaction?.date}
                  </TableCell>

                  <TableCell
                    className={
                      transaction?.type === "revenu"
                        ? "text-green-500 text-right"
                        : "text-rose-800 text-right"
                    }
                  >
                    FCFA {transaction?.amount}
                  </TableCell>

                  <TableCell className="flex justify-end gap-2">
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
                      onClick={handleDelete}
                      className="  cursor-pointer mt-1 hover:scale-105"
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
