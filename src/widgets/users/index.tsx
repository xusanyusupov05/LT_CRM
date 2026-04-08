import PageTitle from "../../shared/ui/page-title"
import PageWrapper from "../../shared/ui/page-wrapper"
import UsersTable from "./users-table"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"

const Users = () => {
  const { t } = useTranslation();
  return (
    <>
    <PageWrapper returnBtnText="Main Page" icon={<ArrowLeftOutlined/>} backBtn={true}>
        <PageTitle title={t("users")}  key={null}  shortDesc={t("all_system_users")} />
        <UsersTable />  
    </PageWrapper>
    </>
  )
} 

export default Users