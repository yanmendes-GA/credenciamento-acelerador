import React from "react";
import { IdentityValidationForm } from "@/components/IdentityValidationForm";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import listIcon from "@/assets/list-icon.svg";
import clipIcon from "@/assets/clip-icon.svg";
import { useNavigate } from "react-router-dom";

const Step02 = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex items-center justify-center bg-black relative">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/de1865c83b6433d38fafbd4d8de2d02009fffd74?width=3840"
        alt="Background"
        className="w-full object-cover absolute z-[1] left-0 top-0"
      />

      <div className="flex w-[820px] flex-col items-start gap-10 absolute h-[822px] z-[2] left-[250px] top-[93px] max-md:w-[90%] max-md:gap-[60px] max-md:left-[5%] max-md:top-[60px] max-sm:gap-10 max-sm:top-10">
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

        <hr className="w-full border-t border-[#6F7479]" />

        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            Como enviar seu documento corretamente?
          </h2>
          <ul className="text-white text-base font-normal flex flex-col gap-2 mb-6 w-[360px] max-xl:w-[360px]">
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>
                Utilize um documento oficial com foto (RG, CNH ou Passaporte).
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>Certifique-se de que esteja legível e sem cortes.</span>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={listIcon}
                alt="Ícone de lista"
                className="w-5 h-5 mt-1"
              />
              <span>Evite reflexos ou sombras ao fotografar/scanner.</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/step03")}
          type="button"
          className="flex justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg max-md:w-full max-md:max-w-[313px] transition-opacity bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
        >
          <img src={clipIcon}></img>
          <span className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
            Fazer upload do documento
          </span>
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default Step02;
