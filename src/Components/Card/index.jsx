import StarRating from "../StarRating";

function Card({
  img,
  title,
  watched,
  rating,
  reviews,
  width = "w-[416px]",
  headSize = "text-lg",
  descSize = "",
  starSize = 15,
}) {
  return (
    <div
      className={`${width} rounded-lg  border border-gray-100 hover:shadow-md bg-white`}
    >
      <img src={img} alt="card-img" />
      <div className="m-6">
        <div className={`flex text-gray-700 ${descSize}`}>
          <StarRating defaultRating={5} size={starSize} />
          {`${rating} (${reviews} reviews) `}
        </div>
        <h1 className={`font-sans font-bold ${headSize} my-3 text-slate-800`}>
          {title}
        </h1>
        <p className={`flex text-gray-600 ${descSize}`}>
          <img src="assets/eye.png" alt="eye-logo" className="mr-4" />
          {` ${watched} students watched `}
        </p>
      </div>
    </div>
  );
}

export default Card;
