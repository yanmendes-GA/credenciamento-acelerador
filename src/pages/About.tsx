import React from "react";
import { Footer } from "@/components/Footer";
import gaLogo from '@/assets/ga-logo.png';
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/about" className="nav__link nav__link--active">Sobre</Link>
              <Link to="/services" className="nav__link">Serviços</Link>
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
                  Sobre o Acelerador Empresarial
                </h1>
              </div>
              <div className="hero__description">
                <p className="hero__subtitle">
                  Somos especialistas em transformar negócios através de metodologias 
                  comprovadas e estratégias personalizadas para cada empresa.
                </p>
                <p className="hero__text-content">
                  Com mais de 10 anos de experiência no mercado, nosso time de consultores 
                  já ajudou centenas de empresas a alcançarem seus objetivos de crescimento 
                  e expansão. Oferecemos soluções completas em gestão, marketing digital, 
                  vendas e desenvolvimento organizacional.
                </p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default About;