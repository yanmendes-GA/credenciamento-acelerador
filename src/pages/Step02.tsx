import React from "react";
import { IdentityValidationForm } from "@/components/IdentityValidationForm";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import heroDesktopBg from "@/assets/hero-desktop-bg-image.png";
import heroMobileBg from "@/assets/hero-mobile-bg-image.png";
import bgMobile from "@/assets/bg-mobile.png";
import listIcon from "@/assets/list-icon.svg";
import clipIcon from "@/assets/clip-icon.svg";
import { useNavigate } from "react-router-dom";

const Step02 = () => {
  return (
    <main className="w-full h-screen relative bg-black">
      {/* Desktop background */}
      <img
        src={heroDesktopBg}
        alt="Background Desktop"
        className="hidden md:block w-full object-cover absolute z-[1] left-0 top-0"
      />

      {/* Mobile background */}
      <img
        src={heroMobileBg}
        alt="Background Mobile"
        className="block md:hidden w-full object-cover relative z-[1]"
      />
      {/* Mobile backgrounds */}
      <img
        src={bgMobile}
        alt="BG Mobile"
        className="block md:hidden w-full h-full object-cover fixed left-0 top-0 z-0"
        style={{ minHeight: "100dvh" }}
      />

      <div className="flex w-[820px] flex-col items-start gap-20 absolute h-[822px] z-[2] left-[250px] top-[93px] max-md:w-[90%] max-md:gap-[60px] max-md:left-[5%] max-md:top-[60px] max-sm:gap-10 max-sm:top-10">
        <header>
          <img
            src={gaLogo}
            alt="Acelerador Empresarial Logo"
            className="w-[460px] max-md:w-[350px] max-sm:w-[280px]"
          />
        </header>

        {/* Stepper só no mobile */}
        {/* <div className="w-full md:hidden">
          <Stepper
            steps={[
              { id: "1", title: "01" },
              { id: "2", title: "02" },
              { id: "3", title: "03" },
            ]}
            currentStep={1}
          />
        </div> */}

        <section className="flex flex-col items-start gap-5 self-stretch relative">
          <div className="self-stretch relative">
            <h1 className="font-bold text-[64px] text-white leading-[56px] tracking-[0.064px] max-md:text-5xl max-md:leading-[44px] max-sm:text-4xl max-sm:leading-8">
              Vamos acelerar seu acesso
            </h1>
          </div>
          <div className="w-[586px] relative max-md:w-full">
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5">
              Envie um documento com foto para validarmos seus dados e deixar
              tudo pronto para a sua entrada na imersão.
            </p>
          </div>
        </section>

        <IdentityValidationForm />
      </div>

      <Footer />
    </main>
  );
};

export default Step02;
