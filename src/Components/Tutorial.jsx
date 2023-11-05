import Card from "./Card";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "./UI/SectionHeading";
import { useEffect, useState } from "react";

const staticData = [
  {
    id: 1,
    img: "/assets/stefan.jpg",
    rating: 5.0,
    reviews: 392,
    title: "How to work with prototype design with adobe xd featuring tools",
    watched: 2538,
  },
  {
    id: 2,
    img: "/assets/avel.jpg",
    rating: 4.5,
    reviews: 524,
    title:
      "Create multiple artboard by using figma prototyping tools development",
    watched: 3532,
  },
  {
    id: 3,
    img: "/assets/corine.jpg",
    rating: 5.0,
    reviews: 392,
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    watched: 1037,
  },
];

const Tutorial = () => {
  const [courses, setCourses] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://backend-assignment-igt.onrender.com/api/v1/course"
      );
      const data = await res.json();

      setCourses(data?.data);
      console.log(data);
    };

    fetchData();
  }, []);

  console.log(courses);
  return (
    <div className="pt-12">
      <Container>
        <div className="my-10">
          <div className="text-center  mb-14">
            <SectionHeading
              subheading="Quality features"
              heading="Tutorials that people love most"
            />
          </div>

          <div>
            <Slider {...settings}>
              {courses?.map((data) => (
                <Card
                  key={data._id}
                  img={data.image}
                  title={data.title}
                  watched={data.students_watched}
                  rating={data.rating}
                  reviews={data.reviews_count}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tutorial;
