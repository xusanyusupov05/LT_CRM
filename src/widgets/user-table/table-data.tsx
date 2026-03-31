import React, { useState } from "react";
import { Button, Flex, Popconfirm, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../shared/api/requests";
import type { Users } from "../../shared/api/requests";
import { DeleteOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import ConfirmDeleteModal from "../../shared/ui/confirm-delete-modal";
import { msg } from "../../shared/ui/msg";
import Index from "../create-user";
import { useNavigate } from "react-router-dom";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];
const TableData = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const { data, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const columns: TableColumnsType<Users> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "",
      key: "avatar",
      render: (_, record) => (
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{
            backgroundColor:
              record.gender === "mele"
                ? "var(--color-blue)"
                : "var(--color-pink)",
          }}
        >
          {record.f_name?.[0]?.toUpperCase()}
        </div>
      ),
    },
    {
      title: "First name",
      dataIndex: "f_name",
    },
    {
      title: "Last name",
      dataIndex: "l_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phone_number",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            icon={<EyeOutlined />}
            className="my-btn !bg-transparent !border-transparent !text-slate-black"
            onClick={() =>
              navigate(`/users/${record.id}`)
            }
          />
          <Popconfirm
            title="Delete user"
            description="Are you sure you want to delete this user?"
            onConfirm={() => deleteUser(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Users> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDeleteSelected = () => {
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (isCorrect) {
      msg("success", "User deleted successfully");
      deleteUser(selectedRowKeys as number[])
        .unwrap()
        .then(() => {
          setSelectedRowKeys([]);
          setDeleteModalOpen(false);
        });
    } else {
      msg("error", "Invalid verification code");
      return;
    }
  };

  return (
    <Flex gap="middle" vertical className="relative">
      <Flex justify="end">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpenAddModal(true)}
        >
          Add User
        </Button>
      </Flex>
      <Table<Users>
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        className="mainFont"
        columns={columns}
        dataSource={data?.slice().sort((a, b) => b.id - a.id) ?? []}
        loading={isLoading}
        pagination={{
          pageSize: 8,
        }}
      />

      {data && data.length > 0 && selectedRowKeys.length > 0 && (
        <Button
          danger
          className="absolute bottom-4"
          onClick={handleDeleteSelected}
        >
          Delete {selectedRowKeys.length === data.length ? "all" : "selected"}
        </Button>
      )}

      <ConfirmDeleteModal
        open={deleteModalOpen}
        total={selectedRowKeys.length}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        setIsCorrect={setIsCorrect}
      />

      <Index
        open={openAddModal}
        onCancel={() => setOpenAddModal(false)}
      />

    </Flex>
  );
};

export default TableData;
