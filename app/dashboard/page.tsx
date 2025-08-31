// app/dashboard/page.tsx
'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ConnectWalletButton } from '@/components/wallet/ConnectWalletButton'

export default function Dashboard() {
  const { publicKey, connected } = useWallet()
  const router = useRouter()

  // Redirect to home if not connected
  useEffect(() => {
    if (!connected) {
      router.push('/')
    }
  }, [connected, router])

  if (!connected) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background effects similar to landing page */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-red-900/10" />
      
      {/* Grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-20" />
      
      {/* Floating orbs */}
      <div className="fixed top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      
      {/* Navigation Bar */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-black/50">
        <div className="text-3xl font-black">
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            $JAO WARFARE DASH
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-all">
            Campaigns
          </button>
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-all">
            Leaderboard
          </button>
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-400 transition-all">
            Create Campaign
          </button>
          <ConnectWalletButton />
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-glow">
              WARFARE COMMAND CENTER
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Welcome back, soldier. Ready to earn?
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-900/20 to-green-900/10 backdrop-blur-md rounded-2xl border border-green-500/30 p-6 hover:scale-105 transition-all">
            <div className="text-3xl font-black text-green-400 mb-2">0 $JAO</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Total Earned</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-md rounded-2xl border border-blue-500/30 p-6 hover:scale-105 transition-all">
            <div className="text-3xl font-black text-blue-400 mb-2">0</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Campaigns Done</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 hover:scale-105 transition-all">
            <div className="text-3xl font-black text-purple-400 mb-2">0</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Today's Actions</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/10 backdrop-blur-md rounded-2xl border border-yellow-500/30 p-6 hover:scale-105 transition-all">
            <div className="text-3xl font-black text-yellow-400 mb-2">#---</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Global Rank</div>
          </div>
        </div>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Connect Twitter Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all"></div>
            <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-3xl border border-blue-500/30 p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🐦</span>
                <h2 className="text-2xl font-black text-blue-400">CONNECT TWITTER</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Link your Twitter account to unlock campaign access and start earning $JAO for every action.
              </p>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full font-black text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                AUTHORIZE TWITTER ACCOUNT
              </button>
            </div>
          </div>

          {/* Active Campaigns Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all"></div>
            <div className="relative bg-gradient-to-br from-yellow-900/40 to-red-900/40 backdrop-blur-md rounded-3xl border border-yellow-500/30 p-8 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🎯</span>
                <h2 className="text-2xl font-black text-yellow-400">ACTIVE CAMPAIGNS</h2>
              </div>
              <p className="text-gray-300 mb-6">
                No campaigns available yet. Connect your Twitter to see live campaigns and start earning.
              </p>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Waiting for Twitter connection...</span>
                    <span className="text-sm text-gray-600">0 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-md rounded-3xl border border-purple-500/30 p-8">
          <h3 className="text-2xl font-black text-purple-400 mb-6">QUICK ACTIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 hover:border-white/30 transition-all font-bold">
              📊 View Leaderboards
            </button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 hover:border-white/30 transition-all font-bold">
              💰 Check Token Price
            </button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 hover:border-white/30 transition-all font-bold">
              📖 Read Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}