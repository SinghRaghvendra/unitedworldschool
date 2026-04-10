export default function MasterAdminPanel() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-8">Master Admin Global View</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-slate-400 text-sm font-medium">Global Students</h3>
            <p className="text-3xl font-bold mt-2">12,450</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-slate-400 text-sm font-medium">Regional Admins</h3>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-slate-400 text-sm font-medium">Total Revenue (INR)</h3>
            <p className="text-3xl font-bold mt-2 text-green-400">₹149M</p>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Platform Controls</h2>
          <div className="flex gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg font-medium transition">Onboard Regional Admin</button>
            <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium transition">Configure Payment Gateway</button>
          </div>
        </div>
      </div>
    </div>
  );
}
