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
import { useTransactionsStore } from "../store/transactionsStores";

export default function Transactions() {
  const { transactions } = useTransactionsStore();
  console.log(transactions);

  return (
    <div>
      <Nav />
      <div className=" max-w-[80vw] max-h-full absolute left-60 right-60 top-40 ">
        <div className="flex flex-col gap-2 px-3 py-4">
          <h1 className="text-4xl font-bold">Transactions</h1>
        </div>
        {/* transactions table */}
        <Table className="w-[60vw]">
          <TableCaption>Listes de toutes les transactions</TableCaption>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions &&
              transactions.map((transaction) => (
                <TableRow>
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
