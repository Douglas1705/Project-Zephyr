import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AppButton from '../../components/buttons/AppButton';

function BeautifullSec() {
  return (
    <section
      className="bg-WhisperWhite px-10 py-10 gap-10 flex flex-col mt-10 lg:min-h-[670px] border-4 border-green-400
    
    lg:flex-row lg:items-center
    "
    >
      <article
        className="text-center flex flex-col gap-5

      lg:max-w-[422px] lg:text-start
      
      border-4 border-red-400
      "
      >
        <h2 className="text-2xl md:text-3xl font-bold lg:text-4xl">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 md:w-5/12 mx-auto lg:w-auto">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <AppButton className="bg-Goldenrod text-white w-10/12 mx-auto lg:w-52 lg:ml-0">
          Explore More
        </AppButton>
      </article>

      <div>
        <Splide
          options={{
            type: 'loop',
            height: '40rem',
            perPage: 2,
            perMove: 1,
            grid: {
              // You can define rows/cols instead of dimensions.
              dimensions: [
                [1, 1],
                [2, 2],
                [2, 1],
                [1, 2],
                [2, 2],
                [3, 2],
              ],
              gap: {
                row: '6px',
                col: '6px',
              },
            },
            breakpoints: {
              640: {
                perPage: 1,
                focus: true,
                widht: '100%',
                height: '40rem',
                cover: true,
                padding: '0rem',
              },
              853: {
                perPage: 1,
                focus: true,
                widht: '100%',
                height: '40rem',
                cover: true,
                padding: '4rem',
              },
              1024: {
                perPage: 1,
                pagination: true,
                gap: '1rem',
                widht: '100%',
                padding: '10rem',
                height: '50rem',
                cover: true,
              },
            },
          }}.mount({ Grid });
          aria-label="Beautiful Room Inspirations"
        >
          <SplideSlide>
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-1.webp"
              alt="Room 1"
              className="w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-2.webp"
              alt="Room 2"
              className="w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-3.webp"
              alt="Room 3"
              className="w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-4.webp"
              alt="Room 4"
              className="w-full h-auto"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default BeautifullSec;
