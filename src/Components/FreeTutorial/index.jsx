import Button from "../Button";
import Card from "../Card";
import Container from "../Container";

const cardsData = [
  {
    id: 2,
    img: "/assets/avel.jpg",
    rating: 4.5,
    reviews: 524,
    title: "Create multiple artboard by using figma...",
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

function FreeTutorial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-12">
      <Container>
        <div className="flex pt-24 ">
          <div className="map flex-grow basis-7/12 relative grid grid-cols-[repeat(16,minmax(0,6%))] grid-rows-[repeat(16,minmax(0,10%))]">
            <div className="z-10 col-start-3 cols-end-6 row-start-3 row-end-5">
              <Card
                {...cardsData[0]}
                width="w-[300px]"
                textSize="text-xs"
                descSize="text-xs"
              />
            </div>
            <div className="z-20 col-start-5 cols-end-17  row-start-2 row-end-7">
              <Card
                {...cardsData[1]}
                width="w-[350px]"
                textSize="text-sm"
                descSize="text-xs"
              />
            </div>
          </div>
          <div className="basis-5/12">
            <p className=" text-orange-400 text-sm  font-primary leading-10 font-semibold ">
              FREE TUTORIAL
            </p>
            <h1 className="text-slate-800 font-bold font-primary leading-[55px] text-[48px] -tracking-[1.5px] mb-10">
              More than thousand of free tutorial upload every weeks
            </h1>
            <p className="text-slate-900 font-primary text-[18px] font-normal leading-[42px] mb-[30px]">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>

            <Button
              color="text-orange-400"
              bgColor="bg-orange-50"
              textSize="text-base"
            >
              Explore Details
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FreeTutorial;
