import React from "react";
import { IdentityValidationForm } from "@/components/IdentityValidationForm";
import { Footer } from "@/components/Footer";
import gaLogo from '@/assets/ga-logo.png';

const Index = () => {
  return (
    <main className="w-full h-screen relative bg-black">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/de1865c83b6433d38fafbd4d8de2d02009fffd74?width=3840"
        alt="Background"
        className="w-full object-cover absolute z-[1] left-0 top-0"
      />

      <div className="flex w-[820px] flex-col items-start gap-20 absolute h-[822px] z-[2] left-[250px] top-[93px] max-md:w-[90%] max-md:gap-[60px] max-md:left-[5%] max-md:top-[60px] max-sm:gap-10 max-sm:top-10">
        <header>
          <img
            src={gaLogo}
            alt="Acelerador Empresarial Logo"
            className="w-[460px] max-md:w-[350px] max-sm:w-[280px]"
          />
        </header>

        <section className="flex flex-col items-start gap-5 self-stretch relative">
          <div className="self-stretch relative">
            <h1 className="font-bold text-[64px] text-white leading-[56px] tracking-[0.064px] max-md:text-5xl max-md:leading-[44px] max-sm:text-4xl max-sm:leading-8">
              O primeiro passo para o seu legado
            </h1>
          </div>
          <div className="w-[586px] relative max-md:w-full">
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5">
              Para garantir sua vaga e otimizar sua entrada no dia da imersão,
              precisamos de algumas informações rápidas.
            </p>
          </div>
        </section>

        <IdentityValidationForm />
      </div>

      <Footer />
    </main>
  );
};

export default Index;
