import React, { useState } from 'react';
import { 
  MapPin, Wifi, Users, Search, Home, X, 
  Flame, HardHat, Navigation, Check, Clock, ShieldAlert,
  Phone, CheckCircle, Calendar, ShieldCheck, AlertCircle, Star,
  Tv, Dumbbell, BookOpen, Coffee, Mail, Download, ChevronRight, ChevronLeft
} from 'lucide-react';

// 🛏️ EXTENDED MULTI-ANGLE ROOM IMAGES CONFIGURATION MATRIX
const roomVariants = [
  {
    id: "variant-1",
    title: "Comfortable Single Room",
    desc: "Premium isolated single layout with a dedicated structural study table, ergonomic wooden chair, separate wardrobe space, and a private ventilation balcony corridor.",
    price: "8,500",
    tags: ["Personal Desk", "Private Wardrobe", "Balcony Access"],
    specs: ["Attached Western Toilet", "Dedicated Geyser Point", "Air Cooling Ready"],
    // 3 Distinct high quality angles for single rooms
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "variant-2",
    title: "Standard Twin Sharing",
    desc: "Spacious dual configuration tailored for mutual student routine operations. Includes dual independent study centers and separate secure privacy lock lockers.",
    price: "6,500",
    tags: ["Dual Beds", "Separate Lockers", "Shared Workspace"],
    specs: ["Attached Bathroom Unit", "24/7 Water Pipeline", "Optimal Window Ventilation"],
    // 3 Distinct high quality angles for twin sharing
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623625434462-e5e42348e60c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6a2806647f81?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "variant-3",
    title: "Triple Budget Sharing",
    desc: "Highly economic structural layout layout built for optimal space utilization. Seamless access to common recreational lounges and private bed units.",
    price: "5,500",
    tags: ["Triple Lockers", "Window View", "Maximum Value"],
    specs: ["Common Lobby Access", "Purified RO Water Point", "Regular Housekeeping Pack"],
    // 3 Fixed recovered high quality angles for triple sharing rooms
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

// Reusable Image Carousel Sub-Component for individual room variants
function RoomImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-56 bg-slate-950 relative overflow-hidden group">
      <img 
        src={images[currentIndex]} 
        className="w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-500 ease-out" 
        alt={`${title} view ${currentIndex + 1}`} 
      />
      
      {/* Navigation Arrow Elements */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 p-1.5 rounded-full text-slate-400 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20 border border-slate-800"
      >
        <ChevronLeft size={14} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 p-1.5 rounded-full text-slate-400 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20 border border-slate-800"
      >
        <ChevronRight size={14} />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-4 bg-amber-500' : 'w-1.5 bg-slate-600'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [formData, setFormData] = useState({ name: "", phone: "", reference: "", roomType: "Double Sharing", date: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const filteredPGs = roomVariants.filter(room => 
    room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEnquirySubmit = (e, targetForm) => {
    e.preventDefault();
    if (targetForm === 'quick') {
      setQuickSubmitted(true);
      setTimeout(() => {
        setQuickSubmitted(false);
        setFormData({ name: "", phone: "", reference: "", roomType: "Double Sharing", date: "" });
      }, 2500);
    } else {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setModalOpen(false);
        setFormData({ name: "", phone: "", reference: "", roomType: "Double Sharing", date: "" });
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200 font-sans antialiased text-left selection:bg-amber-500 selection:text-slate-950 scroll-smooth">
      
      {/* 👑 TOP ALERTS HEADER ROW */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 px-4 py-2.5 text-center text-xs font-mono font-black text-slate-950 flex items-center justify-center gap-2 shadow-md relative z-50">
        <ShieldAlert size={14} className="shrink-0 animate-pulse" />
        <span>Selaqui Admissions Live 2026-27: Skip Brokerage Barriers Entirely & Secure Mapped Beds Online!</span>
      </div>

      {/* 🏢 STICKY NAVIGATION BLOCK */}
      <nav className="sticky top-0 z-40 bg-[#0a0e17]/95 backdrop-blur-md border-b border-slate-900/60 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950 shadow-lg shadow-amber-500/10">
              <Home size={18} />
            </div>
            <div>
              <span className="block font-black text-xl tracking-tight text-white uppercase leading-none">RAMOLA</span>
              <span className="block text-[9px] uppercase font-mono tracking-widest text-amber-400 font-extrabold mt-1">RESIDENCY & MANAGEMENT HOUSING</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#rooms" className="hover:text-amber-400 transition-colors">Room Layouts</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">Utilities</a>
            <a href="#recreation" className="hover:text-amber-400 transition-colors">Fitness</a>
            <a href="#food" className="hover:text-amber-400 transition-colors">Diet Plan</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Enquire Now</a>
            <a href="tel:+918954307374" className="text-amber-400 flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs shadow-inner">
              📞 +91 89543 07374
            </a>
          </div>
        </div>
      </nav>

      {/* 🎬 FIXED HERO SECTOR WITH HIGH CONTRAST CLEAN FONTS */}
      <header className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-900 py-24 md:py-32 px-6">
        <div className="absolute inset-0 z-0 opacity-20 object-cover w-full h-full pointer-events-none">
          <iframe 
            src="https://www.youtube.com/embed/5D8M6SgXg9Y?autoplay=1&mute=1&loop=1&playlist=5D8M6SgXg9Y&controls=0&showinfo=0&rel=0&modestbranding=1" 
            className="w-full h-full scale-125 md:scale-150 border-none"
            title="Living Setup Flow"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/80 to-slate-950/50 z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6 text-center relative z-20">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md text-slate-300 font-mono text-[11px] shadow-md">
            <HardHat size={12} className="text-amber-500" /> Selaqui Corporate & Industrial Corridor Node Mapped
          </div>
          
          {/* 💎 FIXED FONTS WEIGHT & DECORATION SCHEMES */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Premium Boys Hostel <br /> Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 border-b-4 border-amber-500/40 pb-1">Selaqui Industrial Hub</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            Standard localized entry maps located 5 minutes from principal plant installations, DBS complexes, and the central corridor. Designed to optimize academic focus and staff security matrix boundaries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button onClick={() => { setSelectedVariant(null); setModalOpen(true); }} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs px-6 py-3.5 rounded-lg shadow-lg shadow-amber-500/10 uppercase tracking-widest transition-transform hover:-translate-y-0.5 cursor-pointer">
              Book Your Room
            </button>
            <a href="#contact" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs px-5 py-3.5 rounded-lg transition-colors flex items-center gap-1.5">
              <Download size={14} className="text-amber-500" /> Download Brochure
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-14">
            {[
              { title: "5 Minutes", label: "From Main Corridors" },
              { title: "4.9 ★ Rating", label: "330+ Active Records" },
              { title: "24/7 Safety", label: "CCTV Rings & Biometrics" },
              { title: "FSSAI Kitchen", label: "Standard 4 Meals Daily" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 backdrop-blur-sm text-center shadow-lg">
                <span className="block text-lg font-black text-amber-400 font-mono">{stat.title}</span>
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider font-bold mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 📚 SECTION 1: SYSTEM PHILOSOPHY */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block bg-amber-500/5 px-2 py-1 rounded w-fit border border-amber-500/10">Verification Records</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">More Than a Hostel.<br /><span className="text-amber-400">A Standard Routine.</span></h2>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
              Ramola Residency enforces strict structural control modules over incoming student lifestyles. We target a seamless baseline setup where clean hydration nodes, optimized physical spaces, and balanced meals operate together.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded border border-slate-800/60"><CheckCircle size={14} className="text-amber-400 shrink-0" /> Biometric Entry Nodes</div>
              <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded border border-slate-800/60"><CheckCircle size={14} className="text-amber-400 shrink-0" /> On-Site Resident Warden</div>
              <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded border border-slate-800/60"><CheckCircle size={14} className="text-amber-400 shrink-0" /> Standard FSSAI Mess Unit</div>
              <div className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded border border-slate-800/60"><CheckCircle size={14} className="text-amber-400 shrink-0" /> Integrated Power Backup</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400&auto=format&fit=crop" className="rounded-xl border border-slate-800 opacity-60 w-full object-cover h-44 shadow-md" alt="" />
              <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=400&auto=format&fit=crop" className="rounded-xl border border-slate-800 opacity-60 w-full object-cover h-56 shadow-md" alt="" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&auto=format&fit=crop" className="rounded-xl border border-slate-800 opacity-60 w-full object-cover h-56 shadow-md" alt="" />
              <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-5 rounded-xl h-44 flex flex-col justify-end text-left shadow-lg">
                <span className="block text-3xl font-mono font-black text-amber-400 leading-none">1800+</span>
                <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-widest font-bold mt-1">Total Housed Metric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔮 SECOND PAGE SECTION: RESTRUCTURED ACCOMMODATION LAYOUT */}
      <section id="rooms" className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-900">
        <div className="text-center space-y-3 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">Room Variant Matrix</span>
          
          {/* 💎 FIXED FONT DESIGN: CLEAN BOLD NO COMPLICATED STRETCHES */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Select Your Accommodation Layout
          </h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto font-light leading-relaxed">
            Transparent monthly charge models without any hidden broker transaction files or extra costs.
          </p>
        </div>

        {/* 🛏️ FIXED MULTI-ANGLE CAROUSEL CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPGs.map((room) => (
            <div key={room.id} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group">
              <div>
                
                {/* Embedded Carousel Slider Logic replacing single faulty image */}
                <RoomImageSlider images={room.images} title={room.title} />

                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors leading-none">{room.title}</h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed pt-1.5">{room.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {room.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-900 text-slate-400 text-[10px] font-mono px-2.5 py-0.5 rounded border border-slate-800">{tag}</span>
                    ))}
                  </div>

                  <div className="space-y-1.5 bg-slate-950/80 p-3 rounded-xl border border-slate-900 text-[11px] font-mono text-slate-300">
                    {room.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={11} className="text-amber-400 shrink-0" /> <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-slate-900 bg-slate-950/40 flex justify-between items-center">
                <div className="font-mono text-left">
                  <span className="text-[9px] uppercase text-slate-500 block tracking-wider">Net Charge</span>
                  <span className="text-lg font-black text-amber-400">₹{room.price}<span className="text-xs font-normal text-slate-500">/mo</span></span>
                </div>
                <button 
                  onClick={() => { setSelectedVariant(room); setModalOpen(true); }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer shadow-md"
                >
                  Book Space
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ SECTION 3: UTILITIES SUMMARY */}
      <section id="amenities" className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-900">
        <div className="text-center space-y-2 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">Standard Equipment</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Amenities That Matter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {[
            { icon: <Wifi size={18} />, title: "Unlimited Fiber Network", desc: "High-speed multi-band structural routing mapped across all floors and student reading corners." },
            { icon: <ShieldCheck size={18} />, title: "Biometric Security System", desc: "Rigorous entry logs backed by automated surveillance networks and manual gate guards." },
            { icon: <Flame size={18} />, title: "Silent Genset Backup", desc: "Heavy corporate standard automatic backup engines integrated for zero power disruption parameters." },
            { icon: <Home size={18} />, title: "Daily Room Scrubbing", desc: "Standard deep cleaning and sanitization routines executed under strict daily maintenance logs." },
            { icon: <Coffee size={18} />, title: "Emergency Doctor Link", desc: "Immediate coordinate matching with regional healthcare vectors and diagnostic centers." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl p-5 space-y-3 text-left hover:border-slate-700/60 transition-all shadow-md">
              <div className="text-amber-400 bg-amber-500/10 p-2.5 rounded-xl w-fit border border-amber-500/5"><item.icon.type {...item.icon.props} /></div>
              <h3 className="font-extrabold text-white text-sm uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 font-sans font-light text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 SECTION 4: FITNESS ZONE CONFIGURED */}
      <section id="recreation" className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-900">
        <div className="text-center space-y-2 pb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">Active Recreation</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Unwind, Play, Stay Fit</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { icon: <Dumbbell size={16} />, title: "Full-Size Gym Room", desc: "Proper operational workout zone stacked with multi-station benches, dumbells, and cardio trainers.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" },
            { icon: <Tv size={16} />, title: "Indoor Gaming Zone", desc: "Standard table tennis configurations, tournament-grade carrom models, and structural board alignments.", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400&auto=format&fit=crop" },
            { icon: <Tv size={16} />, title: "HD Entertainment Hall", desc: "Smart flat-panel displays coupled with active audio setups for regular group streaming and game screenings.", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop" },
            { icon: <BookOpen size={16} />, title: "Silent Reading Library", desc: "Acoustically insulated reading setups engineered for exams preparation and programming workflows.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group hover:border-slate-700 transition-all">
              <div className="h-44 bg-slate-950 opacity-55 relative overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" alt={item.title} />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-black uppercase tracking-wide">
                  <item.icon.type {...item.icon.props} /> <span>{item.title}</span>
                </div>
                <p className="text-slate-400 font-sans text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="p-3 bg-slate-950/40 border-t border-slate-800/40 text-[9px] font-mono tracking-wider uppercase text-slate-500 text-center">
                Ramola Asset Profile
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🍱 SECTION 5: MESS LOGISTICS */}
      <section id="food" className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block bg-amber-500/5 px-2 py-1 rounded w-fit border border-amber-500/10">Diet Charts</span>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight pt-1">Hygienic Home-Style Mess</h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
              Our FSSAI verified kitchen tracking tools execute standard health routines. We deliver 4 distinct meals daily with proper nutritional checking matrices.
            </p>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex items-center gap-3 shadow-inner">
              <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-2 rounded-lg font-mono font-black shrink-0">100% PURE VEG</div>
              <span className="text-slate-400 text-xs font-light font-mono leading-tight">We operate under a strict pure vegetarian raw material sourcing manifest within the entire facility corridor.</span>
            </div>
          </div>

          <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4 shadow-2xl">
            <h3 className="text-sm font-black uppercase font-mono tracking-wider text-white text-left border-b border-slate-800 pb-2.5 flex items-center gap-2">
              <Clock size={16} className="text-amber-400" /> Operational Daily Meal Schedules
            </h3>
            
            <div className="space-y-2.5 font-mono text-xs text-left">
              {[
                { type: "Breakfast Layout", time: "07:00 AM - 09:00 AM", info: "Sprouts, hot milk, tea, stuffed parathas or seasonal items" },
                { type: "Lunch (Campus Mapped)", time: "12:00 PM - 02:00 PM", info: "Standard North Indian full diet tracking with fresh curd layers" },
                { type: "Evening Tea Refreshment", time: "05:30 PM - 06:45 PM", info: "Fresh hot milk tea matched with crispy organic bites" },
                { type: "Dinner Allocation Block", time: "08:00 PM - 09:45 PM", info: "Green vegetables, pulses, rotis, desserts, and rice sheets" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/60 flex flex-col sm:flex-row justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="block font-black text-slate-200">{item.type}</span>
                    <span className="block text-[11px] text-slate-500 font-sans font-light">{item.info}</span>
                  </div>
                  <span className="text-amber-400 font-bold sm:text-right shrink-0 bg-amber-500/5 px-2.5 py-1 rounded h-fit text-[11px] border border-amber-500/10">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📞 SECTION 6: DATA INTAKE PIPELINE */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">Office Desk</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Initialize Your Bed Request Hold</h2>
              <p className="text-slate-400 text-xs font-light">Submit your profile credentials. Our administrative desk tracks logs and responses inside 24 hours.</p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <Phone size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Desk Hotline</span>
                  <a href="tel:+918954307374" className="block text-white font-bold hover:text-amber-400 mt-0.5">+91 89543 07374</a>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <Mail size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Electronic Support</span>
                  <a href="mailto:info@ramolanest.in" className="block text-white font-bold hover:text-amber-400 mt-0.5">info@ramolanest.in</a>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 shadow-md">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-500 text-[9px] uppercase tracking-wider">Site Mapping</span>
                  <p className="text-white font-medium leading-relaxed mt-0.5 font-sans text-xs">
                    Vill. Pondha, Near Petrol Pump, Selaqui Industrial Area, Selakui, Central Hope Town, Dehradun, Uttarakhand 248011
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/20 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <h3 className="text-lg font-black text-white uppercase tracking-tight border-b border-slate-800 pb-3 text-left">Quick Intake Verification</h3>
            
            {quickSubmitted ? (
              <div className="py-20 text-center space-y-3 flex flex-col items-center justify-center font-mono">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                  <CheckCircle size={32} />
                </div>
                <h4 className="font-bold text-white text-sm uppercase">Enquiry Dispatched Safely</h4>
                <p className="text-slate-400 text-[11px] font-light max-w-[280px] font-sans leading-relaxed">
                  Your requests have been successfully logged. Our administrative desk counselor will call your line shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => handleEnquirySubmit(e, 'quick')} className="space-y-4 pt-6 font-mono text-xs text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">Full Name *</label>
                  <input 
                    type="text" required placeholder="Enter candidate name"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">Phone Contact Line *</label>
                  <input 
                    type="tel" required placeholder="+91 70043 XXXXX"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">College Name / Company Unit *</label>
                  <input 
                    type="text" required placeholder="e.g., UPES B.Tech / Industry Staff"
                    value={formData.reference} onChange={(e) => setFormData({...formData, reference: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400">Target Configuration *</label>
                  <select 
                    value={formData.roomType} onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 cursor-pointer text-slate-300"
                  >
                    <option>Single Premium Room</option>
                    <option>Double Bed Twin Sharing</option>
                    <option>Triple Budget Sharing</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-lg text-xs tracking-widest uppercase shadow-md transition-colors cursor-pointer">
                    Submit Enquiry Form
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 🔮 RESERVATION OVERLAY MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#111522] border border-slate-800 rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl text-left font-mono text-xs">
            
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <div>
                <span className="text-[9px] uppercase text-amber-400 font-bold block">Bed Hold System</span>
                <h4 className="font-bold text-sm text-white truncate max-w-[240px]">{selectedVariant ? selectedVariant.title : "Ramola Main Wing Slots"}</h4>
              </div>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 cursor-pointer">
                <X size={16} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3 flex flex-col items-center justify-center">
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                    <CheckCircle size={22} />
                  </div>
                  <h5 className="font-bold text-white text-xs">Allocation Hold Active</h5>
                  <p className="text-slate-400 text-[11px] font-sans font-light max-w-[240px] text-center leading-relaxed">
                    Manager will coordinate with your phone line parameters inside 30 minutes to lock specific room positions.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => handleEnquirySubmit(e, 'modal')} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Full Name</label>
                    <input type="text" required placeholder="Dilkhush Kumar" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Contact Number</label>
                    <input type="tel" required placeholder="70043XXXXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-md p-2.5 text-white text-xs focus:outline-none focus:border-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-slate-400">Target Date</label>
                    <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-slate-950 border border-slate-400 text-xs focus:outline-none focus:border-amber-500" />
                  </div>
                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider mt-2 cursor-pointer shadow">
                    Authorize Bed Allocation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 🛠️ FOOTER LOGISTIC NODE */}
      <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 text-left">
          <div className="md:col-span-5 space-y-3">
            <span className="font-black text-base text-slate-200 block uppercase">RAMOLA RESIDENCY CORRIDOR</span>
            <p className="text-[11px] font-sans font-light text-slate-500 leading-relaxed max-w-xs">
              A premium residential anchor for students and corporate training operations across Dehradun sectors.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <span className="block font-bold text-slate-400 uppercase tracking-wider text-[11px]">System Maps</span>
            <div className="flex flex-col space-y-1 text-[11px] text-slate-500 font-sans">
              <a href="#about" className="hover:text-amber-400 transition-colors">Philosophy Node</a>
              <a href="#rooms" className="hover:text-amber-400 transition-colors">Rental Structure Chart</a>
              <a href="#amenities" className="hover:text-amber-400 transition-colors">Core Facilities</a>
            </div>
          </div>
          <div className="md:col-span-4 space-y-2">
            <span className="block font-bold text-slate-400 uppercase tracking-wider text-[11px]">Desk Hotline</span>
            <span className="block font-bold text-slate-300">📞 +91 89543 07374</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-600">
          <span>© 2026 Ramola Home Boys PG Hub. All Core Rights Mapped.</span>
          <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">v1.1.5 Stable</span>
        </div>
      </footer>

    </div>
  );
}