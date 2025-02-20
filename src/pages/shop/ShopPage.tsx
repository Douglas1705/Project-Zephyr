import { useState, useCallback, useEffect } from 'react';
import CapePages from '../../components/capePages/PagesCape';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import ProductList from '../../components/cards/ProductList';
import FilterModal from './FilterModal';
import SectionQuality from '../../components/SectionQuality/SectionQuality';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { Product } from '../../types/types';

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

function ShopPage() {
  const iconClasses = 'w-10 xl:w-7';
  const buttonClasses = 'px-5 py-3 rounded-lg text-base';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    price: false,
    discount: false,
    name: false,
    new: false,
    all: false,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products,
  );
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const applyFilters = useCallback(
    (products: Product[], filters: Filters): Product[] => {
      let filteredProducts = [...products];

      if (filters.all) {
        return filteredProducts.sort((a, b) => a.id - b.id);
      }
      if (filters.name) {
        filteredProducts = filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
      }
      if (filters.price) {
        filteredProducts = filteredProducts.sort(
          (a, b) => a.originalPrice - b.originalPrice,
        );
      }
      if (filters.discount) {
        filteredProducts = filteredProducts.sort(
          (a, b) => b.discount - a.discount,
        );
      }
      if (filters.new) {
        filteredProducts = filteredProducts.filter(
          (product) => product.new === 'New',
        );
      }

      return filteredProducts;
    },
    [],
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  useEffect(() => {
    function updateDisplayedProducts() {
      const filteredProducts = applyFilters(products, filters);
      const paginatedProducts = [];
      for (let i = 0; i < filteredProducts.length; i += 16) {
        paginatedProducts.push(filteredProducts.slice(i, i + 16));
      }

      const currentProducts = paginatedProducts[currentPage - 1] || [];
      setDisplayedProducts(currentProducts);
    }

    updateDisplayedProducts();
  }, [currentPage, products, filters, applyFilters]);

  const handlePageChange = useCallback(
    (pageNumber: number) => () => {
      setCurrentPage(pageNumber);
    },
    [],
  );

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleApplyFilters = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto">
      <CapePages title="Shop" />
      <main>
        <article className="flex flex-col bg-WhisperWhite mb-12 lg:flex-row lg:h-28 lg:gap-4 lg:mb-10 lg:justify-between lg:px-2 xl:px-28">
          <div className="flex flex-col items-center py-5 gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-5 items-center border-b-4 border-gray-400 pb-5 lg:border-b-0 lg:border-r-2 lg:h-10 lg:overflow-hidden lg:pr-7 lg:pb-0">
              <button
                onClick={openModal}
                className="text-2xl font-medium hover:text-Goldenrod flex flex-row gap-4"
              >
                <AdjustmentsHorizontalIcon className={iconClasses} />
                Filter
              </button>
            </div>
            <div className="flex">
              <p>
                Showing{' '}
                <span>
                  {(currentPage - 1) * 16 + 1} -{' '}
                  {Math.min(currentPage * 16, products.length)}
                </span>{' '}
                of <span>{products.length}</span> results
              </p>
            </div>
          </div>
        </article>
        <ProductList products={displayedProducts} />
        <FilterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onApply={handleApplyFilters}
          filters={filters}
        />
      </main>
      <div className="flex justify-center gap-6 pb-10">
        {[1, 2].map((label) => (
          <button
            key={label}
            onClick={handlePageChange(label)}
            className={`${buttonClasses} ${
              currentPage === label
                ? 'bg-Goldenrod text-white hover:bg-yellow-400'
                : 'bg-warm-cream text-black hover:bg-amber-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <SectionQuality />
    </section>
  );
}

export default ShopPage;
