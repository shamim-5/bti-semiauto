import React, { useCallback, useState } from "react";
import { MoonIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ toggleTheme }) => {
  const [searchField, setSearchField] = useState(false);

  const toggleSearchField = useCallback(() => {
    setSearchField((current) => !current);
  }, []);

  const menuItems = (
    <>
      <li>
        <Link to="/" className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/literatures"
          className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
        >
          Literatures
        </Link>
      </li>
      <li>
        <Link
          to="/reporting-soft"
          className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
        >
          Reporting Soft
        </Link>
      </li>

      <li tabIndex={0}>
        <a className="hover:text-secondary hover:bg-transparent">
          Machine Soft
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="pl-2 bg-base-100">
          <li>
            <Link
              to="/bactec-soft"
              className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
            >
              Bactec Soft
            </Link>
          </li>
          <li>
            <Link
              to="/evolution"
              className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
            >
              Evolution
            </Link>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-accent sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden hover:text-secondary hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            <li>
              <Link
                to="/others-soft"
                className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
              >
                Others Soft
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl hover:bg-transparent hover:text-secondary">
          <img className="w-32 bg-white hidden lg:flex" src={logo} alt="Logo" />
          <h2 className="lg:hidden flex">Bio-Trade International</h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
          <li>
            <Link
              to="/others-soft"
              className="hover:text-secondary hover:bg-transparent focus:bg-transparent focus:text-secondary"
            >
              Others Soft
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input
          type="text"
          placeholder="Search here..."
          className={`input rounded input-bordered  max-w-xs mx-6 ${
            searchField ? "flex bg-opacity-95   justify-center" : "lg:flex input-sm hidden "
          }`}
        />
        <MagnifyingGlassIcon onClick={toggleSearchField} className="h-6 w-6 lg:hidden flex mx-6" />

        <MoonIcon onClick={toggleTheme} className="h-6 w-6 mx-4" />
      </div>
    </div>
  );
};

export default Navbar;
