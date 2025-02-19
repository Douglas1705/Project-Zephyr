import { useEffect, useRef, useState, useCallback } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function BeautifullSec() {
  const [largeImageIndex, setLargeImageIndex] = useState(0);
  const splideRef = useRef<any>(null);

  const images = [
    'https://i.ibb.co/SDP02zX5/beauiy-1.webp',
    'https://i.ibb.co/5hH1ghfX/beauiy-2.webp',
    'https://i.ibb.co/FkqmbS8D/beauiy-3.webp',
    'https://i.ibb.co/YFrDkdpT/beauty-4.webp',
  ];

  const handleSlideChange = useCallback(() => {
    setLargeImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      splide.on('moved', handleSlideChange);
    }
    return () => {
      if (splide) {
        splide.off('moved', handleSlideChange);
      }
    };
  }, [handleSlideChange]);

  const CustomSlide = ({ src }: { src: string }) => (
    <SplideSlide>
      <img
        src={src}
        alt="Room"
        className="w-full h-full md:h-450px xl:h-[450px]"
      />
    </SplideSlide>
  );

  return (
    <section className="bg-WhisperWhite gap-10 flex flex-col mt-10 lg:min-h-[670px] lg:flex-row lg:items-center xl:justify-between py-10">
      <article className="text-center flex flex-col gap-5 lg:max-w-[422px] lg:text-start lg:mx-auto lg:ml-10 xl:ml-28">
        <h2 className="text-2xl md:text-3xl font-bold lg:text-4xl">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 w-8/12 md:w-5/12 mx-auto lg:w-auto">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
      </article>

      <div className="flex flex-col lg:flex-row lg:gap-4 h-auto xl:h-[520px] lg:w-full overflow-hidden xl:w-7/12">
        <div className="w-[404px] hidden xl:block xl:h-full cover relative z-0">
          <img
            src={images[largeImageIndex]}
            alt="Current Room"
            className="w-full h-full"
          />
          <div className="bg-black bg-opacity-50 absolute z-10 bottom-5 w-full px-4 py-6 rounded-xl backdrop-blur-sm">
            <p className="text-xl text-shadow-cape text-center font-ligth text-white tracking-wider opacity-100 blur-none">
              Environments for your well-being{' '}
            </p>
          </div>
        </div>
        <div className="w-full md:w-10/12 md:mx-auto xl:mr-0 xl:w-[450px]">
          <Splide
            ref={splideRef}
            options={{
              type: 'loop',
              lazyLoad: 'nearby',
              height: '30rem',
              perPage: 1,
              perMove: 1,
              width: '100%',
              gap: '1rem',
              padding: '1.8rem',
              focus: 'center',
              start: 1,
              pagination: true,
              breakpoints: {
                640: {
                  perPage: 1,
                  focus: true,
                  width: '100%',
                  height: '40rem',
                  cover: true,
                  padding: '1rem',
                  pagination: false,
                },
                853: {
                  perPage: 1,
                  focus: true,
                  width: '100%',
                  height: '50rem',
                  cover: true,
                  padding: '4rem',
                  pagination: false,
                },
                1020: {
                  perPage: 2,
                  pagination: true,
                  gap: '4rem',
                  width: '100%',
                  padding: '2rem',
                  height: '30rem',
                  cover: true,
                },
              },
              classes: {
                pagination: 'splide__pagination y-custom-pagination',
              },
            }}
            aria-label="Beautiful Room Inspirations"
          >
            {images.map((src) => (
              <CustomSlide key={src} src={src} />
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default BeautifullSec;
