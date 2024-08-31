import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Trifecta() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center pb-[3.75rem]">
      <h2 className="mb-[4.5rem] text-center">Community Trifecta</h2>
      <div className="w-full px-[1.875rem] flow-grid items-center">
        <div className="col-start-4 group/main col-span-5 hover:z-10 row-start-1 translate-y-[7.5rem] relative">
          <Rotated3DContainer>
            <div className="border  border-black group hover:scale-125 transition-transform duration-700 ease-out origin-bottom-left w-full aspect-[5/4] mb-3 ">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/aspiration.mp4" type="video/mp4" />
              </video>
            </div>
          </Rotated3DContainer>
          <p className="absolute bottom-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700 -translate-y-1/2 right-0 translate-x-full pl-2.5">
            Aspiration
          </p>
        </div>
        <div className="col-start-6 group/main col-span-5 row-start-1 hover:z-10 relative">
          <Rotated3DContainer>
            <div className="border border-black w-full aspect-square mb-3 group hover:scale-125 transition-transform duration-700 ease-out origin-bottom flex  justify-center">
              <span
                className="text-black/20 group-hover:text-black/0 transition-colors duration-700 mt-2.5"
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
                <source src="/trifecta/collaboration.mp4" type="video/mp4" />
              </video>
            </div>
          </Rotated3DContainer>
          <p className="absolute top-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700  left-0 -translate-x-full pr-2.5">
            Collaboration
          </p>
        </div>
        <div className="col-start-7 group/main relative col-span-5 row-start-1 hover:z-10 translate-y-[3.5rem]">
          <Rotated3DContainer>
            <div className="border border-black w-full aspect-[10/9] mb-3 group hover:scale-125 transition-transform duration-700 ease-out origin-bottom-right">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/inspiration.mp4" type="video/mp4" />
              </video>
            </div>
          </Rotated3DContainer>
          <p className="absolute top-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700  right-0 translate-x-full pl-2.5">
            Inspiration
          </p>
        </div>
      </div>
    </section>
  );
}
