import { useRef, useCallback } from 'react';
import CapePages from '../../components/capePages/PagesCape';
import FormsCheck from './FormsCheck';
import PlaceOrderButton from './PlaceOrderButton';
import ProductsCheck from './ProductsCheck';
import TransferBank from './TransferBank';
import SectionQuality from '../../components/SectionQuality/SectionQuality';

interface FormsCheckHandle {
  validate: () => boolean;
}

function CheckoutPage() {
  const formRef = useRef<FormsCheckHandle | null>(null);

  const validateForm = useCallback(() => {
    if (formRef.current) {
      return formRef.current.validate();
    }
    return false;
  }, []);

  return (
    <section>
      <CapePages title="Checkout" />
      <main>
        <article className="flex flex-col pt-5 max-w-screen-2xl xl:mx-auto">
          <h3 className="text-4xl font-semibold text-center py-5 xl:text-left xl:ml-32 mt-10">
            Billing details
          </h3>
          <main className="px-4 lg:px-10 flex flex-col xl:w-10/12 xl:px-0 xl:mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-center xl:gap-0 xl:justify-start ">
              <FormsCheck ref={formRef} />

              <div className="flex flex-col justify-start items-center">
                <ProductsCheck />
                <TransferBank />
                <PlaceOrderButton validateForm={validateForm} />
              </div>
            </div>
          </main>
        </article>
        <SectionQuality />
      </main>
    </section>
  );
}

export default CheckoutPage;
