import CapePages from '../../components/capePages/capePages';
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

import { CgDisplayFullwidth } from 'react-icons/cg';
import ProductList from '../../components/cards/ProductList';
function ShopPage() {
  const icons = 'w-10';
  return (
    <section className="">
      <CapePages title="Shop" />

      <main>
        <article className="flex h-28 bg-WhisperWhite justify-between gap-4">
          <div
            id="container-first"
            className="flex items-center gap-4 justify-between"
          >
            <div id="container-icons" className="flex">
              <AdjustmentsHorizontalIcon className={`${icons}`} />
              <button>Filter</button>
              <Squares2X2Icon className={`${icons}`} />
              <CgDisplayFullwidth className={`${icons}`} />
            </div>

            <div id="container-result" className="flex">
              <p>
                Showing <span> 1 - 16 </span> of <span> 32</span> results
              </p>
            </div>
          </div>

          <div id="container-second" className="flex border-2 ">
            <p>Show</p>
            <input type="text" placeholder="16" />

            <p>Short by</p>
            <input type="text" placeholder="Default" />
          </div>
        </article>

        <ProductList />

      </main>
    </section>
  );
}

export default ShopPage;
