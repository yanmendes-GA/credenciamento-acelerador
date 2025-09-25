import React, { useEffect, useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { FormInput } from "./FormInput";
import { Checkbox } from "./Checkbox";
import { formatCpf } from "@/utils/format-cpf";
import { formatDate } from "@/utils/format-date";
import { isValidCpf } from "@/utils/isValid-cpf";
import { useNavigate } from "react-router-dom";

export const IdentityValidationForm: React.FC = () => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState<
    "brasileiro" | "estrangeiro"
  >("brasileiro");
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
    navigate("/step02");
    console.log("Form submitted:", {
      documentType,
      cpf,
      birthDate,
      termsAccepted,
      imageRightsAccepted,
    });
  };

  const isFormValid =
    cpf && birthDate && termsAccepted && imageRightsAccepted && isValidCPFValue;

  useEffect(() => {
    if (documentType === "brasileiro") {
      setIsValidCPFValue(isValidCpf(cpf));
    } else {
      setIsValidCPFValue(true);
    }
  }, [cpf, documentType]);

  return (
    <section className="flex w-[467px] flex-col items-center gap-10 relative max-md:w-full max-sm:w-full max-sm:px-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 flex-1 self-stretch relative w-full"
      >
        <div className="flex flex-col justify-between items-center flex-1 self-stretch border relative gap-5 bg-[#3F464C] p-5 rounded-lg border-solid border-[#6F7479] w-full max-md:w-full max-sm:p-3 max-sm:gap-3">
          <ToggleSwitch
            selectedOption={documentType}
            onToggle={setDocumentType}
          />

          <FormInput
            id="cpf"
            label={documentType === "brasileiro" ? "CPF" : "Documento"}
            placeholder={
              documentType === "brasileiro"
                ? "XXX.XXX.XXX-XX"
                : "Número do documento"
            }
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
            className={`flex w-[313px] justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg transition-opacity max-md:w-full max-md:max-w-[313px] max-sm:w-full max-sm:max-w-full ${
              isFormValid
                ? "bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
                : "bg-[#6F7479] cursor-not-allowed opacity-50"
            }`}
          >
            <div className="relative w-full text-center">
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
            Autorizo o uso da minha imagem para fins institucionais e de
            divulgação.
          </Checkbox>
        </div>
      </form>
    </section>
  );
};
