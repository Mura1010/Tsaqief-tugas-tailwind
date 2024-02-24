import { CiSearch } from "react-icons/ci";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-br from-black to-purple-950 h-screen">
        <div>
          <nav>
            <div className="flex justify-between gap-2 pl-28 pr-28 pt-4 ">
              <div className="p-2 rounded-lg">
                <a href="#" className="text-white">
                  Mara
                </a>
                <a href="#" className="mr-4 ml-14 text-white font-semibold">
                  Home
                </a>
                <a href="#" className="mr-4 text-white font-semibold">
                  Studio
                </a>
                <a href="#" className="mr-4 text-white font-semibold">
                  Works
                </a>
                <a href="#" className="mr-4 text-white font-semibold">
                  Content
                </a>
              </div>
              <div className="p-2 rounded-lg flex justify-center"></div>
              <div className="flex">
                <h1>
                  <CiSearch />
                </h1>
                <button className="p-3 rounded-md bg-pink-600 text-white font-bold text-[10px]">
                  Hire Now
                </button>
              </div>
            </div>
          </nav>
          <div className="w-80 m-48">
            <h1 className="text-[50px] font-semibold text-white">
              Think. Make. Solve.
            </h1>
            <h1 className="text-pink-600 font-bold"> -What we Do</h1>
            <a className=" text-slate-500">
              we enjoy creating delightful, human-centered digital experiences.
            </a>
            <br />
            <button className="transition duration-500 ease-in-out bg-pink-600  hover:bg-pink-900 cursor-pointer rounded-[3px]">
              Learn More
            </button>
            <div className="mt-[-300px] ml-[600px] w-[300px] animate-spin">
              <img src="p.PNG" alt="Roket" />
            </div>
          </div>
          <div>
            <div className="w-80 m-48">
              <div className=" ml-[600px] w-[300px]">
                <h1 className="text-[50px] font-semibold text-white ml-[-100px]">
                  Think outside the square space
                </h1>
                <h1 className="text-pink-600 font-bold ml-[-100px]">
                  {" "}
                  -What we Do
                </h1>
                <p className=" text-slate-500 ml-[-100px]">
                  a creative groupof designers and devlopers with a passion for
                  the art
                </p>
                <button className="transition duration-500 ease-in-out bg-pink-600  hover:bg-pink-900 cursor-pointer rounded-[3px] ml-[-100px] mb-[70px]">
                  See our works
                </button>
              </div>
              <div className="mt-[-300px] animate-bounce">
                <img src="c.png" alt="Cube" />
              </div>
            </div>
          </div>
          <div className="w-80 m-48">
            <h1 className="text-[50px] font-semibold text-white">
              Think. Make. Solve.
            </h1>
            <h1 className="text-pink-600 font-bold"> -What we Do</h1>
            <a className=" text-slate-500">
              we enjoy creating delightful, human-centered digital experiences.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
