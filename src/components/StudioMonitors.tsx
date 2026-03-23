import { useState, useEffect } from 'react';

export const StudioMonitors = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [pulse, setPulse] = useState(0);

  // Audio visualization simulation
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        // Generate a random pulse between 0 and 1, scaled by volume
        setPulse(Math.random() * (volume / 100));
      }, 50) as unknown as number;
    } else {
      setPulse(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying, volume]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] bg-transparent">
      
      {/* Background Decor from Ice/White theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ice-bg via-ice-frost/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Monitor */}
        <div className="order-2 lg:order-1 transform transition-transform duration-500 hover:rotate-y-12 hover:scale-[1.05] perspective-1000 z-20 group">
          <SpeakerBox isRight={false} pulse={pulse} isPlaying={isPlaying} />
        </div>

        {/* Section Header */}
        <div className="order-1 lg:order-2 text-center space-y-12 max-w-2xl px-4 shrink-0 relative z-30 flex flex-col items-center">
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ice-text leading-tight tracking-tight">
            Reference Grade <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-sparkle via-ice-magic to-[#5E9CB4]">Studio Monitors</span>
          </h2>
          
          {/* Center Play Button */}
          <button 
            onClick={togglePlay}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 relative ${
              isPlaying 
                ? 'bg-gradient-to-br from-red-400 to-red-600 shadow-[0_15px_40px_rgba(239,68,68,0.5)] animate-pulse'
                : 'bg-gradient-to-br from-[#38bdf8] to-[#0284c7] shadow-[0_15px_40px_rgba(14,165,233,0.4)] hover:brightness-110 hover:shadow-[0_20px_50px_rgba(14,165,233,0.6)]'
            }`}
          >
            {isPlaying ? (
              // Stop icon (Square)
              <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="1.5" />
              </svg>
            ) : (
              // Play icon (Triangle)
              <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Right Monitor */}
        <div className="order-3 transform transition-transform duration-500 hover:-rotate-y-12 hover:scale-[1.05] perspective-1000 z-20 group">
          <SpeakerBox 
            isRight={true} 
            pulse={pulse} 
            volume={volume} 
            setVolume={setVolume} 
            isPlaying={isPlaying}
            togglePlay={togglePlay} 
          />
        </div>

      </div>
    </section>
  );
};

// Extracted internal components for cleaner structure
const SpeakerBox = ({ 
  isRight, 
  pulse, 
  volume, 
  setVolume, 
  isPlaying, 
  togglePlay 
}: { 
  isRight: boolean, 
  pulse: number, 
  volume?: number, 
  setVolume?: (v: number) => void,
  isPlaying?: boolean,
  togglePlay?: () => void
}) => {
  return (
    <div className="relative w-64">
      {/* Soundwaves behind the box spreading outwards */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[6px] border-[#5E9CB4]/30 animate-[soundwave_2s_infinite_ease-out]" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[6px] border-[#5E9CB4]/20 animate-[soundwave_2s_infinite_ease-out]" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[6px] border-ice-magic/10 animate-[soundwave_2s_infinite_ease-out]" style={{ animationDelay: '1.2s' }}></div>
        </div>
      )}

      {/* Box Enclosure */}
      <div 
        className="relative z-10 w-full h-[380px] bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-[#0A0A0A] rounded-[24px] rounded-br-[40px] shadow-2xl border border-slate-800/50 flex flex-col items-center p-6 transition-transform duration-75"
        style={{
          boxShadow: isPlaying ? '0 30px 60px -10px rgba(94, 156, 180, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.05)' : '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.05)',
          transform: isPlaying ? `translateY(${pulse * 6 - 3}px) scale(${1 + pulse * 0.015})` : 'none'
        }}
      >
        
        {/* Tweeter */}
        <div className="mt-2 w-[72px] h-[72px] rounded-full bg-slate-900 border border-black shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] flex items-center justify-center p-2 relative overflow-hidden">
          {/* Tweeter cone with mesh texture */}
          <div 
            className="w-full h-full rounded-full bg-[#5E9CB4] shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] relative z-10 transition-transform duration-75"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 1px, transparent 1px)',
              backgroundSize: '3px 3px',
              transform: `scale(${1 + pulse * 0.02})`
            }}
          ></div>
        </div>

        {/* Woofer */}
        <div className="mt-8 w-[160px] h-[160px] rounded-full bg-[#0a0a0a] border-[12px] border-[#181818] shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_5px_15px_rgba(0,0,0,0.9)] flex items-center justify-center p-1">
          {/* Woofer cone with vibration logic */}
          <div 
            className="w-full h-full rounded-full bg-[#5E9CB4] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4),inset_0_5px_15px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-75 relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '2px 2px',
              transform: `scale(${1 + pulse * 0.04}) translateY(${-pulse * 2}px)`
            }}
          >
            {/* Surround rubber visual reflection */}
            <div className="absolute inset-0 rounded-full border border-white/10 scale-[0.98]"></div>
            
            {/* Dust cap */}
            <div className="w-14 h-14 rounded-full bg-[#181818] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)] border border-black"></div>
          </div>
        </div>

        {/* Logo indicator */}
        <div className={`absolute right-5 bottom-20 w-3 h-3 text-[#5E9CB4] ${isPlaying ? 'animate-pulse drop-shadow-[0_0_8px_#5E9CB4]' : 'opacity-40'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 14h-2v-6h2v6zm0 4h-2v-2h2v2z" />
          </svg>
        </div>

        {/* Lower Front Panel (Controls or Ports) */}
        {!isRight ? (
          /* Left Speaker: Bass Reflex Port */
          <div className="absolute bottom-6 left-6 right-6 h-8 rounded-full bg-gradient-to-b from-[#050505] to-[#111] shadow-[inset_0_5px_10px_rgba(0,0,0,0.9)] border border-white/5 border-b-white/10"></div>
        ) : (
          /* Right Speaker: Controls */
          <div className="absolute bottom-6 left-6 right-6 h-8 flex items-center justify-between border border-transparent">
            {/* Audio Jacks */}
            <div className="flex space-x-3 items-end">
              <div className="flex flex-col items-center">
                <span className="text-[6px] text-gray-500 font-bold mb-1">AUX</span>
                <div className="w-3.5 h-3.5 rounded-full bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-[#333]"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[6px] text-gray-500 font-bold mb-1 tracking-tighter">PHONES</span>
                <div className="w-3.5 h-3.5 rounded-full bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-[#333]"></div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Status LED / Play Button */}
              <button 
                onClick={togglePlay}
                className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#333] mb-1 relative"
                title="Play/Pause Audio Test"
              >
                <div className={`absolute inset-[1px] rounded-full ${isPlaying ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-slate-700'}`}></div>
              </button>

              {/* Volume Knob */}
              <div className="flex flex-col items-center">
                <span className="text-[6px] text-gray-500 font-bold mb-0.5">VOL</span>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={volume} 
                  onChange={(e) => setVolume && setVolume(parseInt(e.target.value))}
                  className="w-10 opacity-0 absolute z-20 cursor-ew-resize h-6 bottom-4 right-5" 
                  title="Adjust Volume"
                />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#111] border border-[#333] shadow-[0_4px_6px_rgba(0,0,0,0.6)] relative pointer-events-none group-active:scale-95 transition-transform">
                  {/* Indicator Line rotating based on volume (0-100 mapped to -135deg to +135deg) */}
                  <div 
                    className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white origin-bottom transform transition-transform"
                    style={{ 
                      height: '40%', 
                      transform: `translateX(-50%) rotate(${((volume || 0) / 100) * 270 - 135}deg)` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
