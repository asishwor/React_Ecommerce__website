import { useEffect, useState } from "react";
import usefetch from "../customHooks/UseFetch";
import usefetchCatagory from "../customHooks/useFetchCatagory";
import useCataThumb from "../customHooks/useCataThumb";
import { Link } from "react-router-dom";

const CatagoryCompo = () => {
  const catagories = usefetchCatagory();
  const cat = useCataThumb();

  return (
    <>
      <section className="catagory__section">
        <div className="container">
          <h2>Catagory</h2>
          <div className="catagories">
            {catagories.map((el, i) => (
              <Link
                to={`/catagory/${el}`}
                key={el}
                className="catagories__item"
              >
                <img src={cat ? cat[i] : ""} alt="" />
                <span> {el}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatagoryCompo;
