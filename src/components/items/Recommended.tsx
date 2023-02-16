import React from "react";
import usefetch from "../customHooks/UseFetch";
import Single from "./Single";

const Recommended: React.FC = () => {
  const { data, isLoading, error } = usefetch();
  return (
    <section className="recommended">
      <div className="container">
        <h2>Similar Items You might Like!</h2>
        <div className="items">
          {data
            .filter((el) => el.category === "smartphones")
            .map((el) => {
              return (
                <Single
                  elm={el}
                  id={el.id}
                  price={el.price}
                  rating={el.rating}
                  thumbnail={el.thumbnail}
                  title={el.title}
                  brand={el.brand}
                  key={el.id}
                  description={el.description}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
