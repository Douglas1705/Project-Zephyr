import GridForniture from './GridForniture';

function FurnitureSec() {
  return (
    <section className="flex-col py-10 text-center gap-2 hidden xl:flex mx-auto">
      <article>
        <p className="text-xs text-gray-600 lg:text-xl">
          Share your setup with
        </p>
        <h2 className="text-xl font-bold lg:text-4xl">#FuniroFurniture</h2>
      </article>

      <GridForniture />
    </section>
  );
}

export default FurnitureSec;
