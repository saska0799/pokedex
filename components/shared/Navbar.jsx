import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-[9vh] text-xl flex justify-between items-center md:px-16 px-4 py-4">
      <Link href="/" className="flex items-center">
        <Image src="/favicon.png" width={40} height={40} alt="icon" />
        <h1 className="text-3xl pl-3 font-semibold">Pokedex</h1>
      </Link>
      <Link href="/">Home</Link>
    </nav>
  );
};

export default Navbar;
