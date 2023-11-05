import Container from "./Container";

const Ready = () => {
  return (
    <div className="py-36 ">
      <Container>
        <div className="flex flex-col justify-center items-center px-56">
          <h1
            style={{ color: "#02073E" }}
            className="text-center font-primary font-bold text-[50px]/[65px] mb-[60px]"
          >
            Ready to learn design with Nia Matos
          </h1>

          <button className="w-[205px]  h-[50px] text-orange-400 font-primary font-bold text-base rounded-[5px] bg-orange-50 -tracking-[0.16px]">
            Start Learning Today
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Ready;
