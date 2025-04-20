import Cuisine from "./cuisine";

export default function Hero() {
    return (
        <>
        <div className="w-full h-[520px] bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')]">
        </div>
        <Cuisine/>
        </>
      
    );
  }