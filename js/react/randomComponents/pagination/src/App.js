import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Page from "./components/Page";
import Paginate from "./components/Paginate";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    getData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPagePosts = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h2>Pagination</h2>
      <Page posts={currentPagePosts} loading={loading} />
      <Paginate
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
}
