import { Link } from "react-router-dom";
import header from "./assets/header.png";
import kidz from "./assets/kidz.png";
import section2 from "./assets/section2.png";
import schedule1 from "./assets/schedule1.png";
import schedule2 from "./assets/schedule2.png";
import { BiSearch } from "react-icons/bi";
import Footer from "./Footer";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { FaBell, FaPlay } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Home = () => {
  const sampleData = [
    {
      title: "From Shepherd to throne",
      image: schedule1,
      description:
        "Story of King david, as he transcended from the life of shepherding the flock to shepherding the nations",
      current: true,
      Start: "3pm",
      end: "3.30pm",
    },
    {
      title: "Foundation with Naomi",
      image: schedule2,

      description:
        "Lets go through the basics of what it means to be a believer, get rooted with our special host, Naomi",
      active: false,
      Start: "3pm",
      end: "3.30pm",
    },
    {
      title: "Game time",
      image: schedule2,

      description: "its time for fun and games",
      Start: "3pm",
      end: "3.30pm",
    },
    {
      title: "Game time",
      image: schedule1,

      description:
        "Story of King david, as he transcended from the life of shepherding the flock to shepherding the nations",
      active: false,
      Start: "3pm",
      end: "3.30pm",
    },
  ];
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat:"no-repeat"
        }}
        className="w-screen absolute md:h-60 h-28 top-0  z-[10000] flex items-start md:pt-5 px-10 justify-between"
      >
        <div>
          <h1 className="text-[#FFEB55] text-3xl font-bold">KidzLive!</h1>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full py-2 px-3 w-96">
          <input
            type="search"
            className="bg-transparent bg-none w-full focus:outline-0"
            name=""
            id=""
          />
          <button>
            <BiSearch size={29} />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button>
            <BiSearch size={29} />
          </button>
          <button>
            <IoMenu size={29} />
          </button>


        </div>

        <div className="md:flex items-center hidden  text-white gap-5">
            
          <Link
            to={"/live"}
            className="bg-[#FFEB55] px-3 py-2 rounded-full border-2 border-white animate-pulse hover:animate-none font-semibold text-[#9C29B2]"
          >
            Watch livetv
          </Link>
          <Link>Channels</Link>
          <Link>Subscriptions</Link>
          <Link>About Us</Link>
          <Link>Contact</Link>
        </div>
      </header>

      <div
        style={{
          backgroundImage: `url(${section2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" md:h-screen  md:mt-12 pt-24 pb-16 md:pb-0 md:grid grid-cols-2 gap-5 items-center px-10  "
      >
        <div className="flex flex-col gap-5 items-start md:pl-10">
          <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold gwibble  stroke-white stroke-2 ">
            Welcome to KidzLive!
          </h1>
          <p className="md:w-[70%] w-full">
            Enjoy our daily fun, educative and Word-filled videos for your kids.
            Share this amazing moment with us as we take you through various
            educational, creative, christian videos that will surely get your
            kids learning the right things... the right way
          </p>

          <div className="flex gap-5 ">
            <Link className="bg-[#9C29B2] px-3 py-2 rounded-2xl text-white  border-[#fff] border-2">
              Watch Live!
            </Link>
            <Link className="border-[#9C29B2] px-3 py-2 rounded-2xl  text-[#9C29B2]  border-2">
              Play videos
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={kidz} alt="kids image" className="" />
        </div>
      </div>

      <div>
        <h1 className="text-3xl mb-3 mt-10 font-bold text-center">
          Watch Schedule
        </h1>
        <div className="flex gap-2 bg-slate-100 text-center items-center justify-center w-fit mx-auto">
          <MdOutlineArrowLeft size={20} color="purple" />

          <p>Today`s Playlist</p>
          <MdOutlineArrowRight size={20} color="purple" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 w-[70%] mx-auto my-20">
          {sampleData.map((data, index) => (
            <div
            // this is the parent div
              key={index}
              className={`relative hover:shadow-md rounded-3xl ${
                  data.current == true
                    ? "bg-[#f08b8b] border-3"
                    : "bg-slate-200"
                }`}
            >
                {data.current == true ? (
                  <div className="bg-red-500 absolute right-2 px-3 py-2 rounded-full float-right mt-4 text-sm mr-4 text-white flex items-center gap-1">
                    <FaPlay /> LIVE NOW
                  </div>
                ): (
                    // make it such that this condition is only going to show when you hover over the parent div
                    <div className="bg-slate-500 absolute right-2 px-3 py-2 rounded-full float-right mt-4 text-sm mr-4 text-white flex items-center gap-1">
                      <FaBell /> Remind Me
                    </div>
                  )}
              <div
                className={`flex flex-col md:flex-row items-center   gap-5 p-5`}
              >
                <img src={data.image} alt="" className={``} />
                <div className="md:w-[50%]">
                  <h4 className="font-semibold text-lg text-[#9C29B2]">{data.title}</h4>
                  <p className="text-sm">{data.description}</p>
                </div>

              </div>
                
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
