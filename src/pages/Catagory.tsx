import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBrandList from "../components/customHooks/useBrands";
import usefetch, { ProdTypes } from "../components/customHooks/UseFetch";
import useTitle from "../components/customHooks/useTittle";
import Single from "../components/items/Single";

const Catagory = () => {
  const { data, isLoading, error } = usefetch();
  const [brandList, setBrandList] = useState<ProdTypes[]>([]);
  const { id } = useParams();

  const Brands = useBrandList();

  // change dynamic title using custom hook
  useTitle(id);

  return (
    <section>
      <div className="container">
        <div className="catagory">
          <div className="catagory__filter">
            <h3>Catagory - {id}</h3>
            <div className="catagory__filter-brand">
              <h4>Brands</h4>
              <ul>
                {Brands.map((el) => {
                  return (
                    <div className="brandlist" key={el}>
                      <input type="checkbox" name="" id="" />
                      <span>{el}</span>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="items">
            {isLoading && <span className="loading"></span>}
            {data
              .filter((prod) => prod.category === id)
              .map((prod) => {
                return (
                  <Single
                    category=""
                    brand=""
                    key={prod.id}
                    elm={prod}
                    id={prod.id}
                    price={prod.price}
                    rating={prod.rating}
                    thumbnail={prod.thumbnail}
                    title={prod.title}
                    description={prod.description}
                    images={prod.images}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catagory;
