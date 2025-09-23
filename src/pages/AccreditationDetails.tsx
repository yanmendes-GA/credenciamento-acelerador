import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/dashboard/Header';
import { mockAccredited, mockEvents } from '@/mocks/data';
import { ArrowLeft, Check, X, User, Phone, Mail, Calendar, FileText, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccreditationDetails = () => {
  const { accreditedId } = useParams<{ accreditedId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const accredited = mockAccredited.find(acc => acc.id === accreditedId);
  const event = accredited ? mockEvents.find(e => e.id === accredited.eventId) : null;

  if (!accredited || !event) {
    return (
      <div className="min-h-screen bg-[#101820]">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Credenciamento não encontrado</h2>
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

  const handleApprove = () => {
    toast({
      title: "Credenciamento aprovado!",
      description: `${accredited.fullName} foi aprovado com sucesso.`,
    });
    navigate(-1);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, informe o motivo da recusa.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Credenciamento recusado",
      description: `${accredited.fullName} foi recusado.`,
      variant: "destructive",
    });
    setShowRejectionModal(false);
    navigate(-1);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-400 border-green-500/20';
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/20';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
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

  return (
    <div className="min-h-screen bg-[#101820]">
      <Header />
      
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#A0A3A6] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
          </div>

          {/* Header */}
          <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-white font-bold text-2xl mb-2">Detalhes do Credenciamento</h1>
                <p className="text-[#A0A3A6]">{event.title}</p>
              </div>
              <span className={`px-4 py-2 rounded-lg border text-sm font-medium self-start lg:self-center ${getStatusColor(accredited.status)}`}>
                {getStatusText(accredited.status)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <User className="w-5 h-5" />
                Dados Pessoais
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[#A0A3A6] text-sm mb-1">Nome Completo</label>
                  <p className="text-white font-medium">{accredited.fullName}</p>
                </div>
                
                <div>
                  <label className="block text-[#A0A3A6] text-sm mb-1">CPF</label>
                  <p className="text-white font-medium">{accredited.cpf}</p>
                </div>
                
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4 text-[#A0A3A6]" />
                  <span>{accredited.email}</span>
                </div>
                
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4 text-[#A0A3A6]" />
                  <span>{accredited.phone}</span>
                </div>
                
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4 text-[#A0A3A6]" />
                  <span>Enviado em {formatDate(accredited.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Photo and Document */}
            <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Documentos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[#A0A3A6] text-sm">Foto do Credenciado</label>
                    <button
                      onClick={() => openImageModal(accredited.photo)}
                      className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Ampliar
                    </button>
                  </div>
                  <img
                    src={accredited.photo}
                    alt="Foto do credenciado"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal(accredited.photo)}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[#A0A3A6] text-sm">Documento Enviado</label>
                    <button
                      onClick={() => openImageModal(accredited.document)}
                      className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Ampliar
                    </button>
                  </div>
                  <img
                    src={accredited.document}
                    alt="Documento"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal(accredited.document)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rejection reason if exists */}
          {accredited.status === 'rejected' && accredited.rejectionReason && (
            <div className="mt-8 bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="text-red-400 font-bold text-lg mb-2">Motivo da Recusa</h3>
              <p className="text-red-300">{accredited.rejectionReason}</p>
            </div>
          )}

          {/* Action buttons */}
          {accredited.status === 'pending' && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleApprove}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                <Check className="w-5 h-5" />
                Aprovar Credenciamento
              </button>
              
              <button
                onClick={() => setShowRejectionModal(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                Recusar Credenciamento
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-lg"
            >
              ✕ Fechar
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#3F464C] border border-[#6F7479] rounded-lg p-6 w-full max-w-md">
            <h3 className="text-white font-bold text-xl mb-4">Recusar Credenciamento</h3>
            <p className="text-[#A0A3A6] mb-4">
              Informe o motivo da recusa para {accredited.fullName}:
            </p>
            
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Digite o motivo da recusa..."
              className="w-full h-24 bg-[#6F7479] border-none rounded-lg p-3 text-white placeholder:text-[#A0A3A6] focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowRejectionModal(false)}
                className="flex-1 px-4 py-2 bg-[#6F7479] hover:bg-[#5a5f63] text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Confirmar Recusa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccreditationDetails;