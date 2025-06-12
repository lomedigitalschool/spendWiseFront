import Header from "../components/header";

export default function Dashboard() {
  const user = "Ro";
  const accountBalance = 300;
  const transactions = [
    {
      id: 1,
      amount: 500,
      type: "depense",
      descritption: "ravitaillement pour la semaine",
      category: "divertissement",
    },
    {
      id: 2,
      amount: 100,
      type: "revenu",
      descritption: "benefice sur vente de telephone",
      category: "business",
    },
  ];
  return (
    <>
      <Header />

      {/* under header */}
      <div className=" max-w-[80vw] max-h-full absolute left-60 right-60 top-40 ">
        <div className="flex flex-col gap-2 px-3">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="font-semibold text-indigo-800 my-2 ">
            Bienvenue, {user}{" "}
          </p>
        </div>
        {/* twice Bloc */}
        <div className="flex gap-20">
          {/* //Account Bloc */}
          <div className="my-[4vh] flex flex-col justify-center gap-2  h-[15vh] bg-indigo-500 px-10 rounded-xl w-[25vw]">
            <p className="text-xl text-white font-semibold">Solde Actuel</p>
            <h2 className="text-[1.5em] text-white font-bold ">
              FCFA {accountBalance}{" "}
            </h2>
          </div>
          {/* objectif bloc */}
          <div className="my-[4vh] flex flex-col justify-center gap-2  h-[15vh] bg-gray-500 px-10 rounded-xl w-[25vw]">
            <p className="text-xl text-white font-semibold">Objectif 🏁</p>
            <h2 className="text-[1.5em] text-white font-bold ">
              FCFA {accountBalance}{" "}
            </h2>
          </div>
        </div>
        {/* //transaction */}
        <div className="space-y-4">
          <h1 className="font-bold text-xl indent-1">Transactions recentes</h1>
          <ul>
            {transactions.map((transaction) => (
              <li>
                <div
                  className={
                    transaction.type === "revenu"
                      ? "text-green-600 flex justify-between px-2 py-2  rounded-xl mb-5"
                      : "text-rose-800 flex justify-between px-2 py-2  rounded-xl mb-5"
                  }
                >
                  <div>
                    <h2 className="font-semibold">
                      {transaction.descritption}
                    </h2>
                    <span className="text-indigo-800">
                      {transaction.category}
                    </span>
                  </div>
                  <p className="font-semibold">
                    {transaction.type === "revenu" ? "+" : "-"} FCFA{" "}
                    {transaction.amount}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 justify-end my-4">
          <button className="btn btn-primary">+ Revenu</button>
          <button className="btn btn-neutral">+ depense</button>
        </div>
      </div>
    </>
  );
}
