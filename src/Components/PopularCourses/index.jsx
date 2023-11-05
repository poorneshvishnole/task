import Container from "../Container";
import SectionHeading from "../UI/SectionHeading";
import Course from "./Course";

const popularCourses = [
  {
    id: 1,
    rating: 5,
    studentCount: 2538,
    reviewsCount: 200,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    noOfClasses: 7,
    duration: "4 hrs",
    topicsLearn: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    id: 2,
    rating: 4,
    studentCount: 2538,
    reviewsCount: 200,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    noOfClasses: 7,
    duration: "4 hrs",
    topicsLearn: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    id: 3,
    rating: 3,
    studentCount: 2538,
    reviewsCount: 200,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    noOfClasses: 7,
    duration: "4 hrs",
    topicsLearn: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    id: 4,
    rating: 4,
    studentCount: 2538,
    reviewsCount: 200,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    noOfClasses: 7,
    duration: "4 hrs",
    topicsLearn: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
];

function PopularCourses() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          subheading="Quality features"
          heading="Popular Designing Course"
        />
        <ul className="pt-14">
          {popularCourses.map((course) => (
            <li key={course.id} className="[&:not(:last-child)]:pb-5">
              <Course course={course} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default PopularCourses;
