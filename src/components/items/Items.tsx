import { useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { DataProps } from "../customHooks/UseFetch";
import Single from "./Single";

// redux

// component start

const Items = ({ prod }: DataProps) => {
  const data = useSelector((store: RootState) => store.cart.allProducts);
  return (
    <>
      <section className="items__Section">
        <div className="container">
          <div className="items">
            {/* {prod && <div className="loading"></div>} */}
            {data.map((p, i) => {
              if (i < 12)
                return (
                  <Single
                    brand=""
                    category={p.category}
                    elm={p}
                    key={p.id}
                    thumbnail={p.thumbnail}
                    title={p.title}
                    price={p.price}
                    rating={p.rating}
                    discountPercentage={p.discountPercentage}
                    id={p.id}
                    description={p.description}
                  />
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Items;
