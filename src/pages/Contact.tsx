import React from "react";
import { Footer } from "@/components/Footer";
import gaLogo from '@/assets/ga-logo.png';
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to="/services" className="nav__link">Serviços</Link>
              <Link to="/contact" className="nav__link nav__link--active">Contato</Link>
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
                  Entre em Contato
                </h1>
              </div>
              <div className="hero__description">
                <p className="hero__subtitle">
                  Estamos prontos para acelerar o crescimento do seu negócio. 
                  Fale conosco e descubra como podemos ajudar.
                </p>
                
                <div className="contact">
                  <div className="contact__item">
                    <h3 className="contact__title">Email</h3>
                    <p className="contact__info">
                      contato@aceleradorempresarial.com.br
                    </p>
                  </div>
                  
                  <div className="contact__item">
                    <h3 className="contact__title">Telefone</h3>
                    <p className="contact__info">
                      (11) 99999-9999
                    </p>
                  </div>
                  
                  <div className="contact__item">
                    <h3 className="contact__title">Endereço</h3>
                    <p className="contact__info">
                      São Paulo - SP<br />
                      CNPJ: 25.048.157/0001-18
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

export default Contact;