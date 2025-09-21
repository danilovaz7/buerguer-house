import { useEffect, useState } from "react";


const Navbar = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { href: "#hamburgues", label: "Hambúrgueres" },
    { href: "#acompanhamentos", label: "Acompanhamentos" },
    { href: "#bebidas", label: "Bebidas" },
    { href: "#sobremesas", label: "Sobremesas" },
  ];

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
      <header
        className={`fixed p-5 flex  top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#141414]/95 backdrop-blur-md shadow-elegant " : "bg-transparent"
          }`}
      >
        <div className=' w-[40%]'>
           <h1 className="text-2xl text-[#e8d202] md:text-3xl font-bold gradient-text">
              Burger House
            </h1>
        </div>

        <div className=' w-[60%] flex justify-end gap-10 items-center'>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className=" text-[#e8d202] hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>
  );
};

export default Navbar;