"use client";
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-3xl flex items-center justify-center shadow-inner">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="font-bold text-3xl tracking-tight text-emerald-700">NiRikshana</span>
            <span className="text-xl text-emerald-600 font-medium block -mt-1">EcoTrack</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/calculator" className="hover:text-emerald-600 transition-colors">Calculator</Link>
          <Link href="/dashboard" className="hover:text-emerald-600 transition-colors">Dashboard</Link>
          <Link href="/impact" className="hover:text-emerald-600 transition-colors">Live Impact</Link>
          <Link href="/resources" className="hover:text-emerald-600 transition-colors">Resources</Link>
          <Link href="/community" className="hover:text-emerald-600 transition-colors">Community</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="px-6 py-3 text-sm font-semibold border border-emerald-600 text-emerald-600 rounded-2xl hover:bg-emerald-50 transition-colors">
            Login
          </Link>
          <button className="px-6 py-3 text-sm font-semibold bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );
}