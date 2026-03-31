import { ReadOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../../shared/api/requests";
import { useParams } from "react-router-dom";

function Education() {
    const { data } = useGetUsersQuery();
    console.log(data);
    
    const { id } = useParams();
    const user = data?.find((user) => user.id === Number(id));
    return (
        <div className="bg-[var(--bg-sec)] shadow-xl rounded-2xl p-6">
            <h2 className="text-[var(--primary)] text-lg font-bold mb-6 flex items-center gap-3">
                <ReadOutlined className="text-[var(--primary)]" /> Education
            </h2>

            <div className="bg-[var(--bg-main)] rounded-xl p-4 flex items-center gap-4 mb-6 border">
                <div className="border border-[var(--primary)] p-3 rounded-lg text-[var(--primary)] text-xl w-12 h-12 flex items-center justify-center">
                    <ReadOutlined />
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Education Level</div>
                    <div className="text-[var(--color-black)] font-bold">{user?.education || 'Higher Education'}</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div className="col-span-2">
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Institution Name</div>
                    <div className="text-[var(--color-black)] font-medium">{user?.school || 'N/A'}</div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">School Number</div>
                    <div className="text-[var(--color-black)] font-medium">{user?.school_num || 'N/A'}</div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Graduation Year school</div>
                    <div className="text-[var(--color-black)] font-medium">{user?.graduation_year_school || 'N/A'}</div>
                </div>
                <div>
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Graduation Year</div>
                    <div className="text-[var(--color-black)] font-medium">{user?.graduation_year || 'N/A'}</div>
                </div>
            </div>
        </div>
    );
}

export default Education;