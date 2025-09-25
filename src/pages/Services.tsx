import React from "react";
import { Footer } from "@/components/Footer";
import gaLogo from '@/assets/ga-logo.png';
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="layout layout--fullscreen">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/de1865c83b6433d38fafbd4d8de2d02009fffd74?width=3840"
        alt="Background"
        className="layout__background"
      />

      <div className="layout__content">
        <nav className="nav">
          <div className="container">
            <div className="nav__content">
              <Link to="/" className="nav__link">Início</Link>
              <Link to="/about" className="nav__link">Sobre</Link>
              <Link to="/services" className="nav__link nav__link--active">Serviços</Link>
              <Link to="/contact" className="nav__link">Contato</Link>
              <Link to="/login" className="nav__link nav__link--admin">Área Administrativa</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="hero">
            <header className="hero__header">
              <img
                src={gaLogo}
                alt="Acelerador Empresarial Logo"
                className="hero__logo"
              />
            </header>

            <section className="hero__content">
              <div className="hero__text">
                <h1 className="hero__title">
                  Nossos Serviços
                </h1>
              </div>
              <div className="hero__description">
                <p className="hero__subtitle">
                  Oferecemos soluções completas para acelerar o crescimento 
                  do seu negócio com metodologias comprovadas.
                </p>
                
                <div className="services">
                  <div className="services__item">
                    <h3 className="services__title">Consultoria Empresarial</h3>
                    <p className="services__description">
                      Análise completa do seu negócio com plano de ação personalizado.
                    </p>
                  </div>
                  
                  <div className="services__item">
                    <h3 className="services__title">Marketing Digital</h3>
                    <p className="services__description">
                      Estratégias digitais para aumentar sua presença online e gerar mais leads.
                    </p>
                  </div>
                  
                  <div className="services__item">
                    <h3 className="services__title">Treinamentos</h3>
                    <p className="services__description">
                      Capacitação da sua equipe com as melhores práticas do mercado.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Services;