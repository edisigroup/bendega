import Cuisine from "./cuisine";


export default function Hero({isCuisine=true, isAbout=true}:{isCuisine?: boolean, isAbout?:boolean})  {
    return (
        <>
        <div
            className="w-full h-[420px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${isAbout ? '/hero.jpg' : '/chef.png'})`,
            }}
            ></div>
        {isCuisine && <Cuisine />}
        </>
      
    );
  }