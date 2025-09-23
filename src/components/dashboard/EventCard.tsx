import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '@/mocks/data';

interface EventCardProps {
  event: Event;
  accreditedCount: number;
  pendingCount: number;
  onClick: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  accreditedCount, 
  pendingCount, 
  onClick 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div
      onClick={onClick}
      className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6 hover:bg-[#484f56] transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            event.status === 'active'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-gray-500/20 text-gray-400'
          }`}
        >
          {event.status === 'active' ? 'Ativo' : 'Inativo'}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-[#A0A3A6]">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[#A0A3A6]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[#A0A3A6]">
          <Users className="w-4 h-4" />
          <span className="text-sm">
            {accreditedCount} credenciados • {pendingCount} pendentes
          </span>
        </div>
      </div>
    </div>
  );
};