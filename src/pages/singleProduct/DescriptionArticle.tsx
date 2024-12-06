import { useState, useCallback } from 'react';

function DescriptionArticle() {
  const [activeTab, setActiveTab] = useState<'description' | 'additional'>(
    'description',
  );
  const [activeImage, setActiveImage] = useState<'first' | 'second'>('first');

  const handleTabChangeToDescription = useCallback(() => {
    setActiveTab('description');
    setActiveImage('first');
  }, []);

  const handleTabChangeToAdditional = useCallback(() => {
    setActiveTab('additional');
    setActiveImage('second');
  }, []);

  const textInformation = 'px-8 text-justify';

  return (
    <article className="px-4 pb-10 pt-5 border-y-2 border-gray-200">
      <div className="flex gap-2 text-center text-2xl py-5 md:items-center md:justify-center md:gap-24">
        <button
          className={`font-medium ${activeTab === 'description' ? 'text-black' : 'text-gray-400'}`}
          onClick={handleTabChangeToDescription}
        >
          Description
        </button>
        <button
          className={
            activeTab === 'additional' ? 'text-black' : 'text-gray-400'
          }
          onClick={handleTabChangeToAdditional}
        >
          Additional Information
        </button>
      </div>

      {activeTab === 'description' ? (
        <div className={textInformation}>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <br />
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      ) : (
        <div className={textInformation}>
          <p>
            The Kilburn comes equipped with Bluetooth technology, so you can
            play your music without the hassle of wires. Additionally, the
            speaker's battery life is exceptional, offering up to 20 hours of
            portable playtime on a single charge.
          </p>
          <br />
          <p>
            Whether you're at home or on the go, the Kilburn provides a
            versatile audio experience with its sleek design and robust
            performance. It's a perfect blend of style and functionality, making
            it an ideal choice for music lovers everywhere.
          </p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center overflow-hidden gap-6 borde-4 py-4 xl:justify-center">
        <div className="bg-warm-cream flex">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_2.webp"
            alt=""
            className={`w-full lg:h-[280px] xl:w-[605px] xl:h-[348px] ${activeImage === 'first' ? 'shadow-xl' : ''}`}
          />
        </div>
        <div className="bg-warm-cream">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/Cloud+sofa+three+seater+%2B+ottoman_1.webp"
            alt=""
            className={`w-full  xl:w-[605px] xl:h-[348px] ${activeImage === 'second' ? 'shadow-lg' : ''}`}
          />
        </div>
      </div>
    </article>
  );
}

export default DescriptionArticle;
