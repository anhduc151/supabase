import React from "react";
import "./sign-in.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="sign_in">
      <div className="sign_in_logo">
        <Link to="/" className="link">
          <p className="nav_logo_p">
            <span>F</span>
            <span className="logo_color">O</span>
            <span className="logo_color">O</span>
            <span>D</span>
          </p>
        </Link>
      </div>

      <div className="sign_in_right">
        <h1 className="sign_in_right_h1">Sign In</h1>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <div className="submit_btn">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>

      <div className="sign_in_left">
          
      </div>

        <div className="loop cubes">
          <div className="item cubes"></div>
          <div className="item cubes"></div>
          <div className="item cubes"></div>
          <div className="item cubes"></div>
          <div className="item cubes"></div>
          <div className="item cubes"></div>
        </div>
    </div>
  );
};

export default SignIn;
