import usefetch from "../customHooks/UseFetch";
import Single from "./Single";

// redux

// component start

const Items = () => {
  const { data, isLoading, error } = usefetch();

  return (
    <>
      <section className="items__Section">
        <div className="container">
          <div className="items">
            {isLoading && <div className="loading"></div>}
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
