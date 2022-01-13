import home_chart from "../images/home_chart.svg";
export const Home = () => {
  return (
    <div className="max-h-screen bg-gray-100 overflow-y-auto">
      <div className="flex text-center mt-10 text-2xl h-screen">
        {/* <div className="flex">
          <img className="md:h-1/2 lg:h-1/3" src={home_chart} alt="" />
        </div> */}
        <div className="flex-1">
          <h1 className="flex-1 transition duration ease-in transform">
            Welcome to the world's best and only college football app!
          </h1>
        </div>
      </div>
      <div className="flex text-center align-middle justify-around space-between">
        <div className="border border-gray-700 rounded bg-gray-600 w-56 shadow-md">
          <div className="h-24 p-4">pic</div>
          <div className="h-32 p-4">body</div>
        </div>
        <div className="border border-gray-700 rounded bg-gray-600 w-56 shadow-md">
          <div className="h-24 p-4">pic</div>
          <div className="h-32 p-4">body</div>
        </div>
        <div className="border border-gray-700 rounded bg-gray-600 w-56 shadow-md">
          <div className="h-24 p-4">pic</div>
          <div className="h-32 p-4">body</div>
        </div>
      </div>
      <div className="h-16 mt-44">test</div>
      <div className="h-screen"></div>
    </div>
  );
};
