import { IdcardOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../../shared/api/requests";
import { useParams } from "react-router-dom";

function Personal() {
    const { data } = useGetUsersQuery();
    const { id } = useParams();
    const user = data?.find((user) => user.id === Number(id));
    return (
        <div className="bg-[var(--bg-sec)] shadow-xl rounded-2xl p-6">
            <h2 className="text-[var(--primary)] text-lg font-bold mb-6 flex items-center gap-3">
                <IdcardOutlined className="text-[var(--primary)]" /> Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Full Name
                    </div>
                    <div className="text-[var(--color-black)] font-medium">
                        {user?.f_name} {user?.l_name}
                    </div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Username
                    </div>
                    <div className="text-[var(--color-black)] font-medium">
                        {user?.f_name?.toLowerCase()}_{user?.l_name?.toLowerCase()}
                    </div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Birth Date
                    </div>
                    <div className="text-[var(--color-black)] font-medium">{user?.date || "N/A"}</div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Gender
                    </div>
                    <div className="text-[var(--color-black)] font-medium">
                        {user?.gender || "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Marital Status
                    </div>
                    <div className="text-[var(--color-black)] font-medium">
                        {user?.merried || "N/A"}
                    </div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">
                        Passport No.
                    </div>
                    <div className="text-[var(--color-black)] font-medium">
                        {user?.passport_series} {user?.passport_number}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
