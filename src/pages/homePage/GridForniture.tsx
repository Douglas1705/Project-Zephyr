function GridForniture() {
  return (
    <section className="flex flex-row gap-4 mx-auto">
      <div id="container-col-1" className="flex flex-col gap-4">
        <figure id="container-1" className="flex items-end gap-4">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+36(1).webp"
            alt="Imagem 1"
            className="h-[22.625rem]"
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+38.webp"
            alt="Imagem 2"
            className="w-[28.188rem] h-[19.5rem]"
          />
        </figure>
        <figure id="container-2" className="flex gap-4">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+37.webp"
            alt="Imagem 3"
            className="h-[19.375rem]"
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+39.webp"
            alt="Imagem 4"
            className="w-[21.5rem] h-[16.563rem]"
          />
        </figure>
      </div>

      <figure id="container-col-2" className="flex justify-center items-center">
        <img
          src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+40.webp"
          alt="Imagem 5"
          className="w-[18.438rem] h-[24.5rem]"
        />
      </figure>

      <div id="container-col-3" className="flex flex-col gap-4">
        <figure id="container-3" className="flex flex-row gap-4 items-end">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+43.webp"
            alt="Imagem 6"
            className="w-[18.125rem] h-[21.75rem]"
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+45(1).webp"
            alt="Imagem 7"
            className="h-[27.063rem]"
          />
        </figure>
        <figure id="container-4" className="flex flex-row gap-4">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+41.webp"
            alt="Imagem 8"
            className="w-[11.125rem] h-[15.125rem]"
          />
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/images-home-grid/Rectangle+44.webp"
            alt="Imagem 9"
            className="w-[16.125rem] h-[12.25rem]"
          />
        </figure>
      </div>
    </section>
  );
}

export default GridForniture;
