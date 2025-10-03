import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-[40vh] md:h-[70vh] w-full overflow-hidden rounded-b-3xl">
      {/* Background Image */}
   <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("https://images.unsplash.com/photo-1737138472958-636bebdca9ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBhbWJpYW5jZXxlbnwxfHx8fDE3NTg3MDE2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`
  }}
></div>
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b   from-green-900/40 to-green-700/70" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-wide">
            Bella Vista
          </h1>
          
          <p className="text-xl md:text-2xl  font-light leading-relaxed max-w-2xl mx-auto">
            Experience culinary excellence with our farm-to-table 
          </p>

          <p className="text-xl md:text-2xl mb-6 font-light leading-relaxed max-w-2xl mx-auto">
            dining
          </p>
          
          <div className="flex items-center  justify-center gap-1 text-lg">
            <MapPin className="w-5 h-5" />
            <span>Downtown</span>
            <span className="mx-1">•</span>
            <Clock className="w-5 h-5" />
            <span>Open until 11 PM</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;