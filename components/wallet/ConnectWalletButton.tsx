// components/wallet/ConnectWalletButton.tsx
'use client'

import { FC, useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useConnection } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { getAccount, getAssociatedTokenAddress } from '@solana/spl-token'
import { useRouter, usePathname } from 'next/navigation'

const JAO_MINT_ADDRESS = new PublicKey('EGzvPfc54EBvS3M6MKXWixDK32T7pVxXB8dZ7AW5bACr')

export const ConnectWalletButton: FC = () => {
  const { publicKey, disconnect, connected } = useWallet()
  const { connection } = useConnection()
  const { setVisible } = useWalletModal()
  const router = useRouter()
  const pathname = usePathname()
  
  const [solBalance, setSolBalance] = useState<number>(0)
  const [jaoBalance, setJaoBalance] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  // Redirect to dashboard when wallet connects (only from landing page)
  useEffect(() => {
    if (connected && publicKey && pathname === '/') {
      router.push('/dashboard')
    }
  }, [connected, publicKey, router, pathname])

  // Fetch balances when wallet connects
  useEffect(() => {
    if (publicKey && connection) {
      fetchBalances()
    }
  }, [publicKey, connection])

  const fetchBalances = async () => {
    if (!publicKey) return
    
    try {
      setLoading(true)
      
      // Fetch SOL balance
      const balance = await connection.getBalance(publicKey)
      setSolBalance(balance / LAMPORTS_PER_SOL)
      
      // Fetch JAO token balance
      try {
        const tokenAccount = await getAssociatedTokenAddress(
          JAO_MINT_ADDRESS,
          publicKey
        )
        
        const tokenBalance = await getAccount(connection, tokenAccount)
        console.log('Raw JAO amount:', tokenBalance.amount.toString())
        // JAO token has 4 decimals
        setJaoBalance(Number(tokenBalance.amount) / 1e4)
      } catch (error) {
        // User might not have a JAO token account yet
        setJaoBalance(0)
      }
      
    } catch (error) {
      console.error('Error fetching balances:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = () => {
    if (connected) {
      // Already on dashboard if connected
      return
    } else {
      setVisible(true)
    }
  }

  const handleDisconnect = (e: React.MouseEvent) => {
    e.stopPropagation()
    disconnect()
  }

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm text-gray-400">Balances</div>
          <div className="flex gap-4 text-sm">
            <span className="text-purple-400 font-bold">{solBalance.toFixed(4)} SOL</span>
            <span className="text-yellow-400 font-bold">{jaoBalance >= 1000000 ? `${(jaoBalance / 1000000).toFixed(2)}M` : jaoBalance.toFixed(2)} $JAO</span>
          </div>
        </div>
        
        <button 
          onClick={handleClick}
          className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">
            {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x" />
        </button>
        
        <button
          onClick={handleDisconnect}
          className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button 
      onClick={handleClick}
      className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110 overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        CONNECT WALLET & START EARNING 💰
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x" />
    </button>
  )
}