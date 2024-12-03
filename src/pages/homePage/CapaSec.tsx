import AppButton from '../../components/buttons/AppButton';
import salaIMG from '../../img/scandinavian-interior-mockup-wall-decal-background-1_1_.jpg';

function CapaSec() {
  return (
    <section className="md:bg-living-room md:bg-cover md:bg-center md:flex md:items-center min-h-[716px]">
      {/* figure */}
      <figure className="md:hidden">
        <img
          src={salaIMG}
          alt="image of a living room with sofa, modern and conceptual style"
          title="living room image"
          className="w-full h-auto object-cover"
        />
      </figure>

      {/* container article > text button */}
      <article className="p-10 text-center flex flex-col gap-6 bg-warm-cream rounded-2xl  w-11/12 mx-auto mt-5 md:h-[443px] md:w-[643px] md:items-start md:justify-center md:text-start md:pt-20 md:mr-10">
        {/* container text */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 font-semibold tracking-widest">
            New Arrival
          </p>
          <h2 className="text-Goldenrod text-4xl font-bold md:text-5xl md:w-96 md:leading-normal">
            Discover Our New Collection
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* button */}
        <AppButton className="bg-Goldenrod font-bold text-sm text-white py-4 md:w-56 md:py-7 hover:bg-yellow-600 hover:text-white">
          BUY NOW
        </AppButton>
      </article>
    </section>
  );
}

export default CapaSec;
