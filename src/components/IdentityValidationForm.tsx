import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { FormInput } from './FormInput';
import { Checkbox } from './Checkbox';

export const IdentityValidationForm: React.FC = () => {
  const [documentType, setDocumentType] = useState<'brasileiro' | 'estrangeiro'>('brasileiro');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [imageRightsAccepted, setImageRightsAccepted] = useState(false);

  const formatCpf = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return value;
  };

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
    return value;
  };

  const handleCpfChange = (value: string) => {
    setCpf(formatCpf(value));
  };

  const handleDateChange = (value: string) => {
    setBirthDate(formatDate(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Por favor, aceite os Termos de Uso e a Política de Privacidade.');
      return;
    }
    console.log('Form submitted:', {
      documentType,
      cpf,
      birthDate,
      termsAccepted,
      imageRightsAccepted
    });
  };

  const isFormValid = cpf && birthDate && termsAccepted;

  return (
    <section className="flex w-[467px] h-[434px] flex-col items-center gap-10 relative max-md:w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 flex-[1_0_0] self-stretch relative">
        <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch border relative gap-5 bg-[#3F464C] p-5 rounded-lg border-solid border-[#6F7479] max-md:w-full max-sm:p-4">
          <ToggleSwitch 
            selectedOption={documentType}
            onToggle={setDocumentType}
          />
          
          <FormInput
            id="cpf"
            label={documentType === 'brasileiro' ? 'CPF' : 'Documento'}
            placeholder={documentType === 'brasileiro' ? 'XXX.XXX.XXX-XX' : 'Número do documento'}
            value={cpf}
            onChange={handleCpfChange}
          />
          
          <FormInput
            id="birthDate"
            label="Data de nascimento"
            placeholder="DD/MM/AAAA"
            value={birthDate}
            onChange={handleDateChange}
          />
          
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex w-[313px] justify-center items-center gap-2.5 relative cursor-pointer px-8 py-4 rounded-lg max-md:w-full max-md:max-w-[313px] transition-opacity ${
              isFormValid 
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:opacity-90' 
                : 'bg-[#6F7479] cursor-not-allowed opacity-50'
            }`}
          >
            <div className="relative">
              <div className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
                Validar minha identidade
              </div>
            </div>
          </button>
          
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onChange={setTermsAccepted}
          >
            Li e aceito os Termos de Uso e a Política de Privacidade.
          </Checkbox>
          
          <Checkbox
            id="imageRights"
            checked={imageRightsAccepted}
            onChange={setImageRightsAccepted}
          >
            Autorizo o uso da minha imagem para fins institucionais e de divulgação.
          </Checkbox>
        </div>
      </form>
    </section>
  );
};
