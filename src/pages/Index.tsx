import { sendPersonalData } from "@/services/formService"
import { IdentityValidationForm } from "@/components/IdentityValidationForm"
import { Footer } from "@/components/Footer"
import gaLogo from "@/assets/ga-logo.png"
import { Stepper } from "@/components/Stepper/Stepper"
import heroDesktopBg from "@/assets/hero-desktop-bg-image.png"
import heroMobileBg from "@/assets/hero-mobile-bg-image.png"
import bgMobile from "@/assets/bg-mobile.png"
import { PersonalDataType } from "@/services/types"
import CustomToast from "@/components/CustomToast"
import { useState } from "react"

const Index = () => {
  const [showToast, setShowToast] = useState(true)
  return (
    <main className="w-full min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Toast de exemplo */}
      {/* {showToast && (
        <div className="fixed top-8 right-0 z-50">
          <CustomToast
            message="Seu cadastro foi encontrado com sucesso!"
            onClose={() => setShowToast(false)}
          />
        </div>
      )} */}
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
      {/* Mobile hero removido, agora é background do container do logo */}

      <header className="w-full md:max-w-[1420px] md:mx-auto flex md:justify-start justify-center md:pt-16 md:px-0 relative z-10">
        {/* Desktop: logo normal */}
        <img
          src={gaLogo}
          alt="Acelerador Empresarial Logo"
          className="hidden md:block w-[340px]"
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
            alt="Acelerador Empresarial Logo"
            className="w-[200px] ml-4"
          />
        </div>
      </header>
      <div className="flex flex-col items-start gap-10 w-full max-w-[820px] mx-auto pt-10 pb-16 px-4 md:px-0 flex-1 relative z-10 md:max-w-[1420px]">
        <div className="w-full md:hidden">
          <Stepper
            steps={[
              { id: "1", title: "01" },
              { id: "2", title: "02" },
              { id: "3", title: "03" },
            ]}
            currentStep={0}
          />
        </div>

        <section className="flex flex-col items-start gap-5 w-full">
          <div className="w-full md:w-[820px]">
            <h1 className="font-bold text-[56px] md:text-[64px] text-white leading-[56px] tracking-[0.064px] max-md:text-5xl max-md:leading-[44px] max-sm:text-4xl max-sm:leading-8">
              O primeiro passo para o seu legado
            </h1>
          </div>
          <div className="w-full max-w-[590px] md:max-w-[700px]">
            <p className="font-normal text-xl text-white leading-6 tracking-[0.02px] max-md:text-lg max-md:leading-[22px] max-sm:text-base max-sm:leading-5">
              Para garantir sua vaga e otimizar sua entrada no dia da imersão,
              precisamos de algumas informações rápidas.
            </p>
          </div>
          <div className="w-full md:mt-8">
            <IdentityValidationForm
              onSubmit={(data: PersonalDataType) => {
                sendPersonalData(data)
              }}
            />
          </div>
        </section>
        {/* Espaço para o formulário ocupar a esquerda no desktop */}
        <div className="hidden md:flex flex-1" />
        <Footer />
      </div>
    </main>
  )
}

export default Index
