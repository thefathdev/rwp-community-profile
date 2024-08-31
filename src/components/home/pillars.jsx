import Rotated3DContainer from "../ui/rotated-3d-container";

export default function Pillars() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center">
      <h2 className="mb-[4.5rem] text-center">Community Pillars</h2>
      <div className="w-full px-[1.875rem] flow-grid items-center">
        <div className="col-start-2 col-span-5 hover:z-10 row-start-1">
          <Rotated3DContainer>
            <div className="border  border-black group hover:scale-125 transition-transform duration-700 ease-out origin-bottom-left w-full aspect-[5/4] mb-3 flex items-center justify-center">
              <span
                className="text-black/20 group-hover:text-black/0 transition-colors duration-700"
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
          </Rotated3DContainer>
          <p>Continuous Learning</p>
        </div>
        <div className="col-start-6 col-span-5 row-start-1 hover:z-10 ">
          <Rotated3DContainer>
            <div className="border border-black w-full aspect-square mb-3 group hover:scale-125 transition-transform duration-700 ease-out origin-bottom">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/pillars/growth.mp4" type="video/mp4" />
              </video>
            </div>
          </Rotated3DContainer>
          <p className="text-center">Personal & Professional Growth</p>
        </div>
        <div className="col-start-10 col-span-5 row-start-1 hover:z-10 ">
          <Rotated3DContainer>
            <div className="border border-black w-full aspect-[10/9] mb-3 group hover:scale-125 transition-transform duration-700 ease-out origin-bottom-right">
              <video
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-700"
                muted
                autoPlay
                loop
              >
                <source src="/pillars/collaboration.mp4" type="video/mp4" />
              </video>
            </div>
          </Rotated3DContainer>
          <p className="text-end">Meaningful Collaboration</p>
        </div>
      </div>
    </section>
  );
}
