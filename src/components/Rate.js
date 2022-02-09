import Rating from "react-rating";
import StarIcon from "assets/icons/StarIcon";

function Rate({ initialRating, className }) {
  return (
    <div>
      <Rating
        className={className}
        emptySymbol={<StarIcon color="white" opacity={0.4} />}
        fullSymbol={<StarIcon color="#aaff64" />}
        initialRating={initialRating}
        readonly
      />
    </div>
  );
}

export default Rate;
