import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import gaLogo from "@/assets/ga-logo.png";
import instagramIcon from "@/assets/instagram-icon.svg";

const ThankYouPage = () => {
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
            alt="Grupo Acelerador Logo"
            className="w-[460px] max-md:w-[350px] max-sm:w-[280px]"
          />
        </header>

        <section className="flex flex-col items-start gap-5 self-stretch relative">
          <div className="self-stretch relative">
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
          className="flex justify-center items-center gap-2.5 relative cursor-pointer px-4 py-4 rounded-lg max-md:w-full max-md:max-w-[313px] transition-opacity bg-gradient-to-t from-[#D67C1C] to-[#DE9649] hover:opacity-90"
        >
          <img src={instagramIcon}></img>
          <span className="font-bold text-xl text-white leading-6 tracking-[0.02px] max-sm:text-lg">
            @grupoacelerador
          </span>
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default ThankYouPage;
