function SectionQuality() {
  const figureCustom =
    'flex flex-col text-center mx-auto gap-2 text-2xl font-semibold lg:w-4/12 lg:text-start lg:text-start lg:flex-row lg:text-start md:w-5/12 lg:w-[455px] lg:gap-0 lg:mx-0 xl:w-auto xl:gap-5 ';

  const pCustom = 'text-xl text-gray-500 font-medium';

  const imgCustom = 'mx-auto lg:mx-0';

  return (
    <article className="bg-warm-cream flex justify-between gap-10 py-10 flex-wrap px-10 h-auto items-center lg:gap-4 lg:space-y-4 xl:justify-around xl:h-[270px] xl:gap-0 xl:py-0">
      <figure className={`${figureCustom} xl:pt-6`}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/trophy.svg"
          alt=""
          className={`${imgCustom} w-20`}
        />
        <div className="space-y-4 ml-4 xl:ml-0">
          <h3>High Quality</h3>
          <p className={pCustom}>crafted from top materials</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/guarantee.svg"
          alt=""
          className={`${imgCustom} w-20`}
        />
        <div className="space-y-4 ml-4 xl:ml-0">
          <h3>Warranty Protection</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/shipping.svg"
          alt=""
          className={`${imgCustom} w-20 `}
        />
        <div className="space-y-4 ml-4 xl:ml-0">
          <h3>Free Shipping</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/customer-support.svg"
          alt=""
          className={`${imgCustom} w-20`}
        />
        <div className="space-y-4 ml-4 xl:ml-0">
          <h3>24 / 7 Support</h3>
          <p className={pCustom}>Dedicated support</p>
        </div>
      </figure>
    </article>
  );
}

export default SectionQuality;
