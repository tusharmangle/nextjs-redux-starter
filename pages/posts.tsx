import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux";
function Posts() {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    </div>
  );
}

export default Posts;
