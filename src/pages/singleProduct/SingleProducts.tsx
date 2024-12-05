import ProductDescription from './ProductDescription';

function SingleProducts() {
  return (
    <section>
      <div className="h-24 bg-warm-cream flex gap-4 items-center justify-center">
        <p className="border-r-2 border-gray-300 pr-6 py-1 flex gap-2 text-gray-400">
          Home <span className="text-black">&gt;</span> Shop{' '}
          <span className="text-black">&gt;</span>
        </p>
        <span> &gt; nome do produto</span>
      </div>

      <ProductDescription />
    </section>
  );
}

export default SingleProducts;
