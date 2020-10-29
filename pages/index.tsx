import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World in NextJS</h1>
      <Link href="/cakes">Goto Cakes</Link>
    </div>
  );
}
