import Logo from "./Logo";
import Container from "../Container";
import Button from "../Button";
import StarRating from "../StarRating";
import SearchInput from "../SearchInput";
import ReactPlayer from "react-player";
import { useState } from "react";

const Navbar = () => {
  return (
    <menu className="flex justify-between w-full py-7">
      <div className="flex gap-1">
        <Logo />
        <span className="font-secondary">Landguru</span>
      </div>
      <ul className="font-primary flex w-[33%] justify-around">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Adversite</li>
        <li className="cursor-pointer">Supports</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div>
        <Button
          color="text-[#fb923c]"
          bgColor="bg-[#fff7ed]"
          textSize="text-base"
        >
          Try for Free
        </Button>
      </div>
    </menu>
  );
};

const Header = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="header-bg pb-24">
      <Container>
        <Navbar />
        <div className="flex py-7 gap-3">
          {/* left div */}
          <div className="flex-grow">
            <div>
              <StarRating
                color="black"
                size={20}
                defaultRating={3}
                className="font-tertiary"
              >
                Trused by over 4,332 students
              </StarRating>
            </div>
            <h1 className="font-primary font-bold text-[80px]/[80px]">
              Learn Design with Nia Matos
            </h1>
            <img
              src="assets/orange-sketch.svg"
              alt="orange line"
              className="block w-[50%] ml-auto mr-7"
            />
            <p className="mt-7">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <div className="mt-8">
              <SearchInput width={100} />
            </div>

            <div className="flex gap-3 mt-9">
              <span className="font-primary text-[#02073E] opacity-[0.6]">
                Sponsored by:
              </span>
              <img src="assets/paypal.png" alt="paypal-logo" />
              <img src="assets/google.png" alt="google-logo" />
              <img src="assets/dropbox.png" alt="dropbox-logo" />
            </div>
          </div>
          {/* right div */}
          <div className="grid relative grid-cols-12 z-[1] pl-9">
            <div className="col-[2_/_span_12] row-start-1 row-end-1 mt-[10%] outline outline-orange-300 w-[70%] h-[90%]"></div>
            <div
              className="block  col-[1_/_span_8] row-start-1 row-end-1 pt-[10%] relative"
              onClick={() => {
                console.log("clicked");
                setPlaying((pl) => !pl);
              }}
            >
              <div
                className="drop-shadow-2xl font-third bg-red text-3xl leading-normal font-normal p-7 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
                style={{
                  color: "#0F2137",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <img src="assets/play-button.png" />
              </div>
              <ReactPlayer
                url="assets/video.mp4"
                width="100%"
                height="90%"
                playing={playing}
              />
            </div>

            <img
              src="assets/pattern.svg"
              alt="pattern of plus sign"
              className="block w-[100%] col-[4_/_-1] row-start-1 row-end-1 z-[-1] w-[70%]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
