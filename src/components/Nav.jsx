import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-8">
        <div className="flex-1">
          <Link to="/dashboard" className="cursor-pointer text-xl font-black">
            Spend<span className="text-indigo-800">Wise</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>RO</summary>
                <ul className="bg-base-300 rounded-t-none p-2 m-2">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a className="text-indigo-800">Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
