'use client';

import { Diamond, Wallet, User, Trophy, Gamepad2, Flame, ChevronRight, Gift, Crown, TrendingUp, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('games');
  const [balance] = useState(14250);

  return (
    <div className="min-h-screen bg-gradient-main text-foreground pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="glass rounded-full px-4 py-2.5 flex items-center gap-2">
          <Diamond className="w-5 h-5 text-primary fill-primary" />
          <span className="text-lg font-semibold">{balance.toLocaleString()}</span>
          <button className="ml-1 w-6 h-6 rounded-full glass-button flex items-center justify-center text-xs">
            +
          </button>
        </div>
        
        <button className="glass rounded-full px-5 py-2.5 flex items-center gap-2.5 border-primary/40">
          <Wallet className="w-5 h-5 text-primary" />
          <span className="font-medium">Кошелек</span>
        </button>
      </header>

      {/* Content */}
      <main className="px-4 mt-6">
        {activeTab === 'games' && <GamesView />}
        {activeTab === 'profile' && <ProfileView balance={balance} />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 glass-heavy rounded-[2rem] px-3 py-4 flex items-center justify-around shadow-2xl">
        <button className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-[11px]">Стэйкинг</span>
        </button>
        
        <button className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="text-[11px]">Соло</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('games')}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative">
            <Flame className="w-7 h-7 text-primary fill-primary" />
          </div>
          <span className="text-[11px] font-medium text-primary">Онлайн</span>
        </button>
        
        <button className="flex flex-col items-center gap-1.5 text-muted-foreground">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-[11px]">Турнир</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('profile')}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-[11px]">Профиль</span>
        </button>
      </nav>
    </div>
  );
}

function GamesView() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">Онлайн игры</h1>
      
      {/* Battle Game Card */}
      <div className="glass-heavy rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass border-primary/40 flex items-center justify-center">
          <Gamepad2 className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-end justify-between mt-12">
          <div>
            <h3 className="text-2xl font-bold">Битва</h3>
            <p className="text-sm text-muted-foreground mt-1">Сражайся за одну из команд!</p>
          </div>
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Jackpot Game Card */}
      <div className="glass-heavy rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass border-primary/40 flex items-center justify-center">
          <Crown className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-end justify-between mt-12">
          <div>
            <h3 className="text-2xl font-bold">Джекпот</h3>
            <p className="text-sm text-muted-foreground mt-1">Сражайся с другими игроками!</p>
          </div>
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Crash and Cash or Crash - Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Crash */}
        <div className="glass-heavy rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full glass border-primary/40 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-10">
            <span className="inline-block px-2.5 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-medium mb-2">
              New!
            </span>
            <h3 className="text-lg font-bold">Краш</h3>
            <p className="text-xs text-muted-foreground mt-1">Вовремя остановись!</p>
          </div>
          <div className="w-20 h-20 mt-2 mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Cash or Crash */}
        <div className="glass-heavy rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full glass border-primary/40 flex items-center justify-center">
            <Rocket className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-10">
            <span className="inline-block px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-medium mb-2">
              Soon...
            </span>
            <h3 className="text-lg font-bold">Cash or Crash</h3>
            <p className="text-xs text-muted-foreground mt-1">Поднимайся вверх</p>
          </div>
          <div className="w-20 h-20 mt-2 mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileView({ balance }: { balance: number }) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center pt-6">
        <div className="w-24 h-24 rounded-full glass-heavy border-2 border-primary/40 flex items-center justify-center mb-4">
          <User className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">ensare</h2>
        <p className="text-sm text-muted-foreground">ensare</p>
      </div>

      {/* Balance */}
      <div className="text-center py-6">
        <p className="text-sm text-muted-foreground mb-2">Ваш баланс</p>
        <div className="flex items-center justify-center gap-2">
          <Diamond className="w-8 h-8 text-primary fill-primary" />
          <span className="text-4xl font-bold">{balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="glass-heavy rounded-3xl p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-medium">Кошелек</span>
          <button className="glass-button rounded-2xl px-6 py-2.5 font-medium text-sm">
            Подключить
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="glass-button rounded-2xl px-4 py-4 flex items-center justify-center gap-2 font-medium">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary">↓</span>
          </div>
          Пополнить
        </button>
        <button className="glass-button rounded-2xl px-4 py-4 flex items-center justify-center gap-2 font-medium">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary">↑</span>
          </div>
          Вывести
        </button>
      </div>

      <button className="w-full glass-button rounded-2xl px-4 py-4 font-medium">
        Перевод
      </button>

      {/* Inventory Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Инвентарь</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square glass-heavy rounded-2xl flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary/50" />
            </div>
          ))}
          <button className="aspect-square glass rounded-2xl flex items-center justify-center border-primary/30">
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Блокчейн</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square glass-heavy rounded-2xl flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary/50" />
            </div>
          ))}
          <button className="aspect-square glass rounded-2xl flex items-center justify-center border-primary/30">
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
