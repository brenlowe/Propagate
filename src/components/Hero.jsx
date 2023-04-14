import Button from "./Button";
import {
  hero,
  logoAd,
  logoAt,
  logoGardenista,
  logoGh,
  logoMindbody,
  logoRefinery,
  logoTheSpruce,
  logoWellgood,
} from "../assets/index";

function Hero() {

  const images = [logoAd, logoAt, logoGardenista, logoGh, logoMindbody, logoRefinery, logoTheSpruce, logoWellgood]

  return (
    <section>
      {/* Hero Image + Overlay  */}
      <div className="relative h-[70vh] z-1">
        <img
          src={hero}
          alt="hero-img"
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center items-center top-[250px] left-0 right-0 ml-auto mr-auto sm:w-[700px] w-[300px] z-1 absolute">
        <h1 className="text-accentCream font-Gelasio font-bold text-[42px] py-5 sm:text-5xl text-center mb-3">
          Fresh Finds for Spring
        </h1>
        <Button
          buttonText="Shop New Arrivals"
          styles="bg-accentPeach w-[200px]"
          linkTo="/shop"
        />
      </div>
      
    {/* Featured Articles  */}
      <div className="bg-accentCream py-2 sm:py-4 px-2 sm:px-4">
        <h4 className="text-center py-2 font-bold text-sm tracking-wide font-Nunito">
          AS SEEN IN
        </h4>
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2">

         {images.map((image, index) => (
            <a key={index} href="/" className="flex justify-center p-2">
              <img className="w-[160px]" src={image} alt="" />
            </a>
         ))}

        </div>
      </div>
    </section>
  );
}

export default Hero;
