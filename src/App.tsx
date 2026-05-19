import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  Droplets,
  Disc,
  Clock,
  ShieldCheck,
  Send
} from 'lucide-react';

// --- Shared Types ---
interface Service {
  title: string;
  nepaliTitle: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Genuine Spare Parts",
    nepaliTitle: "जेन्युइन स्पेयर पार्ट्स",
    description: "High-quality, original parts for all motorcycle and scooter brands.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Engine Repair",
    nepaliTitle: "इन्जिन मर्मत",
    description: "Expert diagnostics and overhaul services for peak performance.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Full Servicing",
    nepaliTitle: "सर्भिसिङ",
    description: "Comprehensive maintenance to keep your ride smooth and safe.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Oil Change",
    nepaliTitle: "मोबिल परिवर्तन",
    description: "Premium oil and filter changes for engine longevity.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Brake & Clutch",
    nepaliTitle: "ब्रेक तथा क्लच सेवा",
    description: "Reliable brake pad and clutch plate replacement services.",
    icon: <Disc className="w-6 h-6" />
  },
  {
    title: "Expert Mechanics",
    nepaliTitle: "अनुभवी मेकानिक",
    description: "Handled by professionals with years of specialized experience.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-red p-2 rounded-lg">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>जय विदिम्ता</h1>
            <p className="text-[10px] uppercase tracking-widest text-brand-red font-bold">Auto Parts Center</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-brand-red transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-red transition-colors">Services</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-red transition-colors">Contact</a>
          <a href="#contact" className="bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20 active:scale-95">
            Get Quote
          </a>
        </nav>

        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Services</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Contact</a>
            <button className="bg-brand-red text-white py-4 rounded-xl font-bold mt-2">Get Quote</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/auto_parts_hero_1779205838030.png" 
          alt="Modern Auto Parts Shop" 
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Premium Service in Hetauda</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Your Premium <span className="text-brand-red">Auto Parts</span> Partner
          </h2>
          
          <h3 className="text-2xl md:text-3xl text-white/90 font-medium mb-8">
            जय विदिम्ता अटो पार्ट्स सेन्टर
          </h3>

          <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
            All motorcycle and scooter parts available at wholesale and retail prices. 
            Experience reliability and excellence in Hetauda-5, Sanopokhara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-all hover:translate-x-1">
              Visit Us Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+977" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Repair & Upgrade Services</h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            तपाईंको बाइकलाई उत्कृष्ट अवस्थामा राख्ने हाम्रो प्रतिबद्धता। From basic servicing to full engine overhauls, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
              <p className="text-brand-red font-semibold mb-3">{service.nepaliTitle}</p>
              <p className="text-slate-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  const [message, setMessage] = useState('');
  const [customerInfo, setCustomerInfo] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, customerInfo }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setResponse("Sorry, we couldn't process your request at the moment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/mechanic_working_1779205853138.png" 
          alt="Mechanic Working" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ask our Expert</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Confused about which part you need for your motorcycle? Send us an inquiry and our AI Assistant (powered by the shop's expertise) will guide you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-medium">Real-time part consultations</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="font-medium">24/7 Availability</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[450px]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl space-y-4 shadow-2xl">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  value={customerInfo}
                  onChange={(e) => setCustomerInfo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all"
                  placeholder="Manoj Sah"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Your Query (Bike model, part issue...)</label>
                <textarea 
                   rows={3}
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all"
                   placeholder="Which engine oil is best for Apache RTR 160?"
                   required
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-brand-red text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-all disabled:opacity-50"
              >
                {isLoading ? "Consulting..." : "Get Instant Answer"}
                <Send className="w-5 h-5" />
              </button>

              {response && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm italic text-slate-600"
                >
                  <p className="font-bold text-brand-red mb-2 underline">Expert Advice:</p>
                  {response}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Contact & Location</h2>
          <div className="w-20 h-1.5 bg-brand-red rounded-full mb-10" />
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-red flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 italic">Our Location</h4>
                <p className="text-slate-500">Hetauda-5, Sanopokhara</p>
                <p className="text-brand-red font-medium">हेटौंडा–५, सानोपोखरा।</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-red flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 italic">Phone Support</h4>
                <p className="text-slate-500">Contact us for availability & pricing</p>
                <p className="text-brand-red font-medium">+977 (Phone Number)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-red flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 italic">Opening Hours</h4>
                <p className="text-slate-500">Mon - Sun: 8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-brand-red/5 border border-brand-red/10 rounded-3xl">
             <div className="flex items-center gap-2 mb-4">
                <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                <Star className="text-yellow-500 fill-yellow-500 w-5 h-5" />
             </div>
             <p className="text-slate-700 italic font-medium leading-relaxed">
               "Best place in Hetauda for genuine bike parts. The mechanics are very experienced and the pricing is very reasonable compared to others."
             </p>
             <p className="mt-4 text-sm font-bold uppercase text-slate-400">— Local Customer</p>
          </div>
        </div>

        <div className="h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner ring-8 ring-slate-50 relative group">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.13768234384!2d85.0294132!3d27.421447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4900ddbc9c4f%3A0xe5a3c10fb2320b9e!2sSanopokhara%2C%20Hetauda!5e0!3m2!1sen!2snp!4v1716133800000!5m2!1sen!2snp" 
             className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           />
           <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold">Visit Shop</p>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-red p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">जय विदिम्ता</h1>
                <p className="text-[10px] uppercase tracking-widest text-brand-red font-bold">Auto Parts Center</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Your one-stop destination for genuine motorcycle and scooter parts in Hetauda. Wholesale and retail services available with guaranteed quality.
            </p>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 italic">Quick Links</h4>
             <ul className="space-y-4 text-slate-400">
               <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
               <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
               <li><a href="#contact" className="hover:text-white transition-colors">Location</a></li>
               <li><a href="#contact" className="hover:text-white transition-colors">Inquiry</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 italic">Company</h4>
             <ul className="space-y-4 text-slate-400">
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Jai Vidimta Auto Parts Center. All rights reserved.
          </p>
          <div className="flex gap-6">
             <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer">
               <span className="text-sm font-bold">FB</span>
             </div>
             <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer">
               <span className="text-sm font-bold">IG</span>
             </div>
             <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer">
               <span className="text-sm font-bold">WA</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Header />
      <Hero />
      <ServicesSection />
      <InquirySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
