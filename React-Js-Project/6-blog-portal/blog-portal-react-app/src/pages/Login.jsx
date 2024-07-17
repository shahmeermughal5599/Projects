import React from "react";
import { useMutation } from "react-query";
import { Button, Form, Input, Typography, message } from "antd";
import { UserServices } from "../services/users.services";
import {
  AUTHENTICATED_ROUTE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_MESSAGE,
  UNAUTHENTICATED_ROUTES,
} from "../utils/constant";
import { AuthServices } from "../utils/authService";
const { Title } = Typography;

function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: loginRequest, isLoading: loginRequestLoader } =
    useMutation("login", (payload) => UserServices.login(payload));

  const [form] = Form.useForm();
  const onFinish = (values) => {
    loginRequest(values, {
      onSuccess: (data) => {
        messageApi.open({
          type: "success",
          content: "User is logged in successfully!",
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
      <Title level={2}>Login</Title>

      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
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
          initialValue="oscar41@example.net"
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
          initialValue="admin123@"
        >
          <Input.Password placeholder="Type Your Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loginRequestLoader}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
