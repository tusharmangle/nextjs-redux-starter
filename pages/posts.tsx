import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux";
import Link from "next/link";
function Posts() {
  const { posts, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPosts = posts.map((post) => <h3 key={post.id}>{post.title}</h3>);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl my-2">
        <Link href="/">Home</Link>
      </h1>
      <h1 className="text-5xl">Posts</h1>
      <div> {loading && "Loading"}</div>
      <div className="text-lg">{!loading && renderPosts}</div>
    </div>
  );
}

export default Posts;
