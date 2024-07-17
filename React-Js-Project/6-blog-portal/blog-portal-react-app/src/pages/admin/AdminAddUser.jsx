import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button, Form, Input, Typography, message } from "antd";

import {
  AUTHENTICATED_ROUTE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_MESSAGE,
} from "../../utils/constant";
import { UserServices } from "../../services/users.services";
import { useNavigate, useParams } from "react-router-dom";
import CustomUpload from "../../components/CustomUpload/CustomUpload";
const { Title } = Typography;

function AdminAddUser() {
  const { userId } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [fileObject, setFileObject] = useState(null);

  const { data: editUserData, isLoading: editUserLoader } = useQuery(
    ["editUser", userId],
    () => UserServices.getUserById(userId),
    {
      enabled: Boolean(userId),
    }
  );

  const editData = editUserData?.data?.results;

  useEffect(() => {
    if (editUserData) {
      form.setFieldsValue({
        username: editData?.username,
        user_firstname: editData?.user_firstname,
        user_lastname: editData?.user_lastname,
        email: editData?.email,
        password: editData?.password,
        c_password: editData?.c_password,
      });
    }
  }, [editUserData]);

  const { mutateAsync: registerRequest, isLoading: registerRequestLoader } =
    useMutation("register", (payload) => UserServices.addUserFormData(payload));

  const { mutateAsync: updateUserRequest, isLoading: updateUserLoader } =
    useMutation("updateUser", (payload) =>
      UserServices.updateUserFormData(userId, payload)
    );

  const [form] = Form.useForm();
  const onFinish = (values) => {
    // {username: "asdasd",email:"asdasd@gmail.com"}
    const payload = values;

    if (fileObject) {
      payload.user_image = fileObject;
    }

    const formData = new FormData();

    Object.keys(payload).map((singleKey) => {
      formData.append(singleKey, payload[singleKey]);
    });

    if (fileObject) {
      formData.append("user_image", fileObject);
    }

    if (userId) {
      updateUserRequest(payload, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "User is updated successfully.",
          });
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTE.USERS);
          }, 2000);
        },
      });
    } else {
      registerRequest(formData, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "User is created successfully.",
          });
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTE.USERS);
          }, 2000);
        },
      });
    }
  };

  const customRequestCallback = (binaryFileObject) => {
    setFileObject(binaryFileObject);
  };
  return (
    <div>
      {contextHolder}
      <Title level={2}>Admin {userId ? "Edit" : "Add"} User</Title>

      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input placeholder="Type your username" />
        </Form.Item>
        <Form.Item
          name="user_firstname"
          rules={[
            {
              required: true,
              message: "Please input your user_firstname",
            },
          ]}
        >
          <Input placeholder="Type your user firstname" />
        </Form.Item>

        <Form.Item
          name="user_lastname"
          rules={[
            {
              required: true,
              message: "Please input your user lastname",
            },
          ]}
        >
          <Input placeholder="Type your user lastname" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter valid email address",
            },
          ]}
        >
          <Input placeholder="Type Your Email" />
        </Form.Item>

        {/* {!userId && ( */}
        {true && (
          <>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
                {
                  pattern: PASSWORD_REGEX,
                  message: PASSWORD_REGEX_MESSAGE,
                },
              ]}
            >
              <Input.Password placeholder="Type Your Password" />
            </Form.Item>

            <Form.Item
              name="c_password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password",
                },
                {
                  pattern: PASSWORD_REGEX,
                  message: PASSWORD_REGEX_MESSAGE,
                },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Type Your Confrim Password" />
            </Form.Item>
          </>
        )}

        <div style={{ marginTop: 10, marginBottom: 20 }}>
          <h4>Upload User Image</h4>
          <CustomUpload customRequestCallback={customRequestCallback} />
        </div>

        {editData?.user_image && (
          <div style={{ marginBottom: 20 }}>
            <img src={editData?.user_image} alt={editData?.email} width="100" />
          </div>
        )}

        <Button
          type="primary"
          htmlType="submit"
          loading={registerRequestLoader || editUserLoader || updateUserLoader}
        >
          {userId ? "Edit" : "Add"} User
        </Button>
      </Form>
    </div>
  );
}

export default AdminAddUser;
