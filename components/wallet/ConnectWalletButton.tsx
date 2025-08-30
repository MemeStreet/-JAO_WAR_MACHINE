// components/wallet/ConnectWalletButton.tsx
'use client'

import { FC } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export const ConnectWalletButton: FC = () => {
  const { publicKey, disconnect, connected } = useWallet()
  const { setVisible } = useWalletModal()

  const handleClick = () => {
    if (connected) {
      disconnect()
    } else {
      setVisible(true)
    }
  }

  const getButtonText = () => {
    if (connected && publicKey) {
      const address = publicKey.toBase58()
      return `${address.slice(0, 4)}...${address.slice(-4)}`
    }
    return 'Connect Wallet & Start Earning 💰'
  }

  return (
    <button 
      onClick={handleClick}
      className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110 overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        {getButtonText()}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x" />
    </button>
  )
}