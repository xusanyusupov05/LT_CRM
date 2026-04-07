import React, { useState } from 'react';
import { Button, Table, Modal, Form, Input, Select, Flex } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useGetUsersQuery } from '../../shared/api/requests';
import { UserAddOutlined } from '@ant-design/icons';
import { useUserLoginGetQuery } from '../auth/api/request';
import Personal from './document-step-modal/personal';
import Documents from './document-step-modal/documents';
import Education from './document-step-modal/education';

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
  const { data: user } = useUserLoginGetQuery()
  const { data } = useGetUsersQuery();

  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const item = data?.map((el) => ({
    key: el.id,
    name: el.f_name,
    surname: el.l_name,
    region: el.region,
    married: el.merried,
  }));

  // ✅ Columns
  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Region', dataIndex: 'region' },
    { title: 'Married', dataIndex: 'married' },
  ];

  // ✅ Row selection
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // const handleOk = async () => {
  //   try {
  //     const values = await form.validateFields();
  //     console.log('Form values:', values);


  //     form.resetFields();
  //     setOpen(false);
  //   } catch (err) {
  //     console.log('Validation failed:', err);
  //   }
  // };

  return (
    <>
      {
        user?.role === 'admin' && (
          <Flex className="mb-5 fixed right-14 top-28" justify="end">
            <Button icon={<UserAddOutlined />} onClick={() => setOpen(true)} className="btn-success px-6 ">
              Add User
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
            onCancel={() => setOpen(false)}
            className='mainFont !w-[1000px]'
            styles={{
              mask: {
                backdropFilter: 'blur(6px)',
                background: 'rgba(0,0,0,0.3)',
              },
              footer: {
                display: 'none',
              }
            }}
          >
            <Personal />    
            <Documents/>
            <Education/>
          </Modal>
        )
      }

    </>
  );
};

export default UsersTable;