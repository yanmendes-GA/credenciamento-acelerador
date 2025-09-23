import React from 'react';
import { User, Phone, Mail, Clock } from 'lucide-react';
import { Accredited } from '@/mocks/data';

interface AccreditedCardProps {
  accredited: Accredited;
  onClick: () => void;
}

export const AccreditedCard: React.FC<AccreditedCardProps> = ({ accredited, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-400';
      case 'rejected':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprovado';
      case 'rejected':
        return 'Recusado';
      default:
        return 'Pendente';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div
      onClick={onClick}
      className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6 hover:bg-[#484f56] transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={accredited.photo}
            alt={accredited.fullName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium text-lg">{accredited.fullName}</h3>
            <p className="text-[#A0A3A6] text-sm">{accredited.cpf}</p>
          </div>
        </div>
        
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(accredited.status)}`}>
          {getStatusText(accredited.status)}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#A0A3A6] text-sm">
          <Mail className="w-4 h-4" />
          <span>{accredited.email}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[#A0A3A6] text-sm">
          <Phone className="w-4 h-4" />
          <span>{accredited.phone}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[#A0A3A6] text-sm">
          <Clock className="w-4 h-4" />
          <span>Enviado em {formatDate(accredited.createdAt)}</span>
        </div>
      </div>
      
      {accredited.status === 'rejected' && accredited.rejectionReason && (
        <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
          <strong>Motivo da recusa:</strong> {accredited.rejectionReason}
        </div>
      )}
    </div>
  );
};