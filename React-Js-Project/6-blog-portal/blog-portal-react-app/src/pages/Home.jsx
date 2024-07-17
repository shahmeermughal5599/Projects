import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { postService } from "../services/posts.service";
import { helperService } from "../utils/helper";
import SinglePost from "../components/SinglePost/SinglePost";

function Home() {
  const { data: postData, isLoading: postLoading } = useQuery("posts", () =>
    postService.getPosts()
  );
  const posts = useMemo(
    () => postData?.data?.results,
    [postData?.data?.results]
  );

  if (postLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <h1 className="page-header">Blog Posts</h1>

      {/* <!-- First Blog Post --> */}
      {posts?.length > 0 ? (
        posts.map((singlePost) => {
          return <SinglePost singlePost={singlePost} />;
        })
      ) : (
        <h2>No Post Found!</h2>
      )}
    </div>
  );
}

export default Home;
