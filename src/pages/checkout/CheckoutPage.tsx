import CapePages from '../../components/capePages/CapePages';
import ProductsCheck from './ProductsCheck';
import TransferBank from './TransferBank';
function CheckoutPage() {
  return (
    <section>
      <CapePages title="Checkout" />
      <main>
        <article className="flex flex-col pt-5 px-4">
          <h3 className="text-4xl font-semibold text-center py-5">
            Billing details
          </h3>

          <ProductsCheck />
        </article>
      </main>
    </section>
  );
}

export default CheckoutPage;
