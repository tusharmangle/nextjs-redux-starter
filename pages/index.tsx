import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-5xl">Welcome to NextJS</div>
      <div className="my-5">
        <Link href="/cakes">
          <a className="btn btn-danger">Fetch Cakes</a>
        </Link>
        <Link href="/posts">
          <a className="btn btn-primary">Fetch Posts</a>
        </Link>
      </div>
    </div>
  );
}
