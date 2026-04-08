'use client';

import { useState } from 'react';
import { GlassFilters } from '@/components/glass-filters';
import { 
  Diamond, 
  Wallet, 
  User, 
  Trophy, 
  Gamepad2, 
  Swords,
  ChevronRight, 
  Gift, 
  Crown, 
  TrendingUp, 
  Rocket,
  ArrowDown,
  ArrowUp
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'staking' | 'solo' | 'online' | 'tournament' | 'profile'>('online');
  const [balance] = useState(14250);

  return (
    <div className="bg-main min-h-screen text-white pb-28 relative">
      <GlassFilters />
      
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        {/* Balance */}
        <div className="glass-pill px-4 py-2.5 flex items-center gap-2">
          <Diamond className="w-5 h-5 text-red-500 fill-red-500 icon-glow" />
          <span className="text-lg font-semibold">{balance.toLocaleString()}</span>
          <button className="ml-1 w-6 h-6 rounded-full glass-button flex items-center justify-center text-sm font-medium">
            +
          </button>
        </div>
        
        {/* Wallet Button */}
        <button className="glass-pill px-5 py-2.5 flex items-center gap-2.5">
          <Wallet className="w-5 h-5 text-red-400" />
          <span className="font-medium">Кошелек</span>
        </button>
      </header>

      {/* Content */}
      <main className="px-4 mt-4">
        {activeTab === 'online' && <GamesView />}
        {activeTab === 'solo' && <SoloGamesView />}
        {activeTab === 'profile' && <ProfileView balance={balance} />}
        {activeTab === 'staking' && <StakingView />}
        {activeTab === 'tournament' && <TournamentView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 glass-heavy rounded-[2rem] px-2 py-3 flex items-center justify-around">
        <NavItem 
          icon={<Diamond className="w-5 h-5" />} 
          label="Стейкинг" 
          active={activeTab === 'staking'}
          onClick={() => setActiveTab('staking')}
        />
        <NavItem 
          icon={<Gamepad2 className="w-5 h-5" />} 
          label="Соло" 
          active={activeTab === 'solo'}
          onClick={() => setActiveTab('solo')}
        />
        
        {/* Center button - Online */}
        <button 
          onClick={() => setActiveTab('online')}
          className="flex flex-col items-center gap-1 -mt-8"
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center relative ${
            activeTab === 'online' 
              ? 'bg-gradient-to-b from-red-600/30 to-red-900/40 border-2 border-red-500/50' 
              : 'glass'
          }`}>
            <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl" />
            <Swords className={`w-7 h-7 relative z-10 ${activeTab === 'online' ? 'text-red-400 icon-glow' : 'text-white/70'}`} />
          </div>
          <span className={`text-[11px] font-medium ${activeTab === 'online' ? 'text-red-400' : 'text-white/50'}`}>
            Онлайн
          </span>
        </button>
        
        <NavItem 
          icon={<Trophy className="w-5 h-5" />} 
          label="Турнир" 
          active={activeTab === 'tournament'}
          onClick={() => setActiveTab('tournament')}
        />
        <NavItem 
          icon={<User className="w-5 h-5" />} 
          label="Профиль" 
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        />
      </nav>
    </div>
  );
}

function NavItem({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1.5"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        active ? 'glass-button' : 'bg-white/5'
      }`}>
        <span className={active ? 'text-red-400 icon-glow' : 'text-white/50'}>
          {icon}
        </span>
      </div>
      <span className={`text-[10px] ${active ? 'text-red-400' : 'text-white/50'}`}>
        {label}
      </span>
    </button>
  );
}

function GamesView() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Онлайн игры</h1>
      
      {/* Battle Game Card */}
      <GameCard
        icon={<Swords className="w-5 h-5" />}
        title="Битва"
        subtitle="Сражайся за одну из команд!"
        image="/battle-swords.png"
      />

      {/* Jackpot Game Card */}
      <GameCard
        icon={<Crown className="w-5 h-5" />}
        title="Джекпот"
        subtitle="Сражайся с другими игроками!"
        image="/jackpot-crown.png"
      />

      {/* Crash and Cash or Crash - Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Crash */}
        <div className="glass-card hoverable p-4 relative min-h-[200px]">
          <div className="absolute top-3 left-3 w-9 h-9 rounded-full glass-button flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-red-400" />
          </div>
          <div className="mt-12">
            <span className="inline-block px-3 py-1 rounded-full glass-pill text-[10px] font-semibold text-red-400 mb-2">
              New!
            </span>
            <h3 className="text-lg font-bold">Краш</h3>
            <p className="text-xs text-white/50 mt-1">Вовремя остановись!</p>
          </div>
          <div className="absolute bottom-3 right-3 w-20 h-20 opacity-80">
            <TrendingUp className="w-full h-full text-red-500/30" />
          </div>
        </div>

        {/* Cash or Crash */}
        <div className="glass-card hoverable p-4 relative min-h-[200px]">
          <div className="absolute top-3 left-3 w-9 h-9 rounded-full glass-button flex items-center justify-center">
            <Rocket className="w-4 h-4 text-red-400" />
          </div>
          <div className="mt-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-white/50 mb-2">
              Soon...
            </span>
            <h3 className="text-lg font-bold">Cash or Crash</h3>
            <p className="text-xs text-white/50 mt-1">Поднимойся ввысь</p>
          </div>
          <div className="absolute bottom-3 right-3 w-20 h-20 opacity-80">
            <Rocket className="w-full h-full text-red-500/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GameCard({ 
  icon, 
  title, 
  subtitle, 
  image 
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string;
  image?: string;
}) {
  return (
    <div className="glass-card hoverable p-5 relative overflow-hidden min-h-[140px]">
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass-button flex items-center justify-center">
        <span className="text-red-400">{icon}</span>
      </div>
      <div className="mt-14">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-white/50 mt-1">{subtitle}</p>
      </div>
      {/* Placeholder for 3D image */}
      <div className="absolute right-4 bottom-2 w-28 h-28 opacity-70">
        <div className="w-full h-full flex items-center justify-center text-red-500/30">
          {icon}
        </div>
      </div>
    </div>
  );
}

function SoloGamesView() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Соло игры</h1>
      
      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Nutvi */}
        <div className="glass-card hoverable aspect-square flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 rounded-full glass-button flex items-center justify-center mb-3">
            <span className="text-3xl font-bold text-red-400">%</span>
          </div>
          <h3 className="text-lg font-semibold">Nutvi</h3>
        </div>

        {/* Baccarat */}
        <div className="glass-card hoverable aspect-square flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 rounded-full glass-button flex items-center justify-center mb-3">
            <span className="text-2xl">A</span>
          </div>
          <h3 className="text-lg font-semibold">Baccarat</h3>
        </div>

        {/* Empty slot */}
        <div className="glass-card aspect-square flex items-center justify-center opacity-50">
          <span className="text-white/30 text-sm">Coming soon</span>
        </div>

        {/* Mines */}
        <div className="glass-card hoverable aspect-square flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 rounded-full glass-button flex items-center justify-center mb-3">
            <span className="text-2xl">💣</span>
          </div>
          <h3 className="text-lg font-semibold">Mines</h3>
        </div>
      </div>
    </div>
  );
}

function ProfileView({ balance }: { balance: number }) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center pt-4">
        <div className="w-24 h-24 rounded-full glass-heavy border-2 border-red-500/30 flex items-center justify-center mb-3 overflow-hidden">
          <User className="w-12 h-12 text-white/40" />
        </div>
        <h2 className="text-xl font-semibold">ensare</h2>
        <p className="text-sm text-white/40">ensare</p>
      </div>

      {/* Balance */}
      <div className="text-center py-4">
        <p className="text-sm text-white/50 mb-2">Ваш баланс</p>
        <div className="flex items-center justify-center gap-3">
          <Diamond className="w-8 h-8 text-red-500 fill-red-500 icon-glow" />
          <span className="text-4xl font-bold">0.00</span>
        </div>
      </div>

      {/* Wallet Section Card */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-medium">Кошелек</span>
          <button className="glass-button px-5 py-2 text-sm font-medium">
            Подключить
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button className="glass-button py-3.5 flex items-center justify-center gap-2 font-medium">
            <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-red-400" />
            </div>
            Пополнить
          </button>
          <button className="glass-button py-3.5 flex items-center justify-center gap-2 font-medium">
            <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-red-400" />
            </div>
            Вывести
          </button>
        </div>

        <button className="w-full glass-button py-3.5 font-medium">
          Перевод
        </button>
      </div>

      {/* Inventory Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-4 text-sm text-white/50">Инвентарь</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square glass-card flex items-center justify-center">
              <Gift className="w-8 h-8 text-red-500/40" />
            </div>
          ))}
          <button className="aspect-square glass flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-red-400" />
          </button>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-4 text-sm text-white/50">Блокчейн</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square glass-card flex items-center justify-center">
              <Gift className="w-8 h-8 text-red-500/40" />
            </div>
          ))}
          <button className="aspect-square glass flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StakingView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="glass-card p-8 text-center">
        <Diamond className="w-16 h-16 text-red-500 mx-auto mb-4 icon-glow" />
        <h2 className="text-2xl font-bold mb-2">Стейкинг</h2>
        <p className="text-white/50">Скоро...</p>
      </div>
    </div>
  );
}

function TournamentView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="glass-card p-8 text-center">
        <Trophy className="w-16 h-16 text-red-500 mx-auto mb-4 icon-glow" />
        <h2 className="text-2xl font-bold mb-2">Турниры</h2>
        <p className="text-white/50">Скоро...</p>
      </div>
    </div>
  );
}
