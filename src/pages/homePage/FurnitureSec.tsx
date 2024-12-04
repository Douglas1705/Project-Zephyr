import ImgStatic from '../../../public/Share.png';

function FurnitureSec() {
  return (
    <section className="flex flex-col py-10 text-center gap-2">
      <article>
        <p className="text-xs text-gray-600 lg:text-xl">
          Share your setup with
        </p>
        <h2 className="text-xl font-bold lg:text-4xl">#FuniroFurniture</h2>
      </article>
      <figure>
        <img src={ImgStatic} alt="" />
      </figure>
    </section>
  );
}

export default FurnitureSec;
