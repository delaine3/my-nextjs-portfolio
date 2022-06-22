import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <Link href="/">
          <button>Home</button>
        </Link>{" "}
        <Link  href="/certificates">
                <button >Certificates</button>
              </Link>      
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </nav>
  );
}
