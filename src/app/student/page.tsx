export default function StudentPanel() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex">
      {/* Sidebar/Main content */}
      <div className="flex-1 p-8 flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* Left/Center: Progress & Filters */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h2 className="text-xl font-semibold mb-4">Course Progress & Filters</h2>
              <div className="flex gap-4 mb-4">
                <select className="bg-slate-700 p-2 rounded-lg text-sm flex-1 outline-none"><option>All Subjects</option></select>
                <select className="bg-slate-700 p-2 rounded-lg text-sm flex-1 outline-none"><option>All Topics</option></select>
              </div>
              <div className="h-40 bg-slate-700 rounded-xl flex items-center justify-center text-slate-500">Video Player Stub</div>
            </div>
            
            {/* Live Hub */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h2 className="text-xl font-semibold mb-4">Live Hub (Global Cohort)</h2>
              <p className="text-sm text-slate-400 mb-4">Chatting with 4 peers...</p>
              <div className="h-32 bg-slate-700 rounded-xl flex items-center justify-center text-slate-500">Live Chat Stub</div>
            </div>
          </div>
          
          {/* Right: AI Teacher */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-coral-400">AI Teacher</h2>
            <div className="flex-1 bg-slate-700 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
             <p className="text-slate-400 z-20">Avatar Video Stream</p>
            </div>
            <p className="text-sm mt-4 text-center text-slate-400">Your companion: Yoda</p>
          </div>
        </div>
      </div>
    </div>
  );
}
