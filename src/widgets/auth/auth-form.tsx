import { Button, Flex, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined, GlobalOutlined } from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import { users, type User } from "./users";
import { msg } from "../../shared/ui/msg";
import { getLocalStorage, setLocalStorage } from "../../shared/lib/helpers/storage";
import { useEffect, useState } from "react";
 
const AuthForm = () => {
  const admin_password = import.meta.env.VITE_ADMIN_PASSWORD 
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  
  const handleUserCheck = ( val:User ) => {
    const fname = val.fname?.trim();
    const password = val.password?.trim();
    const confirm_password = val.confirm_password?.trim();
    if (!fname || !password || !confirm_password) {
      msg("error", "Please fill in all fields");
      return;
    }
    
    if (password !== confirm_password) {
      msg("warning", "Passwords do not match");
      return;
    }
 
    if (users.some((user) => user.fname === fname && user.password === password && user.confirm_password === password)) {
      msg("success", `Welcome to  ${ password && confirm_password === admin_password ? `${fname} admin panel` : fname}! `);
      setLocalStorage("auth", JSON.stringify(true));
      setTimeout(() => {
        navigate("/");
      }, 2300);
    }else {
      msg("error", "If you want to register on the site, contact @yxusan via telegram.");
      form.resetFields();
      return;
    }

    form.resetFields();
  }

   


  return (
      <div
        className="w-full h-[calc(100vh-65px)] flex items-center justify-center flex-col"
        style={{ backgroundColor: "var(--bg-main)" }}
      >
        <Flex
          vertical
          className="w-[480px] p-8 gap-5 bg-[var(--bg-sec)] rounded-xl shadow-xl"
        >
          <Typography.Text className="secondaryFont text-xl">
            Entering the digital fortress
          </Typography.Text>

          <Form form={form} onFinish={handleUserCheck} >

            <Flex vertical>
            <Typography.Text className="font-bold mainFont text-xs"> Full name </Typography.Text>
            <Form.Item name={"fname"}>
              <Input autoComplete="off" prefix={<UserOutlined />} placeholder="Jane Doe " />
            </Form.Item>
            </Flex>

            <Flex vertical>
              <Typography.Text className="font-bold mainFont text-xs"> Password </Typography.Text>
              <Form.Item name={"password"}>
                <Input.Password  autoComplete="new-password" prefix={<LockOutlined />} placeholder="* * * * * * *" />
              </Form.Item>
            </Flex>

            <Flex vertical>
            <Typography.Text className="font-bold mainFont text-xs"> Confirm password </Typography.Text>
            <Form.Item name={"confirm_password"}>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="* * * * * * * "
              />
            </Form.Item>
            </Flex>

            <Form.Item>
              <Button htmlType="submit" type="primary" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Flex>

        <Flex className="w-[480px]" gap={10}>
        <Flex className="bg-[var(--bg-sec)] rounded-2xl px-4 py-2 mt-2 border shadow-xl" gap={15}>
                  <div className="w-12 h-12 px-5 bg-[#ECFDF5] rounded-full flex items-center justify-center border border-green-700"><SafetyOutlined className="text-2xl text-green-500"/></div>
                  <Flex vertical>
                    <Typography.Text className="text-xs mainFont text-[var(--txt-gray)] font-bold">ENCRYPTION STANDART</Typography.Text>
                    <Typography.Text className="text-xs mainFont font-bold">BB234</Typography.Text>
                  </Flex>
                </Flex>

                <Flex className="bg-[var(--bg-sec)] rounded-2xl px-4 py-2 mt-2 border shadow-xl" gap={15} >
                  <div className="w-12 h-12 px-5 bg-[#E8F0FE] rounded-full flex items-center justify-center border border-blue-700"><GlobalOutlined className="text-2xl text-blue-500"/></div>
                  <Flex vertical>
                    <Typography.Text className="text-xs mainFont text-[var(--txt-gray)] font-bold">AUTHENTICATION PROVIDER</Typography.Text>
                    <Typography.Text className="text-xs mainFont font-bold">Binary Bridge</Typography.Text>
                  </Flex>
                </Flex>
        </Flex>

        <Typography.Text className="absolute bottom-5 text-[var(--txt-gray)]">© 2026 Admin Panel Enterprice. All rights reserved</Typography.Text>
      </div>
  );
};

export default AuthForm;
