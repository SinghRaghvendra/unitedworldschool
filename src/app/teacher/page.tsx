export default function TeacherPanel() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Teacher Portal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Upload Curriculum (RAG Logic)</h2>
            <div className="border-2 border-dashed border-slate-300 rounded-xl h-40 flex items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 transition">
              Drag & Drop PDF Documents
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Manage AI Avatars</h2>
            <p className="text-slate-600 mb-4">Configure the interactive agents for your students.</p>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700">Avatar Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
