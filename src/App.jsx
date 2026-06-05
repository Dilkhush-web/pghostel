import React, { useState } from 'react';
import { 
  Home, X, Check, Clock, ShieldAlert, Phone, Mail, MapPin,
  ChevronRight, ChevronLeft, Users, Wifi, Flame, HardHat,
  Dumbbell, Tv, BookOpen, Coffee, Star, ShieldCheck, HelpCircle
} from 'lucide-react';

// DYNAMIC CORE INVENTORY (Boys & Girls Distinct Segment Pools)
const masterInventory = {
  Boys: [
    {
      id: "ksg-boys-single",
      title: "KSG Boys Single Isolation Unit",
      desc: "Calibrated private chamber configuration optimized for maximum mental focus. Integrated with independent workspace desks and private lockers.",
      basePrice: 9000,
      deposit: "1 Month Base Advance",
      amenities: ["Dedicated High-Band Wi-Fi Node", "RO Mineral Water Line", "Regular Maintenance Wrap"],
      images: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop"
      ]
    },
    {
      id: "ksg-boys-twin",
      title: "KSG Boys Dual Sharing Studio",
      desc: "Spacious twin alignment layout custom engineered for peers and corporate interns. Built with independent charging nodes and discrete double wardrobes.",
      basePrice: 7000,
      deposit: "₹5,000 Flat Security",
      amenities: ["High-Speed Internet", "Attached Western Bath", "Separate Desk Array"],
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1623625434462-e5e42348e60c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185127-6a2806647f81?q=80&w=600&auto=format&fit=crop"
      ]
    }
  ],
  Girls: [
    {
      id: "ksg-girls-twin",
      title: "KSG Girls Secure Twin Studio",
      desc: "High-security internal layout backed by strict biometric synchronization rules. Outfitted with premium large dressing centers and independent study clusters.",
      basePrice: 7500,
      deposit: "1 Month Base Advance",
      amenities: ["3-Tier Biometric Security", "Full Mirror Dressing Node", "Personal Balcony Segment"],
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop"
      ]
    },
    {
      id: "ksg-girls-triple",
      title: "KSG Girls Budget Triple Cluster",
      desc: "Calibrated value tier configuration ensuring strict security and ventilation metrics are kept uncompromised. Features three distinct locker configurations.",
      basePrice: 6000,
      deposit: "₹5,000 Flat Security",
      amenities: ["Daily In-House Housekeeping", "Warden Guard Protocol", "RO Drinking System"],
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop"
      ]
    }
  ]
};

// Fluid Layout Multi-Angle Slider Engine
function InlineImageSlider({ images, title }) {
  const [activeImg, setActiveImg] = useState(0);
  const triggerPrev = (e) => { e.stopPropagation(); setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1)); };
  const triggerNext = (e) => { e.stopPropagation(); setActiveImg((prev) => (prev === images.length - 1 ? 0 : prev + 1)); };

  return (
    <div className="h-60 bg-slate-950 relative overflow-hidden group">
      <img src={images[activeImg]} className="w-full h-full object-cover opacity-50 group-hover:scale-102 transition-transform duration-700 ease-out" alt={title} />
      <button onClick={triggerPrev} type="button" className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-emerald-400 hover:text-slate-950 p-2 rounded-lg text-slate-400 transition-all opacity-0 group-hover:opacity-100 z-20 border border-slate-800 cursor-pointer"><ChevronLeft size={14} /></button>
      <button onClick={triggerNext} type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-emerald-400 hover:text-slate-950 p-2 rounded-lg text-slate-400 transition-all opacity-0 group-hover:opacity-100 z-20 border border-slate-800 cursor-pointer"><ChevronRight size={14} /></button>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-slate-400 bg-slate-950/80 border border-slate-800/80 px-2 py-0.5 rounded backdrop-blur-sm">
        Angle: {activeImg + 1} / {images.length}
      </div>
    </div>
  );
}

export default function App() {
  const [activeWing, setActiveWing] = useState("Boys");
  const [modalState, setModalState] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  // Realtime Live Matrix Pricing Estimator States
  const [calcTier, setCalcTier] = useState(7000); 
  const [calcAc, setCalcAc] = useState(0); 
  const [calcWashing, setCalcWashing] = useState(0);

  // Form Submission Blocks
  const [inputField, setInputField] = useState({ clientName: "", clientPhone: "", referenceCode: "", wingTarget: "Boys Active Unit", arrivalDate: "" });
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [sidebarSuccess, setSidebarSuccess] = useState(false);

  const handleDataPipeline = (e, buildType) => {
    e.preventDefault();
    if (buildType === 'sidebar') {
      setSidebarSuccess(true);
      setTimeout(() => { setSidebarSuccess(false); setInputField({ clientName: "", clientPhone: "", referenceCode: "", wingTarget: "Boys Active Unit", arrivalDate: "" }); }, 2500);
    } else {
      setSuccessOverlay(true);
      setTimeout(() => { setSuccessOverlay(false); setModalState(false); setInputField({ clientName: "", clientPhone: "", referenceCode: "", wingTarget: "Boys Active Unit", arrivalDate: "" }); }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#060f14] text-slate-300 font-sans antialiased text-left selection:bg-emerald-400 selection:text-slate-950 scroll-smooth">
      
      {/* 👑 TOP ALERT REGISTRATION SYSTEM LINE */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 px-4 py-2.5 text-center text-xs font-mono font-black text-slate-950 flex items-center justify-center gap-2 shadow relative z-50">
        <ShieldAlert size={13} className="animate-pulse" />
        <span>KSG ACCOMMODATION DASHBOARD: Verified Structural Spaces in Central Hope Town. Skip Broker Interventions.</span>
      </div>

      {/* 🏢 MAIN HEADER HUD */}
      <nav className="sticky top-0 z-40 bg-[#060f14]/90 border-b border-slate-900/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-400 p-2.5 rounded-xl text-slate-950 shadow-lg shadow-emerald-400/20">
              <Home size={18} />
            </div>
            <div>
              <span className="block font-black text-2xl tracking-tight text-white uppercase leading-none">K S G</span>
              <span className="block text-[9px] uppercase font-mono tracking-widest text-emerald-400 font-black mt-1">PG HOME & HOSTEL CORE PANEL</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
            <a href="#canvas" className="hover:text-emerald-400 transition-colors">Split Interface</a>
            <a href="#utilities" className="hover:text-emerald-400 transition-colors">Infrastructure</a>
            <a href="#recreation" className="hover:text-emerald-400 transition-colors">Active Space</a>
            <a href="#food" className="hover:text-emerald-400 transition-colors">Diet Table</a>
            <a href="tel:+918954307374" className="text-emerald-400 flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shadow-inner text-xs">
              📞 +91 89543 07374
            </a>
          </div>
        </div>
      </nav>

      {/* 🎬 DYNAMIC BACKDROP SCREEN VIDEO HEADER */}
      <header className="relative w-full overflow-hidden bg-slate-950 py-24 md:py-28 px-6 border-b border-slate-900">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none w-full h-full scale-125">
          <iframe src="https://www.youtube.com/embed/5D8M6SgXg9Y?autoplay=1&mute=1&loop=1&playlist=5D8M6SgXg9Y&controls=0&showinfo=0&rel=0&modestbranding=1" className="w-full h-full border-none" title="KSG Space View" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f14] via-[#060f14]/80 to-slate-950/40 z-10"></div>

        <div className="max-w-4xl mx-auto space-y-4 text-center relative z-20">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded text-slate-400 font-mono text-[11px]">
            <HardHat size={12} className="text-emerald-400" /> Selakui, Central Hope Town Postal Area Index: 248011
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Next-Gen Living Platforms For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 border-b-2 border-emerald-400/30 pb-0.5">K S G PG HOME / HOSTEL</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Calibrated architectural deployment engineered for extreme routine stability. Featuring modular biometric isolation per wing and zero broker commissions.
          </p>
        </div>
      </header>

      {/* 🔮 THE BRAND NEW FLOW STATE: SPLIT CANVAS SYSTEM ENVIRONMENT */}
      <section id="canvas" className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-b border-slate-900">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT INTERACTIVE COLUMN BOARD (Live Switches & Calculators Hub) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* 1. Dynamic Wing Allocation Switchboard */}
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
              <div>
                <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block tracking-wider">Control Panel Node 01</span>
                <h3 className="font-extrabold text-sm text-white uppercase tracking-tight">Active Wing Routing</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <button 
                  onClick={() => setActiveWing("Boys")}
                  className={`p-3 rounded-xl border text-center font-black transition-all cursor-pointer uppercase ${activeWing === "Boys" ? "bg-emerald-400 text-slate-950 border-transparent shadow-lg" : "bg-slate-950 border-slate-800/80 text-slate-500 hover:text-white"}`}
                >
                  Boys Cluster
                </button>
                <button 
                  onClick={() => setActiveWing("Girls")}
                  className={`p-3 rounded-xl border text-center font-black transition-all cursor-pointer uppercase ${activeWing === "Girls" ? "bg-emerald-400 text-slate-950 border-transparent shadow-lg" : "bg-slate-950 border-slate-800/80 text-slate-500 hover:text-white"}`}
                >
                  Girls Cluster
                </button>
              </div>
            </div>

            {/* 2. Interactive Fluid Pricing Estimator */}
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl text-left">
              <div>
                <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block tracking-wider">Control Panel Node 02</span>
                <h3 className="font-extrabold text-sm text-white uppercase tracking-tight">Live Rent Estimator</h3>
              </div>
              
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase text-slate-500">Bed Allocation Tier</span>
                  <div className="grid grid-cols-3 gap-1">
                    {[{l:"Single",v:9000},{l:"Double",v:7000},{l:"Triple",v:6000}].map((o)=>(
                      <button key={o.l} onClick={() => setCalcTier(o.v)} className={`p-2 rounded border text-center font-bold cursor-pointer ${calcTier === o.v ? 'border-emerald-400/80 text-emerald-400 bg-emerald-400/5' : 'border-slate-800 bg-slate-950 text-slate-500'}`}>{o.l}</button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-[10px] uppercase text-slate-500">Thermal Infrastructure</span>
                  <div className="grid grid-cols-2 gap-1">
                    <button onClick={() => setCalcAc(0)} className={`p-2 rounded border text-center font-bold cursor-pointer ${calcAc === 0 ? 'border-emerald-400/80 text-emerald-400 bg-emerald-400/5' : 'border-slate-800 bg-slate-950 text-slate-500'}`}>Non-AC</button>
                    <button onClick={() => setCalcAc(1500)} className={`p-2 rounded border text-center font-bold cursor-pointer ${calcAc === 1500 ? 'border-emerald-400/80 text-emerald-400 bg-emerald-400/5' : 'border-slate-800 bg-slate-950 text-slate-500'}`}>AC Wing (+1.5k)</button>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-[10px] uppercase text-slate-500">Laundry Distribution</span>
                  <div className="grid grid-cols-2 gap-1">
                    <button onClick={() => setCalcWashing(0)} className={`p-2 rounded border text-center font-bold cursor-pointer ${calcWashing === 0 ? 'border-emerald-400/80 text-emerald-400 bg-emerald-400/5' : 'border-slate-800 bg-slate-950 text-slate-500'}`}>Self Wash</button>
                    <button onClick={() => setCalcWashing(500)} className={`p-2 rounded border text-center font-bold cursor-pointer ${calcWashing === 500 ? 'border-emerald-400/80 text-emerald-400 bg-emerald-400/5' : 'border-slate-800 bg-slate-950 text-slate-500'}`}>Desk Wash (+500)</button>
                  </div>
                </div>
              </div>

              {/* Realtime Output Terminal Sheet */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center font-mono">
                <span className="text-[9px] uppercase text-slate-500 block tracking-widest">Calculated Tariff</span>
                <span className="text-2xl font-black text-emerald-400 block mt-0.5">₹{calcTier + calcAc + calcWashing}<span className="text-xs font-normal text-slate-500">/mo</span></span>
                <span className="text-[10px] text-slate-500 block font-sans pt-1">Mess food allocations fully covered</span>
              </div>
            </div>

          </div>

          {/* RIGHT VIEWPORT DYNAMIC CONTAINER GRID (Renders active configuration models only) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-left border-b border-slate-900 pb-3 flex justify-between items-center">
              <div>
                <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 font-mono">Live Segment Streams Mapped</h2>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">Current Stack Vector: KSG {activeWing} Infrastructure Pool</p>
              </div>
            </div>

            {/* Render Loops Core */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {masterInventory[activeWing].map((room) => (
                <div key={room.id} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/20 transition-all shadow-lg group">
                  <div>
                    {/* Integrated Slider Element replacing faulty links maps */}
                    <InlineImageSlider images={room.images} title={room.title} />

                    <div className="p-5 space-y-4 text-left">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono bg-slate-950 text-emerald-400 border border-slate-800 px-2 py-0.5 rounded font-bold uppercase">{activeWing} Unit Block</span>
                        <h3 className="font-extrabold text-base text-white group-hover:text-emerald-400 transition-colors leading-none pt-1.5">{room.title}</h3>
                        <p className="text-slate-400 text-xs font-light leading-relaxed pt-1.5">{room.desc}</p>
                      </div>

                      {/* Amenities checklist loop */}
                      <div className="space-y-1.5 bg-slate-950/70 p-3 rounded-xl border border-slate-900 text-[11px] font-mono text-slate-300">
                        {room.amenities.map((am, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check size={11} className="text-emerald-400 shrink-0" /> <span className="truncate">{am}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-2 border-t border-slate-900 bg-slate-950/40 flex justify-between items-center">
                    <div className="font-mono text-left">
                      <span className="text-[9px] uppercase text-slate-500 block tracking-wider">Base Cost</span>
                      <span className="text-base font-black text-emerald-400">₹{room.basePrice}<span className="text-xs font-normal text-slate-500">/mo</span></span>
                      <span className="block text-[9px] text-slate-600 mt-0.5">Deposit: {room.deposit}</span>
                    </div>
                    <button 
                      onClick={() => { setSelectedRoom(room); setModalState(true); }}
                      className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-mono font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer shadow shadow-emerald-400/5"
                    >
                      Book Bed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ⚡ SECTION 2: SYSTEM INFRASTRUCTURE METRIC */}
      <section id="utilities" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-900">
        <div className="text-center space-y-2 pb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">Routine Baselines</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Facilities Built for High Standards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {[
            { icon: <Wifi size={16} />, t: "Gigabit Routing Matrix", d: "Isolated dedicated fiber optics arrays configured to deny sudden drop anomalies smoothly." },
            { icon: <ShieldCheck size={16} />, t: "Dual Security Ring", d: "Peripheral high definition tracking cameras logged directly onto admin desk systems." },
            { icon: <Flame size={16} />, t: "Silent Power Backup", d: "Heavy mechanical back engines wired to shift circuits instantly upon primary line break logs." },
            { icon: <Coffee size={16} />, t: " RO Hydro Distribution", d: "Multi cycle filtering columns mapped to dispatch clean mineral hydration lines daily." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl p-4.5 space-y-2.5 text-left shadow-inner hover:border-emerald-500/10 transition-colors">
              <div className="text-emerald-400 bg-emerald-400/5 p-2 rounded-lg w-fit border border-emerald-500/10">{item.icon}</div>
              <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">{item.t}</h3>
              <p className="text-slate-500 font-sans font-light text-xs leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 SECTION 3: FITNESS LAB PACKS */}
      <section id="recreation" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-900">
        <div className="text-center space-y-2 pb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">Active Balance</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Unwind, Exercise, Track Goals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: "Multi-Station Gym", desc: "Equipped with specialized dumbbells grids, heavy pull station benches, and cardio training mats.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" },
            { title: "Indoor Gaming Matrix", desc: "Smooth custom table tennis configurations matched with carrom board layout alignments.", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400&auto=format&fit=crop" },
            { title: "Smart Screening Lounge", desc: "High resolution wall screens integrated with audio blocks for student project briefings or matches.", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop" },
            { title: "Quiet Library Corner", desc: "Isolated spatial cells designed to avoid outside audio leakage during test intervals or code sprints.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden shadow flex flex-col justify-between">
              <div className="h-40 bg-slate-950 opacity-45 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="p-4 space-y-1.5">
                <span className="block text-white text-xs font-black uppercase font-mono tracking-wide text-emerald-400">{item.title}</span>
                <p className="text-slate-500 font-sans text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="p-2.5 bg-slate-950/40 border-t border-slate-800/40 text-[9px] font-mono uppercase text-slate-500 text-center tracking-wider">
                KSG Shared Profile Component
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ SECTION 4: FOOD SCHEDULING LOGS */}
      <section id="food" className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block bg-emerald-400/5 px-2 py-1 rounded w-fit border border-emerald-500/10">Diet Charts</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight pt-1">Hygienic Home-Style Mess</h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
              K S G mess structures follow rigid sanitization criteria. We process 4 specific meal cycles daily loaded with essential nutrition metrics. Everything undergoes strict inventory monitoring protocols before cooking logs start.
            </p>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="bg-emerald-400/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-2 rounded-lg font-mono font-black shrink-0">100% PURE VEG</div>
              <span className="text-slate-500 text-xs font-light font-mono leading-tight">We coordinate a complete restriction boundary mapping against non-vegetarian source inputs anywhere on site.</span>
            </div>
          </div>

          <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-2xl">
            <h3 className="text-xs font-black uppercase font-mono tracking-wider text-white text-left border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <Clock size={14} className="text-emerald-400" /> Operational Mess Hours Sheet
            </h3>
            
            <div className="space-y-2.5 font-mono text-xs text-left">
              {[
                { type: "Breakfast Slot", time: "07:00 AM - 09:00 AM", d: "Sprouts loop, hot milk, tea, stuffed dynamic parathas" },
                { type: "Lunch Allocation", time: "12:00 PM - 02:00 PM", d: "Standard North Indian balanced resource sheets with curd items" },
                { type: "Evening Tea Node", time: "05:30 PM - 06:45 PM", d: "Fresh hot ginger tea matrix matched with light bites" },
                { type: "Dinner Execution", time: "08:00 PM - 09:45 PM", d: "Green vegetables, lentils, hot handmade rotis, and sweet items" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/60 flex flex-col sm:flex-row justify-between gap-1">
                  <div className="space-y-0.5">
                    <span className="block font-black text-slate-200">{item.type}</span>
                    <span className="block text-[11px] text-slate-500 font-sans font-light">{item.d}</span>
                  </div>
                  <span className="text-emerald-400 font-bold sm:text-right shrink-0 bg-emerald-500/5 px-2.5 py-1 rounded h-fit text-[11px] border border-emerald-500/10 mt-1 sm:mt-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📞 SECTION 5: OFFICE DIRECT ENQUIRY MODULE */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">Desk Contacts</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Initialize Candidate Intake Hold</h2>
              <p className="text-slate-500 text-xs font-light">Submit tracking fields below. The Central Hope Town desk manager trace streams inside 24 hours.</p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <Phone size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Hotline Stream</span>
                  <a href="tel:+918954307374" className="block text-white font-bold hover:text-emerald-400 mt-0.5">+91 89543 07374</a>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <Mail size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Office Email</span>
                  <a href="mailto:info@ksghostel.in" className="block text-white font-bold hover:text-emerald-400 mt-0.5">info@ksghostel.in</a>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Site Mapping Address</span>
                  <p className="text-white font-medium leading-relaxed mt-0.5 font-sans text-xs">
                    KSG Building Framework, Selakui, Central Hope Town, Selaqui Industrial Complex, Uttarakhand 248011
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DATA FEED INTERFACE */}
          <div className="lg:col-span-7 bg-slate-900/20 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <h3 className="text-base font-black text-white uppercase tracking-tight border-b border-slate-800 pb-3 text-left font-mono">Quick Verification Interface</h3>
            
            {sidebarSuccess ? (
              <div className="py-20 text-center space-y-3 flex flex-col items-center justify-center font-mono">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 animate-pulse">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-bold text-white text-sm uppercase">Verification Token Logged</h4>
                <p className="text-slate-500 text-[11px] font-sans font-light max-w-[280px] leading-relaxed">
                  Your candidate profile data successfully updated to the local registrar stream. Expect return calls shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => handleDataPipeline(e, 'sidebar')} className="space-y-4 pt-6 font-mono text-xs text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500">Candidate Full Name *</label>
                  <input 
                    type="text" required placeholder="Enter name digits"
                    value={inputField.clientName} onChange={(e) => setInputField({...inputField, clientName: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500">Active Mobile Contact *</label>
                  <input 
                    type="tel" required placeholder="+91 XXXXX XXXXX"
                    value={inputField.clientPhone} onChange={(e) => setInputField({...inputField, clientPhone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500">Institutional Reference / Firm Unit *</label>
                  <input 
                    type="text" required placeholder="e.g., Student Branch Name / Factory Staff Code"
                    value={inputField.referenceCode} onChange={(e) => setInputField({...inputField, referenceCode: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500">Target Wing Matrix *</label>
                  <select 
                    value={inputField.wingTarget} onChange={(e) => setInputField({...inputField, wingTarget: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-400 cursor-pointer text-slate-400"
                  >
                    <option>Boys Only Cluster</option>
                    <option>Girls Only Cluster</option>
                    <option>Working Professionals Loop</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-3.5 rounded-lg text-xs tracking-widest uppercase shadow transition-colors cursor-pointer">
                    Submit Intake Token Request
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 🔮 MODAL POPUP BACKDROP LAYER */}
      {modalState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b1419] border border-slate-800 rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl text-left font-mono text-xs">
            
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <div>
                <span className="text-[9px] uppercase text-emerald-400 font-bold block">Provisional Secure Hold</span>
                <h4 className="font-bold text-sm text-white truncate max-w-[240px]">{selectedRoom ? selectedRoom.title : "KSG Corporate Unit"}</h4>
              </div>
              <button onClick={() => setModalState(false)} className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 cursor-pointer">
                <X size={16} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {successOverlay ? (
                <div className="py-8 text-center space-y-3 flex flex-col items-center justify-center">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <ShieldCheck size={22} />
                  </div>
                  <h5 className="font-bold text-white text-xs">Allocation Request Hold Set</h5>
                  <p className="text-slate-500 text-[11px] font-sans font-light max-w-[240px] text-center leading-relaxed">
                    Manager will coordinate with your phone line parameters inside 30 minutes to lock specific room positions.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => handleDataPipeline(e, 'modal')} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-500">Candidate Full Name</label>
                    <input type="text" required placeholder="e.g., Dilkhush Kumar" value={inputField.clientName} onChange={(e) => setInputField({...inputField, clientName: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Mobile Digit Stream</label>
                    <input type="tel" required placeholder="70043XXXXX" value={inputField.clientPhone} onChange={(e) => setInputField({...inputField, clientPhone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Target Reporting Date</label>
                    <input type="date" required value={inputField.arrivalDate} onChange={(e) => setInputField({...inputField, arrivalDate: e.target.value})} className="w-full bg-slate-950 border border-slate-400 text-xs focus:outline-none focus:border-emerald-400 text-slate-500" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider mt-2 cursor-pointer shadow">
                    Authorize Bed Allocation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 🛠️ CORE BUSINESS FOOTER GRID */}
      <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 text-slate-600 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 text-left">
          <div className="md:col-span-5 space-y-2">
            <span className="font-black text-base text-slate-300 block uppercase">K S G HOUSING MATRICES</span>
            <p className="text-[11px] font-sans font-light text-slate-600 leading-relaxed max-w-xs">
              A high standard verified accommodation layout mapping system operating across Selaqui industrial belts.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <span className="block font-bold text-slate-500 uppercase tracking-wider text-[11px]">System Maps</span>
            <div className="flex flex-col space-y-1 text-[11px] text-slate-600 font-sans">
              <a href="#canvas" className="hover:text-emerald-400 transition-colors">Split Canvas Base</a>
              <a href="#utilities" className="hover:text-emerald-400 transition-colors">Utilities Checklist</a>
              <a href="#estimator" className="hover:text-emerald-400 transition-colors">Pricing Module</a>
            </div>
          </div>
          <div className="md:col-span-4 space-y-1.5">
            <span className="block font-bold text-slate-500 uppercase tracking-wider text-[11px]">Desk Hotline</span>
            <span className="block font-bold text-slate-400">📞 +91 89543 07374</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-600">
          <span>© 2026 K S G PG Home & Hostel Network. Central Hope Town. All Rights Saved.</span>
          <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-500">v2.0.2 Stable</span>
        </div>
      </footer>

    </div>
  );
}