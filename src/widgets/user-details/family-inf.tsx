import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useGetUsersQuery } from "../../shared/api/requests";
import { useParams } from "react-router-dom";
function FamilyInf() {
  const { data } = useGetUsersQuery();
  const { id } = useParams();
  const user = data?.find((u) => u.id === Number(id));

  return (
    <div className="bg-[var(--bg-sec)] shadow-xl rounded-2xl p-6">
      <h2 className="text-[var(--primary)] text-lg font-bold mb-6 flex items-center gap-3">
        <TeamOutlined className="text-blue-500" /> Family Details
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[var(--bg-sec)] p-4 rounded-xl border ">
          <div className="text-[var(--color-black)] text-[10px] font-bold mb-3 tracking-widest uppercase flex items-center gap-2">
            <UserOutlined /> Father's Name
          </div>
          <div className="text-[var(--color-black)] font-medium text-sm">{user?.parents_name?.split(',')[0] || user?.parents_name || 'N/A'}</div>
        </div>
        <div className="bg-[var(--bg-sec)] p-4 rounded-xl border ">
          <div className="text-[var(--color-black)] text-[10px] font-bold mb-3 tracking-widest uppercase flex items-center gap-2">
            <UserOutlined /> Mother's Name
          </div>
          <div className="text-[var(--color-black)] font-medium text-sm">{user?.parents_name?.split(',')[1]?.trim() || 'N/A'}</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Children</div>
        <a href="#" className="text-blue-500 text-[11px] font-bold hover:text-blue-400">Add New</a>
      </div>

      <div className="flex flex-col gap-3">
        {user?.childs ? (
          user?.childs.split(',').map((child, idx) => {
            const cleanedChild = child.trim();
            if (!cleanedChild) return null;
            return (
              <div key={idx} className="bg-[var(--bg-main)] border p-3 rounded-xl flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[var(--primary)] text-[var(--primary)] flex items-center justify-center font-bold text-sm">
                    {cleanedChild[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[var(--primary)] font-medium text-sm">{cleanedChild}</div>
                  </div>
                </div>
                <div className="text-slate-500 cursor-pointer hover:text-white px-2">⋮</div>
              </div>
            );
          })
        ) : (
          <div className="text-slate-500 text-sm italic">No children listed</div>
        )}
      </div>
    </div>
  );
}

export default FamilyInf;
