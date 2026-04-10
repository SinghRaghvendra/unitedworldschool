import React from 'react';
import InteractiveAvatar from '../components/InteractiveAvatar';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans scroll-smooth selection:bg-red-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6 lg:px-24 bg-white/80 backdrop-blur-md sticky top-0 border-b border-[#E2E8F0] shadow-sm">
        <div className="flex items-center gap-3">

          <div className="text-2xl font-black tracking-tight text-[#0A2540]">
            UnitedWorldSchool <span className="text-[#D32F2F]">AI</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#how-it-works" className="text-sm font-medium text-[#4A5568] hover:text-[#0A2540] transition">How it Works</a>
          <a href="#features" className="text-sm font-medium text-[#4A5568] hover:text-[#0A2540] transition">Features</a>
          <a href="#pricing" className="text-sm font-medium text-[#4A5568] hover:text-[#0A2540] transition">Pricing</a>
          <a href="/student" className="text-sm font-bold text-[#0A2540] hover:text-[#D32F2F] transition">Student Login</a>
          <a href="/admission" className="px-6 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full font-bold shadow-lg shadow-red-500/20 transition-all">Apply Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center pt-24 pb-32 px-4 text-center overflow-hidden">
        
        {/* Subtle Silver Grid Background */}
        <div className="absolute inset-0 bg-[#F8F9FA] z-[-1]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0A2540] animate-pulse"></span>
          <span className="text-sm font-semibold text-[#0A2540] tracking-wide uppercase">The World's First Global AI School</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 max-w-5xl leading-[1.1] text-[#0A2540]">
          One School for the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] via-[#1E3A8A] to-[#D32F2F]">World.</span>
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-[#4A5568] mb-12 font-medium">
          Learn Without Borders. Experience AI-powered personalized education, global peer collaboration, and world-class curriculum anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 relative z-10">
          <a href="/admission" className="px-8 py-4 bg-[#0A2540] text-white hover:bg-[#1E3A8A] rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl shadow-blue-900/20">
            Apply for Admission
          </a>
          <a href="#demo" className="px-8 py-4 bg-white border-2 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#0A2540] rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-sm">
            <svg className="w-5 h-5 fill-[#D32F2F]" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Demo
          </a>
        </div>

        {/* Global Connection Visualization (Red/Blue/Silver Theme) */}
        <div className="relative w-full max-w-5xl h-96 bg-white border-2 border-[#E2E8F0] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-[#F1F5F9] opacity-30"></div>
          
          {/* Central Blue Core */}
          <div className="relative z-10 w-40 h-40 bg-[#0A2540] rounded-full shadow-[0_0_60px_rgba(10,37,64,0.3)] flex items-center justify-center">
             <div className="text-white font-black tracking-widest text-lg uppercase text-center">AI<br/>Core</div>
          </div>
          
          {/* Orbiting Silver/Red elements */}
          <div className="absolute w-[60%] h-[60%] rounded-full border border-[#CBD5E1] animate-[spin_15s_linear_infinite]">
             <div className="absolute -top-3 left-1/2 w-6 h-6 bg-[#D32F2F] rounded-full shadow-[0_0_15px_rgba(211,47,47,0.5)]"></div>
          </div>
          <div className="absolute w-[80%] h-[80%] rounded-full border border-[#E2E8F0] animate-[spin_25s_linear_infinite_reverse]">
             <div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#1E3A8A] rounded-full shadow-[0_0_15px_rgba(30,58,138,0.5)]"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#E2E8F0]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-[#4A5568]">12,450 Global Students Live</span>
          </div>
        </div>
      </main>

      {/* 4 Core Systems */}
      <section id="how-it-works" className="relative z-10 py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-6">Four Systems. <span className="text-[#D32F2F]">One Mission.</span></h2>
            <p className="text-[#4A5568] text-lg max-w-2xl mx-auto font-medium">We've engineered a comprehensive educational ecosystem that completely replaces traditional schooling structure with scalable, limitless software.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-10 rounded-3xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#0A2540] text-white flex items-center justify-center rounded-2xl mb-6 text-2xl shadow-md">🤖</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">AI Learning System</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">Hyper-personalized learning driven by AI Teachers (Video + Voice) accessing core NCERT/CBSE curriculum. Dynamic quizzes and absolute mastery tracking.</p>
              <ul className="space-y-2 text-sm text-[#0A2540] font-bold">
                <li className="flex items-center gap-2"><span className="text-[#D32F2F]">✓</span> Video & Chat AI Agents</li>
                <li className="flex items-center gap-2"><span className="text-[#D32F2F]">✓</span> Instant Curriculum Generation</li>
              </ul>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-10 rounded-3xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#D32F2F] text-white flex items-center justify-center rounded-2xl mb-6 text-2xl shadow-md">🌍</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Global Social Network</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">Never learn alone. Our algorithm groups 5 students globally every week based on skill and interest for group projects and real-time collaboration.</p>
              <ul className="space-y-2 text-sm text-[#0A2540] font-bold">
                <li className="flex items-center gap-2"><span className="text-[#D32F2F]">✓</span> Weekly 5-Student Cohorts</li>
                <li className="flex items-center gap-2"><span className="text-[#D32F2F]">✓</span> Global Friendships</li>
              </ul>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-10 rounded-3xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#1E3A8A] text-white flex items-center justify-center rounded-2xl mb-6 text-2xl shadow-md">🏫</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">School Management</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">A complete digitized operational panel handling Admissions, Verifiable Attendance, Marks, Curriculum injection, and School meeting integrations.</p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-10 rounded-3xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#CBD5E1] text-[#0A2540] flex items-center justify-center rounded-2xl mb-6 text-2xl shadow-md font-bold">📊</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Career Intelligence</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">Our systems track invisible metrics: attention span, learning speed, and behavioral interests to algorithmically suggest the best real-world career paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section Placehodler */}
      <section id="demo" className="relative z-10 py-24 bg-[#0A2540] border-t border-[#1E3A8A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10">See the <span className="text-[#CBD5E1]">AI Teacher</span> in Action</h2>
          <InteractiveAvatar />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 bg-[#F8F9FA] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-6">Elite Education. <span className="text-[#D32F2F]">Zero Borders.</span></h2>
          <p className="text-[#4A5568] text-lg mb-16 font-medium">Priced to ensure every child has access to the most advanced curriculum the world has ever seen.</p>
          
          <div className="bg-white border-2 border-[#1E3A8A] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">Global Standard</span>
            </div>
            <div className="text-[#0A2540] font-black text-6xl mb-2">₹12,000</div>
            <div className="text-[#4A5568] font-semibold text-xl mb-10">per academic year</div>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> Private AI Avatar Tutor</div>
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> NCERT/CBSE/Global Syllabus</div>
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> Weekly 5-Student Global Cohorts</div>
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> Live Monthly Physical Meetups</div>
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> Extracurricular & Vocational</div>
              <div className="flex items-center gap-3 font-semibold text-[#0A2540]"><span className="text-[#D32F2F] text-xl">✔</span> Career Intelligence Analytics</div>
            </div>

            <a href="/admission" className="block w-full py-5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-2xl font-bold text-xl transition-all shadow-lg">
              Enroll Student Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0A2540] py-12 border-t border-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#CBD5E1] text-sm font-medium">
          <div className="flex items-center gap-3 mb-4 md:mb-0">

            <span className="font-bold text-white text-lg">UnitedWorldSchool AI</span>
          </div>
          <div>© {new Date().getFullYear()} UnitedWorldSchool. "Learn Without Borders".</div>
        </div>
      </footer>
    </div>
  );
}
