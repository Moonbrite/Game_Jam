import Link from "next/link";

export default function Footer() {
    return (
        <nav className="bg-[#252525] w-full p-8">
          <Link href="/mentions-legales">
            <h2 className="text-white text-center">PRYSMOR - Tous droits réservés</h2>
          </Link>
        </nav>
    );
}