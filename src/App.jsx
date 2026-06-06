import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Brain, Star, Award, ChevronRight, X, CheckCircle, 
  Phone, Mail, MapPin, Cpu, ArrowRight, Download, Users, 
  FileText, ShieldCheck, Flame, Menu, Clock, HelpCircle, FileCheck, Eye, MessageSquare, Send
} from 'lucide-react';

// VISUAL ASSETS - CLASSROOM GALLERY (100% stable links)
const classroomGallery = [
  { id: 1, title: "Main Lecture Hall Alpha", desc: "Equipped with advanced digital projection frameworks and acoustic management.", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=500&auto=format&fit=crop" },
  { id: 2, title: "Interactive Doubt Cell", desc: "Personal space isolation desks designed for custom step-by-step clearance.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop" },
  { id: 3, title: "Calculus Lab Workspace", desc: "High density learning loops optimized for rigorous JEE advanced preparation.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop" },
  { id: 4, title: "Formula Library Corridor", desc: "Instant offline catalog access for curated concept revision sheets.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=500&auto=format&fit=crop" },
  { id: 5, title: "Smart Evaluation Hub", desc: "Strict verification zone tracking performance percentiles.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=500&auto=format&fit=crop" },
  { id: 6, title: "DKM Advisory Office", desc: "Direct counseling and status reviews terminal.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop" }
];

// HALL OF FAME - 10 STUDENTS MATRIX
const toppersList = [
  { name: "Rahul Kumar", marks: "99% Math (Class 12)", course: "IIT-JEE Advanced Select", rank: "State Rank 02", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { name: "Anjali Kumari", marks: "100/100 Perfect Math", course: "CBSE Class 12th Board", rank: "District Topper", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Amit Raj", marks: "98% Math Tracker", course: "IIT-JEE Mains Alpha", rank: "99.8 Percentile", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Priya Sharma", marks: "97% Math Score", course: "CBSE Class 10th Foundation", rank: "School Rank 01", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { name: "Vikram Soni", marks: "96% BSEB Matrix", course: "Class 12th State Board", rank: "State Top 10", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
  { name: "Siddharth Raj", marks: "99/100 Geometry Node", course: "Class 10th Foundation", rank: "Perfect Score Token", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
  { name: "Riya Singh", marks: "95% Advanced Math", course: "IIT-JEE Crash Program", rank: "IIT Roorkee Select", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
  { name: "Manish Verma", marks: "97/100 Board Matrix", course: "CBSE Class 12th Target", rank: "Olympiad Clear", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop" },
  { name: "Sanjay Kumar", marks: "96% BSEB Math", course: "Class 12th Main Batch", rank: "Motihari Topper 03", img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=200&auto=format&fit=crop" },
  { name: "Divya Bhardwaj", marks: "98/100 Linear Calculus", course: "IIT-JEE Advanced", rank: "IIT Guwahati Pack", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
];

// VERIFIED STUDENT REVIEW PACKS
const continuousReviews = [
  [
    { student: "Manish Mishra", rating: 5, review: "DK Mishra sir ka calculus delivery matrix completely next level hai. Graphs se limits aur continuity ke saare tough concepts ekdam crystal clear ho gaye.", scope: "JEE Target Batch" },
    { student: "Kriti Raj", rating: 5, review: "Boards me 98 marks score kiya main. Mathematics Today ki regular test sheets aur automated assignments sheets ne conceptual fear bilkul khatam kar diya.", scope: "Class 12th Board Pack" },
    { student: "Saurav Kumar", rating: 5, review: "Motihari ka sabse authentic and logically calibrated mathematics platform. Vector and 3D modules ko clear karne ka tarika best hai.", scope: "Foundation Core Group" }
  ],
  [
    { student: "Vikash Champaran", rating: 5, review: "Complex algebra equations are solved with easy methods. Highly recommended if you are seriously targeting engineering ranks.", scope: "IIT Advanced Batch" },
    { student: "Anjali Gupta", rating: 5, review: "Sir ka approach formulas trace karne ka ekdam unique hai. Personal attention and doubt clearance slots are extremely strict and regular.", scope: "Class 11th Elite Core" },
    { student: "Rohan Verma", rating: 5, review: "The platform tracking features help in checking regular performance lags. Best guidance model under DK Mishra sir.", scope: "Class 10th Booster Node" }
  ]
];

const courseCatalog = [
  { id: "c1", title: "Class 11th - Core Algebraic Foundations", duration: "1 Year Program", price: "3,500", topic: "Trigonometry, Coordinate Geometry & Calculus Base Configuration" },
  { id: "c2", title: "Class 12th - Board Excellence Matrix", duration: "1 Year Target", price: "4,200", topic: "Vectors, 3D Geometry, Integral Calculus & Matrix Equations" },
  { id: "c3", title: "IIT-JEE Advanced / Mains Cracker", duration: "2 Year Integrated", price: "5,500", topic: "Complex Numbers, Permutations, Probability & Advanced Calculus Modules" },
  { id: "c4", title: "Class 10th - Board Foundation Program", duration: "1 Year Booster", price: "3,000", topic: "Trigonometry Basics, Linear Equations & Rapid Calculation Systems" }
];

const heroSliderImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
];

export default function App() {
  const [splashState, setSplashState] = useState('visible'); // 'visible', 'fading', 'hidden'
  const [modalOpen, setModalOpen] = useState(false);
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [reviewSetIndex, setReviewSetIndex] = useState(0);
  
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "desk", text: "Welcome to Mathematics Today Support Desk. Please ask your questions regarding batch timings, fee structures, or curriculum setup below." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", contact: "", currentClass: "Class 11 Aspirant", streamTarget: "Pure Board Syllabus" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (chatOpen) chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatOpen]);

  // ✨ TRANSITION OPTIMIZATION ENGINE (0% Jerk, Clean Delay)
  useEffect(() => {
    const fadeTimer = setTimeout(() => { setSplashState('fading'); }, 2600);
    const hideTimer = setTimeout(() => { setSplashState('hidden'); }, 3200);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    if (splashState !== 'hidden') return;
    const heroTimer = setInterval(() => {
      setHeroImgIndex((prev) => (prev === heroSliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    const reviewTimer = setInterval(() => {
      setReviewSetIndex((prev) => (prev === continuousReviews.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => { clearInterval(heroTimer); clearInterval(reviewTimer); };
  }, [splashState]);

  const executeDeskRoutingLogic = (userInput) => {
    const text = userInput.toLowerCase();
    let reply = "Your message parameters are logged on our registration desk. Please fill the Verification Terminal form below to instantly schedule a counseling loop.";
    
    if (text.includes("fee") || text.includes("price") || text.includes("fees") || text.includes("charge")) {
      reply = "The current institutional fee layout is configured between ₹3,000 to ₹5,500 based on your chosen program tier. This covers assignments guides and evaluation tests packages completely.";
    } else if (text.includes("calculus") || text.includes("math") || text.includes("syllabus") || text.includes("topic")) {
      reply = "DK Mishra Sir drives deep conceptual matrices mapping. Advanced calculus integration, coordinate logic, and linear systems are trained with deep structural metrics.";
    } else if (text.includes("address") || text.includes("location") || text.includes("motihari")) {
      reply = "Our corporate training facility is fully operational at Civil Courts Road, Motihari, East Champaran, Bihar 245001. Visit directly for manual processing tracks.";
    } else if (text.includes("time") || text.includes("batch") || text.includes("schedule")) {
      reply = "Batches operate under exact daily timetables: Class 12 Boards Target triggers at 06:30 AM, and IIT-JEE Advanced integrated focus starts at 08:30 AM sharp.";
    }
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: "desk", text: reply }]);
    }, 600);
  };

  const handleEnquiryPipeline = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
      setFormData({ name: "", contact: "", currentClass: "Class 11 Aspirant", streamTarget: "Pure Board Syllabus" });
    }, 2000);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setChatInput("");
    executeDeskRoutingLogic(userText);
  };

  return (
    <div className="min-h-screen bg-[#070c19] text-slate-300 font-mono antialiased text-left selection:bg-cyan-400 selection:text-slate-950 scroll-smooth">
      
      {/* 🚀 FIXED INTRO FLUID FADE MODULATION LAYERING */}
      {splashState !== 'hidden' && (
        <div 
          className={`fixed inset-0 bg-[#050813] z-50 flex flex-col justify-center items-center text-center font-mono transition-all duration-700 ease-in-out ${
            splashState === 'fading' ? 'opacity-0 scale-90 blur-sm pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          <div className="space-y-6 max-w-md px-6">
            <div className="bg-[#0b1429] border border-slate-800 p-6 rounded-3xl w-fit mx-auto shadow-2xl relative">
              <Brain size={48} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-3xl animate-spin" style={{ animationDuration: '12s' }}></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white tracking-widest">MATHEMATICS TODAY</h2>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest animate-pulse">Launching Expert Academic Dashboards...</p>
            </div>
            <div className="w-64 bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800 mx-auto">
              <div className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 h-full w-full"></div>
            </div>
            <span className="text-[10px] text-slate-600 block uppercase tracking-widest font-bold">DK Mishra Institute Hub • Motihari</span>
          </div>
        </div>
      )}

      {/* 👑 TOP METRICS BAR */}
      <div className="bg-gradient-to-r from-cyan-600 via-slate-950 to-indigo-600 px-4 py-2.5 text-center text-xs font-mono font-black text-slate-950 flex items-center justify-center gap-2 relative z-30 border-b border-slate-800">
        <Cpu size={14} className="text-cyan-400 shrink-0" />
        <span className="text-white">Active Operational Dashboard: Real-time candidate pipelines linked directly with faculty console.</span>
      </div>

      {/* 🏢 UPGRADED DIAMOND NAVIGATION HEADER */}
      <nav className="sticky top-0 z-40 bg-[#070c19]/95 border-b border-slate-800 backdrop-blur-md px-6 py-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 shadow-md">
              <BookOpen size={22} className="text-cyan-400" />
            </div>
            <div>
              <span className="block font-black text-2xl tracking-tight text-white uppercase leading-none">MATHEMATICS TODAY</span>
              <span className="block text-[9px] uppercase font-mono tracking-widest text-cyan-400 font-extrabold mt-1">DK MISHRA SYSTEMS PANEL</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-black tracking-wider uppercase text-slate-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Classroom</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About Hub</a>
            <a href="#faculty" className="hover:text-cyan-400 transition-colors">DK Mishra Sir</a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">Inside Class</a>
            <a href="#courses" className="hover:text-cyan-400 transition-colors">Curriculum</a>
            <a href="#toppers" className="hover:text-cyan-400 transition-colors">Toppers Matrix</a>
            <button onClick={() => setModalOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-xl text-xs font-mono font-black uppercase transition-all shadow-lg cursor-pointer border-none">
              Apply Token
            </button>
          </div>
        </div>
      </nav>

      {/* 🎬 MAIN HERO DISPLAY BOX */}
      <header id="hero" className="relative w-full overflow-hidden bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md text-slate-300 font-mono text-[11px]">
              <MapPin size={12} className="text-cyan-400 animate-bounce" /> Motihari, East Champaran, Bihar
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none">
              Rigorous Mathematical Training <br /> Guided By <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">DK Mishra Sir</span>
            </h1>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
              No superficial adjustments. We enforce concrete algorithmic concept mapping optimized for Class 10th, 11th, 12th Boards excellence and core competitive IIT advanced tracks.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={() => setModalOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs px-6 py-3.5 rounded-lg shadow uppercase tracking-widest cursor-pointer">
                Register Student Sheet
              </button>
              <a href="#courses" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs px-5 py-3.5 rounded-lg transition-colors flex items-center gap-1.5">
                <Download size={14} className="text-indigo-400" /> Syllabus Handout
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 md:h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
            <img 
              src={heroSliderImages[heroImgIndex]} 
              className="w-full h-full object-cover opacity-50 transition-all duration-700 ease-in-out transform scale-100"
              alt="Classroom Vibe Matrix" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] bg-slate-900/90 border border-slate-800 text-cyan-400 px-3 py-1 rounded-md uppercase font-bold tracking-wider">
              Live Classroom Preview System
            </div>
          </div>

        </div>
      </header>

      {/* 📚 ABOUT COACHING HUB */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block bg-cyan-500/5 px-2.5 py-1 rounded w-fit border border-cyan-500/10">Institutional Legacy</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">About Mathematics Today</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed font-sans">
              Founded under the academic vision of legend <strong className="text-white">DK Mishra Sir</strong>, Mathematics Today has established itself as the absolute baseline blueprint for premium high-school and engineering mathematical mentoring in Motihari, Bihar.
            </p>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed font-sans">
              Unlike traditional rote-learning centers, our system strictly focuses on conceptual depth. By mapping intricate vector fields, coordinate parameters, and calculus graphs onto real-world numerical models, we bridge the gap between textbook equations and absolute analytical clarity.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-cyan-400 block font-mono">20+ Yrs</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">Teaching Loop</span>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-emerald-400 block font-mono">15K+</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">Students Mentored</span>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-indigo-400 block font-mono">100%</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">Conceptual Focus</span>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-pink-400 block font-mono">Top Ranks</span>
              <span className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">BSEB / CBSE / JEE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🤖 BATCH EQUIPMENT UTILITIES */}
      <section id="ai-features" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="text-center space-y-2 pb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">Academic Systems</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Facilities Built for Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {[
            { icon: <Cpu size={18} />, title: "24/7 Question Tracking Engine", desc: "Scan and log assignment equations to generate comprehensive processing structures instantly." },
            { icon: <Brain size={18} />, title: "Predictive Analytics Scorecards", desc: "Automated student performance graphs shared directly with the owner console to analyze weak nodes." },
            { icon: <FileText size={18} />, title: "Isolated Formula Sheet Arrays", desc: "Rigorous concept matrices mapping calculus algorithms and coordinate steps properly." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-3 text-left shadow-lg hover:border-cyan-500/20 transition-colors">
              <div className="text-cyan-400 bg-cyan-500/5 p-2.5 rounded-lg border border-cyan-500/10 w-fit">{item.icon}</div>
              <h3 className="font-extrabold text-white text-sm uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 font-sans font-light text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍🏫 CHIEF FACULTY MODULE */}
      <section id="faculty" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-2xl text-center space-y-4">
            <div className="w-40 h-40 mx-auto rounded-xl overflow-hidden border-2 border-slate-800 p-1 bg-slate-950">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-lg filter opacity-80" 
                alt="DK Mishra Sir Profile" 
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">DK Mishra Sir</h3>
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mt-0.5">Founder & Head Instructor</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block bg-indigo-500/5 px-2.5 py-1 rounded w-fit border border-indigo-500/10">Chief Instructor Desk</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">Expert Mentoring Framework</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed font-sans">
              With over two decades of experience in the East Champaran sector, DK Mishra Sir has mentored thousands of board toppers and cleared severe IIT-JEE calculus boundaries. His approach removes the fear of calculations entirely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-lg flex items-center gap-2"><Award size={14} className="text-cyan-400 shrink-0" /> Premium Board Selection Records Mapped</div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-lg flex items-center gap-2"><FileText size={14} className="text-cyan-400 shrink-0" /> Printed High Speed Workbooks Pack</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🖼️ IN-CLASS VISUAL GALLERY INFRASTRUCTURE GRID */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="text-center space-y-2 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">Physical Asset Logs</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Inside Mathematics Today Classroom</h2>
          <p className="text-slate-500 text-xs max-w-sm mx-auto font-light font-sans">Real-world preview vectors mapping our active coaching centers, revision labs, and student study centers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classroomGallery.map((item) => (
            <div key={item.id} className="bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl group hover:border-slate-700 transition-all duration-300">
              <div className="h-48 bg-slate-950 overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-500 ease-out" alt={item.title} />
                <div className="absolute top-3 right-3 bg-slate-900/90 border border-slate-800 p-1.5 rounded-lg text-cyan-400 shadow backdrop-blur-sm">
                  <Eye size={12} />
                </div>
              </div>
              <div className="p-5 text-left space-y-1 bg-slate-950/20">
                <h4 className="font-extrabold text-sm text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                <p className="text-slate-500 font-sans text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔮 SYLLABUS GRID FEE MODEL TRACKS */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="text-center space-y-2 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">Classroom Syllabi</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Active Math Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {courseCatalog.map((course) => (
            <div key={course.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-400/20 transition-all shadow-xl group">
              <div className="space-y-4">
                <span className="bg-cyan-500/5 text-cyan-400 font-mono text-[10px] font-black uppercase border border-cyan-500/10 px-2 py-0.5 rounded block w-fit">{course.duration}</span>
                <h3 className="font-extrabold text-base text-white group-hover:text-cyan-400 transition-colors leading-tight">{course.title}</h3>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">{course.topic}</p>
              </div>
              <div className="pt-4 border-t border-slate-800/60 mt-4 flex items-center justify-between font-mono">
                <div className="text-left">
                  <span className="text-[9px] uppercase text-slate-500 block">Course Fee</span>
                  <span className="text-sm font-black text-emerald-400">₹{course.price}</span>
                </div>
                <button onClick={() => setModalOpen(true)} className="text-cyan-400 text-xs font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent">Enroll <ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 HALL OF FAME: 10 TOPPERS Display PANEL ROW */}
      <section id="toppers" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="text-center space-y-2 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">Hall of Fame Records</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Mathematics Today Toppers Matrix</h2>
          <p className="text-slate-500 text-xs font-light max-w-sm mx-auto font-sans">100% genuine validation track records scoring topmost percentages continuously.</p>
        </div>

        <div className="flex flex-row gap-6 overflow-x-auto pb-6 text-left snap-x scrollbar-thin scrollbar-thumb-slate-800">
          {toppersList.map((topper, i) => (
            <div key={i} className="min-w-[250px] md:min-w-[270px] bg-slate-900/40 border border-slate-800 p-6 rounded-2xl snap-center flex flex-col items-center text-center space-y-3 hover:border-cyan-500/20 transition-all shadow-xl">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-700/60 p-1 bg-slate-950">
                <img src={topper.img} className="w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300" alt={topper.name} />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-extrabold text-sm text-white tracking-tight">{topper.name}</h4>
                <span className="block text-xs text-cyan-400 font-bold font-mono">{topper.marks}</span>
                <span className="block text-[10px] text-slate-500 font-mono mt-0.5">{topper.course}</span>
              </div>
              <span className="bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800 text-[10px] font-mono text-slate-400 tracking-wider uppercase font-bold">🎯 {topper.rank}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐️ STUDENT REVIEWS GRID LOOP SCROLLER */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-800">
        <div className="text-center space-y-2 pb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">Verified Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">What Our Active Batches Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
          {continuousReviews[reviewSetIndex].map((rev, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-lg relative text-left">
              <div className="flex gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 font-sans text-xs font-light leading-relaxed">"{rev.review}"</p>
              <div className="pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-[10px]">
                <span className="font-bold text-white">{rev.student}</span>
                <span className="text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">{rev.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 INTAKE DATA PROCESSING TERM SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">Campus Office</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Secure Your Batch Allocation</h2>
              <p className="text-slate-500 text-xs font-light font-sans">Submitting details triggers instant delivery to DK Mishra Sir's local supervisor terminal logs.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <Phone size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Desk Phone</span>
                  <a href="tel:+918954307374" className="block text-white font-bold hover:text-cyan-400 mt-0.5">+91 89543 07374</a>
                </div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <MapPin size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Location Address</span>
                  <p className="text-white font-medium mt-0.5 font-sans text-xs">
                    Mathematics Today Buildings, Civil Courts Road, Motihari, East Champaran, Bihar 245001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <h3 className="text-base font-black text-white uppercase tracking-tight border-b border-slate-800 pb-3 text-left">Student Verification Terminal</h3>
            
            {formSubmitted ? (
              <div className="py-20 text-center space-y-3 flex flex-col items-center justify-center">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 animate-pulse">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-bold text-white text-sm uppercase">Data Stream Pushed to Owner</h4>
                <p className="text-slate-500 text-[11px] font-sans font-light max-w-[280px] leading-relaxed">
                  Candidate datasets successfully updated on DK Mishra Sir's desk system logs. Office counselor will call your line shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquiryPipeline} className="space-y-4 pt-6 text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">Student Full Name *</label>
                  <input 
                    type="text" required placeholder="Enter student name"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">Active Phone Contact *</label>
                  <input 
                    type="tel" required placeholder="+91 XXXXX XXXXX"
                    value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400">Current Class *</label>
                    <select value={formData.currentClass} onChange={(e) => setFormData({...formData, currentClass: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 text-slate-400 h-[42px]">
                      <option>Class 11 Aspirant</option>
                      <option>Class 12 Target</option>
                      <option>Class 10 Foundation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-400">Target Goal *</label>
                    <select value={formData.streamTarget} onChange={(e) => setFormData({...formData, streamTarget: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 text-slate-400 h-[42px]">
                      <option>Pure Board Prep</option>
                      <option>Boards + IIT-JEE</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3.5 rounded-lg text-xs tracking-widest uppercase transition-colors cursor-pointer">
                    Submit Credentials to Desk
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 💬 DISCRETE SYSTEM INTERACTIVE SUPPORT PANEL */}
      <div className="fixed bottom-6 right-6 z-50 font-mono">
        {!chatOpen ? (
          <button 
            onClick={() => setChatOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-cyan-400/10"
          >
            <MessageSquare size={22} />
          </button>
        ) : (
          <div className="w-80 md:w-96 bg-[#0b1425] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px]">
            <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-black text-white uppercase tracking-wider">Support Desk Module</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"><X size={14} /></button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-[11px] leading-relaxed">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] p-3 rounded-xl border ${msg.sender === 'user' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChatSubmit} className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2">
              <input 
                type="text" placeholder="Type message parameters here..."
                value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400 placeholder:text-slate-700"
              />
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center"><Send size={12} /></button>
            </form>
          </div>
        )}
      </div>

      {/* MODAL WINDOW SYSTEM CONTAINER FRAME */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b111e] border border-slate-800 rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl text-left font-mono text-xs">
            
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <div>
                <span className="text-[9px] uppercase text-cyan-400 font-bold block">Seat Matrix Reservation</span>
                <h4 className="font-bold text-sm text-white truncate max-w-[240px]">Mathematics Today Hub</h4>
              </div>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 cursor-pointer"><X size={16} /></button>
            </div>

            <div className="p-5 space-y-4">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3 flex flex-col items-center justify-center">
                  <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                    <ShieldCheck size={22} />
                  </div>
                  <h5 className="font-bold text-white text-xs">Seat Hold Active</h5>
                  <p className="text-slate-500 text-[11px] font-sans font-light max-w-[240px] text-center leading-relaxed">
                    Data logs updated. Sir's assistant will verify digits to lock orientation slots.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquiryPipeline} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-500">Student Name</label>
                    <input type="text" required placeholder="Enter student name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Mobile Digits</label>
                    <input type="tel" required placeholder="70043XXXXX" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider mt-2 cursor-pointer shadow">Lock Seat Token</button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 🛠 100% PROFESSIONAL FOOTER SYSTEM (NO AI TRACES) */}
      <footer className="w-full bg-[#03060d] border-t border-slate-800/80 pt-16 pb-12 font-sans text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
          
          {/* Column 1: Core Brand Identity Block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <BookOpen size={16} className="text-cyan-400" />
              </div>
              <span className="font-black text-white text-base tracking-wider uppercase">MATHEMATICS TODAY</span>
            </div>
            <p className="text-[11px] font-light text-slate-500 leading-relaxed max-w-sm">
              A premier high-fidelity structural classroom network dedicated explicitly to advanced calculus models, algebraic setups, and competitive board rankings.
            </p>
            <div className="text-[11px] text-cyan-400 font-mono font-medium">
              ★ ★ ★ ★ ★ <span className="text-slate-500 ml-1">4.9/5 Elite Institutional Rating</span>
            </div>
          </div>

          {/* Column 2: System Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="block font-bold text-slate-300 uppercase tracking-widest text-[10px] font-mono border-l-2 border-cyan-400 pl-2">Syllabus Maps</span>
            <div className="flex flex-col space-y-2 text-[11px] font-medium text-slate-500">
              <a href="#hero" className="hover:text-cyan-400 transition-colors">Lecture Hall Alpha</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">Institutional Legacy</a>
              <a href="#faculty" className="hover:text-cyan-400 transition-colors">DK Mishra Profile</a>
              <a href="#courses" className="hover:text-cyan-400 transition-colors">Math Curriculums</a>
            </div>
          </div>

          {/* Column 3: Handouts */}
          <div className="md:col-span-2 space-y-3">
            <span className="block font-bold text-slate-300 uppercase tracking-widest text-[10px] font-mono border-l-2 border-cyan-400 pl-2">Resource Desk</span>
            <div className="flex flex-col space-y-2 text-[11px] font-medium text-slate-500">
              <a href="#ai-features" className="hover:text-cyan-400 transition-colors">Question Tracking</a>
              <a href="#faculty" className="hover:text-cyan-400 transition-colors">Printed Manuals</a>
              <a href="#gallery" className="hover:text-cyan-400 transition-colors">Evaluation Hubs</a>
              <a href="#toppers" className="hover:text-cyan-400 transition-colors">Toppers Matrices</a>
            </div>
          </div>

          {/* Column 4: Location Contact Parameters */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-bold text-slate-300 uppercase tracking-widest text-[10px] font-mono border-l-2 border-cyan-400 pl-2">Campus Terminal</span>
            <p className="text-[11px] text-slate-500 leading-relaxed font-light font-sans">
              Mathematics Today Campus, Civil Courts Road, Motihari, East Champaran, Bihar - 245001
            </p>
            <div className="pt-2 flex flex-col space-y-1 font-mono text-[11px]">
              <span className="text-slate-300 font-bold block">Hotline: +91 89543 07374</span>
              <span className="text-slate-500 block">Support: info@mathematicstoday.in</span>
            </div>
          </div>

        </div>

        {/* Bottom Absolute Trademark Standard Lines Row */}
        <div className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-mono">
          <span>© 2026 Mathematics Today Core Campus Network. All Rights Reserved.</span>
          <span className="bg-[#050912] border border-slate-800/80 px-3 py-1 rounded-md text-slate-500">Build System Stable v3.5.0 Production</span>
        </div>
      </footer>

    </div>
  );
}