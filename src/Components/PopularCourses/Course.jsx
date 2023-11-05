import Button from "../Button";
import StarRating from "../StarRating";

function Course({ course }) {
  const {
    studentCount,
    reviewsCount,
    title,
    description,
    noOfClasses,
    duration,
    // topicsLearn,
    rating,
  } = course;

  return (
    <div
      id="pc"
      className="flex rounded-[10px] border border-solid border-[#F3F4F5] py-8 px-10 gap-9 items-center"
    >
      <div>
        <img src="assets/play.svg" alt="play button" />
      </div>
      <div>
        <div className="flex text-center justify-start items-center font-primary font-normal text-[#343D48] text-sm gap-2">
          <StarRating defaultRating={rating} size={32} />
          {rating} ({reviewsCount} reviews)
          <img src="assets/eye.svg" alt="eye svg" />
          {studentCount} students watched
        </div>
        <h3 className="mt-3 text-[#0F2137] font-primary font-bold text-lg">
          {title}
        </h3>
        <p className="mt-3 text-[#5D646D] font-primary text-sm font-normal">
          {description}
        </p>
      </div>
      <div>
        <Button color="text-[#FFF]" bgColor="bg-[#3FDBB1]" textSize="text-xs">
          {noOfClasses} Video Classes | {duration}
        </Button>
      </div>
    </div>
  );
}

export default Course;
