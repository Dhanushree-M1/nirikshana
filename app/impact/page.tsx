"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function LiveImpact() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 text-emerald-700"
      >
        Live Global Impact 🌍
      </motion.h1>
      <p className="text-xl text-gray-600 mb-10">Real-time contributions from users worldwide</p>

      <div className="rounded-3xl shadow-xl overflow-hidden">
        <MapContainer 
  {...({ center: [20, 78], zoom: 4 } as any)}
  style={{ height: "600px", width: "100%" }}
  className="rounded-3xl"
>
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          
          {/* India markers */}
          <Marker position={[12.97, 77.59]}>
            <Popup>Bengaluru • 142 trees planted this week</Popup>
          </Marker>
          <Marker position={[28.61, 77.23]}>
            <Popup>Delhi • 89 actions logged today</Popup>
          </Marker>
          <Marker position={[19.07, 72.87]}>
            <Popup>Mumbai • 1.2 tons CO₂ saved</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <p className="text-5xl font-bold text-emerald-600">1.8B</p>
          <p className="text-gray-600">Tons CO₂ saved globally</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <p className="text-5xl font-bold text-emerald-600">87%</p>
          <p className="text-gray-600">Users reduced their impact</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <p className="text-5xl font-bold text-emerald-600">512K</p>
          <p className="text-gray-600">Trees planted</p>
        </div>
      </div>
    </div>
  );
}