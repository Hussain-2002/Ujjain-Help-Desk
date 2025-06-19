import ujjainLogo from "@assets/WhatsApp Image 2025-06-18 at 15.44.33_40efdb18_1750244441247.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-amber-50 to-orange-50 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo with proper background */}
        <div className="mb-8 flex justify-center">
          <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-red-200 p-4">
            <img 
              src={ujjainLogo} 
              alt="Ujjain Relay Centre Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-700">
          UJJAIN RELAY CENTRE HELPLINE
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-amber-700">
          Ashara Mubaraka 1447 Madras
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          (Aa Helpline Fakat wo mumineen waste che je already Registered Che ane Ujjain ne Relay Centre Select kido che)
        </p>
      </div>
    </section>
  );
}
