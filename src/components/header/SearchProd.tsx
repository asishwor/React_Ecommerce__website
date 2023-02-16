import React from "react";

const SearchProd = () => {
  return (
    <div className="searchprod">
      <form action="">
        <input type="text" id="search" placeholder="Search Product" />
        <label htmlFor="search" className="searchprod__icon">
          <span>
            <span></span>
          </span>
        </label>
      </form>
    </div>
  );
};

export default SearchProd;
