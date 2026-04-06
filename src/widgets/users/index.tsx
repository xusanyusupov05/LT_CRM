import PageTitle from "../../shared/ui/page-title"
import PageWrapper from "../../shared/ui/page-wrapper"
import UsersTable from "./users-table"
import { ArrowLeftOutlined } from "@ant-design/icons"

const Users = () => {
  return (
    <>
    <PageWrapper returnBtnText="Main Page" icon={<ArrowLeftOutlined/>} backBtn={true}>
        <PageTitle title="Users"  key={null}  shortDesc="All System Users" />
        <UsersTable />
    </PageWrapper>
    </>
  )
} 

export default Users