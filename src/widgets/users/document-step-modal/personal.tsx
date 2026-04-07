import { UserOutlined } from "@ant-design/icons"
import { Col, DatePicker, Divider, Form, Input, Row, Select, Typography } from "antd"

const Personal = () => {
  return (
    <>  
          <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><UserOutlined/>Personal Information</Divider>
          <Row gutter={15} className="mt-3">
              <Col span={8}>
                <Typography.Text className="mainFont text-[var(--main-color)]">Name</Typography.Text>
                <Form.Item name="name">
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Surname</Typography.Text>
                <Form.Item name="surname">
                  <Input placeholder="Surname" />
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Phone Number</Typography.Text>
                <Form.Item name="phone_number">
                  <Input placeholder="Phone number" />
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Email Address</Typography.Text>
                <Form.Item name="email">
                  <Input placeholder="Email Address" />
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Birth Date</Typography.Text>
                <Form.Item name="birth_date">
                  <DatePicker placeholder="Birth Date" className="w-full ant-picker-cell-today ant-picker-cell-inner"/>
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Gender</Typography.Text>
                <Form.Item name="gender">
                  <Select placeholder="Gender" options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                  ]} />
                </Form.Item>
              </Col>
              <Col span={8}>
              <Typography.Text className="mainFont text-[var(--main-color)]">Merried</Typography.Text>
                <Form.Item name="merried">
                  <Select placeholder="Merried" options={[
                    { value: 'true', label: 'True' },
                    { value: 'false', label: 'False' },
                  ]} />
                </Form.Item>
              </Col>
          </Row>
    </>
  )
}

export default Personal