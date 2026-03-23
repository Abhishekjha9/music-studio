import { useState, useEffect } from 'react';

export const Subwoofer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        setIntensity(Math.random());
      }, 50) as unknown as number; // Fast update for bass vibration
    } else {
      setIntensity(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] bg-white/50">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-ice-frost/30 to-ice-bg"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 justify-between">
        
        {/* Info Box */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-8 z-20">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-effect text-ice-sparkle font-semibold text-sm border border-ice-magic/30 shadow-lg">
            <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-ice-magic animate-pulse' : 'bg-slate-300'}`}></span>
            <span className="tracking-wide uppercase">Monolith Frost S-1</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ice-text leading-[1.1] tracking-tight">
            Feel the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-magic via-ice-sparkle to-ice-magic-soft bg-300% animate-gradient-x">
              Absolute Zero
            </span>
          </h2>
          
          <p className="text-xl text-slate-600/90 max-w-lg leading-relaxed font-light">
            The next generation of acoustic engineering. A seamless integration of deep, ground-shaking bass with an ethereal ice aesthetic. Immerse yourself in the crystalline depths of sound.
          </p>

          <div className="grid grid-cols-2 gap-6 w-full max-w-md mt-2">
            <div className="glass-card p-5 rounded-2xl flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Frequency Res</span>
              <span className="text-2xl font-bold font-display text-ice-sparkle-dim">15Hz - 120Hz</span>
            </div>
            <div className="glass-card p-5 rounded-2xl flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Peak Power</span>
              <span className="text-2xl font-bold font-display text-ice-sparkle-dim">1000W RMS</span>
            </div>
          </div>

          <button 
            onClick={togglePlay}
            className={`mt-6 px-10 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 ${
              isPlaying 
                ? 'bg-transparent border-2 border-ice-magic text-ice-magic hover:bg-ice-magic/10 shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                : 'bg-gradient-to-r from-ice-magic to-ice-sparkle text-white shadow-xl hover:shadow-2xl hover:brightness-110'
            }`}
          >
            {isPlaying ? 'Pause Demo' : 'Test Drive Subwoofer'}
          </button>
        </div>

        {/* Subwoofer Visualizer */}
        <div className="lg:w-1/2 flex justify-center items-center relative h-[500px] w-full max-w-[500px] group perspective-1000">
          
          {/* Soundwaves */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-ice-magic/40 animate-[soundwave_1.5s_infinite_ease-out]" style={{ animationDelay: '0s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-ice-magic/30 animate-[soundwave_1.5s_infinite_ease-out]" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-ice-magic/20 animate-[soundwave_1.5s_infinite_ease-out]" style={{ animationDelay: '1.0s' }}></div>
            </>
          )}

          {/* Subwoofer Enclosure */}
          <div 
            className={`relative rounded-full glass-card w-96 h-96 flex items-center justify-center p-6 transition-all duration-100 ${
              isPlaying ? 'shadow-[0_0_60px_rgba(14,165,233,0.4)]' : 'shadow-2xl'
            } group-hover:rotate-x-12 group-hover:rotate-y-12 transform-style-3d`}
            style={{
              transform: isPlaying ? `scale(${1 + (intensity * 0.03)})` : 'scale(1)',
            }}
          >
            {/* Outer Ring / Chassis */}
            <div className="w-full h-full rounded-full border-[16px] border-[#f8fafc] shadow-[inset_0_10px_30px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center bg-slate-900 relative z-10 overflow-hidden">
              
              {/* Inner screws/details */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-3 h-3 rounded-full bg-slate-700 shadow-inner z-20"
                  style={{
                    top: `calc(50% - 6px + Math.sin(${i * (Math.PI / 4)}) * 165px)`,
                    left: `calc(50% - 6px + Math.cos(${i * (Math.PI / 4)}) * 165px)`,
                    transform: `rotate(${i * 45}deg) translateY(-165px)`
                  }}
                ></div>
              ))}

              {/* Rubber Surround */}
              <div className="w-[320px] h-[320px] rounded-full border-[14px] border-slate-800 shadow-[inset_0_5px_15px_rgba(0,0,0,0.9)] flex items-center justify-center absolute">
              </div>

              {/* Cone */}
              <div 
                className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-[inset_0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center relative z-20 transition-transform duration-75"
                style={{
                  transform: isPlaying ? `translateY(${intensity * 8 - 4}px) scale(${1 + intensity * 0.02})` : 'translateY(0) scale(1)',
                }}
              >
                {/* Cone texture ridges */}
                <div className="absolute inset-0 rounded-full border-2 border-slate-600/10 scale-90"></div>
                <div className="absolute inset-0 rounded-full border border-slate-600/5 scale-[0.75]"></div>

                {/* Dust Cap */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_5px_15px_rgba(0,0,0,0.9)] border border-slate-600/30 flex items-center justify-center z-30">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-transparent via-slate-600/20 to-slate-500/10 blur-sm absolute top-2 right-2"></div>
                  
                  {/* Glowing center logo / element */}
                  <div 
                    className={`w-6 h-6 rounded-full transition-shadow duration-75 blur-md ${isPlaying ? 'bg-ice-sparkle shadow-[0_0_20px_rgba(14,165,233,1)]' : 'bg-transparent'}`}
                    style={{ opacity: isPlaying ? 0.6 + intensity * 0.4 : 0 }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Ice Accent Light (Aura) */}
            <div 
              className="absolute inset-0 rounded-full mix-blend-screen transition-opacity duration-75 pointer-events-none z-30"
              style={{
                background: `radial-gradient(circle, transparent 40%, rgba(14,165,233,${isPlaying ? 0.3 + intensity * 0.3 : 0.05}) 62%, transparent 72%)`
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
