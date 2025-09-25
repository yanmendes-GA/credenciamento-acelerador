import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-1 w-full mt-auto relative z-20">
      <div className="w-full text-center">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          © 2025 Marcus Marques.
        </div>
      </div>
      <div className="w-full text-center">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          <a href="#" className="hover:underline">
            Política de privacidade
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Termos de uso
          </a>
        </div>
      </div>
      <div className="w-full text-center">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          Todos os direitos reservados.
          <br />
          CNPJ:25.048.157/0001-18 - MARQUES SOLUCOES &amp; TREINAMENTOS LTDA
        </div>
      </div>
    </footer>
  );
};
