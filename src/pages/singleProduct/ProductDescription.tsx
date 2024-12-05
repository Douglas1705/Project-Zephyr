import {
  FaRegStarHalf,
  FaFacebook,
  FaLinkedin,
  FaStar,
  FaStarHalf,
} from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import CounterCards from '../../components/counter/CounterCards';
import AppButton from '../../components/buttons/AppButton';

function ProductDescription() {
  const ImagestaticCustom = 'hidden xl:block';
  return (
    <article className="px-5 py-10">
      <section id="subcontainer-single-first">
        <div id="container-single-images">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_2.webp"
            alt="Cloud sofa three seater"
            className={`${ImagestaticCustom} `}
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_2.webp"
            alt="Cloud sofa three seater"
            className={`${ImagestaticCustom} `}
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_1.webp"
            alt="Cloud sofa three seater"
            className={`${ImagestaticCustom} `}
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_1.webp"
            alt="Cloud sofa three seater"
            className={`${ImagestaticCustom} `}
          />

          <figure>
            <img src="foto do produto" alt="Foto do produto" />
          </figure>
        </div>

        <div
          id="container-single-descriptions"
          className=" flex flex-col gap-3 py-5"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-bold ">Nome do produto</h1>
            <p className="text-base text-gray-500">Rs. Preço do produto</p>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-1 items-center border-r-2 border-gray-400 pr-4 py-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalf className="text-yellow-500" />
            </div>
            <p className="text-gray-400">5 Customer Review</p>
          </div>

          <p className="text-sm text-justify">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>

        <div className="text-gray-400 py-5 space-y-3">
          <h2>Size</h2>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              L
            </button>
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              XL
            </button>
            <button className="px-4 py-2 bg-Goldenrod text-white rounded-lg">
              Xs
            </button>
          </div>
        </div>

        <div className="space-y-3 pb-8">
          <h2 className="text-gray-400">Color</h2>
          <div className="space-x-4">
            <button className="p-4 rounded-full bg-blue-800"></button>
            <button className="p-4 rounded-full bg-black"></button>
            <button className="p-4 rounded-full bg-Goldenrod"></button>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center border-2 gap-6 pb-6">
        <CounterCards />
        <AppButton type="button" className='border-2 border-black rounded-xl px-4 w-full'>
          Add To Cart
        </AppButton>
      </div>

      <section id="subcontainer-single-2" className='flex gap-4 text-gray-500'>
        <div className='space-y-3'>
          <p>SKU</p>
          <p>Category</p>
          <p>Tags</p>
          <p>Share</p>
        </div>

        <div className='space-y-3'>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>

        <div className='space-y-3'>
          <div className='space-y-3'>
            <p>SS001</p>
            <p>Sofas</p>
            <p>Sofa, Chair, Home, Shop</p>
          </div>

          <div className='flex gap-4'>
            <FaFacebook className='text-2xl text-black' />
            <FaLinkedin className='text-2xl text-black' />
            <AiFillTwitterCircle className='text-2xl text-black' />
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProductDescription;
