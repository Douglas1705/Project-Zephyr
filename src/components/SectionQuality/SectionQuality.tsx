import { GiTrophyCup } from 'react-icons/gi';
import { MdOutlinePlaylistAddCheckCircle } from 'react-icons/md';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BiSupport } from 'react-icons/bi';

function SectionQuality() {
  const figureCustom =
    'flex flex-col text-center mx-auto gap-2 text-2xl font-semibold lg:w-4/12 lg:text-start lg:text-start lg:flex-row lg:text-start md:w-5/12 lg:w-[455px] lg:gap-0 lg:mx-0 xl:w-auto xl:gap-2 ';

  const pCustom = 'text-xl text-gray-500 font-medium';

  const imgCustom = 'mx-auto lg:mx-0';

  return (
    <article className="bg-warm-cream flex flex-col md:flex-row justify-between gap-10 py-10 flex-wrap px-10 h-auto items-center lg:gap-4 lg:space-y-4 lg:justify-around xl:h-[270px] xl:gap-0 xl:py-0 xl:px-0">
      <figure className={`${figureCustom} lg:pt-6`}>
        <GiTrophyCup className={`${imgCustom} text-6xl mt-1`} />
        <div className="space-y-2 ml-4 xl:ml-0">
          <h3 className="text-2xl">High Quality</h3>
          <p className={pCustom}>crafted from top materials</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <MdOutlinePlaylistAddCheckCircle className={`${imgCustom}  text-7xl`} />
        <div className="space-y-2 ml-4 xl:ml-0">
          <h3 className="text-2xl">Warranty Protection</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <LiaShippingFastSolid className={`${imgCustom} text-7xl pb-2`} />
        <div className="space-y-2 ml-4 xl:ml-0">
          <h3 className="text-2xl">Free Shipping</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <BiSupport className={`${imgCustom} text-6xl`} />
        <div className="space-y-2 ml-4 xl:ml-0">
          <h3 className="text-2xl">24 / 7 Support</h3>
          <p className={pCustom}>Dedicated support</p>
        </div>
      </figure>
    </article>
  );
}

export default SectionQuality;
