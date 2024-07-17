import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "react-query";
import { commentService } from "../../services/comments.service";
import { Button, Modal, Table, Tag, message } from "antd";
import { helperService } from "../../utils/helper";
import { redirect } from "react-router-dom";

function AdminComments() {
  const [messageApi, messageHtml] = message.useMessage();
  const {
    data: commentDataResponse,
    isLoading,
    refetch: reloadComments,
  } = useQuery("comments", () => commentService.getAllComments());

  const { mutateAsync: deleteRequest, isLoading: deleteCommentLoader } =
    useMutation("deleteComment", (commentId) =>
      commentService.deleteCommentById(commentId)
    );

  const { mutateAsync: approveRequest, isLoading: approveCommentLoader } =
    useMutation("approveRequest", (commentId) =>
      commentService.approveCommentById(commentId)
    );

  const { mutateAsync: unapproveRequest, isLoading: unapproveCommentLoader } =
    useMutation("unapproveRequest", (commentId) =>
      commentService.unapproveCommentById(commentId)
    );

  const deleteCommentHandler = (row) => {
    // commentService.deleteCommentById(row.comment_id);

    Modal.confirm({
      title: "Do you want to delete this comment ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteRequest(row?.comment_id, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Comment is deleted successfully.",
            });

            reloadComments();
          },
        });
      },
    });
  };

  const approveUnApproveHandler = (commentStatus, row) => {
    if (commentStatus === "unapproved") {
      //approved karoge
      approveRequest(row?.comment_id, {
        onSuccess: () => {
          reloadComments();
        },
      });
    } else {
      //unapproved karoge
      unapproveRequest(row?.comment_id, {
        onSuccess: () => {
          reloadComments();
        },
      });
    }
  };

  const columns = [
    {
      title: "Comment Id",
      dataIndex: "comment_id",
      key: "comment_id",
    },
    {
      title: "User Name",
      dataIndex: ["user", "username"],
      key: "user.username",
    },
    {
      title: "Post Name",
      dataIndex: ["post", "post_title"],
      key: "post.post_title",
    },
    {
      title: "Comment Content",
      dataIndex: "comment_content",
      key: "comment_content",
    },
    {
      title: "Comment Status",
      dataIndex: "comment_status",
      key: "comment_status",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (indexedData, _) => {
        return helperService.convertDateToOurFormat(indexedData);
      },
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (indexedData, _) => {
        return helperService.convertDateToOurFormat(indexedData);
      },
    },
    {
      title: "Actions",
      dataIndex: "comment_status",
      key: "comment_status",
      render: (indexedData, rowObject) => {
        return (
          <Tag
            color={indexedData === "unapproved" ? "#87d068" : "#f50"}
            onClick={() => approveUnApproveHandler(indexedData, rowObject)}
            style={{
              cursor: "pointer",
            }}
          >
            {indexedData === "unapproved" ? "Approve" : "Un Approve"}
          </Tag>
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
            onClick={() => deleteCommentHandler(row)}
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
      <h2>Comments</h2>
      <Table
        dataSource={commentDataResponse?.data?.results}
        columns={columns}
        loading={
          isLoading ||
          deleteCommentLoader ||
          approveCommentLoader ||
          unapproveCommentLoader
        }
      />
      ;
    </div>
  );
}

export default AdminComments;
