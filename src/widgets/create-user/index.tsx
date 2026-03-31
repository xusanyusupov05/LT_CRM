import { Button, Flex, Form, Modal, Typography } from "antd";
import PageWrapper from "../../shared/ui/page-wrapper";
import PersonalSection from "./personal-section";
import PassportSection from "./passport-section";
import EducationSection from "./education-section";
import FamilySection from "./family-section";
import AddressSection from "./address-section";
import { useCreateUserMutation } from "../../shared/api/requests";
import type { Users } from "../../shared/api/requests";
import { msg } from "../../shared/ui/msg";

interface AddUserModalProps {
  open: boolean;
  onCancel: () => void;
}
const Index = ({open, onCancel}: AddUserModalProps) => {
  const [form] = Form.useForm();
  const [createUser] = useCreateUserMutation();

  const handleSubmit = (values: Users) => {
    if (
      Object.values(values).some((e) =>
        typeof e === "string" ? e.trim() === "" : e == null,
      )
    ) {
      return;
    }
    const cleanPhoneNumber = values.phone_number.replace(/^\+998/, "");

    createUser({
      ...values,
      phone_number: `+998${cleanPhoneNumber}`,
    });
    msg("success", "User created successfully");
    form.resetFields();
    onCancel();
  };

  const onkeydown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      form.submit();
      form.resetFields();
      onCancel();
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      closable={false}  
      width="80%"
      className="pb-20"
    >
      <PageWrapper>
        <Flex vertical> 
          <Typography.Text className="text-2xl font-bold pb-5 mainFont">Add new user</Typography.Text>
          <Form
            form={form}
            onFinish={handleSubmit}
            className="flex flex-col gap-5 pb-10"
          >
            <PersonalSection />
            <PassportSection />
            <EducationSection />
            <AddressSection />
            <FamilySection />
            <Flex justify="end" gap={20}>
              <Button type="default" htmlType="button" className="px-10" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" className="px-10">
                Submit
              </Button>
            </Flex>
          </Form>
        </Flex>
      </PageWrapper>
    </Modal>
  );
};

export default Index;
