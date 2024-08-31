import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Pillars() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center ">
      <h2 className="mb-[4.5rem] text-center">Community Pillars</h2>
      <div className="w-full px-[1.875rem] flow-grid items-center max-sm:items-start">
        <div className="col-start-2  col-span-5 group/main hover:z-10 row-start-1 max-sm:col-start-1 max-sm:col-span-4 max-sm:row-start-1">
          <Rotated3DContainer>
            <div className="border max-sm:z-[2] max-sm:relative border-black group hover:scale-125 max-sm:hover:scale-[140%] max-sm:origin-top-left transition-transform duration-700 ease-out origin-bottom-left w-full  aspect-[5/4] mb-3 flex items-center justify-center">
              <span
                className="text-black/20 group-hover:text-black/0 transition-colors duration-700 max-sm:hidden"
                aria-hidden
              >
                Hover to see more
              </span>

              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/pillars/learning.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute bottom-0 left-0 p-2.5 sm:hidden">
              Continuous Learning
            </p>
          </Rotated3DContainer>
          <p className="max-sm:hidden">Continuous Learning</p>
        </div>
        <div className="col-start-6 col-span-5 row-start-1 hover:z-10 max-sm:col-start-2 max-sm:col-span-4 max-sm:row-start-1 max-sm:mt-[125px]">
          <Rotated3DContainer>
            <div className="border max-sm:z-[2] max-sm:relative border-black w-full aspect-square mb-3 max-sm:hover:scale-[140%] group hover:scale-125 max-sm:origin-center  transition-transform duration-700 ease-out origin-bottom max-sm:flex max-sm:items-center max-sm:justify-center">
              <span
                className="text-black/20 group-hover:text-black/0 transition-colors duration-700 sm:hidden"
                aria-hidden
              >
                Click to see more
              </span>

              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/pillars/growth.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute bottom-0 left-0 p-2.5 sm:hidden">
              Personal & <br /> Professional Growth
            </p>
          </Rotated3DContainer>
          <p className="text-center max-sm:hidden">
            Personal & Professional Growth
          </p>
        </div>
        <div className="col-start-10 col-span-5 row-start-1 hover:z-10  max-sm:origin-bottom-right max-sm:col-start-3 max-sm:col-span-4 max-sm:row-start-1 max-sm:mt-[300px]">
          <Rotated3DContainer>
            <div className="border max-sm:z-[2] max-sm:relative border-black w-full aspect-[10/9] mb-3 group hover:scale-125 max-sm:hover:scale-[140%]  transition-transform duration-700 ease-out origin-bottom-right">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/pillars/collaboration.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute bottom-0 left-0 p-2.5 sm:hidden">
              Meaningful Collaboration
            </p>
          </Rotated3DContainer>
          <p className="text-end max-sm:hidden">Meaningful Collaboration</p>
        </div>
      </div>
    </section>
  );
}
