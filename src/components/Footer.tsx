import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-[1420px] flex-col items-center gap-1 absolute h-[76px] z-[2] left-[250px] top-[970px] max-md:w-[90%] max-md:left-[5%] max-md:top-auto max-md:bottom-5 max-sm:bottom-2.5">
      <div className="self-stretch text-center relative">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          © 2025 Marcus Marques.
        </div>
      </div>
      <div className="self-stretch text-center relative">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          <a href="#" className="hover:underline">Política de privacidade</a> | <a href="#" className="hover:underline">Termos de uso</a>
        </div>
      </div>
      <div className="self-stretch text-center relative">
        <div className="font-normal text-sm text-white tracking-[0.014px] max-sm:text-xs">
          Todos os direitos reservados.
          <br />
          CNPJ:25.048.157/0001-18 - MARQUES SOLUCOES &amp; TREINAMENTOS LTDA
        </div>
      </div>
    </footer>
  );
};
