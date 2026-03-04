/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  Stethoscope,
  Smile,
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const CLINIC_PHONE = "081697 23702";
const CLINIC_ADDRESS = "2, Om Shiv Complex, Ghodbunder Rd, beside R Mall, opp. Dosti Imperia, Manpada, Thane West, Thane, Maharashtra 400607";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Om+Dental+Clinic+Thane+West";
const WHATSAPP_LINK = "https://wa.me/918169723702";

// --- Components ---

const WhatsAppButton = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 group">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-white px-4 py-2 rounded-xl shadow-xl text-slate-900 text-sm font-bold border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mb-1"
    >
      Chat with us!
    </motion.div>
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10 opacity-50"
      />
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Meet the Doctor', href: '#doctor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-teal-600' : 'text-white'}`}>
              Om <span className={scrolled ? 'text-slate-800' : 'text-teal-200'}>Dental Clinic</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-teal-500 ${scrolled ? 'text-slate-600' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-teal-700 transition-all"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070"
          alt="Dental Clinic"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-[0.2em] text-teal-400 uppercase bg-teal-400/10 rounded-full border border-teal-400/20 backdrop-blur-sm">
              Welcome to Om Dental Clinic
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight text-balance">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
              Experience world-class dental care with cutting-edge technology and a dedicated specialist committed to your oral health.
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-6">
              <a
                href="#appointment"
                className="group relative px-10 py-5 bg-teal-600 text-white rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-2xl shadow-teal-500/20 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Book Appointment</span>
                <ChevronRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#services"
                className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      {/* Stats Overlay - Refined */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-900/50 backdrop-blur-xl border-t border-white/5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-4 gap-12">
          {[
            { label: 'Happy Patients', value: '10,000+' },
            { label: 'Years Experience', value: '18+' },
            { label: 'Specialist Care', value: 'Expert' },
            { label: 'Success Rate', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-4xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{stat.value}</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                alt="Dental Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-50 rounded-full -z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-600/10 rounded-full -z-0"></div>
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-bold text-slate-800">ISO Certified Clinic</p>
              </div>
              <p className="text-sm text-slate-500">We follow international standards for hygiene and safety.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">About Our Clinic</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Excellence in <span className="text-teal-600">Dental Care</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Om Dental Clinic, we believe that everyone deserves a healthy, beautiful smile. Our clinic is equipped with the latest dental technology to provide pain-free and efficient treatments.
            </p>
            <div className="space-y-6 mb-10">
              {[
                'Highly experienced dental specialist',
                'State-of-the-art diagnostic and treatment equipment',
                'Strict sterilization protocols for patient safety',
                'Personalized treatment plans for every patient'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-100 text-teal-600 rounded-full p-1">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'General Dentistry',
      desc: 'Comprehensive checkups, fillings, and preventive care for all ages.',
      icon: <Stethoscope size={32} />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Teeth Cleaning',
      desc: 'Professional scaling and polishing to keep your gums healthy and breath fresh.',
      icon: <Smile size={32} />,
      color: 'bg-teal-50 text-teal-600'
    },
    {
      title: 'Dental Implants',
      desc: 'Permanent and natural-looking solutions for missing teeth.',
      icon: <ShieldCheck size={32} />,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Advanced endodontic procedures to save your natural teeth.',
      icon: <Zap size={32} />,
      color: 'bg-orange-50 text-orange-600'
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Veneers, bonding, and smile makeovers to enhance your appearance.',
      icon: <Star size={32} />,
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Teeth Whitening',
      desc: 'Safe and effective professional whitening for a brighter smile.',
      icon: <Zap size={32} />,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Orthodontics',
      desc: 'Traditional braces and clear aligners to straighten your teeth.',
      icon: <Users size={32} />,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Dental Care</h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of dental services to meet all your oral health needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#appointment" className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Specialist',
      desc: 'Led by a specialist with over 18 years of clinical experience.',
      icon: <Users size={24} />
    },
    {
      title: 'Modern Equipment',
      desc: 'We use the latest digital X-rays and laser technology.',
      icon: <Zap size={24} />
    },
    {
      title: 'Comfortable Treatment',
      desc: 'Sedation options and a relaxing environment for anxiety-free care.',
      icon: <Smile size={24} />
    },
    {
      title: 'Affordable Care',
      desc: 'Transparent pricing and flexible payment plans for everyone.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Emergency Services',
      desc: 'Prompt support for urgent dental issues and pain relief.',
      icon: <Clock size={24} />
    }
  ];

  return (
    <section className="py-24 bg-teal-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Om Dental?</h2>
            <p className="text-teal-100 text-lg mb-8">
              We combine expertise with empathy to provide a dental experience that is as pleasant as it is effective.
            </p>
            <a href="#appointment" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg">
              Book Your Visit
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
              >
                <div className="bg-white text-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-teal-100 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetTheDoctor = () => {
  const doctor = {
    name: 'Dr. Sameer',
    qual: 'MDS, Oral & Maxillofacial Surgery',
    exp: '18 Years Experience',
    spec: 'Implantologist & Senior Surgeon',
    bio: 'Dr. Sameer is a highly skilled dental surgeon with extensive experience in complex oral procedures and implantology. He is dedicated to providing personalized care and ensuring the best outcomes for every patient.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800'
  };

  return (
    <section id="doctor" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Meet the Expert</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Lead Specialist</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full -mr-32 -mt-32"></div>
            
            <div className="w-full md:w-2/5">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5]">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="w-full md:w-3/5 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
              <p className="text-teal-600 font-bold text-lg mb-6">{doctor.qual}</p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {doctor.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-slate-700 font-bold text-sm">{doctor.spec}</p>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Clock size={20} />
                  </div>
                  <p className="text-slate-700 font-bold text-sm">{doctor.exp}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="bg-slate-900 text-white p-3 rounded-xl hover:bg-teal-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-slate-900 text-white p-3 rounded-xl hover:bg-teal-600 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      text: 'The best dental experience I have ever had. Dr. Sameer explained everything clearly and the procedure was completely painless. Highly recommended!',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Software Engineer',
      text: 'I was always afraid of dentists, but the care here made me feel so comfortable. The clinic is super clean and modern. My root canal was a breeze.',
      rating: 5
    },
    {
      name: 'Sneha Patil',
      role: 'Teacher',
      text: 'Got my dental implants done here. The results are amazing and look so natural. The staff is very polite and professional.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Patient Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-lg italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1503387762-592dec5832f2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581056310664-3d4d74630ff9?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Inside Our Clinic</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl aspect-square shadow-md group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="text-teal-400">Transform</span> Your Smile?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Book your appointment today and take the first step towards a healthier, brighter smile. Our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-teal-400">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Call Us Now</p>
                  <p className="text-white text-2xl font-bold">{CLINIC_PHONE}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-teal-400">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-white text-2xl font-bold">info@palshikardental.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl min-h-[700px] flex flex-col">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">Book Appointment</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                          <input
                            required
                            type="tel"
                            placeholder="+91 00000 00000"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                            <Calendar size={16} className="text-teal-600" /> Preferred Date
                          </label>
                          <input
                            required
                            type="date"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                            <Clock size={16} className="text-teal-600" /> Preferred Time
                          </label>
                          <select
                            required
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all appearance-none"
                          >
                            <option value="">Select Time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your dental concern..."
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 flex items-center justify-center gap-3"
                      >
                        Confirm Appointment <ChevronRight size={20} />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Booking Successful!</h3>
                    <p className="text-slate-600 text-lg mb-8">
                      Thank you for choosing Om Dental Clinic. Our team will contact you shortly to confirm your slot.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-teal-600 font-bold hover:underline"
                    >
                      Book another appointment
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">Visit Our Clinic</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-teal-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Address</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {CLINIC_ADDRESS}
                  </p>
                  <a 
                    href={MAP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-teal-600 font-bold hover:underline"
                  >
                    View on Google Maps <ChevronRight size={18} />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-teal-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h4>
                  <p className="text-slate-600 text-lg">Mon - Sat: 10:00 AM - 01:00 PM</p>
                  <p className="text-slate-600 text-lg">Evening: 05:00 PM - 08:00 PM</p>
                  <p className="text-slate-600 text-lg">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-teal-50 p-4 rounded-2xl text-teal-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600 text-lg">{CLINIC_PHONE}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 relative group">
            <img 
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinic Location"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2"
              >
                <MapPin size={20} className="text-teal-600" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-teal-600 mb-6 block">
              Om <span className="text-slate-800">Dental Clinic</span>
            </span>
            <p className="text-slate-500 leading-relaxed mb-8">
              Providing world-class dental care with a personal touch. Your smile is our greatest achievement.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Meet the Doctor', 'Testimonials', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-teal-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['General Dentistry', 'Teeth Whitening', 'Dental Implants', 'Root Canal', 'Orthodontics', 'Cosmetic Dentistry'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-500 hover:text-teal-600 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Newsletter</h4>
            <p className="text-slate-500 mb-6">Subscribe to get dental health tips and offers.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="absolute right-2 top-2 bg-teal-600 text-white p-2 rounded-xl hover:bg-teal-700 transition-all">
                <ChevronRight size={24} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Om Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-teal-600">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <MeetTheDoctor />
      <Testimonials />
      <Gallery />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
