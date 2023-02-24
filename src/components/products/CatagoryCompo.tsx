import usefetchCatagory from "../customHooks/useFetchCatagory";
import { Link } from "react-router-dom";
import { DataProps } from "../customHooks/UseFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../app/Store";

const CatagoryCompo = () => {
  const catagories = usefetchCatagory();
  const data = useSelector((store: RootState) => store.main.data);

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
                <img
                  src={data.filter((e) => e.category == el)[1].thumbnail}
                  alt=""
                />
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
