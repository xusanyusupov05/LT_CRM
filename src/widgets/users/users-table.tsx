import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useGetUsersQuery } from '../../shared/api/requests';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  surname: string;
  region: string;
  married: string;
}

const UsersTable = () => {
  const {data} = useGetUsersQuery()
  const item = data?.map((el) => (
    {
      key: el.id,
      name: el.f_name,
      surname: el.l_name,
      region: el.region,
      married: el.merried,
    }
  ))
  
  const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
  },
  {
    title: 'Region',
    dataIndex: 'region',
  },
  {
    title: 'Married',
    dataIndex: 'married',
  },
  ];
  
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
       <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={item} />
    </>
  )
}

export default UsersTable