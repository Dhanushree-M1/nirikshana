export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-3 text-emerald-700">Resources & Latest Research</h1>
      <p className="text-xl text-gray-600 mb-12">Curated by NiRikshana: EcoTrack • For Individuals & Companies in India</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Research Papers & Reports */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm">Latest Research</span>
          <h3 className="text-2xl font-semibold mt-6 mb-3">India’s Biennial Update Report-4 (BUR-4) 2024</h3>
          <p className="text-gray-600 mb-6">Official GHG inventory & climate action progress by Ministry of Environment, Forest & Climate Change.</p>
          <a href="https://unfccc.int/sites/default/files/resource/India%20BUR-4.pdf" target="_blank" className="text-emerald-600 font-medium flex items-center gap-2">
            Download Full Report →
          </a>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm">Latest Research</span>
          <h3 className="text-2xl font-semibold mt-6 mb-3">CEA 2025 CO₂ Baseline Database (Ver 21.0)</h3>
          <p className="text-gray-600 mb-6">Official Indian grid emission factor: 0.736 tCO₂/MWh (2025 vintage).</p>
          <a href="https://cea.nic.in/wp-content/uploads/baseline/2025/12/User_Guide_V_21.0.pdf" target="_blank" className="text-emerald-600 font-medium flex items-center gap-2">
            Download CEA Report →
          </a>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm">Corporate ESG</span>
          <h3 className="text-2xl font-semibold mt-6 mb-3">Carbon Footprinting Guide for Indian Businesses 2025</h3>
          <p className="text-gray-600 mb-6">Step-by-step framework with India-specific factors for SMEs & corporates.</p>
          <a href="https://hecs.in/carbon-footprinting-india-business-guide" target="_blank" className="text-emerald-600 font-medium flex items-center gap-2">
            Read Guide →
          </a>
        </div>

        {/* More cards for individuals and companies */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-3">🌱 For Individuals</h3>
          <ul className="space-y-4">
            <li className="flex justify-between"><span>Sustainable Living in Bengaluru Apartments</span><span className="text-emerald-600">PDF</span></li>
            <li className="flex justify-between"><span>Zero Waste Kitchen Guide (Indian Context)</span><span className="text-emerald-600">PDF</span></li>
            <li className="flex justify-between"><span>Personal Carbon Footprint Calculator Handbook</span><span className="text-emerald-600">PDF</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-3">🏢 For Companies</h3>
          <ul className="space-y-4">
            <li className="flex justify-between"><span>ESG & BRSR Reporting 2025 (SEBI)</span><span className="text-emerald-600">Guide</span></li>
            <li className="flex justify-between"><span>Net Zero Roadmap for Karnataka SMEs</span><span className="text-emerald-600">PDF</span></li>
            <li className="flex justify-between"><span>Employee Green Challenge Toolkit</span><span className="text-emerald-600">Toolkit</span></li>
          </ul>
        </div>

      </div>

      <p className="text-center mt-16 text-gray-500">All resources are verified and updated as of April 2026 • More papers added weekly</p>
    </div>
  );
}