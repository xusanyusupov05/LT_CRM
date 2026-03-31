import { EnvironmentOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../../shared/api/requests";
import { useParams } from "react-router-dom";

function Address() {
    const { data } = useGetUsersQuery();
    const { id } = useParams();
    const user = data?.find((user) => user.id === Number(id));
    return (
        <div className="bg-[var(--bg-sec)] shadow-xl rounded-2xl p-6">
            <h2 className="text-[var(--primary)] text-lg font-bold mb-6 flex items-center gap-3">
                <EnvironmentOutlined className="text-[var(--primary)]" /> Address Details
            </h2>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-6">
                <div className="col-span-2">
                    <div className="text-[var(--color-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Region / Province</div>
                    <div className="text-[var(--txt-black)] font-medium">{user?.region || 'N/A'}</div>
                </div>
                <div className="col-span-2">
                    <div className="text-[var(--txt-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Street</div>
                    <div className="text-[var(--txt-black)] font-medium">{user?.street || 'N/A'}</div>
                </div>
                <div>
                    <div className="text-[var(--txt-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">House Number</div>
                    <div className="text-[var(--txt-black)] font-medium">{user?.house_number || 'N/A'}</div>
                </div>
                <div>
                    <div className="text-[var(--txt-black)] text-[10px] font-bold mb-1 tracking-widest uppercase">Apartment / Unit</div>
                    <div className="text-[var(--txt-black)] font-medium">A-12</div>
                </div>
            </div>

            <div className="bg-[var(--bg-main)] rounded-xl p-4 border">
                <div className="flex items-center gap-3 text-slate-300">
                    <EnvironmentOutlined className="text-blue-500 text-lg" />
                    <span className="font-medium text-sm text-[var(--primary)]" >
                        {[user?.region, user?.street, user?.house_number].filter(Boolean).join(', ')}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Address;