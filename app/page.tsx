export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          $JAO
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm hover:text-purple-400 transition-colors">
            About
          </button>
          <button className="px-4 py-2 text-sm hover:text-purple-400 transition-colors">
            How it Works
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Live on Solana</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              $JAO WARFARE DASH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            The World&apos;s Most Effective Social Media Marketing Tool
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Now On-Chain
            </span>
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              "🚀 Instant Payouts",
              "🔥 Auto Token Burns", 
              "💎 LP Injection",
              "📊 Real-Time Analytics"
            ].map((feature, i) => (
              <div key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm">
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Connect Wallet &amp; Start Earning
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/20">
              View Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                $6.6K
              </div>
              <div className="text-sm text-gray-400 mt-1">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                300M
              </div>
              <div className="text-sm text-gray-400 mt-1">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                10%
              </div>
              <div className="text-sm text-gray-400 mt-1">LP Boost per TX</div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating orbs for visual effect */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
    </div>
  )
}