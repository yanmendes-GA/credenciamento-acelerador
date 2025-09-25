import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <p>© 2025 Marcus Marques.</p>
          </div>
          <div className="footer__section">
            <p>
              <a href="#" className="footer__link">Política de privacidade</a> | 
              <a href="#" className="footer__link">Termos de uso</a>
            </p>
          </div>
          <div className="footer__section">
            <p>
              Todos os direitos reservados.
              <br />
              CNPJ:25.048.157/0001-18 - MARQUES SOLUCOES &amp; TREINAMENTOS LTDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
