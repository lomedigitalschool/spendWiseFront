import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

import { TransactionsModal } from "../components/TransactionModal";
import { Link } from "react-router-dom";
import {
  useTransactionsStore,
  useTransactionTypeStore,
} from "../store/transactionsStores";
import {
  useModaltypeStore,
  useSelectedTransaction,
  useShowModal,
} from "../store/modalTypeStore";
import Nav from "../components/Nav";
import { getTransactions } from "../lib/fetcher";
import { destroyTransactions } from "../lib/poster";
import toast from "react-hot-toast";
import Stats from "./Stats";

export default function Dashboard() {
  const { transactionType, setTransactionType } = useTransactionTypeStore();
  const { showModal, setShowModal } = useShowModal();
  const { transactions, initeState, setTransactions } = useTransactionsStore();
  const { modalType, setModalType } = useModaltypeStore();
  const { user } = useAuthStore();

  const { selectedTransaction, setSelectedTransaction } =
    useSelectedTransaction();

  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    const gettter = async () => {
      const response = await getTransactions();

      if (response?.data?.data?.transactions?.length) {
        initeState(response.data.data.transactions);
      }
      //
    };
    gettter();
    const lastTransactions = transactions.slice(-3);
    setRecentTransactions(lastTransactions);
  }, []);

  const handleDelete = async (transactionId) => {
    const response = await destroyTransactions(transactionId);

    if (response.status === 200) {
      const indexTransactions = transactions.indexOf(transactionId);
      const transactionsCopy = [...transactions];

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
    <>
      <Nav />
      {/* under header */}
      <div className=" max-w-[80vw] max-h-full absolute left-60 right-60 top-25 ">
        <div className="flex flex-col gap-2 px-3">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="font-semibold text-indigo-800 my-2 ">
            Bienvenue, <span className="capitalize italic">{user?.name} </span>
          </p>
        </div>
        {/* twice Bloc */}
        <div className="flex gap-20">
          {/* //Account Bloc */}
          <div className="my-[4vh] flex flex-col justify-center gap-2  h-[15vh] bg-indigo-500 px-10 rounded-xl w-[25vw]">
            <p className="text-xl text-white font-semibold">Solde Actuel</p>
            <h2 className="text-[1.5em] text-white font-bold ">
              FCFA {user?.balance}{" "}
            </h2>
          </div>
          {/* objectif bloc */}
          <div className="my-[4vh] flex flex-col justify-center gap-2  h-[15vh] bg-gray-500 px-10 rounded-xl w-[25vw]">
            <p className="text-xl text-white font-semibold">Objectif 🏁</p>
            <h2 className="text-[1.5em] text-white font-bold ">
              FCFA {user?.balance}{" "}
            </h2>
          </div>
        </div>
        {/* //transaction */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl indent-1">
              Transactions recentes
            </h1>
            <Link to="/transactions" className=" btn btn-sm btn-ghhost">
              Voir plus
            </Link>{" "}
          </div>
          <ul>
            {recentTransactions && recentTransactions.length !== 0 ? (
              recentTransactions?.map((transaction) => (
                <li key={transaction.id}>
                  <div
                    className={
                      transaction.type === "income"
                        ? "text-green-600 flex justify-between px-2 py-2  rounded-xl mb-5"
                        : "text-rose-800 flex justify-between px-2 py-2  rounded-xl mb-5"
                    }
                  >
                    <div>
                      <h2 className="font-semibold capitalize">
                        {transaction.description}
                      </h2>
                      <span className="text-gray-800 capitalize">
                        <p>{transaction.Category?.name}</p>
                      </span>
                    </div>

                    <p className="font-semibold flex gap-4 ">
                      {transaction.type === "income" ? "+" : "-"} FCFA{" "}
                      {transaction.amount}{" "}
                      <div className="flex gap-1.5 items-start ">
                        <button
                          className=" cursor-pointer  hover:scale-105 mt-1"
                          onClick={() => {
                            setModalType("edit");
                            setSelectedTransaction(transaction);
                            setShowModal(true);
                          }}
                        >
                          <img
                            className="w-4 h-4 "
                            src="src/assets/editer.png"
                            alt="edit icon"
                          />
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(transaction.id);
                          }}
                          className="  cursor-pointer mt-1 hover:scale-105"
                        >
                          <img
                            className="w-4 h-4 "
                            src="src/assets/trash-close.png"
                            alt="trash icon"
                          />
                        </button>
                      </div>
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center">
                Auncunes transactions pour le moment
              </p>
            )}
          </ul>
        </div>
        <div className="flex gap-4 justify-end my-4">
          <button
            className="btn btn-primary"
            onClick={() => (
              setTransactionType("revenu"),
              setShowModal(true),
              setModalType("create")
            )}
          >
            {" "}
            + Revenu
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => (
              setTransactionType("depense"),
              setShowModal(true),
              setModalType("create")
            )}
          >
            {" "}
            + Depense
          </button>{" "}
        </div>
        <Stats />
        <TransactionsModal
          transactionType={transactionType}
          showModal={showModal}
          onClose={() => setShowModal(false)}
          modalType={modalType}
          selectedTransaction={selectedTransaction}
        />
      </div>
    </>
  );
}
