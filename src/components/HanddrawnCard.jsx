function HandDrawnCard({ children, className = "" }) {
  return (
    <div className={`relative p-6 ${className}`}>
      {/* Marker borders */}
      <div className="absolute inset-0 border-2 border-black rounded-xl rotate-[0.8deg]"></div>
      <div className="absolute inset-0 border-2 border-black rounded-xl -rotate-[0.8deg]"></div>

      {/* Content */}
      <div className="relative bg-white/40 backdrop-blur-sm rounded-xl">
        {children}
      </div>
    </div>
  );
}

export default HandDrawnCard;
