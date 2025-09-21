
import Navbar from "./components/Navbar";
import InicialBurguer from "./components/InicialBuguer";
import ItemCard from "./components/ItemCard";
import heroImage from "@/assets/hero-bg.jpg";
import bg2 from "@/assets/burguer2.jpg";
import bg3 from "@/assets/burguer3.jpg";
import bg4 from "@/assets/burguer4.jpg";
import fritas from "@/assets/fritas.jpg";
import nugget from "@/assets/nugget.jpg";
import coca from "@/assets/coca.jpg";
import limonada from "@/assets/limonada.jpg";
import milkshake from "@/assets/milkshake.jpg";
import brownie from "@/assets/brownie.jpg";
import petit from "@/assets/petit.jpg";
import Footer from "./components/Footer";

function App() {

  return (
    <div className='w-full h-full flex items-center  flex-col'>
      <Navbar />
      
      <InicialBurguer />

      <section id="hamburgues" className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-[100%] gap-10  flex flex-col justify-centerfy- items-center">
          <h1 className="text-2xl text-[#e8d202] md:text-3xl font-bold gradient-text">Hamburguers</h1>
          <div className="w-[80%] flex justify-start items-center flex-wrap ">
            <ItemCard image={heroImage} name={"Duplo bacon"} description={"2 Hambúrguers artesanais de 90g, queijo cheddar, bacon e molho especial da casa."} price={"29,90"} />
            <ItemCard image={bg2} name={"X-Salada"} description={"Hambúrguer artesanal de 180g, queijo cheddar, alface, tomate, cebola roxa e molho especial da casa."} price={"32,90"} />
            <ItemCard image={bg3} name={"Triplo"} description={"3 Hambúrguers artesanais de 90g, queijo cheddar e molho especial da casa."} price={"44,90"} />
            <ItemCard image={bg4} name={"A moda"} description={"Hambúrguer artesanal de 220g, queijo cheddar, picles, bacon e molho especial da casa."} price={"40,90"} />
          </div>
        </div>

        <div  id="acompanhamentos" className="w-[100%] gap-10 bg-[#252525] pt-10  flex flex-col justify-centerfy- items-center">
          <h1 className="text-2xl text-[#e8d202] md:text-3xl font-bold gradient-text">Acompanhamentos</h1>
          <div className="w-[80%] flex justify-start items-center flex-wrap ">
            <ItemCard image={fritas} name={"Fritas"} description={"180g de batata frita com tempero da casa"} price={"18,00"} />
            <ItemCard image={nugget} name={"Nuggets"} description={"8 peças de nuggets caseiros, acompanha molho da casa"} price={"22,99"} />
          </div>
        </div>

        <div id="bebidas" className="w-[100%] gap-10 pt-10  flex flex-col justify-centerfy- items-center">
          <h1 className="text-2xl text-[#e8d202] md:text-3xl font-bold gradient-text">Bebidas</h1>
          <div className="w-[80%] flex justify-start items-center flex-wrap ">
            <ItemCard image={coca} name={"Coca-cola"} description={""} price={"12,00"} />
            <ItemCard image={limonada} name={"Limonada da casa"} description={""} price={"14,00"} />
            <ItemCard image={milkshake} name={"Milkshake"} description={"Consultar sabores"} price={"18,00"} />
          </div>
        </div>

        <div  id="sobremesas" className="w-[100%] gap-10 pt-10 bg-[#252525] flex flex-col justify-centerfy- items-center">
          <h1 className="text-2xl text-[#e8d202] md:text-3xl font-bold gradient-text">Sobremesas</h1>
          <div className="w-[80%] flex justify-start items-center flex-wrap ">
            <ItemCard image={brownie} name={"Brownie caseiro"} description={"2 pedaços de brownies, acompanha 1 bola de sorvete (consultar sabores) e calda de chocolate meio-amargo"} price={"26,00"} />
            <ItemCard image={petit} name={"Petit-gateau"} description={"Nosso carro-chefe, petit-gateau, com sorvete de creme, acompanhado por frutas-vermelhas"} price={"32,99"} />
          </div>
        </div>

      </section>

      <Footer />

    </div>

  )
}

export default App
