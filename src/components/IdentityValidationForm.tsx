import React, { useEffect, useState } from "react";
import './IdentityValidationForm.css';
import { ToggleSwitch } from "./ToggleSwitch";
import { FormInput } from "./FormInput";
import { Checkbox } from "./Checkbox";
import { formatCpf } from "@/utils/format-cpf";
import { formatDate } from "@/utils/format-date";
import { isValidCpf } from "@/utils/isValid-cpf";

export const IdentityValidationForm: React.FC = () => {
  const [documentType, setDocumentType] = useState<"brasileiro" | "estrangeiro">("brasileiro");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [imageRightsAccepted, setImageRightsAccepted] = useState(false);
  const [isValidCPFValue, setIsValidCPFValue] = useState(true);

  const handleCpfChange = (value: string) => {
    if (documentType === "estrangeiro") {
      setCpf(value);
      setIsValidCPFValue(true);
      return;
    }

    setCpf(formatCpf(value));
    setIsValidCPFValue(isValidCpf(value));
  };

  const handleDateChange = (value: string) => {
    setBirthDate(formatDate(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Por favor, aceite os Termos de Uso e a Política de Privacidade.");
      return;
    }
    console.log("Form submitted:", {
      documentType,
      cpf,
      birthDate,
      termsAccepted,
      imageRightsAccepted,
    });
  };

  const isFormValid = cpf && birthDate && termsAccepted && imageRightsAccepted && isValidCPFValue;

  useEffect(() => {
    if (documentType === "brasileiro") {
      setIsValidCPFValue(isValidCpf(cpf));
    } else {
      setIsValidCPFValue(true);
    }
  }, [cpf, documentType]);

  return (
    <section className="identity-form">
      <form onSubmit={handleSubmit} className="identity-form__form">
        <div className="card identity-form__card">
          <ToggleSwitch selectedOption={documentType} onToggle={setDocumentType} />
          
          <FormInput
            id="cpf"
            label={documentType === "brasileiro" ? "CPF" : "Documento"}
            placeholder={documentType === "brasileiro" ? "XXX.XXX.XXX-XX" : "Número do documento"}
            value={cpf}
            maxLength={documentType === "brasileiro" ? 14 : 20}
            onChange={handleCpfChange}
          />
          
          <FormInput
            id="birthDate"
            label="Data de nascimento"
            placeholder="DD/MM/AAAA"
            value={birthDate}
            maxLength={10}
            onChange={handleDateChange}
          />
          
          <button
            type="submit"
            disabled={!isFormValid}
            className={`btn btn--primary btn--full btn--lg ${!isFormValid ? 'btn--disabled' : ''}`}
          >
            Validar minha identidade
          </button>
          
          <Checkbox id="terms" checked={termsAccepted} onChange={setTermsAccepted}>
            Li e aceito os Termos de Uso e a Política de Privacidade.
          </Checkbox>
          
          <Checkbox id="imageRights" checked={imageRightsAccepted} onChange={setImageRightsAccepted}>
            Autorizo o uso da minha imagem para fins institucionais e de divulgação.
          </Checkbox>
        </div>
      </form>
    </section>
  );
};
