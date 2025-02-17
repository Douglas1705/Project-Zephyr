import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function BrowseSec() {
  const figcaptionCustom = 'mt-4 text-2xl font-semibold';

  return (
    <section className="py-10 text-center relative">
      <h2 className="text-2xl font-bold mb-2 lg:text-3xl">Browse The Range</h2>
      <p className="text-gray-400 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="px-4 w-10/12 mx-auto">
        <Splide
          options={{
            type: 'slide',
            autoplay: false,
            perPage: 3,
            perMove: 1,
            pagination: false,
            arrows: false,
            gap: '1rem',
            breakpoints: {
              640: {
                type: 'loop',
                autoplay: true,
                interval: 2000,
                perPage: 1,
                arrows: false,
                padding: '3rem',
                pagination: false,
              },
            },
          }}
        >
          <SplideSlide>
            <figure className="flex flex-col items-center h-full">
              <img
                src="https://i.ibb.co/nNm32jh8/browse-3.webp"
                alt="image of a table, with sewing items on top, in a room."
                title="table"
                className="w-full h-full object-cover"
              />
              <figcaption className={`${figcaptionCustom}`}>Dining</figcaption>
            </figure>
          </SplideSlide>
          <SplideSlide>
            <figure className="flex flex-col items-center h-full">
              <img
                src="https://i.ibb.co/ynzHm6jZ/browse-1.webp"
                alt="image of a room with a sofa and table covered in crocheted cloths"
                title="crochet room"
                className="w-full h-full object-cover"
              />
              <figcaption className={`${figcaptionCustom}`}>Living</figcaption>
            </figure>
          </SplideSlide>
          <SplideSlide>
            <figure className="flex flex-col items-center h-full">
              <img
                src="https://i.ibb.co/qF5k8WGG/browse-4.webp"
                alt="image of a bedroom, showing the wardrobe door in the background with a wire vase"
                title="bedromm"
                className="w-full h-full object-cover"
              />
              <figcaption className={`${figcaptionCustom}`}>Bedroom</figcaption>
            </figure>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default BrowseSec;
