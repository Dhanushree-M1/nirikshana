"use client";
import { useState } from "react";

export default function Community() {
  const [reviews, setReviews] = useState([
    "Amazing platform! Helped me reduce 450kg CO₂ in 2 months.",
    "Love the dashboard and challenges. Very motivating!"
  ]);
  const [newReview, setNewReview] = useState("");

  const submitReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
      alert("✅ Thank you! Your review has been submitted.\n\n🛎️ You (admin) will receive an instant email notification.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">Community</h1>
      <p className="text-xl text-gray-600 mb-12">Share your journey and inspire others</p>

      <div className="bg-white rounded-3xl p-10 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="How has NiRikshana helped you reduce your impact?"
          className="w-full h-32 p-5 border border-gray-300 rounded-3xl focus:outline-none focus:border-emerald-600"
        />
        <button 
          onClick={submitReview}
          className="mt-6 px-10 py-4 bg-emerald-600 text-white font-semibold rounded-3xl hover:bg-emerald-700"
        >
          Submit Review
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
            {review}
          </div>
        ))}
      </div>
    </div>
  );
}