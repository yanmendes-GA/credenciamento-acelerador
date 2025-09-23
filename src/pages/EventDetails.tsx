import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/dashboard/Header';
import { AccreditedCard } from '@/components/dashboard/AccreditedCard';
import { mockEvents, mockAccredited } from '@/mocks/data';
import { ArrowLeft, Search, Filter, Users, CheckCircle, XCircle, Clock } from 'lucide-react';

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const event = mockEvents.find(e => e.id === eventId);
  const eventAccredited = mockAccredited.filter(acc => acc.eventId === eventId);

  const filteredAccredited = useMemo(() => {
    return eventAccredited.filter(acc => {
      const matchesSearch = acc.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           acc.cpf.includes(searchTerm) ||
                           acc.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || acc.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [eventAccredited, searchTerm, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: eventAccredited.length,
      pending: eventAccredited.filter(acc => acc.status === 'pending').length,
      approved: eventAccredited.filter(acc => acc.status === 'approved').length,
      rejected: eventAccredited.filter(acc => acc.status === 'rejected').length
    };
  }, [eventAccredited]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#101820]">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Evento não encontrado</h2>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Voltar ao Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#101820]">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button and header */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-[#A0A3A6] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
          </div>

          {/* Event info */}
          <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-white font-bold text-3xl mb-2">{event.title}</h1>
                <p className="text-[#A0A3A6] text-lg">{formatDate(event.date)} • {event.location}</p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium self-start lg:self-center ${
                  event.status === 'active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}
              >
                {event.status === 'active' ? 'Evento Ativo' : 'Evento Inativo'}
              </span>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-[#A0A3A6] text-sm">Total</p>
                  <p className="text-white font-bold text-2xl">{stats.total}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-[#A0A3A6] text-sm">Pendentes</p>
                  <p className="text-white font-bold text-2xl">{stats.pending}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-[#A0A3A6] text-sm">Aprovados</p>
                  <p className="text-white font-bold text-2xl">{stats.approved}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-400" />
                <div>
                  <p className="text-[#A0A3A6] text-sm">Recusados</p>
                  <p className="text-white font-bold text-2xl">{stats.rejected}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A3A6] w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome, CPF ou e-mail..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 bg-[#3F464C] border border-[#6F7479] rounded-lg pl-10 pr-4 text-white placeholder:text-[#A0A3A6] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A3A6] w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'pending' | 'approved' | 'rejected')}
                className="h-12 bg-[#3F464C] border border-[#6F7479] rounded-lg pl-10 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
              >
                <option value="all">Todos os status</option>
                <option value="pending">Pendentes</option>
                <option value="approved">Aprovados</option>
                <option value="rejected">Recusados</option>
              </select>
            </div>
          </div>

          {/* Accredited list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredAccredited.map(accredited => (
              <AccreditedCard
                key={accredited.id}
                accredited={accredited}
                onClick={() => navigate(`/dashboard/accredited/${accredited.id}`)}
              />
            ))}
          </div>

          {filteredAccredited.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#A0A3A6] text-lg">Nenhum credenciado encontrado</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventDetails;