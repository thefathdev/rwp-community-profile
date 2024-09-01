import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flow-grid fixed inset-x-0 top-[1.875rem] z-50 w-full max-sm:top-[15px]">
      <div>
        <Image src="/logo.png" alt="logo" width={95} height={30} />
      </div>
      <div className="col-span-2 col-start-11 max-sm:hidden">
        Pillars • Trifecta
      </div>
      <div className="col-span-2 col-start-[14] flex items-center justify-end max-sm:hidden">
        Gallery • Activities
      </div>
      <div className="col-span-2 col-start-5 flex items-center justify-end sm:hidden">
        • Menu
      </div>
    </nav>
  );
}
