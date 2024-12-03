function BrowseSec() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-400 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <article>
        <figure>
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/browse-the-range/Mask-Group.webp"
            alt="image of a table, with sewing items on top, in a room."
            title="table"
          />
          <figcaption>Dining</figcaption>
        </figure>
        <figure>
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/browse-the-range/Image-living-room.webp"
            alt="image of a room with a sofa and table covered in crocheted cloths"
            title="crochet room "
          />
          <figcaption>Living</figcaption>
        </figure>
        <figure>
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/browse-the-range/Mask-Group_1.webp"
            alt="image of a bedroom, showing the wardrobe door in the background with a wire vase"
            title="bedromm"
          />
          <figcaption>Bedroom</figcaption>
        </figure>
      </article>
    </section>
  );
}

export default BrowseSec;
