import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CategoryService } from "../services/categories.service";
import SinglePost from "../components/SinglePost/SinglePost";
import { Spin } from "antd";

function CategoryDetail() {
  const { catId } = useParams();
  const { data: catDataById, isLoading: catLoading } = useQuery(
    ["categoryById", catId],
    () => CategoryService.getCategoryById(catId),
    {
      enabled: Boolean(catId),
    }
  );

  const singleCategoryData = catDataById?.data?.results;

  //   console.log(catDataById?.data?.results, "catDataById");
  return (
    <Spin spinning={catLoading}>
      <h2>Category Detail</h2>

      {singleCategoryData?.posts?.length > 0
        ? singleCategoryData?.posts?.map((singlePost) => {
            return <SinglePost singlePost={singlePost} />;
          })
        : !catLoading && <h2>No Post Found!</h2>}
    </Spin>
  );
}

export default CategoryDetail;
