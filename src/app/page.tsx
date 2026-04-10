export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Background stars / ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
      
      {/* Navbar Stub */}
      <nav className="relative z-20 flex justify-between items-center p-6 lg:px-24">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          UnitedWorldSchool
        </div>
        <div className="space-x-4">
          <a href="/admission" className="text-sm font-medium hover:text-teal-400 transition">Admissions</a>
          <a href="/student" className="text-sm font-medium hover:text-teal-400 transition">Student Login</a>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        
        {/* Dynamic Globe Animation Placeholder (CSS based) */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 flex items-center justify-center">
          {/* Globe Core */}
          <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-900 to-teal-500 opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute w-3/4 h-3/4 rounded-full border border-teal-500/30 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-3/4 h-3/4 rounded-full border border-blue-500/30 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateX(60deg)' }}></div>
          <div className="absolute w-3/4 h-3/4 rounded-full border border-teal-300/20 animate-[spin_20s_linear_infinite]" style={{ transform: 'rotateY(60deg)' }}></div>
          
          {/* Connecting Nodes (Students piling up concept) */}
          <div className="absolute w-4 h-4 bg-teal-400 rounded-full animate-bounce shadow-[0_0_15px_rgba(45,212,191,0.8)]" style={{ top: '10%', left: '40%' }}></div>
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.8)]" style={{ bottom: '20%', right: '30%' }}></div>
          <div className="absolute w-5 h-5 bg-indigo-400 rounded-full animate-bounce shadow-[0_0_15px_rgba(129,140,248,0.8)]" style={{ top: '50%', left: '10%', animationDelay: '0.5s' }}></div>
          
          <div className="z-10 text-xl font-bold tracking-widest text-teal-100 uppercase drop-shadow-lg">
            Global Hub
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The World is Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Classroom</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
          Experience AI-driven elite education, connect with global peers, and learn anywhere for just Rs. 12000/year.
        </p>

        <a href="/admission" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(13,148,136,0.4)]">
          Apply for Admission
        </a>
      </main>
    </div>
  );
}
