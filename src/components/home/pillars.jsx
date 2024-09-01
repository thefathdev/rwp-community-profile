import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Pillars() {
  return (
    <section className="flex h-dvh w-full flex-col justify-center">
      <h2 className="mb-[4.5rem] text-center">Community Pillars</h2>
      <div className="flow-grid w-full items-center px-[1.875rem] max-sm:items-start">
        <div className="group/main col-span-5 col-start-2 row-start-1 hover:z-10 max-sm:col-span-4 max-sm:col-start-1 max-sm:row-start-1">
          <Rotated3DContainer>
            <div className="group mb-3 flex aspect-[5/4] w-full origin-bottom-left items-center justify-center border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:relative max-sm:z-[2] max-sm:origin-top-left max-sm:hover:scale-[140%]">
              <span
                className="text-black/20 transition-colors duration-700 group-hover:text-black/0 max-sm:hidden"
                aria-hidden
              >
                Hover to see more
              </span>

              <video
                className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
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
        <div className="col-span-5 col-start-6 row-start-1 hover:z-10 max-sm:col-span-4 max-sm:col-start-2 max-sm:row-start-1 max-sm:mt-[125px]">
          <Rotated3DContainer>
            <div className="group mb-3 aspect-square w-full origin-bottom border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:relative max-sm:z-[2] max-sm:flex max-sm:origin-center max-sm:items-center max-sm:justify-center max-sm:hover:scale-[140%]">
              <span
                className="text-black/20 transition-colors duration-700 group-hover:text-black/0 sm:hidden"
                aria-hidden
              >
                Click to see more
              </span>

              <video
                className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
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
        <div className="col-span-5 col-start-10 row-start-1 hover:z-10 max-sm:col-span-4 max-sm:col-start-3 max-sm:row-start-1 max-sm:mt-[300px] max-sm:origin-bottom-right">
          <Rotated3DContainer>
            <div className="group mb-3 aspect-[10/9] w-full origin-bottom-right border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:relative max-sm:z-[2] max-sm:hover:scale-[140%]">
              <video
                className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
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
