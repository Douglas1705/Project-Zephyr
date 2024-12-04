import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AppButton from '../../components/buttons/AppButton';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function BeautifullSec() {
  // Estado para armazenar o índice da imagem grande
  const [largeImageIndex, setLargeImageIndex] = useState(0);

  // Lista de URLs das imagens
  const images = [
    'https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-1.webp',
    'https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-2.webp',
    'https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-3.webp',
    'https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-4.webp',
  ];

  // Função para atualizar o índice da imagem grande de forma sequencial
  const handleSlideChange = () => {
    setLargeImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="bg-WhisperWhite gap-10 flex flex-col mt-10 lg:min-h-[670px] lg:flex-row lg:items-center xl:justify-between">
      <article className="text-center flex flex-col gap-5 lg:max-w-[422px] lg:text-start lg:mx-auto lg:ml-10 xl:ml-28">
        <h2 className="text-2xl md:text-3xl font-bold lg:text-4xl">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 w-8/12 md:w-5/12 mx-auto lg:w-auto">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <AppButton className="bg-Goldenrod text-white w-10/12 mx-auto lg:w-52 lg:ml-0">
          Explore More
        </AppButton>
      </article>

      <div className="flex flex-col lg:flex-row lg:gap-4 h-auto xl:h-[520px]  lg:w-full overflow-hidden xl:w-7/12">
        {/* Imagem maior à esquerda */}
        <div className="w-[404px] hidden xl:block xl:h-full cover relative z-0">
          <img
            src={images[largeImageIndex]}
            alt="Current Room"
            className="w-full h-full"
          />
          <div className="bg-white bg-opacity-85 absolute z-10 bottom-5 left-5 px-4 py-6">
            <p className="text-lg font-medium text-gray-700 mb-4 flex items-center">
              01 <span className="w-7 h-1 bg-gray-600 mx-2"></span> Bed Room{' '}
            </p>
            <h3 className="text-3xl font-semibold">Inner Peace</h3>
          </div>
          <button>
            <ArrowRightIcon className="absolute bottom-5 right-28 bg-Goldenrod p-4 z-20 w-14 text-white hover:bg-white hover:text-black" />
          </button>
        </div>

        {/* Carrossel de imagens menores à direita */}
        <div className="w-full md:w-10/12 md:mx-auto xl:mr-0 xl:w-[450px]">
          <Splide
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
              start: 1, // Começa o carrossel na segunda imagem
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
            onMoved={handleSlideChange}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt={`Room ${index + 1}`}
                  className="w-full h-full md:h-450px xl:h-[450px]"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default BeautifullSec;
