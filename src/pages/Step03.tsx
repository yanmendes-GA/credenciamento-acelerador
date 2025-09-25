import React from "react";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import { Stepper } from "@/components/Stepper/Stepper";
import heroDesktopBg from "@/assets/hero-desktop-bg-image.png";
import heroMobileBg from "@/assets/hero-mobile-bg-image.png";
import bgMobile from "@/assets/bg-mobile.png";
import cameraIcon from "@/assets/camera-icon.svg";
import listIcon from "@/assets/list-icon.svg";
import { useNavigate } from "react-router-dom";

const Step03 = () => {
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
        <div className="w-full md:hidden">
          <Stepper
            steps={[
              { id: "1", title: "01" },
              { id: "2", title: "02" },
              { id: "3", title: "03" },
            ]}
            currentStep={2}
          />
        </div>
        <section className="flex flex-col items-start gap-5 w-full">
          <div className="w-full">
            <h1 className="font-bold text-[64px] text-white leading-[56px] tracking-[0.064px] max-md:text-5xl max-md:leading-[44px] max-sm:text-4xl max-sm:leading-8">
              Estamos quase lá!
            </h1>
          </div>
          <div className="w-[586px] relative max-md:w-full">
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5">
              Com reconhecimento facial, você garante uma entrada ultrarrápida,
              evita filas e foca 100% no que realmente importa:{" "}
              <span className="text-[#F9A826] font-bold">
                acelerar seus resultados.
              </span>
            </p>
          </div>
        </section>

        <hr className="w-full border-t border-[#6F7479]" />

        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            Como tirar uma boa foto?
          </h2>
          <ul className="text-white text-base font-normal flex flex-col gap-2 mb-6 w-[360px] max-xl:w-[360px]">
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>Fique em um fundo simples, sem muita distração.</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>
                Evite óculos escuros, bonés ou qualquer acessório que cubra o
                rosto.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>Mantenha o celular na altura do rosto.</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>Tire a foto em um lugar bem iluminado.</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/thank-you")}
          type="button"
          className="flex justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg max-md:w-full  transition-opacity bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
        >
          <img src={cameraIcon}></img>
          <span className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
            Fazer reconhecimento facial
          </span>
        </button>
        <Footer />
      </div>
    </main>
  );
};

export default Step03;
