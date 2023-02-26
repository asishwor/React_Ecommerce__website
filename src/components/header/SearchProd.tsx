import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { search } from "../../app/slices/SearchSlice";
import { RootState } from "../../app/Store";
import { ProdTypes } from "../customHooks/UseFetch";
const SearchProd = () => {
  const searchName = useSelector((store: RootState) => store.search.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchFunction = setInterval(() => {
      dispatch(search(e.target.value));
    }, 4500);
  
    
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchName) {
      navigate("/catalog");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {}, [search]);
  return (
    <div className="searchprod">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Product"
          onChange={(e) => onSearch(e)}
        />
        <label htmlFor="search" className="searchprod__icon">
          <button type="submit" onClick={(e) => onSubmit}>
            <span></span>
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchProd;
