import AppButton from '../../components/buttons/AppButton';
import { Link } from 'react-router-dom';

function CapaSec() {
  return (
    <section className="md:bg-living-room md:bg-auto md:bg-center-top xl:bg-cover xl:bg-bottom parallax md:flex md:items-center md:min-h-[716px] ">
      {/* figure */}
      <figure className="md:hidden">
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/section-Cape/scandinavian-interior-mockup-wall-decal-background-mobile.jpg"
          alt="image of a living room with sofa, modern and conceptual style"
          title="living room image"
          className="w-full h-auto object-cover"
        />
      </figure>

      {/* container article > text button */}
      <article className="relative p-10 text-center flex flex-col gap-6 bg-deep-space-blue bg-opacity-90 rounded-2xl  w-11/12 mx-auto mt-5 md:h-[443px] md:w-[603px] md:items-start md:justify-center md:text-start md:pt-20 md:mr-10 xl:mt-36">
        {/* container text */}
        <div className="flex flex-col gap-4 xl:pr-4">
          <p className="text-white font-semibold tracking-widest">
            New Arrival
          </p>
          <h2 className="text-Goldenrod text-4xl font-bold md:text-5xl tracking-widest md:w-11/12 md:leading-normal text-shadow-cape">
            Discover Our New Collection
          </h2>
          <p className="text-base xl:text-lg xl:w-full text-white">
            Discover our exclusive furniture, designed to transform any space
            into a cozy and sophisticated environment.
          </p>
        </div>

        {/* button */}

        <Link to="/shop">
          <AppButton className="bg-Goldenrod w-10/12 font-bold text-sm text-white py-4 md:w-56 md:py-4 hover-gold-custom hover:text-black mt-10">
            BUY NOW
          </AppButton>
        </Link>
      </article>
    </section>
  );
}

export default CapaSec;
