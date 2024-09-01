import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Trifecta() {
  return (
    <section className="flex h-dvh w-full flex-col justify-center pb-[3.75rem] max-sm:pb-[225px]">
      <h2 className="mb-[4.5rem] text-center">Community Trifecta</h2>
      <div className="flow-grid w-full items-center px-[1.875rem]">
        <div className="group/main relative col-span-5 col-start-4 row-start-1 translate-y-[7.5rem] hover:z-10 max-sm:col-start-2 max-sm:translate-y-[150px]">
          <Rotated3DContainer>
            <div className="group mb-3 aspect-[5/4] w-full origin-bottom-left border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:aspect-square max-sm:origin-bottom-right max-sm:hover:scale-110">
              <video
                className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/aspiration.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute bottom-0 right-0 p-2.5 transition-opacity duration-200 ease-out group-hover/main:opacity-0 sm:hidden">
              Aspiration
            </p>
          </Rotated3DContainer>
          <p className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-full pl-2.5 transition-opacity duration-700 ease-out group-hover/main:opacity-0 max-sm:hidden">
            Aspiration
          </p>
        </div>
        <div className="group/main relative col-span-5 col-start-6 row-start-1 hover:z-10 max-sm:col-start-1 max-sm:translate-y-[90px]">
          <Rotated3DContainer>
            <div className="group mb-3 flex aspect-square w-full origin-bottom justify-center border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:aspect-square max-sm:origin-left max-sm:items-center max-sm:hover:scale-110">
              <span
                className="mt-2.5 text-black/20 transition-colors duration-700 group-hover:text-black/0 max-sm:hidden"
                aria-hidden
              >
                Hover to see more
              </span>
              <span
                className="mt-2.5 text-black/20 transition-colors duration-700 group-hover:text-black/0 sm:hidden"
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
                <source src="/trifecta/collaboration.mp4" type="video/mp4" />
              </video>
              <p className="absolute bottom-0 left-0 p-2.5 transition-opacity duration-200 ease-out group-hover/main:opacity-0 sm:hidden">
                Collaboration
              </p>
            </div>
          </Rotated3DContainer>
          <p className="absolute left-0 top-0 -translate-x-full pr-2.5 transition-opacity duration-700 ease-out group-hover/main:opacity-0 max-sm:hidden">
            Collaboration
          </p>
        </div>
        <div className="group/main relative col-span-5 col-start-7 row-start-1 translate-y-[3.5rem] hover:z-10 max-sm:col-start-1 max-sm:translate-x-[12.5%] max-sm:translate-y-0">
          <Rotated3DContainer>
            <div className="group mb-3 aspect-[10/9] w-full origin-bottom-right border border-black transition-transform duration-700 ease-out hover:scale-125 max-sm:relative max-sm:z-[2] max-sm:aspect-square max-sm:origin-center max-sm:hover:scale-110">
              <video
                className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                muted
                autoPlay
                loop
              >
                <source src="/trifecta/inspiration.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="absolute right-0 top-0 p-2.5 transition-opacity duration-200 ease-out group-hover/main:opacity-0 sm:hidden">
              Inspiration
            </p>
          </Rotated3DContainer>
          <p className="absolute right-0 top-0 translate-x-full pl-2.5 transition-opacity duration-700 ease-out group-hover/main:opacity-0 max-sm:hidden">
            Inspiration
          </p>
        </div>
      </div>
    </section>
  );
}
