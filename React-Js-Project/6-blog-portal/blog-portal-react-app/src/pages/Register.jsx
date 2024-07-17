import React from "react";
import { useMutation } from "react-query";
import { Button, Form, Input, Typography, message } from "antd";
import { UserServices } from "../services/users.services";
import {
  AUTHENTICATED_ROUTE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_MESSAGE,
} from "../utils/constant";
import { AuthServices } from "../utils/authService";
const { Title } = Typography;

function Register() {
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: registerRequest, isLoading: registerRequestLoader } =
    useMutation("register", (payload) => UserServices.register(payload));

  const [form] = Form.useForm();
  const onFinish = (values) => {
    // {username: "asdasd",email:"asdasd@gmail.com"}
    registerRequest(values, {
      onSuccess: (data) => {
        messageApi.open({
          type: "success",
          content: "User is registered successfully.",
        });
        form.resetFields();

        const apiResponse = data?.data?.results;

        AuthServices.saveToken(apiResponse?.token);
        AuthServices.saveUserName(apiResponse?.username);

        //hard reload
        window.location.href = AUTHENTICATED_ROUTE.DASHBOARD;
      },
    });
  };
  return (
    <div>
      {contextHolder}
      <Title level={2}>Register</Title>

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
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Type Your Confrim Password" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={registerRequestLoader}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
