import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";
import { useNavigate, useParams } from "react-router-dom";
import { AUTHENTICATED_ROUTE } from "../../utils/constant";

const AdminAddCategory = () => {
  const { categoryId } = useParams();
  const [categoryTitle, setCategoryTitle] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync: addCategoryRequest, isLoading: addCategoryLoader } =
    useMutation("addCategory", CategoryService.addCategory);

  const {
    mutateAsync: updateCategoryRequest,
    isLoading: updateCategoryLoader,
  } = useMutation(["updateCategory", categoryId], (payload) =>
    CategoryService.updateCategoryById(categoryId, payload)
  );

  const { data: editCategoryData, isLoading: editCategoryLoader } = useQuery(
    ["editCategory", categoryId],
    () => CategoryService.getCategoryById(categoryId),
    {
      enabled: Boolean(categoryId),
    }
  );

  // console.log(editCategoryData?.data?.results, "editCategoryData");

  useEffect(() => {
    if (editCategoryData?.data?.results) {
      form.setFieldsValue({
        cat_title: editCategoryData?.data?.results?.cat_title,
      });
      setCategoryTitle(editCategoryData?.data?.results?.cat_title);
    }
  }, [editCategoryData?.data?.results]);

  const onFinish = (values) => {
    if (categoryId) {
      //update
      updateCategoryRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Category is updated successfully.",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTE.CATEGORIES);
          }, 2000);
        },
      });
    } else {
      addCategoryRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Category is added successfully.",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTE.CATEGORIES);
          }, 2000);
        },
      });
    }
  };
  return (
    <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
      {contextHolder}
      <h2>{categoryId ? "Edit" : "Add"} Category</h2>
      <Form.Item
        name="cat_title"
        rules={[
          {
            required: true,
            message: "Please input your category title!",
          },
        ]}
      >
        <Input
          placeholder="Category title"
          onChange={(event) => setCategoryTitle(event.target.value)}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        loading={
          addCategoryLoader || editCategoryLoader || updateCategoryLoader
        }
        disabled={
          categoryId &&
          editCategoryData?.data?.results?.cat_title === categoryTitle
        }
      >
        {categoryId ? "Update" : "Create"} Category
      </Button>
    </Form>
  );
};
export default AdminAddCategory;
