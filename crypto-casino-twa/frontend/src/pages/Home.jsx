export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Crypto Casino</h1>
      <p className="text-muted mb-8">Play Mines, Crash, and Higher/Lower</p>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="card p-6 flex items-center justify-center h-40 cursor-pointer hover:bg-[rgba(101,114,148,0.15)] transition-all">
          <span className="text-2xl">⛏️ Mines</span>
        </div>
        <div className="card p-6 flex items-center justify-center h-40 cursor-pointer hover:bg-[rgba(101,114,148,0.15)] transition-all">
          <span className="text-2xl">📈 Crash</span>
        </div>
        <div className="card p-6 flex items-center justify-center h-40 cursor-pointer hover:bg-[rgba(101,114,148,0.15)] transition-all">
          <span className="text-2xl">🎲 Higher/Lower</span>
        </div>
      </div>
    </div>
  )
}
