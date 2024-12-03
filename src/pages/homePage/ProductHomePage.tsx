import ProductList from '../../components/cards/ProductList';

function ProductHomePage() {
  return (
    <section>
      <h2 className="text-center font-bold text-2xl mb-10 max-w-2xl">
        Our Products
      </h2>
      <ProductList />
    </section>
  );
}

export default ProductHomePage;
