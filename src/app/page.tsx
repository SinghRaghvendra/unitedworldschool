import React from 'react';
import InteractiveAvatar from '../components/InteractiveAvatar';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans scroll-smooth selection:bg-fuchsia-500 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-24 bg-zinc-950/60 backdrop-blur-2xl sticky top-0 border-b border-zinc-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200">UnitedWorldSchool</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">AI</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">How it Works</a>
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/student" className="text-sm font-bold text-zinc-200 hover:text-fuchsia-400 transition-colors">Student Login</a>
          <a href="/admission" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all">Apply Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center pt-32 pb-32 px-4 text-center">
        
        {/* Subtle Metallic Grid */}
        <div className="absolute inset-0 bg-zinc-950 z-[-1] opacity-40 mix-blend-screen" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md shadow-lg mb-10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
          <span className="text-xs sm:text-sm font-bold text-zinc-300 tracking-widest uppercase">The World's First Global AI School</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 max-w-6xl leading-[0.95] text-white">
          One School for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">World.</span>
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 mb-14 font-medium leading-relaxed">
          Learn Without Borders. Experience AI-powered personalized education, global peer collaboration, and world-class curriculum anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-28 relative z-10 w-full sm:w-auto px-6">
          <a href="/admission" className="relative group px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-black text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Apply for Admission</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
          </a>
          <a href="#demo" className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-500 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 fill-cyan-400" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            Watch Demo
          </a>
        </div>

        {/* Futuristic Global Connection Visualization */}
        <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center group">
          {/* Inner Light Ring */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
          
          {/* Central AI Core */}
          <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-[inset_0_2px_20px_rgba(255,255,255,0.1),0_0_60px_rgba(34,211,238,0.2)] flex items-center justify-center border border-zinc-700/50 group-hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.1),0_0_80px_rgba(217,70,239,0.3)] transition-all duration-700">
             <div className="text-white font-black tracking-widest text-lg md:text-2xl uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 drop-shadow-lg">
                Neuromorphic<br/><span className="text-cyan-400 text-sm md:text-base">Core</span>
             </div>
          </div>
          
          {/* Orbiting Metallic Elements */}
          <div className="absolute w-[50%] h-[50%] rounded-full border border-zinc-800/80 animate-[spin_10s_linear_infinite]">
             <div className="absolute -top-3 left-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
          </div>
          <div className="absolute w-[70%] h-[70%] rounded-full border border-zinc-800/50 animate-[spin_20s_linear_infinite_reverse]">
             <div className="absolute top-1/2 -right-2 w-4 h-4 bg-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.8)]"></div>
          </div>
          <div className="absolute w-[90%] h-[90%] rounded-full border border-zinc-800/30 animate-[spin_30s_linear_infinite]">
             <div className="absolute bottom-1/4 -left-1 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
          </div>
          
          {/* Holographic Stats Tag */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3 bg-zinc-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-zinc-700/50 shadow-xl">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <span className="text-xs md:text-sm font-bold text-zinc-300">12,450 Nodes Active</span>
          </div>
        </div>
      </main>

      {/* 4 Core Systems */}
      <section id="how-it-works" className="relative z-10 py-32 bg-zinc-950 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10">Four Systems. <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">One Mission.</span></h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-medium relative z-10">We've engineered a comprehensive educational ecosystem that completely replaces traditional schooling structure with scalable, limitless software.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-10 rounded-[2.5rem] hover:bg-zinc-900/80 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-[inset_0_1px_10px_rgba(255,255,255,0.1)] text-white flex items-center justify-center rounded-2xl mb-8 text-3xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">🤖</div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">AI Learning System</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">Hyper-personalized learning driven by AI Teachers (Video + Voice) accessing core NCERT/CBSE curriculum. Dynamic quizzes and absolute mastery tracking.</p>
              <ul className="space-y-3 text-sm text-zinc-300 font-bold">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">✓</div> Video & Chat AI Agents</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">✓</div> Instant Curriculum Generation</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-10 rounded-[2.5rem] hover:bg-zinc-900/80 hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-[inset_0_1px_10px_rgba(255,255,255,0.1)] text-white flex items-center justify-center rounded-2xl mb-8 text-3xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]">🌍</div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Global Social Network</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">Never learn alone. Our algorithm groups 5 students globally every week based on skill and interest for group projects and real-time collaboration.</p>
              <ul className="space-y-3 text-sm text-zinc-300 font-bold">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">✓</div> Weekly 5-Student Cohorts</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">✓</div> Global Friendships</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-10 rounded-[2.5rem] hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-[inset_0_1px_10px_rgba(255,255,255,0.1)] text-white flex items-center justify-center rounded-2xl mb-8 text-3xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">🏫</div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">School Management</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">A complete digitized operational panel handling Admissions, Verifiable Attendance, Marks, Curriculum injection, and School meeting integrations.</p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-10 rounded-[2.5rem] hover:bg-zinc-900/80 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-[inset_0_1px_10px_rgba(255,255,255,0.1)] text-white flex items-center justify-center rounded-2xl mb-8 text-3xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">📊</div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Career Intelligence</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">Our systems track invisible metrics: attention span, learning speed, and behavioral interests to algorithmically suggest the best real-world career paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="relative z-10 py-32 bg-zinc-950 border-t border-zinc-800/60 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
            <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">Live Demo Interface</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 pb-1">AI Teacher</span> in Action</h2>
          
          <div className="p-2 rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900/50 border border-zinc-800 shadow-2xl relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 left-8 flex gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            <div className="bg-zinc-950 rounded-[2rem] overflow-hidden pt-12 relative border border-zinc-800/50">
              <InteractiveAvatar />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 bg-zinc-900/20 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Elite Education. <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Zero Borders.</span></h2>
          <p className="text-zinc-400 text-xl mb-16 font-medium max-w-2xl mx-auto">Priced to ensure every child has access to the most advanced curriculum the world has ever seen.</p>
          
          <div className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-900 hover:from-cyan-500/50 hover:to-fuchsia-500/50 transition-colors duration-500 shadow-2xl shadow-cyan-900/20 overflow-hidden">
            <div className="bg-zinc-950 rounded-[2.8rem] p-12 relative h-full flex flex-col pt-16">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 to-transparent blur-[50px] pointer-events-none"></div>

              <div className="absolute top-8 right-8">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]">Global Standard</span>
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 font-black text-7xl md:text-8xl mb-2 tracking-tighter">₹12,000</div>
              <div className="text-zinc-500 font-bold text-xl mb-12 uppercase tracking-widest">per academic year</div>
              
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 text-left mb-16 max-w-3xl mx-auto">
                {['Private AI Avatar Tutor', 'NCERT/CBSE/Global Syllabus', 'Weekly 5-Student Global Cohorts', 'Live Monthly Physical Meetups', 'Extracurricular & Vocational', 'Career Intelligence Analytics'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-zinc-300 font-semibold text-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <a href="/admission" className="block w-full py-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 hover:scale-[1.02] text-white rounded-[2rem] font-black text-2xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                Initialize Enrollment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-zinc-950 py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm font-medium gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-xl tracking-tight">UnitedWorldSchool <span className="text-cyan-400">AI</span></span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} UnitedWorldSchool. "Learn Without Borders".</div>
        </div>
      </footer>
    </div>
  );
}

