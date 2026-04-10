export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">UnitedWorldSchool Admission</h1>
        <p className="text-slate-600 mb-4 text-center">Join our global network of students for Rs. 12000 / year.</p>
        <div className="space-y-4">
          {/* Form stub */}
          <input className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Student Name" />
          <input className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Parent Email" />
          <button className="w-full bg-teal-600 text-white font-semibold rounded-lg p-3 hover:bg-teal-700 transition">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
