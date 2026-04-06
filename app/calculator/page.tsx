"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [formData, setFormData] = useState({
    electricity: 0,     // kWh per month
    petrol: 0,          // litres per month
    diesel: 0,
    kmCar: 0,           // km per month
    kmBike: 0,
    mealsMeat: 0,       // meat meals per week
    mealsVeg: 0,
  });

  const calculateTotal = () => {
    const electricityCO2 = formData.electricity * 0.736;           // 2025 India grid factor
    const petrolCO2 = formData.petrol * 2.31;
    const dieselCO2 = formData.diesel * 2.68;
    const carCO2 = formData.kmCar * 0.23;
    const bikeCO2 = formData.kmBike * 0.12;
    const dietCO2 = (formData.mealsMeat * 3.5) + (formData.mealsVeg * 0.8);

    const monthlyTotal = electricityCO2 + petrolCO2 + dieselCO2 + carCO2 + bikeCO2 + dietCO2;
    return monthlyTotal.toFixed(1);
  };

  const total = calculateTotal();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4 text-emerald-700">Carbon Footprint Calculator</h1>
      <p className="text-xl text-gray-600 mb-10">India-specific • Real-time results • 2025 emission factors</p>

      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Electricity (kWh)</label>
              <input type="number" value={formData.electricity} onChange={(e) => setFormData({...formData, electricity: Number(e.target.value)})} className="w-full p-5 border rounded-3xl text-2xl" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Petrol (litres/month)</label>
                <input type="number" value={formData.petrol} onChange={(e) => setFormData({...formData, petrol: Number(e.target.value)})} className="w-full p-5 border rounded-3xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Diesel (litres/month)</label>
                <input type="number" value={formData.diesel} onChange={(e) => setFormData({...formData, diesel: Number(e.target.value)})} className="w-full p-5 border rounded-3xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Car Travel (km/month)</label>
                <input type="number" value={formData.kmCar} onChange={(e) => setFormData({...formData, kmCar: Number(e.target.value)})} className="w-full p-5 border rounded-3xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bike Travel (km/month)</label>
                <input type="number" value={formData.kmBike} onChange={(e) => setFormData({...formData, kmBike: Number(e.target.value)})} className="w-full p-5 border rounded-3xl" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Weekly Meals</label>
              <div className="flex gap-6">
                <div className="flex-1">
                  <span className="text-sm">Meat-based meals</span>
                  <input type="number" value={formData.mealsMeat} onChange={(e) => setFormData({...formData, mealsMeat: Number(e.target.value)})} className="w-full p-5 border rounded-3xl mt-2" />
                </div>
                <div className="flex-1">
                  <span className="text-sm">Vegetarian meals</span>
                  <input type="number" value={formData.mealsVeg} onChange={(e) => setFormData({...formData, mealsVeg: Number(e.target.value)})} className="w-full p-5 border rounded-3xl mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-emerald-50 rounded-3xl p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6">Your Monthly Carbon Footprint</h2>
            <div className="text-center">
              <span className="text-8xl font-bold text-emerald-600">{total}</span>
              <span className="text-3xl text-gray-600 ml-3">kg CO₂e</span>
            </div>
            <p className="text-center text-gray-500 mt-6">Based on latest 2025 India emission factors</p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-12 w-full py-6 bg-emerald-600 text-white text-xl font-semibold rounded-3xl"
            >
              Save This Result to Dashboard
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}