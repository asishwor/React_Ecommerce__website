interface Props {
  star?: number;
}
const StarRating = ({ star = 0 }: Props) => {
  return (
    <>
      {[...Array(Math.round(star))].map((elm,index) => {
        if (star <= 5) return <span key={index} className="ratingStar"></span>;
        return;
      })}
      {star > 0 && <span className="rating__count">{"(8)"}</span>}
    </>
  );
};

export default StarRating;
