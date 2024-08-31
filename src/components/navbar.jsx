import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flow-grid top-[1.875rem] w-full fixed inset-x-0">
      <div>
        <Image src="/logo.png" alt="logo" width={95} height={30} />
      </div>
      <div className="col-span-2 col-start-11">Pillars • Trifecta</div>
      <div className="col-span-2 col-start-[14] flex items-center justify-end">
        Gallery • Activities
      </div>
    </nav>
  );
}
