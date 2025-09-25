import React from "react";
import { IdentityValidationForm } from "@/components/IdentityValidationForm";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import heroDesktopBg from "@/assets/hero-desktop-bg-image.png";
import heroMobileBg from "@/assets/hero-mobile-bg-image.png";
import bgMobile from "@/assets/bg-mobile.png";
import listIcon from "@/assets/list-icon.svg";
import cameraIcon from "@/assets/camera-icon.svg";
import { useNavigate } from "react-router-dom";

const Step03 = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex items-center justify-center bg-black relative">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/de1865c83b6433d38fafbd4d8de2d02009fffd74?width=3840"
        alt="Background"
        className="w-full object-cover absolute z-[1] left-0 top-0"
      />
      {/* Desktop background */}
      <img
        src={heroDesktopBg}
        alt="Background Desktop"
        className="hidden md:block w-full object-cover absolute z-[1] left-0 top-0"
      />
      {/* Mobile backgrounds */}
      <img
        src={bgMobile}
        alt="BG Mobile"
        className="block md:hidden w-full h-full object-cover fixed left-0 top-0 z-0"
        style={{ minHeight: "100dvh" }}
      />
      <img
        src={heroMobileBg}
        alt="Background Mobile"
        className="block md:hidden w-full object-cover relative z-[1]"
      />

      <div className="flex w-[820px] flex-col items-start gap-10 absolute h-[822px] z-[2] left-[250px] top-[93px] max-md:w-[90%] max-md:gap-[60px] max-md:left-[5%] max-md:top-[60px] max-sm:gap-10 max-sm:top-10">
        <header>
          <img
            src={gaLogo}
            alt="Grupo Acelerador Logo"
            className="w-[460px] max-md:w-[350px] max-sm:w-[280px]"
          />
        </header>

        <section className="flex flex-col items-start gap-5 self-stretch relative">
          <div className="self-stretch relative">
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
          className="flex justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg max-md:w-full max-md:max-w-[313px] transition-opacity bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
        >
          <img src={cameraIcon}></img>
          <span className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
            Fazer reconhecimento facial
          </span>
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default Step03;
