'use client'
 
import { useEffect } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-zinc-900/50 border border-red-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-red-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Something went wrong!</h2>
        <p className="text-zinc-400 mb-8 text-sm">
            We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors"
        >
          <RefreshCw size={18} /> Try again
        </button>
      </div>
    </div>
  )
}