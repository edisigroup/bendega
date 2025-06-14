import Cuisine from "./cuisine";


export default function Hero({isCuisine=true, isAbout=true}:{isCuisine?: boolean, isAbout?:boolean})  {
    return (
        <>
        <div
            className={`w-full ${isAbout ? 'h-[420px] bg-center' : 'h-[520px] bg-top'} bg-cover  bg-no-repeat`}
            style={{
                backgroundImage: `url(${isAbout ? '/hero.jpg' : '/chef.png'})`,
            }}
            />
        {isCuisine && <Cuisine />}
        </>
      
    );
  }