import React from "react";
import "./Comps.css";

const Page = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <ul style={{ listStyle: "none" }}>
      {posts.map((post) => (
        <li key={post.id} id="item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Page;
