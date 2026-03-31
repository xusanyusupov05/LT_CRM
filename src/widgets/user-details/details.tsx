import { Button, Skeleton } from "antd";
import PageWrapper from "../../shared/ui/page-wrapper";
import {
  ArrowLeftOutlined,
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useGetUsersQuery } from "../../shared/api/requests";
import { useParams } from "react-router-dom";
import FamilyInf from "./family-inf";
import Address from "./address";
import Education from "./education";
import Personal from "./personal";

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date).replace(",", "");
};

const UserDetails = () => {
  const { data, isLoading } = useGetUsersQuery();
  const { id } = useParams();
  const user = data?.find((user) => user.id === Number(id));

  if (isLoading) {
    return (
      <PageWrapper
        backBtn={true}
        icon={<ArrowLeftOutlined />}
        returnBtnText="Back to Users table"
      >
        <Skeleton avatar paragraph={{ rows: 65 }} />
      </PageWrapper>
    );
  }

  if (!user) {
    return (
      <PageWrapper
        backBtn={true}
        icon={<ArrowLeftOutlined />}
        returnBtnText="Back to Users table"
      >
        <div>User not found</div>
      </PageWrapper>
    );
  }

  const isMale =
    user.gender?.toLowerCase() === "mele" ||
    user.gender?.toLowerCase() === "male";

  return (
    <PageWrapper
      backBtn={true}
      icon={<ArrowLeftOutlined />}
      returnBtnText="Back to Users table"
    >
      <div className="bg-transparent min-h-[calc(100vh-100px)] -mx-8 -my-4 p-8 font-sans">
        {/* Top Card */}
        <div className="bg-[var(--bg-sec)] shadow-xl rounded-2xl p-6 mb-6 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
            {/* Avatar */}
            <div
              className={`w-36 h-36 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                isMale
                  ? "bg-[var(--color-blue)]"
                  : "bg-[var(--color-pink)]"
              }`}
            >
              <span className="text-[var(--bg-sec)] text-6xl font-bold">
                {user.f_name?.[0]}
              </span>
            </div>

            <div className="flex flex-col justify-center py-2 w-full text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold text-[var(--color-black)] m-0 relative top-1">
                  {user.f_name} {user.l_name}
                </h1>
              </div>

              <p className="text-[var(--color-black)] text-sm mb-5">
                @{user.f_name?.toLowerCase()}
                {user.l_name?.toLowerCase()}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3 text-[var(--color-black)] text-sm">
                  <MailOutlined className="text-blue-500" />{" "}
                  {user.email || "N/A"}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-[var(--color-black)] text-sm">
                  <PhoneOutlined className="text-blue-500" />{" "}
                  {user.phone_number || "N/A"}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-[var(--color-black)] text-sm">
                  <ClockCircleOutlined className="text-blue-500" />{" "}
                  {formatDate(user?.created_at)}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-[var(--color-black)] text-sm">
                  <SafetyCertificateOutlined className="text-blue-500" />{" "}
                  Passport: {user.passport_series}{" "}
                  {user.passport_number}
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
            <Button
              type="primary"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 border-0 h-10 px-6 font-medium rounded-lg"
              icon={<EditOutlined />}
            >
              Edit Profile
            </Button>

            <Button
              className="w-full md:w-auto bg-[#2a3044] hover:bg-[#343b52] text-white border-0 h-10 px-6 font-medium rounded-lg"
              icon={<DownloadOutlined />}
            >
              Export PDF
            </Button>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Personal />
          <Education />
          <Address />
          <FamilyInf />
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserDetails;


// [
//     {
//         username:'@umirzakov_mu',
//         password: 'umirzakov'
//         confirm_password: 'umirzakov'
//     },
//     {
//         username: '@jasur_nj',
//         password: 'jasur'
//         confirm_password: 'jasur'
//     },
//     {
//         username: '@elshods',
//         password: 'elshod'
//         confirm_password: 'elshod'
//     },
//     {
//         username: '@Farrux094',
//         password: 'farruh'
//         confirm_password: 'farruh'
//     }
// ]