import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/dashboard/Header';
import { EventCard } from '@/components/dashboard/EventCard';
import { mockEvents, mockAccredited } from '@/mocks/data';
import { Search, Filter } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const getEventStats = (eventId: string) => {
    const eventAccredited = mockAccredited.filter(acc => acc.eventId === eventId);
    return {
      total: eventAccredited.length,
      pending: eventAccredited.filter(acc => acc.status === 'pending').length,
      approved: eventAccredited.filter(acc => acc.status === 'approved').length,
      rejected: eventAccredited.filter(acc => acc.status === 'rejected').length
    };
  };

  return (
    <div className="min-h-screen bg-[#101820]">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-white font-bold text-3xl mb-2">Eventos</h2>
            <p className="text-[#A0A3A6]">Gerencie os credenciamentos dos seus eventos</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A3A6] w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 bg-[#3F464C] border border-[#6F7479] rounded-lg pl-10 pr-4 text-white placeholder:text-[#A0A3A6] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A3A6] w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
                className="h-12 bg-[#3F464C] border border-[#6F7479] rounded-lg pl-10 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
              >
                <option value="all">Todos os status</option>
                <option value="active">Ativos</option>
                <option value="inactive">Inativos</option>
              </select>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => {
              const stats = getEventStats(event.id);
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  accreditedCount={stats.total}
                  pendingCount={stats.pending}
                  onClick={() => navigate(`/dashboard/events/${event.id}`)}
                />
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#A0A3A6] text-lg">Nenhum evento encontrado</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;