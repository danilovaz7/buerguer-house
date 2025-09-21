
import heroImage from "@/assets/hero-bg.jpg";
import { Button } from "./ui/button";

const InicialBurguer = () => {
    const scrollToMenu = () => {
        const element = document.querySelector("#hamburgues");
        element?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <section className="relative bg-[#212121] w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Delicious gourmet burger"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl text-white md:text-7xl font-bold mb-6 animate-fade-in">
                    Os Melhores
                    <br />
                    <span className="gradient-text text-yellow-300">Hambúrgueres</span>
                    <br />
                    da Cidade
                </h1>

                <p className="text-xl md:text-2xl text-[#b5b3b3] mb-8 animate-slide-up max-w-2xl mx-auto">
                    Feitos com ingredientes frescos e selecionados, cada hambúrguer é uma experiência única de sabor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                    <Button
                        onClick={scrollToMenu}
                        className="glow-button text-lg px-8 py-6 font-semibold duration-400
  hover:shadow-[0_0_15px_rgba(252,211,77,0.7)] hover:shadow-amber-300/60
  focus:shadow-[0_0_15px_rgba(252,211,77,0.7)] focus:shadow-amber-300/60
  hover:bg-amber-300 hover:text-black"
                        size="lg"
                    >
                        Ver Cardápio
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default InicialBurguer;