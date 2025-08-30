export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background with more intense gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-red-900/20" />
      
      {/* Background pattern elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating JAO logos */}
        <div className="absolute top-[10%] left-[5%] text-6xl font-black text-purple-500/10 rotate-12 animate-float">$JAO</div>
        <div className="absolute top-[60%] right-[10%] text-8xl font-black text-blue-500/10 -rotate-12 animate-float animation-delay-2000">$JAO</div>
        <div className="absolute bottom-[20%] left-[15%] text-7xl font-black text-pink-500/10 rotate-45 animate-float animation-delay-4000">$JAO</div>
        
        {/* Tech circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1920 1080">
          <path d="M0,540 L300,540 L350,490 L600,490 L650,540 L1920,540" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M960,0 L960,300 L1010,350 L1010,730 L960,780 L960,1080" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-pulse animation-delay-1000" />
          <defs>
            <linearGradient id="circuit-gradient">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating blockchain blocks */}
        <div className="absolute top-[20%] right-[20%] w-20 h-20 border-2 border-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-[30%] right-[30%] w-16 h-16 border-2 border-blue-500/20 rotate-12 animate-spin-slow animation-delay-2000"></div>
        <div className="absolute top-[70%] left-[25%] w-24 h-24 border-2 border-pink-500/20 -rotate-45 animate-spin-slow animation-delay-4000"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-30 animate-grid-flow" />
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-10"></div>
      
      {/* Cyber rain effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="cyber-rain"></div>
      </div>
      
      {/* Glitch effect overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glitch-effect absolute inset-0 opacity-10"></div>
      </div>
      
      {/* Navigation with glass effect */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-black/50">
        <div className="text-3xl font-black">
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            $JAO
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-all hover:scale-110">
            About
          </button>
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-all hover:scale-110">
            How it Works
          </button>
          <button className="group px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Launch App</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </nav>

      {/* Hero Section with more effects */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-full border border-green-500/50 mb-8 animate-pulse-glow">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="text-sm text-green-300 font-semibold">LIVE ON SOLANA</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-500" />
          </div>
          
          {/* Main headline with 3D effect */}
          <div className="perspective-1000 mb-6">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter transform-style-3d animate-rotate-3d">
              <span className="block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-glow text-3d-top">
                $JAO WARFARE
              </span>
              <span className="block text-7xl md:text-9xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-glow text-3d-bottom">
                DASH
              </span>
            </h1>
          </div>
          
          <div className="mb-12 relative">
            <p className="text-xl md:text-2xl text-gray-400 mb-2 font-light uppercase tracking-widest">
              Introducing
            </p>
            <div className="relative inline-block">
              <p className="text-2xl md:text-4xl font-black leading-tight relative z-10 neon-text">
                THE WORLD&apos;S MOST EFFECTIVE
                <br />
                <span className="text-3xl md:text-5xl">SOCIAL MEDIA MARKETING TOOL</span>
              </p>
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            </div>
            <p className="mt-8 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 animate-gradient-x uppercase tracking-wider">
              NOW ON-CHAIN
            </p>
          </div>

          {/* Animated feature pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { icon: "🚀", text: "INSTANT PAYOUTS", glow: "shadow-red-500/50" },
              { icon: "🔥", text: "AUTO TOKEN BURNS", glow: "shadow-orange-500/50" },
              { icon: "💎", text: "LP INJECTION", glow: "shadow-blue-500/50" },
              { icon: "📊", text: "REAL-TIME ANALYTICS", glow: "shadow-green-500/50" }
            ].map((feature, i) => (
              <div 
                key={i} 
                className={`px-5 py-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-bold hover:scale-105 transition-all hover:shadow-lg ${feature.glow} animate-float`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-lg mr-2">{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </div>

          {/* Global Leaderboards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Most Active Today */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-md rounded-2xl border border-green-500/30 p-6 hover:scale-105 transition-all hover:border-green-500/50">
              <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <span className="text-2xl">⚡</span> MOST ACTIVE TODAY
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">1. @CryptoWarrior</span>
                  <span className="text-green-400 font-bold">127 Actions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2. @SolanaMaxi</span>
                  <span className="text-green-400 font-bold">94 Actions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">3. @DeFiDegen</span>
                  <span className="text-green-400 font-bold">82 Actions</span>
                </div>
              </div>
            </div>

            {/* Campaign Creators */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 hover:scale-105 transition-all hover:border-purple-500/50">
              <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <span className="text-2xl">🎯</span> TOP CAMPAIGNERS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">1. @MemeKingSOL</span>
                  <span className="text-purple-400 font-bold">42 Campaigns</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2. @ViralGod88</span>
                  <span className="text-purple-400 font-bold">38 Campaigns</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">3. @SolShiller</span>
                  <span className="text-purple-400 font-bold">31 Campaigns</span>
                </div>
              </div>
            </div>

            {/* Trending Campaigns */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/10 backdrop-blur-md rounded-2xl border border-yellow-500/30 p-6 hover:scale-105 transition-all hover:border-yellow-500/50">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                <span className="text-2xl">🔥</span> HOT CAMPAIGNS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">1. $PEPE Raid</span>
                  <span className="text-yellow-400 font-bold">2.8K $JAO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2. $BONK Push</span>
                  <span className="text-yellow-400 font-bold">2.1K $JAO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">3. $WIF Moon</span>
                  <span className="text-yellow-400 font-bold">1.9K $JAO</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons with extreme styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                CONNECT WALLET &amp; START EARNING
                <span className="text-2xl animate-bounce">💰</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm rounded-full font-black text-lg hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50 hover:scale-110 hover:shadow-xl">
              VIEW DOCUMENTATION
            </button>
          </div>

          {/* Stats with neon glow */}
          <div className="grid grid-cols-3 gap-8 pt-20 border-t border-white/20">
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-glow">
                $6.6K
              </div>
              <div className="text-sm text-gray-400 mt-1 font-semibold uppercase tracking-wider">Market Cap</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-glow">
                300M
              </div>
              <div className="text-sm text-gray-400 mt-1 font-semibold uppercase tracking-wider">Total Supply</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-glow">
                10%
              </div>
              <div className="text-sm text-gray-400 mt-1 font-semibold uppercase tracking-wider">LP Boost per TX</div>
            </div>
          </div>
        </div>
      </main>

      {/* Multiple floating orbs with different colors */}
      <div className="fixed top-10 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />
      
      {/* Particle effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
    </div>
  )
}