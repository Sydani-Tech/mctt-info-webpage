import AnimatedText from "./components/Rotating_Texts";
import { Button } from "./components/ui/button";
import world from "./assets/world.svg";
import group from "./assets/group.svg";
import frame from "./assets/Frame_mctt.svg";
import precision from "./assets/precise_mapping.svg";
import vaccination from "./assets/vaccination.svg";
import visualization from "./assets/data_visualization.svg";
import { Ministries, Suite } from "./content/content";
import { Check, Headset, Rocket, ShieldCheck } from "lucide-react";
import map from "./assets/map_img.png";

export default function Landing() {
  return (
    <>
      {/* Hero div */}
      <div className="flex items-center bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gray-800">
        <div className="md:grid grid-cols-2 flex flex-col-reverse mx-auto lg:w-[90%] lg:px-o lg:my-18 my-8">
          <div className="md:px-5 flex flex-col justify-center">
            <div className="lg:text-6xl md:text-4xl sm:text-5xl  text-4xl font-bold leading-[1.2] md:text-left text-center md:mt-0 mt-10">
              <p className="">Redefining</p>
              <div className="md:block flex justify-center items-center">
                <AnimatedText />
              </div>
              <p className="">Through Data Intelligence</p>
            </div>

            <p className="lg:text-lg md:text-md md:text-left text-center my-5 w-[90%] md:mx-0 mx-auto">
              Empowering organization to plan, visualize, and monitor operations
              through real-time geospatial data
            </p>

            <div className="flex gap-5 md:justify-start justify-center">
              <Button className="bg-gradient-to-r from-gradient-start to-gradient-end rounded text-white shadow hover:bg-gradient-to-r hover:from-gradient-start/90 hover:to-gradient-end/90 outline-none">
                {" "}
                See How it Works
              </Button>
              <Button className="text-gray-800 bg-transparent border border-gray-800 rounded hover:bg-transparent hover:border-gray-800/30">
                Request A Demo
              </Button>
            </div>

            <div className="flex gap-5 my-4 lg:text-sm text-xs md:justify-start justify-center sm:text-left text-center">
              <div className="flex items-center justify-center gap-1">
                <img src={group} alt="" />
                <p>2M+ People Reached</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <img src={world} alt="" />
                <p>10+ Countries Supported</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="flex items-center justify-center md:pr-5">
            <img src={map} alt="" className="md:w-full w-[85%]" />
          </div>
        </div>
      </div>

      <div className=" bg-slate-50 text-gray-800 pt-12">
        {/* What is MCTT */}
        <section id="plan-smarter">
          <div className="text-center mb-12 md:px-0 px-5">
            <p className="lg:text-4xl text-3xl">Plan Smarter. Map Better. Reach Everyone</p>
            <p className="lg:w-[35%] md:w-[80%] md:px-0 px-5 mx-auto mt-3 text-sm text-gray-600">
              Revolutionize micro-planning with real-time geospatial
              intelligence that transforms how teams plan, act, and measure
              impact.
            </p>
          </div>

          <div className="xl:w-[92%] mx-auto xl:grid grid-cols-3 flex flex-col-reverse gap-4 xl:px-0 px-5 lg:px-10">
            <div className="col-span-1 md:px-5 xl:px-0">
              <p className="lg:text-4xl text-3xl">About the Tool</p>
              <p className="my-4 lg:text-lg leading-5">
                CoverageTrackr enables precise geospatial mapping and data collection for initiatives in at any location. 
              </p>

              <div className="xl:flex flex-col items-center md:grid grid-cols-4 gap-4 space-y-2">
                <div className="flex col-span-2 gap-5 rounded-lg shadow-lg bg-gradient-to-r from-gradient-start/10 to-gradient-start/20 p-4">
                  <img src={precision} alt="" className="h-12" />
                  <div>
                    <p className="lg:text-2xl sm:text-xl mb-1 font-medium">
                      Precision Mapping
                    </p>
                    <p className="text-sm">
                      Accurate settlement identification and household
                      enumeration for comprehensive coverage planning.
                    </p>
                  </div>
                </div>

                <div className="flex col-span-2 gap-5 rounded-lg shadow-lg bg-gradient-to-r from-purple-100/50 to-red-100/50 p-4">
                  <img src={visualization} alt="" className="h-12" />
                  <div>
                    <p className="lg:text-2xl sm:text-xl mb-1 font-medium">
                      Data Visualization
                    </p>
                    <p className="text-sm">
                      Real-time analytics and visual insights for informed
                      decision making and resource allocation.
                    </p>
                  </div>
                </div>

                <div className="flex col-span-2 col-start-2 mx-auto gap-5 rounded-lg shadow-lg bg-gradient-to-r from-gradient-end/10 to-gradient-end/20 p-4">
                  <img src={vaccination} alt="" className="h-12" />
                  <div>
                    <p className="lg:text-2xl sm:text-xl mb-1 font-medium">
                      Vaccination Planning
                    </p>
                    <p className="text-sm">
                      Strategic immunization campaign planning with zero-dose
                      pocket identification and coverage optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 h-full flex justify-center items-center">
              <img src={frame} alt="" className="md:w-[95%]" />
            </div>
          </div>
        </section>

        {/* Comprehensive planning suite */}
        <section className="py-12" id="comprehensive">
          <div className="text-center mb-14 md:px-0 px-5">
            <p className="lg:text-4xl text-3xl">Comprehensive Planning Suite</p>
            <p className="lg:w-[80%] mx-auto mt-3 text-sm text-gray-600">
              Everything you need to plan, to execute, and monitor field
              operations with precision and confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-[85%] mx-auto gap-5">
            {Suite.map((data, index) => (
              <div
                className=" p-4 rounded-lg shadow-md bg-white flex flex-col justify-between"
                key={index}
              >
                <div>
                  <img src={data.icon} alt="" className="h-10" />
                  <p className="mt-3 mb-2 font-semibold text-lg">{data.name}</p>
                  <p className="leading-5 text-sm text-gray-600">
                    {data.content}
                  </p>
                </div>
                <div className="mt-3 mb-2">
                  <img src={data.image} alt="" className="w-[100%]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Better planning div */}
        {/* <section className="py-12">
          <div className="text-center mb-10">
            <p className="text-4xl">Your Path to Better Planning</p>
            <p className="w-[80%] mx-auto mt-3 text-sm text-gray-600">
              From data upload to field deployment
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-[85%] mx-auto gap-5">
            {BetterPlanning.map((data, index) => (
              <div
                className={`${data.bg}  p-5 rounded-lg shadow-md bg-white`}
                key={index}
              >
                <div>
                  <img src={data.icon} alt="" className="h-10" />
                  <p className="mt-3 mb-2 font-semibold text-lg">{data.name}</p>
                  <p className="leading-5 text-sm text-gray-600">
                    {data.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Trusted Div */}
        <section className="py-12" id="trusted-by">
          <div className="text-center mb-10 px-5">
            <p className="lg:text-4xl text-3xl">Trusted By Countries Worldwide</p>
            <p className="lg:w-[80%] mx-auto mt-3 text-sm text-gray-600">
              From health ministries to international NGOs, see how different
              organizations use MCTT
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 w-[85%] mx-auto gap-5">
            {Ministries.map((data, index) => (
              <div className={ `rounded-lg md:col-span-2 lg:col-span-1 shadow-md p-5 ${index === Ministries.length - 1 ? "md:col-start-2 mx-auto" : ""}`} key={index}>
                <img src={data.icon} alt="" className="h-10" />
                <p className="mt-3 mb-2 font-semibold text-lg">{data.name}</p>
                <p className="leading-5 text-sm text-gray-700 mb-1">
                  {data.content}
                </p>
                {data.more.map((item, index) => (
                  <div className="flex gap-2 items-center py-1" key={index}>
                    <Check size={18} className="text-primary" />
                    <span className="text-sm text-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        {/* <section className="py-12">
          <div className="text-center mb-14">
            <p className="lg:text-4xl text-3xl">Real Impacts, Real Results</p>
            <p className="lg:w-[80%] mx-auto mt-3 text-sm text-gray-600">
              See how organizations are transforming their operations with MCTT
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 w-[85%] mx-auto gap-5">
            {Reviews.map((data, index) => (
              <div
                className={ `rounded-lg md:col-span-2 lg:col-span-1 shadow-md p-5 ${index === Reviews.length - 1 ? "md:col-start-2 mx-auto" : ""}`} key={index}
              >
                <div className="flex gap-4 items-center">
                  <img src={data.image} alt="" className="rounded-full w-12" />
                  <div>
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-sm text-gray-500 ">{data.position}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm">{data.content}</p>
              </div>
            ))}
          </div>
        </section> */}

        <section>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 w-[85%] mx-auto mb-14">
            <div className="flex flex-col space-y-2 justify-center items-center rounded-lg shadow-lg h-40">
              <p className="text-3xl text-purple-700/50 font-semibold">2M+</p>
              <p className="text-gray-600 ">People Reached</p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center rounded-lg shadow-lg h-40">
              <p className="text-3xl text-blue-700/50 font-semibold">1.2M+</p>
              <p className="text-gray-600 ">Children Reached</p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center rounded-lg shadow-lg h-40">
              <p className="text-3xl text-green-500/50 font-semibold">200K+</p>
              <p className="text-gray-600 ">States Supported</p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center rounded-lg shadow-lg h-40">
              <p className="text-3xl text-orange-500/70 font-semibold">10+</p>
              <p className="text-gray-600 ">Countries Supported</p>
            </div>
          </div>
        </section>

        {/* Last Section */}
        <section className="bg-gradient-to-r from-gradient-end/10 via-gradient-start/10 to-purple-300/10">
          <div className="flex flex-col justify-between items-center py-10">
            <div className="text-center ">
              <p className="lg:text-4xl text-3xl">Start Mapping Your Impact Today</p>
              <p className="w-[60%] mx-auto mt-3 text-sm text-gray-600">
                Join hundreds of countries using MCTT to transform how they
                plan, execute, and monitor field operations.
              </p>
            </div>
            <div className="flex gap-5 my-5">
              <Button className="bg-gradient-to-r from-gradient-start to-gradient-end rounded text-white shadow hover:bg-gradient-to-r hover:from-gradient-start/90 hover:to-gradient-end/90 outline-none">
                {" "}
                See How it Works
              </Button>
              <Button className="text-gray-800 bg-transparent border border-gray-800 rounded hover:bg-transparent hover:border-gray-800/30">
                Request A Demo
              </Button>
            </div>

            <div className="sm:flex sm:gap-6 gap-x-6 sm:text-sm text-xs mx-auto grid grid-cols-4">
              <div className="flex items-center gap-2 col-span-2">
                <ShieldCheck />
                <p>Enterprise Security</p>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Headset />
                <p>24/7 Support</p>
              </div>
              <div className="flex items-center gap-2 col-span-2 col-start-2">
                <Rocket />
                <p>Quick Setup</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
