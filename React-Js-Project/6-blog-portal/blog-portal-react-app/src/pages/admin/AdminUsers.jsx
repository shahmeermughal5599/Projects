import { Button, Modal, Table, message } from "antd";
import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "react-query";
import { UserServices } from "../../services/users.services";
import { helperService } from "../../utils/helper";
import { AUTHENTICATED_ROUTE } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const navigate = useNavigate();
  const [messageApi, messageHtml] = message.useMessage();
  const {
    data: userData,
    isLoading: userLoader,
    isFetching: userLoaderFetching,
    refetch: reloadUsers,
  } = useQuery("users", () => UserServices.getUsers());

  const { mutateAsync: userDeleteRequest, isLoading: deleteUserLoader } =
    useMutation("deleteUser", (userId) => UserServices.deleteUserById(userId));

  const deleteUserHandler = (row) => {
    Modal.confirm({
      title: "Do you want to delete this user ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        userDeleteRequest(row?.user_id, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "User is deleted successfully.",
            });
            reloadUsers();
          },
        });
      },
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },

    {
      title: "Firstname",
      dataIndex: "user_firstname",
      key: "user_firstname",
    },
    {
      title: "Lastname",
      dataIndex: "user_lastname",
      key: "user_lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      //   dataIndex: "user_image",
      key: "user_image",
      render: (row) => {
        if (!row?.user_image) {
          return "Image not found";
        }
        return <img src={row?.user_image} width="80" />;
      },
    },
    {
      title: "Role",
      dataIndex: "user_role",
      key: "user_role",
    },
    {
      title: "Created at",
      render: (row) => {
        return helperService.convertDateToOurFormat(row?.created_at);
      },
    },
    {
      title: "Updated at",
      render: (row) => {
        return helperService.convertDateToOurFormat(row?.updated_at);
      },
    },
    {
      title: "Edit",
      render: (row) => {
        return (
          <Button
            type="primary"
            onClick={() =>
              navigate(
                AUTHENTICATED_ROUTE.EDIT_USER.replace(":userId", row?.user_id)
              )
            }
          >
            Edit
          </Button>
        );
      },
    },
    {
      title: "Delete",
      render: (row) => {
        return (
          <Button
            type="primary"
            style={{
              backgroundColor: "red",
            }}
            onClick={() => deleteUserHandler(row)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      {messageHtml}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Users</h2>
        <Button
          type="primary"
          onClick={() => navigate(AUTHENTICATED_ROUTE.ADD_USER)}
        >
          Add User
        </Button>
      </div>

      <Table
        dataSource={userData?.data?.results}
        columns={columns}
        loading={userLoader || userLoaderFetching || deleteUserLoader}
      />
    </div>
  );
}

export default AdminUsers;
