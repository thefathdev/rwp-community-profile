import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flow-grid top-[1.875rem] max-sm:top-[15px] w-full fixed inset-x-0 z-50">
      <div>
        <Image src="/logo.png" alt="logo" width={95} height={30} />
      </div>
      <div className="col-span-2 col-start-11 max-sm:hidden">
        Pillars • Trifecta
      </div>
      <div className="col-span-2 col-start-[14] flex items-center justify-end max-sm:hidden">
        Gallery • Activities
      </div>
      <div className="col-span-2 col-start-5 justify-end flex items-center sm:hidden">
        • Menu
      </div>
    </nav>
  );
}
