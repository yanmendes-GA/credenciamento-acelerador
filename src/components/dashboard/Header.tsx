import React from 'react';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-[#3F464C] border-b border-[#6F7479] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/68a45f46c5202a981b756b66ce940a5163e3c19d?width=920"
            alt="Acelerador Empresarial"
            className="h-8 w-auto"
          />
          <div className="h-6 w-px bg-[#6F7479]" />
          <h1 className="text-white font-bold text-lg">Dashboard de Credenciamento</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <User className="w-5 h-5" />
            <span className="font-medium">{user?.name}</span>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-[#6F7479] hover:bg-[#5a5f63] text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </header>
  );
};