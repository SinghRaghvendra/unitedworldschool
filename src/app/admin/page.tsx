export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Regional Admin Dashboard</h1>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Pending Admissions</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-slate-500 font-medium">Student Name</th>
                <th className="py-2 text-slate-500 font-medium">Location</th>
                <th className="py-2 text-slate-500 font-medium">Status</th>
                <th className="py-2 text-slate-500 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="py-3">John Doe</td>
                <td className="py-3">New Delhi, India</td>
                <td className="py-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Pending Review</span></td>
                <td className="py-3"><button className="text-teal-600 hover:text-teal-800 font-medium">Review</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
