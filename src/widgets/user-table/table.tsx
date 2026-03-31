import PageTitle from "../../shared/ui/page-title";
import PageWrapper from "../../shared/ui/page-wrapper";
import TableData from "./table-data";


const Table = () => {

  return (
    <>
      <PageWrapper>
        <PageTitle
          title="User Management"
          shortDesc="Manage your team members, roles, and accsess permission in one pleace"
          />
            <TableData/>
      </PageWrapper>
    </>
  );
};

export default Table;
