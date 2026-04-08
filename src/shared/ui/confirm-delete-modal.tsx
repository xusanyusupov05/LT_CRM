import { WarningOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { msg } from "./msg";

interface ConfirmDeleteModalProps {
  open: boolean;
  total: number;
  onCancel: () => void;
  onConfirm: () => void;
  setIsCorrect: (value: boolean) => void;
  smallModal?: boolean;
}

const delete_code = [
  "XJ975LQ8KP",
  "BT583LQ7XZ",
  "PL903AZ6RM",
  "UZ007DR4LK",
  "AP303SP9QW",
  "AZ555ZR2NM",
  "PP303PP8TR",
  "KL839XZ5QP",
  "MN482PL6AZ",
  "QR903LM7ZX",
  "TY660KP4DS",
  "HG391XR8PL",
  "DS204LK7QT",
  "ZX775AB9PL",
  "QP902MN6TR",
];

const ConfirmDeleteModal = ({
  open,
  total,
  onCancel,
  onConfirm,
  setIsCorrect,
  smallModal
}: ConfirmDeleteModalProps) => {
  if (!open) return null;
  const [form] = Form.useForm();
  const [generatedCode] = useState(
    delete_code[Math.floor(Math.random() * delete_code.length)],
  );
  const onFinish = (values: any) => {
   if (smallModal === false) {
    if (values.verification_code === generatedCode) {
      setIsCorrect(true);
      onConfirm();
    } else {
      msg("error", "Invalid verification code");
      setIsCorrect(false);
      return;
    }
   }
  };

  return (
    <Modal open={open} footer={null} closable={false}>
      <Flex vertical gap={10}>
        <Flex align="center" gap={10} className="border-b pb-5">
          <WarningOutlined className="px-5 py-5 bg-red-500/40 rounded-full text-red-800" />
          <Typography.Title level={4}>Confirm Deletion</Typography.Title>
        </Flex>
           <Typography.Text className="mainFont">
          This action will permanently delete <b>{total}</b> total entries. To
          prevent accidental data loss, please type the security code below to
          proceed.
        </Typography.Text>

        <Flex className="w-full bg-[#F3F4F6] py-3 rounded-xl flex justify-center">
          <Typography.Text
            strong
            className="text-xl text-[#4338CA] select-none"
          >
            {generatedCode}
          </Typography.Text>
        </Flex>

        <Form form={form} onFinish={onFinish}>
          <Flex vertical>
            <Typography.Text className="font-semibold">
              VERIFICATION CODE
            </Typography.Text>

            <Form.Item name="verification_code">
              <Input
                placeholder="Type BB557OSR39 to confirm"
                className="py-3 rounded-xl"
              />
            </Form.Item>
          </Flex>

          <Flex align="center" justify="end" gap={10}>
            <Button
              onClick={onCancel}
              className="font-semibold border !border-slate-400 !text-slate-black !bg-transparent rounded-xl"
            >
              Cancel
            </Button>

            <Form.Item className="mb-0" name="confirm_code">
              <Button
                type="default"
                htmlType="submit"
                onClick={onConfirm}
                className=" !bg-red-500/40 !text-red-800 !border-red-500/40 font-bold rounded-xl"
              >
                Confirm
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
};

export default ConfirmDeleteModal;
