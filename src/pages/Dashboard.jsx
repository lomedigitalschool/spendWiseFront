import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-app-bg text-text-color">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/40"
            alt="user"
            className="rounded-full"
          />
          <p className="text-sm">sophia.miller@email.com</p>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block font-semibold">Dashboard</a>
          <a href="#">Transactions</a>
          <a href="#">Budgets</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">SpendWise Dashboard</h1>

        {/* Balance */}
        <div className="bg-solde-bg text-solde-text p-4 rounded-md w-64 mb-6">
          <p className="text-sm">Current Balance</p>
          <p className="text-2xl font-semibold">$12,345</p>
        </div>

        {/* Transactions */}
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <table className="w-full text-left bg-white rounded-md overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">2023-11-15</td>
              <td>Grocery shopping at SuperMart</td>
              <td><span className="bg-gray-200 px-2 py-1 rounded">Groceries</span></td>
              <td className="text-depense-text">-$120</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">2023-11-14</td>
              <td>Salary deposit</td>
              <td><span className="bg-gray-200 px-2 py-1 rounded">Income</span></td>
              <td className="text-revenu-text">+$3000</td>
            </tr>
          </tbody>
        </table>

        {/* Category Spend */}
        <div className="mt-6 bg-white p-4 rounded-md shadow-sm w-full">
          <h3 className="text-lg font-bold mb-2">Spending by Category</h3>
          <p className="text-2xl">$500</p>
          <p className="text-sm text-red-600">This Month: -10%</p>
          <div className="mt-4 space-y-2">
            <div className="bg-gray-100 h-4 rounded">
              <div className="h-full bg-depense-bg w-1/4 rounded"></div>
            </div>
            <div className="bg-gray-100 h-4 rounded">
              <div className="h-full bg-depense-bg w-1/3 rounded"></div>
            </div>
            <div className="bg-gray-100 h-4 rounded">
              <div className="h-full bg-depense-bg w-1/5 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
