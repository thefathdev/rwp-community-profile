import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Trifecta() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center pb-[3.75rem] max-sm:pb-[225px]">
      <h2 className="mb-[4.5rem] text-center">Community Trifecta</h2>
      <div className="w-full px-[1.875rem] flow-grid items-center">
        <div className="col-start-4 max-sm:col-start-2 max-sm:translate-y-[150px] group/main col-span-5 hover:z-10 row-start-1 translate-y-[7.5rem] relative">
          <Rotated3DContainer>
            <div className="border  border-black group hover:scale-125 max-sm:hover:scale-110 transition-transform duration-700 ease-out max-sm:origin-bottom-right origin-bottom-left w-full max-sm:aspect-square aspect-[5/4] mb-3 ">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/aspiration.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute bottom-0 right-0 p-2.5 sm:hidden group-hover/main:opacity-0 transition-opacity ease-out duration-200">
              Aspiration
            </p>
          </Rotated3DContainer>
          <p className="absolute max-sm:hidden bottom-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700 -translate-y-1/2 right-0 translate-x-full pl-2.5">
            Aspiration
          </p>
        </div>
        <div className="col-start-6 max-sm:col-start-1 max-sm:translate-y-[90px] group/main col-span-5 row-start-1 hover:z-10 relative">
          <Rotated3DContainer>
            <div className="border border-black w-full aspect-square mb-3 group hover:scale-125 max-sm:hover:scale-110 transition-transform max-sm:aspect-square duration-700 ease-out max-sm:origin-left origin-bottom flex max-sm:items-center justify-center">
              <span
                className="text-black/20 max-sm:hidden group-hover:text-black/0 transition-colors duration-700 mt-2.5"
                aria-hidden
              >
                Hover to see more
              </span>
              <span
                className="text-black/20 sm:hidden group-hover:text-black/0 transition-colors duration-700 mt-2.5"
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
                <source src="/trifecta/collaboration.mp4" type="video/mp4" />
              </video>
              <p className="absolute bottom-0 left-0 p-2.5 sm:hidden group-hover/main:opacity-0 transition-opacity ease-out duration-200">
                Collaboration
              </p>
            </div>
          </Rotated3DContainer>
          <p className="absolute max-sm:hidden top-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700  left-0 -translate-x-full pr-2.5">
            Collaboration
          </p>
        </div>
        <div className="col-start-7 max-sm:col-start-1 max-sm:translate-y-0 max-sm:translate-x-[12.5%]  group/main relative col-span-5 row-start-1 hover:z-10 translate-y-[3.5rem]">
          <Rotated3DContainer>
            <div className="border max-sm:relative max-sm:z-[2] border-black w-full aspect-[10/9] max-sm:aspect-square mb-3 group hover:scale-125 max-sm:hover:scale-110 transition-transform duration-700 ease-out max-sm:origin-center origin-bottom-right">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/inspiration.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute top-0 right-0 p-2.5 sm:hidden group-hover/main:opacity-0 transition-opacity ease-out duration-200">
              Inspiration
            </p>
          </Rotated3DContainer>
          <p className="absolute max-sm:hidden top-0 group-hover/main:opacity-0 transition-opacity ease-out duration-700  right-0 translate-x-full pl-2.5">
            Inspiration
          </p>
        </div>
      </div>
    </section>
  );
}
