import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao dashboard.",
      });
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <main className="w-full h-screen relative overflow-hidden bg-black">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/de1865c83b6433d38fafbd4d8de2d02009fffd74?width=3840"
        alt="Background"
        className="w-full h-full object-cover absolute z-[1] left-0 top-0"
      />
      
      <div className="flex items-center justify-center h-full relative z-[2]">
        <div className="w-full max-w-md p-8">
          <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-8">
            <div className="text-center mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/68a45f46c5202a981b756b66ce940a5163e3c19d?width=920"
                alt="Acelerador Empresarial"
                className="h-12 mx-auto mb-4"
              />
              <h1 className="text-white font-bold text-2xl mb-2">Área Administrativa</h1>
              <p className="text-[#A0A3A6] text-sm">Faça login para acessar o dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white font-medium text-sm mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full h-12 bg-[#6F7479] border-none rounded-lg px-4 text-white placeholder:text-[#A0A3A6] placeholder:italic focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white font-medium text-sm mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full h-12 bg-[#6F7479] border-none rounded-lg px-4 pr-12 text-white placeholder:text-[#A0A3A6] placeholder:italic focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#A0A3A6] hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-lg transition-opacity"
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#A0A3A6] text-xs">
                Use: admin@acelerador.com / 123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;