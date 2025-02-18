function FurnitureSec() {
  const testimonials = [
    {
      name: 'John Smith',
      image:
        'https://cdn.pixabay.com/photo/2021/01/25/19/08/man-5949295_1280.jpg',
      text: '"I loved shopping with you! The experience was amazing and the service was impeccable."',
    },
    {
      name: 'Emily Johnson',
      image:
        'https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg',
      text: '"The products are of excellent quality and the delivery was super fast. Highly recommend!"',
    },
    {
      name: 'Sophia Williams',
      image:
        'https://cdn.pixabay.com/photo/2022/05/05/01/13/woman-7175038_1280.jpg',
      text: '"The variety of products is amazing and the prices are very competitive. I will definitely be coming back for more!"',
    },
  ];
  return (
    <section className="flex flex-col xl:flex-row xl:items-center flex-wrap xl:w-10/12 my-14  mx-auto max-w-screen-2xl">
      <div className="xl:w-6/12 overflow-hidden h-[50rem] hidden xl:block xl:border-4 object-cover">
        <img
          src="https://cdn.pixabay.com/photo/2024/12/13/14/45/real-estate-9265386_1280.jpg"
          alt=""
          className="border-4 rounded-2xl"
        />
      </div>
      <div className=" py-10 space-y-4 xl:py-0 xl:w-6/12 flex flex-col ">
        <h1 className="text-center mx-auto text-2xl w-8/12 tracking-wider font-medium xl:w-full xl:border-y-2 xl:py-2">
          What do our customers say about Zephyr furniture?
        </h1>
        <div className="flex flex-col space-y-6 px-10 py-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-center md:flex-row text-center space-y-3 items-center space-x-4"
            >
              <figure className="border-radius border-4 ">
                <img src={testimonial.image} alt={`User ${index + 1}`} />
              </figure>
              <div className="md:w-4/6">
                <p className="text-xl font-semibold ">{testimonial.name}</p>
                <p className="text-lg tracking-wider py-4">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FurnitureSec;
