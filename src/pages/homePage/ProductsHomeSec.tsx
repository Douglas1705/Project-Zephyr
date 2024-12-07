import AppButton from '../../components/buttons/AppButton';
import ProductList from '../../components/cards/ProductList';

function ProductHomePage() {
  return (
    <section className="flex flex-col">
      <h2 className="text-center mx-auto font-bold text-2xl md:text-4xl  mb-10 max-w-2xl mt-7">
        Our Products
      </h2>
      <ProductList />
      <AppButton className="border-2 border-Goldenrod text-Goldenrod w-9/12 mx-auto hover-white-gold-custom lg:w-60 mb-10">
        Show More
      </AppButton>
    </section>
  );
}

export default ProductHomePage;
