import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  const onPostProductHandler = () => {
    navigate("/newProduct");
  };

  return (
    <div className="md:container w-3/5  md:mx-auto flex flex-row justify-between items-center">
      <Link className="no-underline text-neutral-800" to="/">
        <h2>UMart</h2>
      </Link>
      <div className="flex flex-row mx-2 items-center ">
        <Link className="no-underline text-neutral-800" to="/favorite">
          Favorites
        </Link>
        <button
          onClick={onPostProductHandler}
          className="p-2 bg-teal-500 border-teal-500 shadow-md text-white ml-6 rounded-lg cursor-pointer hover:border-teal-900 hover:bg-teal-900 shadow-slate-500 "
        >
          Post product
        </button>
      </div>
    </div>
  );
};

export default Header;
