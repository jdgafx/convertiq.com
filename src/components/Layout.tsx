'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', href: '/services' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
            <nav
                className={`
                    transition-all duration-500 ease-out w-full
                    ${scrolled || isOpen ? 'border-b border-white/10 shadow-2xl' : 'bg-transparent'}
                `}
                style={scrolled || isOpen ? { backgroundColor: 'rgba(2, 6, 23, 0.95)' } : undefined}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
                        <div className="relative w-11 h-11 rounded-xl bg-gradient-to-b from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                            <div className="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-50"></div>
                                <Zap className="w-5 h-5 text-white fill-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))' }} />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex items-baseline leading-none mb-1">
                                <span className="text-xl font-bold text-white tracking-tight mr-1">AMP</span>
                                <span className="text-xl font-black text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Marketing</span>
                            </div>
                            <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase pl-0.5">Growth on Autopilot</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center rounded-full px-2 py-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.05)', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-5 py-2 text-sm font-medium transition-all rounded-full ${pathname === item.href ? 'text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-gray-300 hover:text-white'}`}
                                style={pathname === item.href ? { backgroundColor: 'rgba(255, 255, 255, 0.1)', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' } : { WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
                        <Link href="/contact">
                            <button className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-6 pb-6 border-t border-white/10 flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.label} 
                                href={item.href}
                                className="text-lg font-medium text-gray-300 hover:text-white py-3 px-4 hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full mt-4 bg-white text-black py-3 rounded-lg font-bold">
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
                </div>
            </nav>
        </div>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/10 pt-20 pb-10 relative z-10" style={{ backgroundColor: 'rgba(2, 6, 23, 0.95)' }}>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none mb-6">
                        <div className="relative w-12 h-12 rounded-lg bg-gradient-to-b from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-purple-500/20">
                            <div className="w-full h-full bg-[#0a0a0f] rounded-[7px] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-50"></div>
                                <Zap className="w-6 h-6 text-white fill-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))' }} />
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center">
                            <div className="flex items-baseline leading-none mb-0.5">
                                <span className="text-xl font-bold text-white tracking-tight mr-1">AMP</span>
                                <span className="text-xl font-black text-white drop-shadow-[0_2px_5px_rgba(255,255,255,0.3)]">Marketing</span>
                            </div>
                            <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase pl-0.5">Growth on Autopilot</span>
                        </div>
                    </Link>

                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                        Growth on autopilot. We build systems that help businesses scale without the headache.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
                    <ul className="space-y-4 text-gray-500 text-sm font-medium">
                        <li><Link href="/services/ai-chatbot" className="hover:text-amp-primary transition-colors">AI Chatbot</Link></li>
                        <li><Link href="/services/ai-voice" className="hover:text-amp-primary transition-colors">AI Voice</Link></li>
                        <li><Link href="/services/lead-funnel" className="hover:text-amp-primary transition-colors">Sales Funnels</Link></li>
                        <li><Link href="/services/seo-content" className="hover:text-amp-primary transition-colors">SEO Engine</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
                    <ul className="space-y-4 text-gray-500 text-sm font-medium">
                        <li><Link href="/about" className="hover:text-amp-primary transition-colors">About Us</Link></li>
                        <li><Link href="/pricing" className="hover:text-amp-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/contact" className="hover:text-amp-primary transition-colors">Contact</Link></li>
                        <li><Link href="/blog" className="hover:text-amp-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Legal</h4>
                    <ul className="space-y-4 text-gray-500 text-sm font-medium">
                        <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Cookie Policy</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">© 2026 AMP Marketing. All rights reserved.</p>
                <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    <span className="text-gray-600 text-[8px] tracking-wider">built by Chris Gentile / CGDarkstardev1 / NewDawn AI</span>
                </div>
            </div>
        </footer>
    );
}
