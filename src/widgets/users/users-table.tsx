import React, { useState } from 'react';
import { Button, Table, Modal, Flex, Form } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useCreateUserMutation, useDeleteUserMutation, useGetUsersQuery } from '../../shared/api/requests';
import { DeleteOutlined, EditOutlined, EyeOutlined, UserAddOutlined } from '@ant-design/icons';
import { useUserLoginGetQuery } from '../auth/api/request';
import Personal from './user-information-modal/personal';
import Documents from './user-information-modal/documents';
import Education from './user-information-modal/education';
import Address from './user-information-modal/address';
import { useTranslation } from 'react-i18next';
import { msg } from '../../shared/ui/msg';

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  surname: string;
  region: string;
  married: string;
}

const UsersTable = () => {
  const { t } = useTranslation();
  const { data: user } = useUserLoginGetQuery()
  const [createUser] = useCreateUserMutation()
  const { data } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation()
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const item = data?.map((el) => ({
    key: el.id,
    name: el.name,
    surname: el.surname,
    region: el.region,
    married: el.is_married,
  })).reverse();
  
  function handleDelete(id:number){
    data?.map((el) => (
      el.id === id && deleteUser(id)
    ))
    msg("success", "Foydalanuvchi o'chirildi")
    return 
  }

  const columns: TableColumnsType<DataType> = [
    { 
      title: t("name"),
      dataIndex: 'name' 
    },
    { 
      title: t("surname"), 
      dataIndex: 'surname' 
    },
    { 
      title: t("region"), 
      dataIndex: 'region' 
    },
    { 
      title: t("married"), 
      dataIndex: 'married' 
    },
    { 
      title: t("actions"), 
      dataIndex: 'actions', 
      render: (_, record) => (
        <Flex align='center' gap={10}>
          <Button className='!border-0 !bg-transparent !text-[var(--main-color)]' icon={<EyeOutlined/>}/>
          <Button className='!border-0 !bg-transparent !text-[var(--main-color)]' icon={<EditOutlined/>}/>
          <Button onClick={() => handleDelete(record.key as number)} className='!border-0 !bg-transparent !text-[var(--danger)]' icon={<DeleteOutlined/>}/>
        </Flex>
      )
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await createUser(values)

      form.resetFields();
      setOpen(false);
    } catch (err) {
      console.log('Validation failed:', err);
    }
  };

  return (
    <>
      {
        user?.role === 'admin' && (
          <Flex className="fixed right-[70px] top-48" justify="end">
            <Button icon={<UserAddOutlined />} onClick={() => setOpen(true)} className="btn-success px-6 ">
              {t("add_user")}
            </Button>
          </Flex>
        )
      }

      <div className="rounded-xl overflow-hidden shadow-md">
        <Table<DataType>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={item}
        />
      </div>

      {
        open && (
          <Modal
            open={open}
            onCancel={() => setOpen(false) }
            className='mainFont !w-[1000px]'
            style={{top:10}}
            styles={{
              mask: {
                backdropFilter: 'blur(6px)',
                background: 'rgba(0,0,0,0.3)',
              },
              body:{
                marginTop: '-20px',
                marginBottom: '-20px'
              },
              footer:{
                display: 'none'
              },
            }}
            >
            <Form form={form}>
              <Personal />    
              <Documents/>
              <Address/>
              <Education/>
              <Flex justify='end' gap={10}>
                <Button onClick={() => {setOpen(false),form.resetFields()}}>{t("cancel")}</Button>
                <Form.Item>
                  <Button htmlType='submit' onClick={handleOk} className='bg-[var(--main-color)] text-[var(--bg-sec)] hover:!bg-[var(--main-color)] hover:!text-[var(--bg-sec)]'>{t("submit")}</Button>
                </Form.Item>
              </Flex>
            </Form>
          </Modal>
        )
      }

    </>
  );
};

export default UsersTable;