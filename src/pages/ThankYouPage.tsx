import React from "react";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import heroDesktopBg from "@/assets/hero-desktop-bg-image.png";
import heroMobileBg from "@/assets/hero-mobile-bg-image.png";
import bgMobile from "@/assets/bg-mobile.png";
import instagramIcon from "@/assets/instagram-icon.svg";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Desktop background */}
      <img
        src={heroDesktopBg}
        alt="Background Desktop"
        className="hidden md:block w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Mobile background - fundo */}
      <img
        src={bgMobile}
        alt="BG Mobile"
        className="block md:hidden w-full h-full object-cover absolute top-0 left-0 z-0"
        style={{ minHeight: "100dvh" }}
      />

      <header className="w-full flex justify-center md:pt-16 md:px-0 relative z-10">
        {/* Desktop: logo normal */}
        <img
          src={gaLogo}
          alt="Grupo Acelerador Logo"
          className="hidden md:block w-[460px]"
        />
        {/* Mobile: logo dentro de container com heroMobileBg como fundo, alinhado à esquerda */}
        <div
          className="md:hidden w-full flex items-center h-[120px]"
          style={{
            backgroundImage: `url(${heroMobileBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={gaLogo}
            alt="Grupo Acelerador Logo"
            className="w-[200px] ml-4"
          />
        </div>
      </header>
      <div className="flex flex-col items-start gap-10 w-full max-w-[820px] mx-auto pt-10 pb-16 px-4 md:px-0 flex-1 relative z-10">
        <section className="flex flex-col items-start gap-5 w-full">
          <div className="w-full">
            <h1 className="font-bold text-[64px] text-white leading-[56px] tracking-[0.064px] max-md:text-5xl max-md:leading-[44px] max-sm:text-4xl max-sm:leading-8">
              Seu acesso está acelerado!
            </h1>
          </div>
          <div className="w-[586px] relative flex flex-col gap-5 max-md:w-full">
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5 mb-2">
              <span className="text-[#F9A826] font-bold">Parabéns!</span> Seu
              cadastro e o reconhecimento facial foram concluídos com sucesso.
            </p>
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5 mb-2">
              Prepare-se para um dia que vai transformar a sua visão de negócios
              e te dar as ferramentas para acelerar sua empresa.
            </p>
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5 mb-2">
              Nos vemos lá!
            </p>
          </div>
        </section>

        <hr className="w-full border-t border-[#6F7479]" />

        <div className="w-full">
          <h2 className="text-white text-xl font-bold mb-3 w-[450px]">
            Mantenha o ritmo e receba doses diárias de energia, conteúdo e
            inspiração.
          </h2>
        </div>

        <button
          onClick={() => navigate("/step04")}
          type="button"
          className="flex justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg max-md:w-full transition-opacity bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
        >
          <img src={instagramIcon}></img>
          <span className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
            @grupoacelerador
          </span>
        </button>
        <Footer />
      </div>
    </main>
  );
};

export default ThankYouPage;
