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
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Images ---
import DoctorImg from './Images/Doctor.jpeg';
import TreatmentImg from './Images/Treatment offer.jpeg';
import RoomFrontImg from './Images/roomfrontview.jpeg';
import RoomUnderImg from './Images/roomunderview.jpeg';
import RoomUnder2Img from './Images/roomunderview2.jpeg';
import VisitingCardImg from './Images/visitingcard.jpeg';
import HeroImg from './Images/Hero.png';
import HeroBG from './Images/herobg.png';

// --- Constants ---
const CLINIC_PHONE = "081697 23702";
const CLINIC_ADDRESS = "shop no 2, Om Shiv Complex, Ghodbunder Rd, beside R Mall, opp. Dosti Imperia, Manpada, Thane West, Thane, Maharashtra 400607";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Om+Dental+Clinic+Om+Shiv+Complex+Ghodbunder+Rd+Manpada+Thane+West";
const WHATSAPP_LINK = "https://wa.me/918169723702";
const CLINIC_EMAIL = "omdentalthane@gmail.com";

// --- Icons ---
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// --- Components ---

const WhatsAppButton = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 group">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{ opacity: 1, scale: 1 }}
      className="bg-white px-4 py-2 rounded-xl shadow-xl text-slate-900 text-sm font-bold border border-blue-100 opacity-0 group-hover:opacity-100 transition-all pointer-events-none mb-1 flex items-center gap-2"
    >
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      Chat with us!
    </motion.div>
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.15, rotate: 10 }}
      className="relative bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-white rounded-full -z-10"
      />
      <WhatsAppIcon size={32} />
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Meet the Doctor', href: '#doctor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Small delay to let the menu close before scrolling
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 transition-colors ${scrolled ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}`}>
              <Smile size={24} />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-blue-600' : 'text-slate-900'}`}>
              OM<span className={scrolled ? 'text-slate-900' : 'text-blue-600'}>DENTAL</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide transition-all hover:text-blue-500 relative group overflow-hidden ${scrolled ? 'text-slate-600' : 'text-slate-900'}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#appointment"
                className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-2"
              >
                <WhatsAppIcon size={18} /> Book Visit
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md relative z-[60] ${isOpen ? 'text-slate-600' : scrolled ? 'text-slate-600' : 'text-slate-900'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-[55] flex flex-col"
          >
            {/* Spacer for the navbar area */}
            <div className="h-20"></div>

            <div className="flex-1 flex flex-col justify-center px-8 -mt-10">
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="block px-4 py-4 text-2xl font-black text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-colors tracking-tight"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-4"
              >
                <a
                  href="#appointment"
                  onClick={(e) => handleMobileNavClick(e, '#appointment')}
                  className="w-full bg-blue-600 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
                >
                  <WhatsAppIcon size={24} /> Book Visit
                </a>
              </motion.div>
            </div>

            {/* Mobile menu footer */}
            <div className="px-8 pb-10">
              <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Phone size={16} />
                <span>{CLINIC_PHONE}</span>
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white">
      {/* Prime Background Image - Precisely positioned to show the doctor */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBG}
          alt="Dr. Hemangi at Om Dental Clinic"
          className="w-full h-full object-cover object-[25%] lg:object-left-top scale-110 lg:scale-100"
        />
        {/* Advanced Gradient System: Protects the doctor on the left, ensures text readability on the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent lg:block hidden"></div>
        <div className="absolute inset-0 bg-white/85 lg:hidden block"></div>

        {/* Subtle Brand Accents */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-50/30 blur-[120px] lg:block hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[55%] text-center lg:text-left"
          >
            {/* Premium Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 mb-10 bg-white/90 backdrop-blur-md border border-blue-100 rounded-full shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">Advanced Clinical Excellence</span>
            </motion.div>

            {/* High-Impact Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              A Masterpiece <br className="hidden lg:block" />
              Selection for <br />
              <span className="text-blue-600 italic">Your Smile.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Where 18 years of clinical mastery meets the art of dentistry. Experience world-class care in the heart of Thane.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <motion.a
                whileHover={{ scale: 1.05, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#appointment"
                className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-4"
              >
                Book Visit
                <ArrowRight size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "white" }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="w-full sm:w-auto px-12 py-6 bg-white/60 backdrop-blur-md text-slate-900 border-2 border-slate-200 rounded-[2.5rem] font-black text-xl transition-all flex items-center justify-center"
              >
                Explore Services
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-12 border-t border-slate-200/50 pt-12">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-slate-900">18+</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Years Clinical Exp</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-slate-900">10k+</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Healthy Smiles</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200"></div>
              <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                <ShieldCheck className="text-blue-600" size={32} />
                <div>
                  <p className="text-slate-900 font-black text-lg leading-none">ISO 9001</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Certified Sterile</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-blue-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={RoomUnder2Img}
                alt="Our Treatment Room"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-100 rounded-full -z-0 blur-3xl opacity-50"></div>

            <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 max-w-[200px] border border-blue-50">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck size={28} />
              </div>
              <p className="font-extrabold text-slate-900 text-lg leading-tight mb-2">Modern Clinic</p>
              <p className="text-sm text-slate-400 font-medium">Safe & Sterile Environment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block px-4 py-2 bg-blue-100 inline-block rounded-full">About Om Dental</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              World Class Care In <span className="text-blue-600">Thane</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              At Om Dental Clinic, we combine 18+ years of expertise with state-of-the-art technology to provide you with the most comfortable dental experience possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Specialist Care', desc: 'Expert Oral Surgeon' },
                { title: 'Digital X-Rays', desc: 'Low Radiation Imaging' },
                { title: 'Sterilized Tools', desc: 'ISO Standard Safety' },
                { title: 'Pain Free', desc: 'Gentle Treatment' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-blue-50 shadow-sm">
                  <div className="bg-blue-50 text-blue-600 rounded-xl p-2">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm leading-tight">{item.title}</p>
                    <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#services" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-3xl font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95">
              Explore Our Services
            </a>
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
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Dental Implants',
      desc: 'Permanent and natural-looking solutions for missing teeth.',
      icon: <ShieldCheck size={32} />,
      color: 'bg-blue-900 text-white'
    },
    {
      title: 'Root Canal',
      desc: 'Advanced endodontic procedures to save your natural teeth.',
      icon: <Zap size={32} />,
      color: 'bg-amber-50 text-amber-600'
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
      color: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Premium Services</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Your Oral Health, <br /> Our Commitment</h2>
          <p className="text-lg text-slate-500 font-medium">
            We provide specialized dental care using the latest technological advancements in dentistry.
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
              className="bg-blue-50/30 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-blue-100 group hover:-translate-y-2 duration-500"
            >
              <div className={`${service.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href="#appointment" className="text-blue-600 font-extrabold flex items-center gap-2 group/btn">
                Book Visit <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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
      title: '18+ Years Experience',
      desc: 'Expertise you can trust with a proven track record of successful dental procedures.',
      icon: <Users size={24} />
    },
    {
      title: 'Modern Equipment',
      desc: 'Advanced digital imaging and laser technology for precise diagnosis and treatment.',
      icon: <Zap size={24} />
    },
    {
      title: 'Gentle Care',
      desc: 'We prioritize patient comfort with sedation options and a relaxing clinic environment.',
      icon: <Smile size={24} />
    },
    {
      title: 'Emergency Ready',
      desc: 'Quick support for urgent dental issues to provide immediate pain relief.',
      icon: <Clock size={24} />
    }
  ];

  return (
    <section className="py-32 bg-blue-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Why People <br /> Trust Om Dental?</h2>
            <p className="text-blue-100 text-lg mb-10 font-medium">
              We combine advanced clinical expertise with genuine compassion to deliver an unmatched dental experience in Thane.
            </p>
            <a href="#appointment" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-[2rem] font-bold hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
              Book Your Visit <ArrowRight size={20} />
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:bg-white/15 transition-colors group"
              >
                <div className="bg-white text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-blue-100 font-medium leading-relaxed">{reason.desc}</p>
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
    name: 'Dr. Hemangi',
    qual: 'Dental Surgeon',
    exp: '18+ Years Clinical Experience',
    spec: 'Oral Health & Surgery',
    bio: 'Dr. Hemangi is a highly respected Dental Surgeon in Thane, known for her precision and patient-centric approach. With nearly two decades of experience, she has transformed thousands of smiles using the latest clinical techniques.',
    img: DoctorImg
  };

  return (
    <section id="doctor" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Our Expert</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Meet Your Doctor</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-16 lg:items-center bg-blue-50 rounded-[4rem] p-10 md:p-16 relative overflow-hidden shadow-sm border border-blue-100"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full -mr-40 -mt-40 blur-3xl opacity-50"></div>

            <div className="w-full lg:w-2/5">
              <div className="relative overflow-hidden rounded-[3.5rem] shadow-2xl aspect-[4/5] border-[12px] border-white group">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">{doctor.name}</h3>
              <p className="text-blue-600 font-extrabold text-xl mb-10 px-6 py-2 bg-white inline-block rounded-full shadow-sm">{doctor.qual}</p>

              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                {doctor.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-blue-50">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-slate-900 font-extrabold text-sm">{doctor.spec}</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-blue-50">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <Clock size={24} />
                  </div>
                  <p className="text-slate-900 font-extrabold text-sm">{doctor.exp}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-blue-600 transition-all active:scale-95 shadow-lg">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-blue-600 transition-all active:scale-95 shadow-lg">
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
      name: 'Aditya Patil',
      role: 'Local Business Owner',
      text: 'Dr. Hemangi is an expert. My tooth extraction was completely painless. The clinic is very premium and clean.',
      rating: 5
    },
    {
      name: 'Rahul More',
      role: 'Professional',
      text: 'Best dental clinic in Thane. Very transparent with pricing and treatment options. Highly professional team.',
      rating: 5
    },
    {
      name: 'Sneha Jain',
      role: 'Student',
      text: 'Got my whitening done here. Incredible results in just one sitting! Truly a world-class experience.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Patient Success</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Smile Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-blue-50 relative hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-500 text-xl font-medium italic mb-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg tracking-tight">{review.name}</h4>
                  <p className="text-slate-400 font-bold text-sm tracking-wide">{review.role}</p>
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
    RoomFrontImg,
    RoomUnderImg,
    RoomUnder2Img,
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Our Clinic</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Inside Look</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[3rem] aspect-square shadow-xl shadow-blue-500/5 group cursor-pointer border-4 border-white"
            >
              <img
                src={img}
                alt={`Clinic Gallery ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="py-32 bg-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-center text-center">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Easy Booking</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              Book Your <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Visit</span> On WhatsApp.
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              We've simplified the booking process. Just click the button below to start a chat with us and schedule your appointment instantly.
            </p>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:bg-[#128C7E] transition-all"
            >
              <WhatsAppIcon size={32} />
              Book via WhatsApp
            </motion.a>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center justify-center gap-6 group bg-white p-8 rounded-[3rem] shadow-sm border border-blue-50">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Call Us</p>
                  <p className="text-slate-900 text-lg font-black">{CLINIC_PHONE}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 group bg-white p-8 rounded-[3rem] shadow-sm border border-blue-50">
                <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-lg">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black mb-1">Email Us</p>
                  <p className="text-slate-900 text-lg font-black truncate max-w-[150px]">{CLINIC_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Location</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter text-balance">Visit Our <br /> Clinic In Thane.</h2>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="bg-blue-50 p-5 rounded-[2rem] text-blue-600 shadow-sm">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Address</h4>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">
                    {CLINIC_ADDRESS}
                  </p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-blue-600 font-black hover:gap-4 transition-all tracking-tight"
                  >
                    Get Directions <ArrowRight size={20} />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="bg-blue-50 p-5 rounded-[2rem] text-blue-600 shadow-sm">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Clinic Hours</h4>
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xl font-medium"><span className="text-blue-600 font-black">Mon - Sat:</span> 10:00 AM - 01:00 PM</p>
                    <p className="text-slate-500 text-xl font-medium ml-[6.5rem]">05:00 PM - 08:00 PM</p>
                    <p className="text-slate-500 text-xl font-medium pt-2"><span className="text-slate-400 font-black">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white relative group bg-blue-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3!2d72.9571!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcb8b756e3%3A0x8c6b8e0e8c88ef93!2sOm%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1709700000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-10">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-3">
            <Smile size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-blue-600">
            OM<span className="text-slate-900">DENTAL</span>
          </span>
        </div>

        <p className="text-slate-400 font-medium max-w-xl mx-auto mb-10">
          Providing high-quality dental care with a gentle touch. Your healthy smile is our pride and priority.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-blue-600" />
            <span className="text-slate-900 font-black">{CLINIC_PHONE}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-blue-600" />
            <span className="text-slate-900 font-black">{CLINIC_EMAIL}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-blue-600" />
            <span className="text-slate-400 font-bold text-sm tracking-tight">Thane, Maharashtra</span>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col items-center gap-4">
          <p className="text-slate-300 text-sm font-bold">
            © {new Date().getFullYear()} Om Dental Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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
