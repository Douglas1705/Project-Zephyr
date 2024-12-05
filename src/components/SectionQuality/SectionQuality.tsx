function SectionQuality() {
  const figureCustom = 'flex gap-2 text-2xl font-semibold md:w-5/12 xl:w-auto';

  const pCustom = 'text-xl text-gray-500 font-medium';

  return (
    <article className="bg-warm-cream flex justify-between gap-8 py-10 flex-wrap px-10 h-auto items-center xl:justify-around xl:h-[270px] xl:gap-0 xl:py-0">
      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/trophy.svg"
          alt=""
        />
        <div>
          <h3>High Quality</h3>
          <p className={pCustom}>crafted from top materials</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/guarantee.svg"
          alt=""
        />
        <div>
          <h3>Warranty Protection</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/shipping.svg"
          alt=""
        />
        <div>
          <h3>Free Shipping</h3>
          <p className={pCustom}>Over 2 years</p>
        </div>
      </figure>

      <figure className={figureCustom}>
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/icons-globals/customer-support.svg"
          alt=""
        />
        <div>
          <h3>24 / 7 Support</h3>
          <p className={pCustom}>Dedicated support</p>
        </div>
      </figure>
    </article>
  );
}

export default SectionQuality;
