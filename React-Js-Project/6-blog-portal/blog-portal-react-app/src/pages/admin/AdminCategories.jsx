import React from "react";
import { Button, Modal, Table, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";
import { helperService } from "../../utils/helper";
import { Link, useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTE } from "../../utils/constant";

function AdminCategories() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isFetching,
    refetch: reloadCategories,
  } = useQuery("adminCategories", () => CategoryService.getCategory());

  const {
    mutateAsync: categoryDeleteRequest,
    isLoading: categoryDeleteLoader,
  } = useMutation("deleteCategory", (catId) =>
    CategoryService.deleteCategoryById(catId)
  );

  const deleteCategoryHandler = (row) => {
    const catId = row?.cat_id;
    Modal.confirm({
      title: "Do you want to delete this category ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        categoryDeleteRequest(catId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Category is deleted successfully.",
            });
            reloadCategories();
          },
        });
      },
    });
  };

  const columns = [
    {
      title: "Category Id",
      key: "catId",
      render: (row) => {
        return row?.cat_id;
      },
    },
    {
      title: "Name",
      //   dataIndex: "cat_title",
      key: "name",
      render: (row) => {
        return (
          <Link
            to={AUTHENTICATED_ROUTE.EDIT_CATEGORY.replace(
              ":categoryId",
              row?.cat_id
            )}
          >
            {row?.cat_title}
          </Link>
        );
      },
    },
    {
      title: "Created At",
      key: "created_at",
      render: (row) => {
        return helperService.convertDateToOurFormat(row?.created_at);
      },
    },
    {
      title: "Updated At",
      key: "updated_at",
      render: (row) => {
        return helperService.convertDateToOurFormat(row?.updated_at);
      },
    },
    {
      title: "Edit",
      key: "edit",
      render: (row) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              navigate(
                AUTHENTICATED_ROUTE.EDIT_CATEGORY.replace(
                  ":categoryId",
                  row?.cat_id
                )
              );
            }}
          >
            Edit
          </Button>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (row) => {
        return (
          <Button
            type="primary"
            style={{
              background: "red",
            }}
            onClick={() => deleteCategoryHandler(row)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Categories</h2>
        <Button
          type="primary"
          onClick={() => navigate(AUTHENTICATED_ROUTE.ADD_CATEGORY)}
        >
          Add Category
        </Button>
      </div>

      <Table
        dataSource={data?.data?.results}
        columns={columns}
        loading={isLoading || isFetching || categoryDeleteLoader}
      />
    </div>
  );
}

export default AdminCategories;
