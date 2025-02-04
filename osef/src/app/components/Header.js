import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-[#252525] w-full p-8">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white tracking-widest">PRYSMOR</h1>
          </Link>
        </nav>
    );
}