import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/Store";
import { ProdTypes } from "../customHooks/UseFetch";
import Single from "./Single";

// redux

// component start
export type PropsProd = {
  prod: ProdTypes[];
};
const Items = ({ prod }: PropsProd) => {
  const data = useSelector((store: RootState) => store.main.data);
  const { brand } = useParams();
  useEffect(() => {}, [brand]);
  return (
    <>
      {/* prod.map((p, i)  */}
      {prod.map((p, i) => {
        if (i < 12)
          return (
            <>
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
            </>
          );
      })}
    </>
  );
};

export default Items;
