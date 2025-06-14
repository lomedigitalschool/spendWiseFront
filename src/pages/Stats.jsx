import { useTransactionsStore } from "../store/transactionsStores";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Stats() {
  const { transactions } = useTransactionsStore();
  return (
    <div className="flex items-center justify-center w-[60] h-auto">
      <div className=" w-full h-[35vh] my-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={transactions}>
            <Line
              name="Courbes des transactions"
              dataKey="amount"
              type="monotone"
              stroke="#3730a3"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="amount" />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
